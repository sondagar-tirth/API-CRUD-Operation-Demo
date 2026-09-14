import Link from "next/link"
import DeleteButton from "./components/DeleteButton"

export default async function EmployeesPage({ searchParams }) {

    const params = await searchParams
    const page = Number(params.page) || 1

    const limit = 10
    const skip = (page - 1) * limit

    const res = await fetch(`https://dummyjson.com/users?limit=${limit}&skip=${skip}`)

    if (!res.ok) {
        throw new Error("Failed to fetch data")
    }

    const empdata = await res.json()

    const totalPages = Math.ceil(empdata.total / limit)

    return (
        <div style={{ padding: "30px 20px", width: "fit-content" }}>
            <h1 style={{ textAlign: "center" }}>Employees List</h1>
            <Link href="/employees/add">
                <button style={{ cursor: "pointer" }}>Add Employee</button>
            </Link>
            <hr />
            <table border="1" cellPadding="10" cellSpacing="0">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {empdata.users.map((emp, index) => {
                        return (
                            <tr key={index}>
                                <td>{emp.id}</td>
                                <td>{emp.firstName} {emp.lastName}</td>
                                <td>{emp.gender}</td>
                                <td>{emp.age}</td>
                                <td>{emp.email}</td>
                                <td>
                                    <Link href={`/employees/${emp.id}`}>
                                        <button style={{ marginRight: "10px", cursor: "pointer" }}>Detail</button>
                                    </Link>
                                    <Link href={`/employees/${emp.id}/edit`}>
                                        <button style={{ marginRight: "10px", cursor: "pointer" }}>Edit</button>
                                    </Link>
                                    <DeleteButton id={emp.id} />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>

            </table>
            <div style={{ display: "flex", alignItems: "center", gap: "20px", justifyContent: "space-between" }}>
                <Link href={`employees?page=${page - 1}`}>
                    <button disabled={page === 1} style={{ cursor: "pointer" }}>
                        Previous
                    </button>
                </Link>
                <h3>Page: {page}/{totalPages}</h3>
                <Link href={`employees?page=${page + 1}`}>
                    <button disabled={page === totalPages} style={{ cursor: "pointer" }}>
                        Next
                    </button>
                </Link>
            </div>

        </div>
    )
}