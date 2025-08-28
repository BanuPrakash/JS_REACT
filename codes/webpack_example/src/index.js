import Person from "./Person";
import add from "./util";

import './styles.css'; // css-loader

// import 'logo.png'; // file-loader

let person = new Person(52, "Larry");

console.log(person.getName(), person.getId());

console.log(add(6, 11));

console.log(add(61, 11));

// JSX is passed to React.createElement()
// props --> attributes like src, width in img <img src="" width="200px" />
// react needs children also as props 
let React = {
    createElement: (tag, props, ...children) => {
        // console.log(tag);
        var element = { tag, props: { ...props, children } };
        return element;
    }
}

let product = { "id": 11, "title": "Macbook Pro", "price": 245000.00 };

// below code is JSX
let ProductCard = <div className="card">
    <div className="card-header">
        {product.title}
    </div>
    <div className="card-body">
        Rs. {product.price}
    </div>
</div>

console.log(ProductCard);

// for WEB
function render(element, container) {
    if (['string', 'number'].includes(typeof element)) {
        container.appendChild(document.createTextNode(String(element)));
        return;
    }
    let domElement = document.createElement(element.tag); // <div>
    if (element.props) {
        if (element.props.children) {
            element.props.children.forEach(child => render(child, domElement));
        }
    }

    container.appendChild(domElement);
    console.log(domElement);
}

// JSX to JS object ProductCard is passed
render(ProductCard, document.getElementById("root"));