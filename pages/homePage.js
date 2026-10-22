export class HomePage{

    constructor(page){
        this.page = page;
        this.cart = page.locator('li>a>i.fa-shopping-cart');
        this.productName = page.locator('.productinfo>p');
        this.logo = page.getByAltText('Website for automation practice');
        this.ads = page.locator('.carousel.slide>.carousel-indicators>li');
        this.features = page.locator('.title.text-center');
        this.items = page.locator('.features_items>.col-sm-4');
        
    }

     async getitemsCount(){
        return this.items.count();
    }

    async getFeatures(){
        return this.features.first();
    }

    async getAdCount(){
        return this.ads.count();
    }

     getLogo(){
        return this.logo;
    }

    async clickOnCart(){
        await this.cart.click();
    }

    async getProductName(product) {
        await this.productName.first().scrollIntoViewIfNeeded();
        return this.productName.filter({ hasText: product }).first();
    }

    

}