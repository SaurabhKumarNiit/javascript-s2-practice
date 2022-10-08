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

//Find the stock of each product type

//Write code here
function ArrayFilter(arr, productname) {

    let fillterProduct = arr.filter(items => {

        return items.productName == productname;
    })
    console.log(fillterProduct);
    return fillterProduct;
}

let filter1 = ArrayFilter(products, "Gucci Round Bucklet Belt");
let filter2 = ArrayFilter(products, "Smiley T-Shirt");
let filter3 = ArrayFilter(products, "Shinie Nail Paint");
let filter4 = ArrayFilter(products, "Esbeda Wallet");