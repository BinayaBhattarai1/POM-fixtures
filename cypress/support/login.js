export class loginPage {
    loginUrl() {
        cy.visit('http://172.31.1.20:9999/#/auth/login')
    }
    usernameField() {
        return cy.get('.form-control').eq(0)
    }
    passwordField() {
        return cy.get('.form-control').eq(1)
    }
    loginButton() {
        return cy.get('.btn-primary')
    }

    waitLogin() {
        cy.intercept("GET", "/gateway/mdabaliApi/dashboard/v2").as("dashboard");
        return cy.wait("@dashboard");
    }

}
const login = new loginPage();

export function performLogin() {

    login.loginUrl();
    login.usernameField().type("binaya41");
    login.passwordField().type("binaya41");
    login.loginButton().click();
    login.waitLogin()

}
// class loginPage{
//     elements={
//         usernameInput : ()=>cy.get('.form-control').eq(0),
//         passwordInput : ()=>cy.get('.form-control').eq(1),
//         loginBtn   : ()=>cy.get('.btn-primary')
//     }

// enterUsername(username){
//     this.elements.usernameInput().clear().type(username)
// }
// enterPassword(password){
//     this.elements.passwordInput().clear().type(password)
// }
// clickSubmit(){
//     this.elements.loginBtn().click()
// }
// }
// export default loginPage;
