const assert = require("chai").assert;
const additionalProducts = require("../shoppingCart").additionalProducts;

describe("additionalProducts", function () {
  it("add the additional products into the cart and get the total amount", function () {
    let addMoreProducts = {
      initialProductCount: 5,
      additionalProductCount: 3,
      unitPrice: 49.99,
    };
    let result = additionalProducts(addMoreProducts);
    assert.equal(result, 399.92);
  });
});
