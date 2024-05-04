class loginPage{
    elements={
        usernameInput : ()=>cy.get('.form-control').eq(0),
        passwordInput : ()=>cy.get('.form-control').eq(1),
        loginBtn   : ()=>cy.get('.btn-primary')
    }

enterUsername(username){
    this.elements.usernameInput().clear().type(username)
}
enterPassword(password){
    this.elements.passwordInput().clear().type(password)
}
clickSubmit(){
    this.elements.loginBtn().click()
}
}
export default loginPage;