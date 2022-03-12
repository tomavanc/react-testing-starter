import { cy } from "date-fns/locale";
const { v4: uuidv4 } = require("uuid");

describe("payment", () => {
  it("user can make payment", () => {
    // login
    cy.visit("/");
    cy.findByRole("textbox", { name: /username/i }).type("John doe");
    cy.findByLabelText(/password/i).type("secret");
    cy.findByRole("checkbox", { name: /remember me/i }).check();
    cy.findByRole("button", { name: /sign in/i }).click();

    // check account balance
    let oldBalance = cy
      .get("[data-test=sidenav-user-balance]")
      .then((balance) => (oldBalance = balance.text()));

    // click on pay buttons
    cy.findByRole("button", { name: /new/i }).click();

    // search for user account
    cy.findByRole("textbox").type("devon becker");
    cy.findByText(/devon becker/i).click();

    // add amount and note and click pay button
    cy.findByPlaceholder(/amount/i).type("5");
    const note = uuidv4();
    cy.findByPlaceholder(/add a note/i).type(note);

    // return to transactions
    // got to personal payments
    // click on payment
    // verify if payment was made
    // verify if payment amount was deducted
  });
});
