import React, { useState } from 'react'
import { faker, th } from '@faker-js/faker';
import NameComponent from './NameComponent';
import AgeComponent from './AgeComponent';

export default function ParentComponent() {
    let [age, setAge] = useState(24);
    let [name, setName] = useState("Roger");
    console.log("Parent renders")
    return (
    <div>
        Name {name} <br />
        Age {age} <br />
        <NameComponent name={name}/> <br />
        <AgeComponent age={age} /> <br />
        <button type="button" onClick={() => setAge(age + 1)}>Change Age</button> <br />
        <button type="button" onClick={() => setName(faker.person.fullName())}>Change Name</button>
    </div>
  )
}
