import { loginPage } from "../support/login";


describe('Login', () => {
  it('Client User Login', () => {
    const login = new loginPage();
    login.loginUrl();
    login.usernameField().type('binaya41');
    login.passwordField().type('binaya41');
    login.loginButton().click();
    login.waitLogin();
  });
});

// import loginPage from "../support/login";
// const csv= require('neat-csv')
// describe("Login Page", () => {

//   it("Login using CSV data from fixtures", () => {
//     const login = new loginPage();
//     cy.visit(Cypress.env('staging_url'))
//     cy.fixture("loginData.csv")
//       .then(csv)
//       .then((data) => {
//         data.forEach((userData) => {
//           login.enterUsername(userData.username);
//           login.enterPassword(userData.password);
//           login.clickSubmit();
//         });
//       });
//   });
// });


