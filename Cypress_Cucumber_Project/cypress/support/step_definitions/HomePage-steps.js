import {When, Given, Then, And} from "cypress-cucumber-preprocessor/steps";
///<reference types="Cypress"/>
///<reference types="@cypress/xpath"/>


Given('Open the browser and navigate to the homepage',() =>{
    cy.visit("https://www.myntra.com/",{headers: { "Accept-Encoding": "gzip, deflate" }});
    cy.wait(2000);
})

When('Verifying the Logo',() =>{
    cy.get('.desktop-logo').should('be.visible');
})

When('Verifying the women section',()=>{
    cy.get('a[data-group="women"]').should('have.text',"Women").trigger('mouseover')
    cy.contains('Dresses').should('have.text',"Dresses")
})

When('Verifying the Kids section',()=>{
    cy.get('a[data-group="kids"]').should('have.text',"Kids").trigger('mouseover')
    cy.contains('School Shoes').should('have.text',"School Shoes")
})

When('Checking the Beauty section',() =>{
    cy.get('a[data-group="beauty"]').should('have.text',"Beauty").trigger('mouseover')
    cy.contains('Hair Serum').should('have.text',"Hair Serum")
})

When('Verifying the Home and living section',()=>{
    cy.get('a[data-group="home-&-living"]').should('have.text',"Home & Living")
})

When('Verifying the Studio section',() =>{
    cy.get('a[data-group="studio"]').should('have.text',"Studio")
})

When('Check the Profile section',() =>{
    cy.xpath('//span[text()="Profile"]').should('have.text',"Profile")
})

When('Check the wishlist section',() =>{
    cy.get('.desktop-iconWishlist').should('be.visible')
})

When('Check the bag section',() =>{
    cy.xpath('//span[text()="Bag"]').should('have.text',"Bag");
})

Then('Navigate to the men page',() =>{
    cy.get('a[data-group="men"]').click()
    cy.wait(5000)
})