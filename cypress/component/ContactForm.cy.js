import React from "react";
import { mount } from "cypress/react";
import ContactForm from "../../src/components/ContactForm/ContactForm";

describe("ContactForm Component", () => {
  beforeEach(() => {
    mount(<ContactForm />);
  });

  it("renders the contact form with all fields", () => {
    cy.get("form").should("exist");
    cy.get('input[name="firstName"]').should("exist");
    cy.get('input[name="lastName"]').should("exist");
    cy.get('input[name="email"]').should("exist");
    cy.get('input[name="phone"]').should("exist");
    cy.get('input[name="addressLine1"]').should("exist");
    cy.get('input[name="addressLine2"]').should("exist");
    cy.get('input[name="city"]').should("exist");
    cy.get('input[name="state"]').should("exist");
    cy.get('select[name="country"]').should("exist");
    cy.get('textarea[name="message"]').should("exist");
    cy.get('button[type="submit"]').should("exist");
  });

  it("allows users to input data into the form", () => {
    cy.get('input[name="firstName"]').type("John");
    cy.get('input[name="lastName"]').type("Doe");
    cy.get('input[name="email"]').type("john.doe@example.com");
    cy.get('input[name="phone"]').type("1234567890");
    cy.get('input[name="addressLine1"]').type("123 Main St");
    cy.get('input[name="addressLine2"]').type("Apt 4B");
    cy.get('input[name="city"]').type("New York");
    cy.get('input[name="state"]').type("NY");
    cy.get('select[name="country"]').select("us");
    cy.get('textarea[name="message"]').type("This is a test message.");

    cy.get('input[name="firstName"]').should("have.value", "John");
    cy.get('input[name="lastName"]').should("have.value", "Doe");
    cy.get('input[name="email"]').should("have.value", "john.doe@example.com");
    cy.get('input[name="phone"]').should("have.value", "1234567890");
    cy.get('input[name="addressLine1"]').should("have.value", "123 Main St");
    cy.get('input[name="addressLine2"]').should("have.value", "Apt 4B");
    cy.get('input[name="city"]').should("have.value", "New York");
    cy.get('input[name="state"]').should("have.value", "NY");
    cy.get('select[name="country"]').should("have.value", "us");
    cy.get('textarea[name="message"]').should(
      "have.value",
      "This is a test message."
    );
  });

  it("submits the form correctly and logs the data", () => {
    cy.window().then((window) => {
      cy.stub(window.console, "log").as("consoleLog");
    });

    cy.get('input[name="firstName"]').type("John");
    cy.get('input[name="lastName"]').type("Doe");
    cy.get('input[name="email"]').type("john.doe@example.com");
    cy.get('input[name="phone"]').type("1234567890");
    cy.get('input[name="addressLine1"]').type("123 Main St");
    cy.get('input[name="addressLine2"]').type("Apt 4B");
    cy.get('input[name="city"]').type("New York");
    cy.get('input[name="state"]').type("NY");
    cy.get('select[name="country"]').select("us");
    cy.get('textarea[name="message"]').type("This is a test message.");

    cy.get('button[type="submit"]').click();

    cy.get("@consoleLog").should("have.been.calledWith", {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      phone: "1234567890",
      addressLine1: "123 Main St",
      addressLine2: "Apt 4B",
      city: "New York",
      state: "NY",
      country: "us",
      message: "This is a test message.",
    });
  });
});
