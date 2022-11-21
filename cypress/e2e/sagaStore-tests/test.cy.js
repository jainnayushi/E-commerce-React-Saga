/// <reference types="cypress" />

describe("Saga Store Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.viewport(1280, 720);
  });
  it("Checking Landing Page", () => {
    cy.contains("Saga Store");
    cy.contains("Exclusive Products");
  });
  it("Checking Search Bar", () => {
    cy.contains("Search");
    cy.get('[aria-label="Search-Bar"]').type("Sam");
    cy.contains("Samsung M 40");
    cy.contains("Samsung F20");
    cy.get('[aria-label="Search"]').click();
  });
  it("Checking Category Page", () => {
    cy.get('[aria-label="Footwear Category"]').click();
    cy.get('[aria-label="Mobile Category"]').click();
    cy.get('[aria-label="Laptop Category"]').click();
  });
  it("Checking Sales Page", () => {
    cy.contains("Browse Sale Products").click();
    cy.url().should("include", "/sale");
    cy.contains("Flash Sale").should("exist");
    cy.go("back");
    cy.contains("Exclusive Products");
  });
  it("Checking Product Details Page", () => {
    cy.contains("Samsung").click();
    cy.url().should("include", "/ProductDetails");
    cy.go("back");
    cy.contains("Exclusive Products");
  });
  it("Checking Cart Operations", () => {
    cy.contains("Exclusive Products");
    cy.contains("Remove from Cart").should("not.exist");
    cy.get('[aria-label="Products Count"]')
      .invoke("text")
      .then((value) => {
        cy.log("Number of Products in cart : " + value);
      });
    cy.contains("Add to Cart").click();
    cy.get('[aria-label="Products Count"]')
      .invoke("text")
      .then((value) => {
        cy.log("Number of Products in cart : " + value);
      });
    cy.contains("Remove from Cart").should("exist");
    cy.contains("Add to Cart").click();
    cy.contains("Add to Cart").click();
    cy.contains("Add to Cart").click();
    cy.get('[aria-label="Products Count"]')
      .invoke("text")
      .then((value) => {
        cy.log("Number of Products in cart : " + value);
      });
  });
  it("Checking Cart Details Page", () => {
    cy.contains("Add to Cart").click();
    cy.contains("Add to Cart").click();
    cy.contains("Add to Cart").click();
    cy.get('[aria-label="Cart Img"]').click();
    cy.contains("Cart Details").click();
    cy.url().should("include", "/cart");
    cy.go("back");
    cy.contains("Exclusive Products");
  });
  it("Checking Product Details Page", () => {
    cy.contains("Samsung").click();
    cy.url().should("include", "/ProductDetails");
    cy.go("back");
    cy.contains("Exclusive Products");
  });
});
