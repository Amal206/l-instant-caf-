/**
 * Formate un prix en dinars tunisiens (3 décimales, virgule), ex. 16.5 → "16,500 DT".
 */
export const formatPrice = (value) => `${value.toFixed(3).replace('.', ',')} DT`;
