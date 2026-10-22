import { test as base } from '@playwright/test';


export const test = base.extend({
 loggedInPage: async({page}, use)=>{
    await page.goto('https://automationexercise.com/login'); 
    await page.getByPlaceholder('Email Address').first().fill(process.env.TEST_EMAIL);
    await page.getByPlaceholder('Password').first().fill(process.env.TEST_PASSWORD);
    await page.getByRole('button',{name:'Login'}).click();
    await use(page);
    await page.locator("//a[@href='/logout']").click();
    await page.close();
 },

 homePage: async({page}, use)=>{
    await page.goto('https://automationexercise.com');
    await use(page);
    await page.close();
 }

})

export const expect = base.expect;