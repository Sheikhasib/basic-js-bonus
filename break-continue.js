const products = [
    { name: 'Samsung A7 phone', price: 29000},
    { name: 'DELL laptop', price: 39000},
    { name: 'Lenovo laptop', price: 40000},
    { name: 'hp laptop', price: 49000},
    { name: 'Iphone', price: 99000},
    { name: 'Apple smart watch', price: 19000},
    { name: 'LG phone', price: 30000},
    { name: 'OKK binding paper', price: 100},
    { name: 'Google smart watch', price: 9000},
    
];

// for(const product of products){
//     if(product.price < 10000){
//         break;
//     }
//     console.log(product);
// }

for(const product of products){
    if(product.price < 10000){
        continue;
    }
    console.log(product);
}