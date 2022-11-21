/// <reference types="cypress" />

describe("My Tests", () => {
  it("Empty Test", () => {});
  //   it("Error Test", () => {
  //     throw new Error("Test Failed");
  //   });
  it("Website visit Test", () => {
    cy.visit("https://saga-store.netlify.app/");
  });
});
