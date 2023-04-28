
import { slowCypressDown } from 'cypress-slow-down'

import { navigateTo } from "../../support/page_objects/navigationPage"

describe('Test with Page Objects', () =>{
    beforeEach(function(){
        cy.fixture('DATA').then((data) => {

         cy.visit("/")   
         //cy.visit(Cypress.env('host'))
           this.data = data 
            cy.login1(this.data.name)

        })  
      })


    it('Verify Navigation Across Pages', () => {
        slowCypressDown(500)
       
        navigateTo.homePage()
        navigateTo.designationsPage()
        navigateTo.qualificationsPage()
        navigateTo.syllabiPage()
        navigateTo.studentTrackerPage()
        navigateTo.flightListPage()
        navigateTo.ipartsRecoveriesPage() 
        navigateTo.schedulerPage()
        navigateTo.resourcesPage()
        navigateTo.groundEventsPage()
        navigateTo.trainingCalendarPage()
        navigateTo.scheduleBlocksPage()
        navigateTo.referencesPage()
        navigateTo.coursewarePage()
        navigateTo.prebuiltReportsPage()
        navigateTo.LogBookPage()
        navigateTo.configurableLogbookPage()
        navigateTo.dynamicNAVFLIRPage()
        //navigateTo.nssPage()
        navigateTo.skillTrendAnalysisPage()
        navigateTo.ipartsPassAnalysisPage()
        navigateTo.setUpPage()


    })


    
})


