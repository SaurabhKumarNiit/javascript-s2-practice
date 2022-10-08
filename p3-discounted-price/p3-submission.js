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

//Find the discounted price fro non-premium products

///Write code here

function nonPremiumFilter(arr) {
    let NonpremiumProduct = arr.filter(items => items.price <= 300);  
    
    let DiscountNonpremiumProduct = NonpremiumProduct.map(items => {
        
        items.price=items.price - (items.price / 15);
        return items;
    })
    console.log("15% Discount on Non Premium Products Are :")
    console.log(DiscountNonpremiumProduct);

}
nonPremiumFilter(products);
