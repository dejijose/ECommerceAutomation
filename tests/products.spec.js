import { test, expect } from '../utils/customFixture';


test.describe('', {tag: '@products'}, ()=>{

test.beforeEach('get session cookie', async ({loggedInPage})=>{
    await loggedInPage.goto('https://automationexercise.com/products');

});

test('search an item', async ({pageManager, request, token}) => {
    const input = await pageManager.getApiUtil.getProductList(request, token);
    await pageManager.getProductPage.inputSearchProduct(input);
     expect(await pageManager.getProductPage.countListedProducts()).toBe(1)
});

test('verify category options', async ({pageManager, loggedInPage}) => {
   await pageManager.getProductPage.clickCategoryWomen();
  // await pageManager.getProductPage.clickCategoryMen();
   //  await pageManager.getProductPage.clickCategoryKids(); 
});

});