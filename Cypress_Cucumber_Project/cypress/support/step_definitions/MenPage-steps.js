import {When, Given, Then, And} from "cypress-cucumber-preprocessor/steps";

///<reference types="Cypress"/>
///<reference types="@cypress/xpath"/>

Given('Open the browser and navigate to the men page',() =>{
    cy.visit("https://www.myntra.com/shop/men",{headers: { "Accept-Encoding": "gzip, deflate" }})
    cy.wait(2000)
})

When('To Verifying the Crazy deal section',()=>{
    cy.xpath('//body/div[@id="mountRoot"]/div[1]/main[1]/div[1]/div[4]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]/picture[1]/img[1]')
    .then((img)=>{
    const imgurl = img.attr('src');
    cy.log(imgurl)
   })
})


When('To Verifying the 50% Off',() =>{
    cy.get('main.shop-base:nth-child(1) div.myx-base div.myx-indexContainer:nth-child(3) div.container-base.myx-stretch div.container-container div.row-base div.column-base:nth-child(1) div.container-base.myx-stretch div.container-container.container-aspectContainer div.row-base div.column-base a:nth-child(1) div:nth-child(1) picture.img-responsive > img.image-image.undefined.image-hand:nth-child(2)')
    .then((img)=>{
    const dis = img.attr('src');
    cy.log(dis)
   })
})

When('To Verifying the best of mens wear section',()=>{
    cy.get('main.shop-base:nth-child(1) div.myx-base div.myx-indexContainer:nth-child(3) div.container-base.myx-stretch div.container-container div.row-base div.column-base:nth-child(3) div.container-base.myx-stretch div.container-container.container-aspectContainer div.row-base div.column-base a:nth-child(1) div:nth-child(1) picture.img-responsive > img.image-image.undefined.image-hand:nth-child(2)')
    .then((img)=>{
        const best = img.attr('src')
        cy.log(best)
    })
})

When('To Verifying the 60% off section',()=>{
    cy.get('main.shop-base:nth-child(1) div.myx-base div.myx-indexContainer:nth-child(2) div.container-base.myx-stretch div.container-container div.row-base div.column-base:nth-child(1) div.container-base.myx-stretch div.container-container.container-aspectContainer div.row-base div.column-base a:nth-child(1) div:nth-child(1) picture.img-responsive > img.image-image.undefined.image-hand:nth-child(2)')
    .then((img)=>{
        const category = img.attr('src')
        cy.log(category)
    })
})

When('To verify the 499 store',()=>{
    cy.get('main.shop-base:nth-child(1) div.myx-base div.myx-indexContainer:nth-child(2) div.container-base.myx-stretch div.container-container div.row-base div.column-base:nth-child(4) div.container-base.myx-stretch div.container-container.container-aspectContainer div.row-base div.column-base a:nth-child(1) div:nth-child(1) picture.img-responsive > img.image-image.undefined.image-hand:nth-child(2)').screenshot()
    // .then((img)=>{
    //     const under = img.attr('src')
    //     cy.log(under)
    // })
})


Then('To Verifying the most loved brand section',()=>{
   cy.get('main.shop-base:nth-child(1) div.myx-base div.myx-indexContainer:nth-child(6) div.container-base.myx-stretch div.container-container.container-aspectContainer div.row-base div.column-base a:nth-child(1) picture.img-responsive > img.image-image.undefined:nth-child(2)')
   .then((img)=>{
    const crazy = img.attr('src');
    cy.log(crazy);
   })
})