
/// <reference types="cypress"/>
/// <reference types="@cypress/xpath"/>

describe('File upload from local storage', () => {
    it('Example 1', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').selectFile("C:\\Users\\alifa\\OneDrive\\Desktop\\Screenshot_7.png")
    });
});