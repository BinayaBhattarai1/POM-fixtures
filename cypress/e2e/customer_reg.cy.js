import { loginPage, performLogin } from "../support/login";
import customerRegistration from "../support/customer_reg";
const register=new customerRegistration();

const url="/gateway/mdabaliApi/dashboard/v2"
describe("Customer Registration",()=>{
    it("Registration",()=>{
        performLogin();
        cy.visit(url)
        register.customerRegister();
       
    })
})