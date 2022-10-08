const products = [
    {
        productName: 'Gucci Round Bucklet Belt',
        price: 400
    },
    {
        productName: 'Gucci Round Bucklet Belt',
        price: 450
    },
    {
        productName: 'Gucci Round Bucklet Belt',
        price: 300
    },
    {
        productName: 'Gucci Round Bucklet Belt',
        price: 420
    },
    {
        productName: 'Smiley T-Shirt',
        price: 350
    },
    {
        productName: 'Smiley T-Shirt',
        price: 150
    },
    {
        productName: 'Shinie Nail Paint',
        price: 100
    },
    {
        productName: 'Shinie Nail Paint',
        price: 250
    },
    {
        productName: 'Esbeda Wallet',
        price: 250
    }
];

//Find the stock of each non-premium products using function chaining
//Write code here
let count=0;
let counts=0;
function non_premium_products(ProductName){
let countOf_non_premium_Products=products.filter(products=> products.productName == ProductName & products.price<300)

                                         .reduce((counts,products)=>{
                                            return ++count;
                                         },count);
                                         console.log(counts);
console.log(`Stock of Each Non-Premium ${ProductName} are :${countOf_non_premium_Products}`);
                                        }
non_premium_products('Gucci Round Bucklet Belt');
non_premium_products('Smiley T-Shirt');
non_premium_products('Shinie Nail Paint')
non_premium_products('Esbeda Wallet')
