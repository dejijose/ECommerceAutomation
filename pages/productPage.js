
export class productPage{
constructor(page){
    this.page = page;
    this.searchProduct = page.getByPlaceholder('Search Product');
    this.searchButton = page.locator('#submit_search').first();
    this.listedProducts = page.locator('.features_items>div.col-sm-4');
    this.categoryWomen = page.getByRole('link', {name:'Women'}).first();
    this.categoryMen = page.getByRole('link', {name:'Men'}).first();
     this.categoryKids = page.getByRole('link', {name:'Kids'}).first();
}

   async inputSearchProduct(input){
        await this.searchProduct.fill(input);
        await this.searchButton.click();
    }

    async countListedProducts(){
        return this.listedProducts.count();
    }

    async clickCategoryWomen(){
        await this.categoryWomen.click();
    }
     async clickCategoryMen(){
        await this.categoryMen.click();
    }
     async clickCategoryKids(){
        await this.categoryKids.click();
    }

}