import { apiUtil  } from "../utils/apiUtil";
import {HomePage } from './homePage';
import { CartPage } from "./cartPage";
import { ProductPage } from "./productPage";

export class PageManager{
constructor(page){
    this.page = page;
    this.apiUtil = new apiUtil();
    this.homePage = new HomePage(page);
    this.cartPage = new CartPage(page);
    this.productPage = new ProductPage(page);
}

get getApiUtil(){
    return this.apiUtil;
}

get getHomePage(){
    return this.homePage;
}

get getCartPage(){
    return this.cartPage;
}

get getProductPage(){
    return this.productPage;
}

}