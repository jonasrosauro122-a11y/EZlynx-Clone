// src/utils/calculatePremium.js
export const calculatePremium = (data) => {
  // Example logic
  let premium = 500;
  if (data.homeValue) premium += data.homeValue * 0.002;
  if (data.autoValue) premium += data.autoValue * 0.01;
  return premium.toFixed(2);
};

