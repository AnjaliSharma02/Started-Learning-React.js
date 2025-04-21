import { useState } from "react"

// const users = [
//     {name: "Alice", age: 25},
//     {name: "Amrut", age: 25},
//     {name: "Anjali", age: 21},
//     {name: "nisha", age: 23},
// ];

export const DericatedState = () => {

    const [users, setUsers] = useState([
        {name: "Alice", age: 25},
        {name: "Amrut", age: 25},
        {name: "Anjali", age: 21},
        {name: "nisha", age: 23},
    ])

    return (
        <div className="main-div">
            <h1>User list</h1>
            <ul>
                {users.map((curElem, index) =>{
                    return(
                        <li key={index}>
                            {curElem.name} - {curElem.age} year old
                        </li>
                    )
                })}

            </ul>
        </div>
    )
}