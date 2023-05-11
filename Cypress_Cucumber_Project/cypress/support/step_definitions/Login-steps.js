import {Given, Then, And, When} from "cypress-cucumber-preprocessor/steps";
///<reference types="Cypress"/>
///<reference types="@cypress/xpath"/>


Given('open the application in browser and go to the login page',()=> {
    cy.visit("https://www.myntra.com/",{headers: { "Accept-Encoding": "gzip, deflate" }});
    cy.wait(2000);
})

When('Click on the Profile',()=>{
    cy.xpath('//span[contains(text(),"Profile")]').trigger('mouserover')
    cy.xpath('//a[contains(text(),"login / Signup")]').click({force:true})
})

When('Enter the mobile number',()=>{
    cy.xpath('//input[@type="tel"]').type(8975688865)
})

When('click on the continue button',()=>{
    cy.xpath('//div[contains(text(),"CONTINUE")]').click()
})

Then('User should Logged in',()=>{
    cy.log("Manisha")
})


