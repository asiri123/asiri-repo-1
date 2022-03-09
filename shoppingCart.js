
//step 1 functiality
const addProducts = (productDetails) => {
  // total amount of added products
  totalAmount = productDetails.unitPrice * productDetails.productAmount;

  return totalAmount.toFixed(2);
};

//step 2 functionality
const additionalProducts = (addMoreProducts) => {
  //calculate added product count
  alllProductCount =
    addMoreProducts.initialProductCount +
    addMoreProducts.additionalProductCount;

  //calculate cart amount
  totalAmount = alllProductCount * addMoreProducts.unitPrice;
  return totalAmount.toFixed(2);
};

//step 3 functionality
const taxRate = (taxCalculation) => {
  //calculate total amount of the added products
  totalProductsamount =
    taxCalculation.showerGelAmount * taxCalculation.showerGelPrice +
    taxCalculation.deodrantAmount * taxCalculation.deodrantUnitPrice;
  // add the sales tax and get the total amount
  amountWithTaxes =
    totalProductsamount + totalProductsamount * taxCalculation.salesTaxRate;

  return amountWithTaxes.toFixed(2);
};

module.exports = {
  addProducts,
  additionalProducts,
  taxRate,
};
