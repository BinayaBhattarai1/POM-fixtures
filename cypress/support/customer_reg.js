class customerRegistration {
    elements = {
        searchMenu: () => cy.get('.form-control'),
        transactionDropdown: () => cy.contains('.hasSub','Transaction'),
        customerRegDropdown:()=> cy.contains('.ng-star-inserted', 'Customer Registration'),
        customerRegButton:()=>cy.get('.btn-icon').eq(1),
        searchBranch:()=>cy.get('.ic-search').eq(1),
        branchlist:()=>cy.get('.pq-grid-cell').eq(2),
        // waitCustomerList:()=>cy.intercept("GET","/gateway/mdabaliApi/cbs/employeeByBranch?branchCode=001&customerTypeCode=&filterType=1&pq_datatype=JSON&pq_curpage=1&pq_rpp=20&_=1715610572052").as("getCustomer"),
        getCustomerList:()=>cy.get('.align-middle').eq(1),
        registerCustomer:()=>cy.contains('.pq-grid-cell','Manshara Kumari Bk'),
        accountTypeDropDown:()=>cy.get('.form-control').eq(6),
        searchAccounts:()=>cy.get('.ic-search').eq(3),
        selectAccount:()=>cy.contains('.pq-grid-cell','NORMAL SAVING'),
        isFundTransferAllowed:()=>cy.get('.form-control').eq(9),
        addAccountDetails:()=>cy.get('.btn').eq(4),
        saveAddedDetails:()=>cy.get('.btn-success'),
        confirmButton:()=>cy.get('.ml-2').eq(2)
    }
  
     customerRegister(){
        this.elements.searchMenu().type('cus');
        this.elements.transactionDropdown().click();
        this.elements.customerRegDropdown().click();
        this.elements.customerRegButton().click();
        this.elements.searchBranch().click({force: true});
        this.elements.branchlist().click();
        this.elements.getCustomerList().click();
        this.elements.registerCustomer().click();
        this.elements.accountTypeDropDown().select('Deposit');
        this.elements.searchAccounts().click();
        this.elements.selectAccount().click();
        this.elements.isFundTransferAllowed().select('Yes');
        this.elements.addAccountDetails().click();
        this.elements.saveAddedDetails().click();
        this.elements.confirmButton().click();

        // this.elements.waitCustomerList().wait('@getCustomer');
     }
}
export default customerRegistration;