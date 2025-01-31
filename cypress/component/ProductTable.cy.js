import React from "react"; // Import React
import { mount } from "cypress/react";
import ProductTable from "../../src/components/ProductTable/ProductTable"; // Adjust the import path if needed

describe("ProductTable Component", () => {
  it("renders the product table", () => {
    mount(<ProductTable />);

    cy.get(".cart-table").should("exist");

    cy.get(".cart-table tbody tr").should("have.length", 2);
  });

  it("displays product details correctly", () => {
    mount(<ProductTable />);

    cy.contains("My Farms Apple Pear").should("be.visible");

    cy.contains("250 mg").should("be.visible");

    cy.contains("SKU: FARMS32323").should("be.visible");
  });

  it("displays the correct unit price for each product", () => {
    mount(<ProductTable />);

    cy.contains("$30,000.00").should("be.visible");

    cy.contains("$30.00").should("be.visible");
  });

  it("displays the correct total price", () => {
    mount(<ProductTable />);

    cy.get(".cart-table tbody tr")
      .eq(0)
      .find("td.price")
      .eq(1)
      .contains("$30,000.00")
      .should("be.visible");

    cy.get(".cart-table tbody tr")
      .eq(1)
      .find("td.price")
      .eq(1)
      .contains("$30.00")
      .should("be.visible");
  });

  it("displays a quantity input for each product", () => {
    mount(<ProductTable />);

    cy.get(".quantity-input").eq(0).should("exist");

    cy.get(".quantity-input").eq(1).should("exist");
  });

  it("allows changing the quantity of a product", () => {
    mount(<ProductTable />);

    cy.get(".quantity-input").eq(0).clear().type("2");

    cy.contains("$60,000.00").should("be.visible");
  });

  it("displays a placeholder image if no image is provided", () => {
    mount(<ProductTable />);
  });
});
