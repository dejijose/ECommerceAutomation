export class apiUtil{

async addToCart(request,token ) {   
const response = await request.get('https://automationexercise.com/add_to_cart/1',
        {Headers: {'content-type': 'text/html',
        'authentication': `csrftoken=${token}`
        }}
    )
    console.log(await response.status());
}
async getProductList(request,token ) {   
const response = await request.get('https://automationexercise.com/api/productsList',
        {Headers: {'content-type': 'text/html',
        'authentication': `csrftoken=${token}`
        }}
    )
    console.log(await response.status());
    const jsonResponse = JSON.parse(await response.text());
    console.log( jsonResponse.products[0].name)
    return jsonResponse.products[0].name ;
}

}