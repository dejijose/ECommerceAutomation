import { test, expect } from '../utils/customFixture';
import  products  from '../test-data/products.json' assert { type: 'json' };

test.describe('Validate Home page functionalities', {tag: '@HomePage'} , ()=>{

    test.beforeEach('validate home page', async ({homePage}) => {
        await expect(homePage).toHaveTitle('Automation Exercise');
        
    })

    test('validate logo', async ({pageManager}) => {
        const logo =await pageManager.getHomePage.getLogo();
        await expect(logo).toBeVisible();
        await expect(logo).toBeEnabled();
        
    })

    test('validate ad slider on home page', async ({pageManager}) => {
        expect(await pageManager.getHomePage.getAdCount()).toBe(3);
        
    })

    test('@smoke verify feature items visible on page', async ({pageManager}) => {
        await expect(await pageManager.getHomePage.getFeatures()).toHaveText('Features Items');
        expect(await pageManager.getHomePage.getitemsCount()).toBe(34);
        
    })

    for( const data of products.products){

    test(`verify products on page ${data}`, async ({pageManager}) => {
        const product = await pageManager.getHomePage.getProductName(data);
        console.log(await product.count())
        await expect(product).toBeVisible();
        
    })

    }

     test('load the page without images', async ({homePage}) => {
        await homePage.route('**/*.{png,jpg,jpeg}', route => 
            route.abort());
            await homePage.route('**/get_product_picture/**', async route => {
        const imageResponse = await route.fetch({
    url: 'https://automationexercise.com/get_product_picture/12',
  });

  await route.fulfill({ response: imageResponse });
});
        await homePage.reload();
        
    })





})