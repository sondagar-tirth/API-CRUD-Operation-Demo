import Link from "next/link"

export default async function DataTablePage() {

    const res = await fetch("https://dummy.restapiexample.com/api/v1/employees")

    if (!res.ok) {
        throw new Error("Failed to fetch data")
    }

    const empdata = await res.json()

    return (
        <>
            <table border="1" cellPadding="10" cellSpacing="0">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Salary</th>
                        <th>Age</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {empdata.data.map((emp, index) => {
                        return (
                            <tr key={index} >
                                <td>{emp.id}</td>
                                <td>{emp.employee_name}</td>
                                <td>{emp.employee_salary}</td>
                                <td>{emp.employee_age}</td>
                                <td>
                                    <Link href={`/datatable/${emp.id}`}>
                                        <button>Show Details</button>
                                    </Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}