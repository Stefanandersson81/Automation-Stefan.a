/// <reference types="cypress"/>

//test suit
describe('Regression test suite', function(){
    //test case
    it('Perform valid login', function(){
        cy.visit('http://localhost:3000')
        cy.title().should('include','Hotel')
        cy.contains('Login')
        cy.get(':nth-child(1) > input').type('Admin')
        cy.get(':nth-child(2) > input').type('Ultimate6')
        cy.get('.btn').click()
        cy.contains('Tester Hotel Overview')
        cy.get('.user > .btn').click()
        cy.contains('Login')
    })

    it('creat new client', function(){
        cy.visit('http://localhost:3000')
    })
    it('Edit a client', function(){
        cy.visit('http://localhost:3000')
    })
    it('Remove a client', function(){
        cy.visit('http://localhost:3000')
    })
})
