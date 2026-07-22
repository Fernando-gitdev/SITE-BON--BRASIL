const WHATSAPP_NUMBER = '558487896233';

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_URL = buildWhatsAppUrl('Olá, quero adquirir meu espaço na feira');
