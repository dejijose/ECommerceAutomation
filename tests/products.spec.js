import { test, expect } from '../utils/customFixture';
import { PageManager } from '../pages/pageManager';


let token;
let pageManager;

test.describe('', {tag: '@products'}, ()=>{

test.beforeEach('get session cookie', async ({loggedInPage})=>{
    pageManager = new PageManager(loggedInPage);
    await loggedInPage.goto('https://automationexercise.com/products');
    const cookie = await loggedInPage.context().cookies();
    const sessionCookie =  cookie.find(cookie => cookie.name === 'csrftoken');
    token  = sessionCookie.value;
    console.log(token);
});


test('search an item', async ({request}) => {
    const input = await pageManager.getApiUtil().getProductList(request, token);
    await pageManager.getProductPage().inputSearchProduct(input);
     expect(await pageManager.getProductPage().countListedProducts()).toBe(1)
});

test('verify category', async ({request}) => {
    await pageManager.getProductPage().clickCategoryWomen();
     await pageManager.getProductPage().clickCategoryMen();
      await pageManager.getProductPage().clickCategoryKids(); 
});

});