/// <reference types="cypress"/>

//elements
const titleOfDashboardPage='Testers Hotel'
const logoutButton= '.user > .btn'
//action / functions

function chechTitleOfDashboardPage(){
    cy.title().should('eq',titleOfDashboardPage)
}

function performLogout(cy, contentToConfirm){
    cy.get(logoutButton).click()
    cy.contains(contentToConfirm)
}

//exports
module.exports={
    chechTitleOfDashboardPage,
    performLogout
}