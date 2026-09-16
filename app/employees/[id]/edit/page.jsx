'use client'
import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"

export default function EditEmployeePage() {

    const [employee, setEmployee] = useState(null)
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

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

    function validateForm() {

        if (!employee) {
            return false
        }

        setIsSubmitting(true)

        const newErrors = {}

        if (!employee.firstName.trim()) {
            newErrors.firstName = "First Name is Required"
        }

        if (!employee.lastName.trim()) {
            newErrors.lastName = "Last Name is Required"
        }

        if (!employee.gender) {
            newErrors.gender = "Gender is Required"
        }

        if (!employee.age) {
            newErrors.age = "Age is Required"
        }

        if (!employee.email.trim()) {
            newErrors.email = "Email is Required"
        }

        setErrors(newErrors)

        return Object.keys(newErrors).length === 0
    }


    async function handleUpdate(e) {
        e.preventDefault()

        const isValid = validateForm()

        console.log("Validation:", isValid)

        if (!isValid) {
            console.log("Update stopped")
            return
        }

        console.log("Update API calling")

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
                                {errors.firstName && (
                                    <p style={{ color: "red" }}>{errors.firstName}</p>
                                )}
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
                                {errors.lastName && (
                                    <p style={{ color: "red" }}>{errors.lastName}</p>
                                )}
                            </td>
                        </tr>
                        <tr>
                            <th>Employee Gender</th>
                            <td>
                                <label style={{ cursor: "pointer" }}>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="male"
                                        checked={employee.gender === "male"}
                                        style={{ cursor: "pointer" }}
                                        onChange={(e) => {
                                            setEmployee({
                                                ...employee,
                                                gender: e.target.value
                                            })
                                        }}
                                    />  Male
                                </label>

                                <label style={{ cursor: "pointer" }}>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="female"
                                        style={{ cursor: "pointer" }}
                                        checked={employee.gender === "female"}
                                        onChange={(e) => {
                                            setEmployee({
                                                ...employee,
                                                gender: e.target.value
                                            })
                                        }}
                                    /> Female
                                </label>

                                <label style={{ cursor: "pointer" }}>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="other"
                                        style={{ cursor: "pointer" }}
                                        checked={employee.gender === "other"}
                                        onChange={(e) => {
                                            setEmployee({
                                                ...employee,
                                                gender: e.target.value
                                            })
                                        }}
                                    /> Other
                                </label>

                                {errors.gender && (
                                    <p style={{ color: "red" }}>{errors.gender}</p>
                                )}
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
                                {errors.age && (
                                    <p style={{ color: "red" }}>{errors.age}</p>
                                )}
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
                                {errors.email && (
                                    <p style={{ color: "red" }}>{errors.email}</p>
                                )}
                            </td>
                        </tr>
                    </tbody>
                </table>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{ marginTop: "20px", cursor: "pointer" }}
                >
                    {isSubmitting ? "Updating..." : "Update Employee"}
                </button>
            </form>


        </div>
    )
}