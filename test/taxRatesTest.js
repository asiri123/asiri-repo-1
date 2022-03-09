const assert = require("chai").assert;
const taxRate = require("../shoppingCart").taxRate;

describe("taxRate", function () {
  it("add the tax rates to the products amount in cart and get the final amount", function () {
    let taxCalculation = {
      showerGelPrice: 49.99,
      deodrantUnitPrice: 99.99,
      salesTaxRate: 12.5 / 100,
      showerGelAmount: 2,
      deodrantAmount: 2,
    };
    let result = taxRate(taxCalculation);
    assert.equal(result, 337.45);
  });
});
