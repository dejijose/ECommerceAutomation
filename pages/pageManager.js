import { apiUtil  } from "../utils/apiUtil";
import {homePage } from './homePage';
import { cartPage } from "./cartPage";
import { productPage } from "./productPage";

export class PageManager{
constructor(page){
    this.page = page;
    this.apiUtil = new apiUtil();
    this.homePage = new homePage(page);
    this.cartPage = new cartPage(page);
    this.productPage = new productPage(page);
}

getApiUtil(){
    return this.apiUtil;
}

getHomePage(){
    return this.homePage;
}

getCartPage(){
    return this.cartPage;
}

getProductPage(){
    return this.productPage;
}

}