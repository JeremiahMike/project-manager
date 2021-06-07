/// <reference types="cypress" />

describe("Main", () => {
  const text = "Lorem Ipsum";

  beforeEach(() => {
    cy.visit("http://localhost:8080");
  });

  it("has main elements", () => {
    cy.contains("Project");
    cy.contains("Manager");
    cy.contains("Exit");
    cy.contains("Menu");
    cy.contains("Dashboard");
    cy.contains("Project Manager");
  });

  it("add new project popup", () => {
    cy.contains("Add new project").click();
    cy.contains("New Project");
    cy.get(".v-text-field__slot")
      .eq(0)
      .type(text);
    cy.get(".v-text-field__slot")
      .eq(1)
      .type(text);
    cy.get(".v-text-field__slot")
      .eq(2)
      .click();
    cy.get(".v-picker--date");
    cy.contains("Close").click();
    cy.get("from").should("not.exist");
  });

  it("remove sidebar menu", () => {
    cy.get(".v-overlay__scrim").click(500, 0);
    cy.contains("Add new project").should("not.be.visible");
  });

  it("go to Projects through sidebar menu", () => {
    cy.contains("My Projects").click();
    cy.contains("Add new project").should("not.be.visible");
    cy.contains("Projects");
    cy.contains("Project title");
  });

  it("go to Projects through top menu", () => {
    cy.get(".v-overlay__scrim").click(500, 0);
    cy.contains("Menu").click();
    cy.get(".v-menu__content > div > a")
      .eq(1)
      .click();
    cy.contains("Add new project").should("not.be.visible");
    cy.contains("Projects");
    cy.contains("Project title");
  });

  it("go to Team through sidebar menu", () => {
    cy.contains("Team").click();
    cy.contains("Add new project").should("not.be.visible");
    cy.contains("Team");
    cy.contains("Message");
  });

  it("go to Team through top menu", () => {
    cy.get(".v-overlay__scrim").click(500, 0);
    cy.contains("Menu").click();
    cy.get(".v-menu__content > div > a")
      .eq(2)
      .click();
    cy.contains("Add new project").should("not.be.visible");
    cy.contains("Team");
    cy.contains("Message");
  });

  it("go back to Dashboard through sidebar menu", () => {
    cy.contains("Team").click();
    cy.contains("Add new project").should("not.be.visible");
    cy.get(".v-toolbar__content > button")
      .eq(0)
      .click();
    cy.contains("Dashboard").click();
    cy.contains("Add new project").should("not.be.visible");
    cy.contains("Dashboard");
  });

  it("go back to Dashboard through top menu", () => {
    cy.get(".v-overlay__scrim").click(500, 0);
    cy.contains("Menu").click();
    cy.get(".v-menu__content > div > a")
      .eq(2)
      .click();
    cy.contains("Add new project").should("not.be.visible");
    cy.contains("Menu").click();
    cy.get(".v-menu__content > div > a")
      .eq(0)
      .click();
    cy.contains("Dashboard");
  });
});
