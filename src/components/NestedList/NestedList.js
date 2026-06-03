import React from "react";

const users = [
    {
        fullName: "Shahadat Hossain",
        age: 21,
        phones: [
            {
                home: "0123654789",
                work: "0978456321"
            }
        ]
    },
    {
        fullName: "Irfan Hossain",
        age: 20,
        phones: [
            {
                home: "01456871355",
                work: "01794686134"
            }
        ]
    },
]


const NestedList = () => {
    return <>
        {users.map((user, index) => {
            
            return <div key={index}> 
                 <h3> {user.fullName} </h3>   
                 <p> {user.age} </p>
                 {
                    user.phones.map((phone, index) =>
                        <div key={index}>
                            <p>Home: {phone.home} </p>
                            <p>Office: {phone.work} </p> 
                        </div>
                    )
                 }
            </div>
        })}
    </>
}


export default NestedList;