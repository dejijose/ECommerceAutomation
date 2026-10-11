import { test, expect } from '@playwright/test';

test.describe('Validate Home page functionalities', {tag: '@HomePage'} , ()=>{

    test.beforeEach('validate home page', async ({page}) => {
        await page.goto('https://automationexercise.com/');
        await expect(page).toHaveTitle('Automation Exercise');
        
    })

    test('validate logo', async ({page}) => {
        const logo = page.getByAltText('Website for automation practice');
        await expect(logo).toBeVisible();
        await expect(logo).toBeEnabled();
        
    })

    test('validate ad slider on home page', async ({page}) => {
        const ads = page.locator('.carousel.slide>.carousel-indicators>li');
        await expect(ads).toHaveCount(3);
        
    })

    test('verify feature items visible on page', async ({page}) => {
        const features = page.locator('.title.text-center').first();
        await expect(features).toHaveText('Features Items');
        const items = page.locator('.features_items>.col-sm-4');
        await expect(items).toHaveCount(34);
        
    })





})