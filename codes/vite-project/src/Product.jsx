import {h, Fragment} from 'start-dom-jsx';

let product = {"name": "iPhone 16", "price": 89000.00};

export default () => {
    return <div>
        Product {product.name}, {product.price}
    </div>
}