import Person from "./Person";
import add from "./util";

import './styles.css'; // css-loader

// import 'logo.png'; // file-loader

let person = new Person(52, "Larry");

console.log(person.getName(), person.getId());

console.log(add(6, 11));

console.log(add(61, 11));
