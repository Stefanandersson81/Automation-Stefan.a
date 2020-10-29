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

// test case1
    it('Perform login and logout', function(){
        indexFuncs.performValidLogin(cy, targets.username,targets.password, 'Tester Hotel Overview')
        dashBoardFuncs.performLogout(cy, 'Tester Hotel')

    })
//test case 2
    it('check "visit rooms" button ', function(){
        indexFuncs.performValidLogin(cy, targets.username,targets.password, 'Tester Hotel Overview')
        indexFuncs.checkRoomsButton(cy, 'Rooms')
        dashBoardFuncs.performLogout(cy, 'Tester Hotel')

    })
//test case 3
    it('check "Clients" button ', function(){
        indexFuncs.performValidLogin(cy, targets.username,targets.password, 'Tester Hotel Overview')
        indexFuncs.checkClientsButton(cy, 'Clients')
        dashBoardFuncs.performLogout(cy, 'Tester Hotel')
    })
//test case 4

    it('check "Bills" button ', function(){
        indexFuncs.performValidLogin(cy, targets.username,targets.password, 'Tester Hotel Overview')
        indexFuncs.checkBillsButton(cy, 'Reservation')
        dashBoardFuncs.performLogout(cy, 'Tester Hotel')

})

//test case 5
    it('check "Reservations" button ', function(){
        indexFuncs.performValidLogin(cy, targets.username,targets.password, 'Tester Hotel Overview')
        indexFuncs.checkReservationsButton(cy, 'Reservations')
        dashBoardFuncs.performLogout(cy, 'Tester Hotel')

})
//test case 8
    it('Perform logout', function(){
        indexFuncs.performValidLogin(cy, targets.username,targets.password, 'Tester Hotel Overview')
        dashBoardFuncs.chechTitleOfDashboardPage(cy)
        dashBoardFuncs.performLogout(cy, 'Tester Hotel')
        })
})