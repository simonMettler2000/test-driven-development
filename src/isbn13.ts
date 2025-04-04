export function isValid(isbn: string): boolean {
  if (!/^\d{13}$/.test(isbn)) return false; // Prüft, ob die ISBN genau 13 Ziffern enthält

  const digits = isbn.split("").map(Number);
  let sum = 0;

  for (let i = 0; i < 12; i++) {
    sum += digits[i] * (i % 2 === 0 ? 1 : 3);
  }

  const checkDigit = (10 - (sum % 10)) % 10;

  return checkDigit === digits[12];
}
