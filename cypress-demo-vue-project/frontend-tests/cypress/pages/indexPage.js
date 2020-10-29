/// <reference types="cypress"/>

// elements
const titleOfIndexPage = 'Testers Hotel'
const usernameTextField = ':nth-child(1) > input'
const passwordTextField = ':nth-child(2) > input'
const loginButton = '.btn'

//actions / functions
function chechTitleOfIndexPage(){
    cy.title().should('eq',titleOfIndexPage)
}
function performValidLogin(cy, username, password, contentToConfirm){
    cy.get(usernameTextField).type(username)
    cy.get(passwordTextField).type(password)
    cy.get(loginButton).click()
    cy.contains(contentToConfirm)
}
function checkRoomsButton(cy){
    cy.get(':nth-child(1) > .btn').click()
    cy.contains('Rooms')
    cy.get(':nth-child(3) > .btn').click()
    cy.contains('Tester Hotel Overview')    
}
function checkClientsButton(cy){
    cy.get('.blocks > :nth-child(2) > .btn').click()
    cy.contains('Clients')
    cy.get(':nth-child(3) > .btn').click()
    cy.contains('Tester Hotel Overview')    
}

function checkBillsButton(cy){
    cy.get(':nth-child(3) > .btn').click()
    cy.contains('Bills')
    cy.get(':nth-child(3) > .btn').click()
    cy.contains('Tester Hotel Overview')
}
//exports
module.exports = {
    chechTitleOfIndexPage,
    performValidLogin,
    checkRoomsButton,
    checkClientsButton,
    checkBillsButton
}


