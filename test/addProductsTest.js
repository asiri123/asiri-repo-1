const assert = require("chai").assert;
const addProducts = require("../shoppingCart").addProducts;

describe("addProducts", function () {
  it("AddProducts should return totalAmount", function () {
    var productDetails = {
      productAmount: 5,
      unitPrice: 49.99,
    };
    let result = addProducts(productDetails);
    assert.equal(result, 249.95);
  });
});
