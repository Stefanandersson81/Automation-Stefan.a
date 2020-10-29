/// <reference types="cypress"/>

//elements
const titleOfRoomsPage='Rooms'
//action / functions

function createRoom(){
    cy.get(':nth-child(1) > .btn').click()
    cy.contains('Rooms')
    cy.get('h2 > .btn').click()
    cy.contains('New Room')
    cy.get(':nth-child(1) > select').select('Single')
    cy.get(':nth-child(2) > input').type('1')
    cy.get(':nth-child(3) > input').type('4')
    cy.get('.checkbox').click()
    cy.get(':nth-child(5) > input').type('1200')
    cy.get(':nth-child(6) > select').select('Ensuite')
    cy.get('.blue').click()
    cy.contains('Rooms')
}

//exports to regression-page-objects.spec so it can be used
module.exports={
    createRoom
}