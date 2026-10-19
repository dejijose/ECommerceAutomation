import { test, expect } from '../utils/customFixture';
import { PageManager } from '../pages/pageManager';
import  products  from '../test-data/products.json' assert { type: 'json' };

let  pageManager;
test.describe('Validate Home page functionalities', {tag: '@HomePage'} , ()=>{

    test.beforeEach('validate home page', async ({homePage}) => {
        await expect(homePage).toHaveTitle('Automation Exercise');
        pageManager = new PageManager(homePage);
        
    })

    test('validate logo', async () => {
        const logo =await pageManager.getHomePage().getLogo();
        await expect(logo).toBeVisible();
        await expect(logo).toBeEnabled();
        
    })

    test('validate ad slider on home page', async () => {
        expect(await pageManager.getHomePage().getAdCount()).toBe(3);
        
    })

    test('verify feature items visible on page', async () => {
        await expect(await pageManager.getHomePage().getFeatures()).toHaveText('Features Items');
        expect(await pageManager.getHomePage().getitemsCount()).toBe(34);
        
    })

    for( const data of products.products){

    test(`verify products on page ${data}`, async () => {
        const product = await pageManager.getHomePage().getProductName(data);
        console.log(await product.count())
        await expect(product).toBeVisible();
        
    })

    }





})