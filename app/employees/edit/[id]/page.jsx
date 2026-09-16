"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { getEmployeeById, updateEmployee } from "@/lib/api/employees"

export default function EditEmployeePage() {

    const { id } = useParams()
    const router = useRouter()

    const [employee, setEmployee] = useState({
        firstName: "",
        lastName: "",
        gender: "",
        age: "",
        email: ""
    })

    const [errors, setErrors] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [isSubmitting, setIsSubmitting] = useState(false)


    useEffect(() => {

        async function fetchEmployee() {

            try {
                const data = await getEmployeeById(id)

                setEmployee({
                    firstName: data.firstName || "",
                    lastName: data.lastName || "",
                    gender: data.gender || "",
                    age: data.age || "",
                    email: data.email || ""
                })

            } catch (error) {
                console.error(error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchEmployee()

    }, [id])


    function validateForm() {

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


    async function handleSubmit(e) {

        e.preventDefault()

        if (!validateForm()) {
            return
        }

        setIsSubmitting(true)

        try {

            const data = await updateEmployee(id, {
                ...employee,
                age: Number(employee.age)
            })

            console.log(data)

            alert("Employee Updated Successfully!!")

            router.push("/employees")

        } catch (error) {

            console.error(error)

        } finally {

            setIsSubmitting(false)

        }
    }


    if (isLoading) {
        return <p>Loading Employee...</p>
    }


    return (
        <div style={{ padding: "20px", width: "fit-content" }}>

            <h1 style={{ padding: "20px 0 0" }}>
                Edit Employee
            </h1>

            <hr />

            <form onSubmit={handleSubmit}>

                <table border="1" cellPadding="10" cellSpacing="0">

                    <tbody>

                        <tr>
                            <th>Employee First Name</th>

                            <td>
                                <input
                                    type="text"
                                    value={employee.firstName}
                                    onChange={(e) => {
                                        setEmployee({
                                            ...employee,
                                            firstName: e.target.value
                                        })
                                    }}
                                />

                                {errors.firstName && (
                                    <p style={{ color: "red" }}>
                                        {errors.firstName}
                                    </p>
                                )}
                            </td>
                        </tr>


                        <tr>
                            <th>Employee Last Name</th>

                            <td>
                                <input
                                    type="text"
                                    value={employee.lastName}
                                    onChange={(e) => {
                                        setEmployee({
                                            ...employee,
                                            lastName: e.target.value
                                        })
                                    }}
                                />

                                {errors.lastName && (
                                    <p style={{ color: "red" }}>
                                        {errors.lastName}
                                    </p>
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
                                    />

                                    {" "}Male

                                </label>


                                <label
                                    style={{
                                        cursor: "pointer",
                                        marginLeft: "15px"
                                    }}
                                >

                                    <input
                                        type="radio"
                                        name="gender"
                                        value="female"
                                        checked={employee.gender === "female"}
                                        style={{ cursor: "pointer" }}
                                        onChange={(e) => {
                                            setEmployee({
                                                ...employee,
                                                gender: e.target.value
                                            })
                                        }}
                                    />

                                    {" "}Female

                                </label>


                                <label
                                    style={{
                                        cursor: "pointer",
                                        marginLeft: "15px"
                                    }}
                                >

                                    <input
                                        type="radio"
                                        name="gender"
                                        value="other"
                                        checked={employee.gender === "other"}
                                        style={{ cursor: "pointer" }}
                                        onChange={(e) => {
                                            setEmployee({
                                                ...employee,
                                                gender: e.target.value
                                            })
                                        }}
                                    />

                                    {" "}Other

                                </label>


                                {errors.gender && (
                                    <p style={{ color: "red" }}>
                                        {errors.gender}
                                    </p>
                                )}

                            </td>
                        </tr>


                        <tr>
                            <th>Employee Age</th>

                            <td>

                                <input
                                    type="number"
                                    value={employee.age}
                                    min={10}
                                    max={150}
                                    onChange={(e) => {
                                        setEmployee({
                                            ...employee,
                                            age: e.target.value
                                        })
                                    }}
                                />

                                {errors.age && (
                                    <p style={{ color: "red" }}>
                                        {errors.age}
                                    </p>
                                )}

                            </td>
                        </tr>


                        <tr>
                            <th>Employee Email</th>

                            <td>

                                <input
                                    type="email"
                                    value={employee.email}
                                    onChange={(e) => {
                                        setEmployee({
                                            ...employee,
                                            email: e.target.value
                                        })
                                    }}
                                />

                                {errors.email && (
                                    <p style={{ color: "red" }}>
                                        {errors.email}
                                    </p>
                                )}

                            </td>
                        </tr>

                    </tbody>

                </table>


                <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                        marginTop: "20px",
                        cursor: "pointer"
                    }}
                >
                    {isSubmitting
                        ? "Updating..."
                        : "Update Employee"
                    }
                </button>

            </form>

        </div>
    )
}