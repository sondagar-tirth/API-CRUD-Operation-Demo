import Link from "next/link"
import { getEmployees } from "@/lib/api/employees"
import EmployeeContent from "./EmployeeContent"

export default async function EmployeesPage({ searchParams }) {

    const params = await searchParams
    const page = Number(params?.page) || 1
    const limit = 10
    const skip = (page - 1) * limit

    const data = await getEmployees(limit, skip)

    const totalPages = Math.ceil(data.total / limit)

    return (
        <main>
            <h1 style={{ margin: "15px 0" }}>
                Employees
            </h1>

            <Link href="/employees/add">
                <button style={{ margin: "15px 0" }}>
                    Add Employee
                </button>
            </Link>

            <EmployeeContent
                employees={data.users}
                page={page}
                totalPages={totalPages}
            />
        </main>
    )
}