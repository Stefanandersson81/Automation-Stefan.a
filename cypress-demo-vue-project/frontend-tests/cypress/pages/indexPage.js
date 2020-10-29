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
//exports
module.exports = {
    chechTitleOfIndexPage,
    performValidLogin
}

// exports