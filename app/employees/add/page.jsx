"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function AddEmployeePage() {

    const router = useRouter()

    const [employee, setEmployee] = useState({
        firstName: "",
        lastName: "",
        gender: "",
        age: "",
        email: ""
    })

    async function handleSubmit(e) {
        e.preventDefault()

        const res = await fetch("https://dummyjson.com/users/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employee)
        })

        if (!res.ok) {
            throw new Error("Employee add failed")
        }

        const data = await res.json()

        console.log(data)

        router.push("/employees")
    }

    return (
        <div>
            <h1>Add Employee</h1>

            <form onSubmit={handleSubmit}>

                <table border="1" cellPadding="10" cellSpacing="0">
                    <tbody>
                        <tr>
                            <th>Employee First Name</th>
                            <td>
                                <input type="text" value={employee.firstName}
                                    onChange={(e) => {
                                        setEmployee({
                                            ...employee,
                                            firstName: e.target.value
                                        })
                                    }}
                                />
                            </td>
                        </tr>

                        <tr>
                            <th>Employee Last Name</th>
                            <td>
                                <input type="text" value={employee.lastName}
                                    onChange={(e) => {
                                        setEmployee({
                                            ...employee,
                                            lastName: e.target.value
                                        })
                                    }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>Employee Gender</th>
                            <td>
                                <input type="text" value={employee.gender}
                                    onChange={(e) => {
                                        setEmployee({
                                            ...employee,
                                            gender: e.target.value
                                        })
                                    }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>Employee Age</th>
                            <td>
                                <input type="number" value={employee.age}
                                    onChange={(e) => {
                                        setEmployee({
                                            ...employee,
                                            age: e.target.value
                                        })
                                    }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>Employee Email</th>
                            <td>
                                <input type="email" value={employee.email}
                                    onChange={(e) => {
                                        setEmployee({
                                            ...employee,
                                            email: e.target.value
                                        })
                                    }}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>

                <button type="submit">Add Employee</button>

            </form>
        </div>
    )
}