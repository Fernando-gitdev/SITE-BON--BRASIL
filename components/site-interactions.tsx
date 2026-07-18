'use client';

import { useEffect } from 'react';

/**
 * Site-wide vanilla-DOM interactions that don't need to own React state:
 * magnetic hover on buttons/logo, navbar scroll compression, and the
 * animated stat counters. Mounted once near the root of the page.
 */
export default function SiteInteractions() {
  useEffect(() => {
    // Magnetic buttons & interactive elements
    const magneticElements = document.querySelectorAll<HTMLElement>(
      '.btn-primary, .btn-secondary, .logo, .menu-toggle'
    );

    const handleMove = (el: HTMLElement) => (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const factor = el.classList.contains('btn') ? 0.18 : 0.1;
      requestAnimationFrame(() => {
        el.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
        el.style.transition = 'transform 0.1s cubic-bezier(0.25, 1, 0.5, 1)';
      });
    };

    const handleLeave = (el: HTMLElement) => () => {
      requestAnimationFrame(() => {
        el.style.transform = 'translate(0px, 0px)';
        el.style.transition = 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)';
      });
    };

    const cleanups: Array<() => void> = [];

    magneticElements.forEach((el) => {
      const onMove = handleMove(el);
      const onLeave = handleLeave(el);
      el.addEventListener('mousemove', onMove);
      el.addEventListener('mouseleave', onLeave);
      cleanups.push(() => {
        el.removeEventListener('mousemove', onMove);
        el.removeEventListener('mouseleave', onLeave);
      });
    });

    // Navbar scroll compression
    const navbar = document.getElementById('navbar');
    const onScroll = () => {
      if (!navbar) return;
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', onScroll);
    onScroll();

    // Progressive numeric counters
    const statNumbers = document.querySelectorAll<HTMLElement>('.stat-number');

    const countNumber = (element: HTMLElement) => {
      const target = parseInt(element.getAttribute('data-target') || '0', 10);
      const duration = 2000;
      const startTime = performance.now();

      const updateNumber = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const easeProgress = progress * (2 - progress);
        const currentValue = Math.floor(easeProgress * target);

        if (target >= 1000) {
          const formatted = currentValue
            .toString()
            .replace(/\B(?=(\d{3})+(?!\n))/g, '.');
          element.textContent = `${formatted}+`;
        } else {
          element.textContent = `${currentValue}+`;
        }

        if (progress < 1) {
          requestAnimationFrame(updateNumber);
        } else if (target >= 1000) {
          element.textContent = `${target.toString().replace(/\B(?=(\d{3})+(?!\n))/g, '.')}+`;
        } else {
          element.textContent = `${target}+`;
        }
      };

      requestAnimationFrame(updateNumber);
    };

    const statsObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            countNumber(entry.target as HTMLElement);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    statNumbers.forEach((num) => statsObserver.observe(num));

    return () => {
      cleanups.forEach((fn) => fn());
      window.removeEventListener('scroll', onScroll);
      statsObserver.disconnect();
    };
  }, []);

  return null;
}
