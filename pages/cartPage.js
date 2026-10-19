export class cartPage{
constructor(page){
    this.page = page;
    this.cartproducts = page.locator('tbody>tr');
}

async countCartProducts(){
    return this.cartproducts.count();
}

}