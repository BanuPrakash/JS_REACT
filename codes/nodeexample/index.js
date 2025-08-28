const { filter } = require('./src/lib'); // relative search
const { random } = require('lodash'); // search built-in --> node_modules

console.log(random(100));

var products = [
    { "id": 53, "name": "Sony Bravia", "price": 245000.00, "category": "tv" },
    { "id": 2, "name": "LG AC", "price": 54000.00, "category": "AC" },
    { "id": 53, "name": "LG Joy", "price": 151000.00, "category": "tv" },
    { "id": 53, "name": "Samsung Fold", "price": 198000.00, "category": "mobile" },
    { "id": 53, "name": "iPhone 16", "price": 89000.00, "category": "mobile" },
    { "id": 53, "name": "Daiken", "price": 51000.00, "category": "AC" }
]
function isMobile(p) {
    return p.category === 'mobile';
}
let mobiles = filter(products, isMobile);

console.log(mobiles);