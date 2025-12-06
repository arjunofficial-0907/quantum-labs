// src/utils/formatPrice.js

const formatPrice = (amount) => {
  if (amount === null || amount === undefined) return "₹0";

  return amount.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
  });
};

export default formatPrice;
