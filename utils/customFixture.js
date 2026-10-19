import { test as base } from '@playwright/test';
import { homePage } from '../pages/homePage';
import { cartPage } from '../pages/cartPage';

export const test = base.extend({
 loggedInPage: async({page}, use)=>{
    await page.goto('https://automationexercise.com/login'); //SamplePWTest@example.com
    await page.getByPlaceholder('Email Address').first().fill('SamplePWTest@example.com');
    await page.getByPlaceholder('Password').first().fill('SamplePWTest');
    await page.getByRole('button',{name:'Login'}).click();
    await use(page);
    await page.getbyLabel('Logout').click()
    await page.close();
 },

 homePage: async({page}, use)=>{
    await page.goto('https://automationexercise.com');
    await use(page);
    await page.close();
 }

})

export const expect = base.expect;