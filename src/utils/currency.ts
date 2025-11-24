// Utility functions for currency formatting

export function formatIDR(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatIDRCompact(amount: number): string {
  // For large numbers, show in millions (juta) or thousands (ribu)
  if (amount >= 1000000) {
    const millions = amount / 1000000;
    return `Rp ${millions.toFixed(millions % 1 === 0 ? 0 : 1)} jt`;
  } else if (amount >= 1000) {
    const thousands = amount / 1000;
    return `Rp ${thousands.toFixed(thousands % 1 === 0 ? 0 : 0)} rb`;
  } else {
    return `Rp ${amount.toLocaleString('id-ID')}`;
  }
}