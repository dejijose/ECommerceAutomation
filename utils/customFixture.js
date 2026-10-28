import { test as base } from '@playwright/test';
import { PageManager } from '../pages/pageManager';


export const test = base.extend({
 loggedInPage: async({page}, use)=>{
    await page.goto('https://automationexercise.com/login'); 
    await page.getByPlaceholder('Email Address').first().fill(process.env.TEST_EMAIL);
    await page.getByPlaceholder('Password').first().fill(process.env.TEST_PASSWORD);
    await page.getByRole('button',{name:'Login'}).click();
    await use(page);
    //await page.locator("//a[@href='/logout']").click();
    //await page.close();
 },

 homePage: async({page}, use)=>{
    await page.goto('https://automationexercise.com');
    await use(page);
    await page.close();
 },

 token: async({loggedInPage}, use)=>{
      const cookies = await loggedInPage.context().cookies();
      const csrfCookie = cookies.find(cookie => cookie.name === 'csrftoken');

      if (!csrfCookie) {
        throw new Error('The csrftoken cookie was not found in the logged-in session.');
      }

      await use(csrfCookie.value);
 },

 pageManager: async({loggedInPage}, use)=>{
      const pageManager = new PageManager(loggedInPage);
      await use(pageManager);
 }
});

export const expect = base.expect;