const chai = require("chai");
const expect = chai.expect;
const slugify = require("../index"); // Adjust the path to where slugify is located

describe("Slugify Function", function () {
  it("should convert a basic string to a slug", function () {
    expect(slugify("Hello World")).to.equal("hello-world");
  });

  it("should handle symbols correctly (e.g., &, $, %, etc.)", function () {
    expect(slugify("Price: $100 & 50%")).to.equal(
      "price-dollar-100-and-50-percent"
    );
  });

  it("should handle multiple special symbols and replace them with descriptive words", function () {
    expect(slugify("Price: $100 & 50% at Store")).to.equal(
      "price-dollar-100-and-50-percent-at-store"
    );
  });

  it("should replace currency symbols with words", function () {
    expect(slugify("Currency: ¢, £, ¥, ¤")).to.equal(
      "currency-cent-pound-yen-currency"
    );
  });

  it("should remove diacritics", function () {
    expect(slugify("Café con Leche")).to.equal("cafe-con-leche");
  });

  it("should replace at (@) and slash (/) correctly", function () {
    expect(slugify("Contact: john@doe.com or /support")).to.equal(
      "contact-john-at-doe-com-or-support"
    );
  });

  it("should replace mathematical and logical symbols (e.g., >, <, +, =) correctly", function () {
    expect(slugify("C++ > Java & Python = Awesome")).to.equal(
      "c-plus-plus-greater-java-and-python-equals-awesome"
    );
  });

  it("should trim extra whitespace", function () {
    expect(slugify("   A     lot   of spaces   ")).to.equal("a-lot-of-spaces");
  });

  it("should throw an error for empty strings", function () {
    expect(() => slugify("")).to.throw("Input must be a non-empty string");
  });

  it("should throw an error for non-string inputs", function () {
    expect(() => slugify(12345)).to.throw("Input must be a non-empty string");
  });

  it("should remove leading and trailing dashes", function () {
    expect(slugify("-Dash at the start and end-")).to.equal(
      "dash-at-the-start-and-end"
    );
  });

  it("should collapse multiple dashes into one", function () {
    expect(slugify("Dash - Dash and  -  Space!")).to.equal(
      "dash-dash-and-space"
    );
  });

  it("should handle multiple occurrences of symbols", function () {
    expect(slugify("50% & 10* @12#")).to.equal("50-percent-and-10-star-at-12");
  });

  it("should replace complex strings with multiple symbols and words", function () {
    expect(slugify("Item $100 @ Price 50% off!")).to.equal(
      "item-dollar-100-at-price-50-percent-off"
    );
  });
});
