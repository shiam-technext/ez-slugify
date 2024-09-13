// import chai from chai;
const chai = require("chai");
const expect = chai.expect;
const slugify = require("../index"); // Adjust the path as necessary

describe("Slugify Function", function () {
  it("should convert a basic string to a slug", function () {
    expect(slugify("Hello World")).to.equal("hello-world");
  });

  it("should handle special characters correctly", function () {
    expect(slugify("C++ > C")).to.equal("c-plus-plus-greater-c");
  });

  it("should replace symbols with descriptive words", function () {
    expect(slugify("Price: $100 & tax")).to.equal("price-dollar-100-and-tax");
  });

  it("should remove diacritics", function () {
    expect(slugify("Café con Leche")).to.equal("cafe-con-leche");
  });

  it("should trim extra whitespace", function () {
    expect(slugify("   A     lot   of spaces   ")).to.equal("a-lot-of-spaces");
  });

  it("should handle non-alphanumeric characters", function () {
    expect(slugify("Hello @ World!")).to.equal("hello-at-world-exclamation");
  });

  it("should handle multiple special characters", function () {
    expect(slugify("20% discount on product @ cost of $100!")).to.equal(
      "20-percent-discount-on-product-at-cost-of-dollar-100-exclamation"
    );
  });

  it("should throw an error for empty strings", function () {
    expect(() => slugify("")).to.throw("Input must be a non-empty string");
  });

  it("should throw an error for non-string inputs", function () {
    expect(() => slugify(12345)).to.throw("Input must be a non-empty string");
  });

  it("should collapse multiple dashes into one", function () {
    expect(slugify("Dash - Dash and  -  Space!")).to.equal(
      "dash-dash-and-space-exclamation"
    );
  });

  it("should handle various symbols in a row", function () {
    expect(slugify("50% & 10* @12#")).to.equal(
      "50-percent-and-10-star-at-12-number"
    );
  });
});
