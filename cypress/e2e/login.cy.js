import loginPage from "../support/login";
const csv= require('neat-csv')
describe("Login Page", () => {

  it("Login using CSV data from fixtures", () => {
    const login = new loginPage();
    cy.visit('https://pg.bittiyasewa.com/#/auth/login')
    cy.fixture("loginData.csv")
      .then(csv)
      .then((data) => {
        data.forEach((userData) => {
          login.enterUsername(userData.username);
          login.enterPassword(userData.password);
          login.clickSubmit();
        });
      });
  });
});
