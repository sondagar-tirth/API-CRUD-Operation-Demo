"use client"

import DeleteButton from "@/app/employees/DeleteButton"
import Link from "next/link"

export default function EmployeeTable({ employees, isLoading }) {
    return (
        <table
            border="1"
            cellPadding="10"
            cellSpacing="0"
            style={{
                width: "100%",
                borderCollapse: "collapse",
            }}
        >
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                {isLoading
                    ? Array.from({ length: 10 }).map((_, index) => (
                        <tr key={index}>
                            <td>
                                <div className="skeleton skeleton-id"></div>
                            </td>

                            <td>
                                <div className="skeleton skeleton-name"></div>
                            </td>

                            <td>
                                <div className="skeleton skeleton-gender"></div>
                            </td>

                            <td>
                                <div className="skeleton skeleton-age"></div>
                            </td>

                            <td>
                                <div className="skeleton skeleton-email"></div>
                            </td>

                            <td>
                                <div className="skeleton skeleton-action"></div>
                            </td>
                        </tr>
                    ))
                    : employees.map((employee) => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>

                            <td>
                                {employee.firstName} {employee.lastName}
                            </td>

                            <td>{employee.gender}</td>

                            <td>{employee.age}</td>

                            <td>{employee.email}</td>

                            <td style={{ display: "flex", justifyContent: "space-between" }}>
                                <Link href={`/employees/${employee.id}`}>
                                    <button>
                                        View
                                    </button>
                                </Link>

                                <Link href={`/employees/edit/${employee.id}`}>
                                    <button>
                                        Edit
                                    </button>
                                </Link>

                                <DeleteButton id={employee.id} />
                            </td>
                        </tr>
                    ))}
            </tbody>
        </table>
    )
}