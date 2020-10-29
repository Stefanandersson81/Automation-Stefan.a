/// <reference types="cypress"/>

import * as indexFuncs from '../pages/indexPage'
import * as dashBoardFuncs from '../pages/dashboardPage'
import * as targets from '../targets/targets'
//test suite
describe('Test suite', function(){

    beforeEach(()=>{
        cy.visit(targets.base_url)
        indexFuncs.chechTitleOfIndexPage(cy)
    })

// test case
    it('Perform login and logout', function(){
        indexFuncs.performValidLogin(cy, targets.username,targets.password, 'Tester Hotel Overview')
        dashBoardFuncs.performLogout(cy, 'Login')
    })
})