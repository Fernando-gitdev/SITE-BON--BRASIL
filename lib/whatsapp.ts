const WHATSAPP_NUMBER = '558487896233';

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_URL = buildWhatsAppUrl('Olá, quero adquirir meu espaço na feira');

/** Builds a wa.me link for an arbitrary Brazilian phone number, e.g. "(84) 99618-1873". */
export function buildWhatsAppUrlForPhone(phone: string, message: string) {
  const digits = phone.replace(/\D/g, '');
  const withCountryCode = digits.startsWith('55') ? digits : `55${digits}`;
  return `https://wa.me/${withCountryCode}?text=${encodeURIComponent(message)}`;
}
