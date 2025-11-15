export function calculatePremium(type, value) {
  if (type === 'home') {
    return value * 0.005; // 0.5% of home value
  } else if (type === 'auto') {
    return value * 0.02; // 2% of car value
  }
  return 0;
}
