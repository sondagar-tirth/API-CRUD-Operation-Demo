'use client'
import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"

export default function EditEmployeePage() {

    const [employee, setEmployee] = useState(null)

    const router = useRouter()

    const { id } = useParams()

    useEffect(() => {

        async function getEmployeeData() {

            const res = await fetch(`https://dummyjson.com/users/${id}`)

            const data = await res.json()

            setEmployee(data)

        }

        getEmployeeData()

    }, [id])

    async function handleUpdate(e) {
        e.preventDefault()

        const res = await fetch(`https://dummyjson.com/users/${id}`, {
            method: "PUT",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(employee)
        })

        if (!res.ok) {
            throw new Error("Employee Update Failed")
        }

        const data = await res.json()

        console.log(data);

        alert("Employee Detail Update Successfully")

        router.push("/employees")
    }

    if (!employee) {
        return <h1> Loading... </h1>
    }

    return (
        <div style={{ padding: "30px 20px", width: "fit-content" }}>

            <h1 style={{ textAlign: "center" }}>Employee Detail Update</h1>
            <hr />

            <form onSubmit={handleUpdate}>

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

                <button type="submit">Update</button>
            </form>


        </div>
    )
}