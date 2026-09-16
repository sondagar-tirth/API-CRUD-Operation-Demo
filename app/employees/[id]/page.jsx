// import Image from "next/image"
import Link from "next/link"
import { getEmployeeById } from "@/lib/api/employees"

export default async function EmployeeDetailsPage({ params }) {
    const { id } = await params

    const employee = await getEmployeeById(id)

    return (
        <main>
            <h1 style={{ margin: "15px 0" }}>
                Employee Details
            </h1>

            <table
                border="1"
                cellPadding="10"
                cellSpacing="0"
            >
                <tbody>
                    <tr>
                        <th>Photo</th>
                        <td>
                            <img
                                src={employee.image}
                                alt={`${employee.firstName} ${employee.lastName}`}
                                width={100}
                                height={100}
                                style={{
                                    borderRadius: "50%",
                                    objectFit: "cover",
                                }}
                            />
                        </td>
                    </tr>

                    <tr>
                        <th>ID</th>
                        <td>{employee.id}</td>
                    </tr>

                    <tr>
                        <th>Name</th>
                        <td>
                            {employee.firstName} {employee.lastName}
                        </td>
                    </tr>

                    <tr>
                        <th>Gender</th>
                        <td>{employee.gender}</td>
                    </tr>

                    <tr>
                        <th>Age</th>
                        <td>{employee.age}</td>
                    </tr>

                    <tr>
                        <th>Email</th>
                        <td>{employee.email}</td>
                    </tr>

                </tbody>
            </table>

            <div style={{ marginTop: "20px" }}>
                <Link href="/employees">
                    <button>
                        Back to Employees
                    </button>
                </Link>

                <Link href={`/employees/edit/${employee.id}`}>
                    <button style={{ marginLeft: "10px" }}>
                        Edit Employee
                    </button>
                </Link>
            </div>
        </main>
    )
}