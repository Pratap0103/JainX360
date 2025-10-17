export function getCategoryBgClass(category) {
  switch (category) {
    case 'financial':
      return 'bg-blue-50';
    case 'entrepreneurship':
      return 'bg-green-50';
    case 'ai':
      return 'bg-purple-50';
    case 'personal':
      return 'bg-amber-50';
    default:
      return 'bg-gray-50';
  }
}

export function formatPrice(price) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(price);
}

// Prefix an asset path with the configured base URL so it works under subpaths (e.g., GitHub Pages)
// Accepts paths like "/images/foo.jpg" or "images/foo.jpg"
export function withBase(path) {
  const p = String(path || '');
  const cleaned = p.replace(/^\//, '');
  const base = (import.meta && import.meta.env && import.meta.env.BASE_URL) || '/';
  // Ensure exactly one slash between base and path
  return `${base}${cleaned}`.replace(/\/+/, '/');
}