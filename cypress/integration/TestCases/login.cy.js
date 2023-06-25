/// <reference types="Cypress" />

import { LoginPageActions } from "../../../PageObjects/PageActions/LoginPageActions";

const loginPageActions = new LoginPageActions();

describe('Page Objects',()=>{

    it('Login Page',()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        loginPageActions.username('admin');
        loginPageActions.password('admin123');
        loginPageActions.login();
        
    })
})