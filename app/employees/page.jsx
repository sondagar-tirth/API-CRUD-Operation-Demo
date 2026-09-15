import Link from "next/link"
import DeleteButton from "./components/DeleteButton"
import SearchBar from "./components/SearchBar"
import Pagination from "./components/Pagination"

export default async function EmployeesPage({ searchParams }) {

    const params = await searchParams
    // console.log(params)
    const page = Number(params.page) || 1

    const search = params.search || ""

    const limit = 10
    const skip = (page - 1) * limit

    let apiUrl

    if (search) {
        apiUrl = `https://dummyjson.com/users/search?q=${search}`
    } else {
        apiUrl = `https://dummyjson.com/users?limit=${limit}&skip=${skip}`
    }

    const res = await fetch(apiUrl)

    if (!res.ok) {
        throw new Error("Failed to fetch data")
    }

    const empdata = await res.json()

    const totalPages = Math.ceil(empdata.total / limit)

    return (
        <div style={{ padding: "30px 20px", width: "fit-content" }}>
            <h1 style={{ textAlign: "center" }}>Employees List</h1>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <SearchBar />
                <Link href="/employees/add">
                    <button style={{ cursor: "pointer" }}>Add Employee</button>
                </Link>

            </div>
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
                    {
                    // isPending ? (
                    //     <tr>
                    //         <td colSpan="6">
                    //             <div
                    //                 style={{
                    //                     height: "300px",
                    //                     display: "flex",
                    //                     alignItems: "center",
                    //                     justifyContent: "center"
                    //                 }}
                    //             >
                    //                 <h2>Loading...</h2>
                    //             </div>
                    //         </td>
                    //     </tr>
                    // ) : 
                    empdata.users.length === 0 ? (
                            <tr>
                                <td colSpan="6" style={{ textAlign: "center" }}>
                                    Employee Not Found!!!
                                </td>
                            </tr>
                        ) : (
                            empdata.users.map((emp, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{emp.id}</td>
                                        <td>{emp.firstName} {emp.lastName}</td>
                                        <td>{emp.gender}</td>
                                        <td>{emp.age}</td>
                                        <td>{emp.email}</td>
                                        <td>
                                            <Link href={`/employees/${emp.id}`}>
                                                <button style={{ marginRight: "10px", cursor: "pointer" }}>
                                                    Detail
                                                </button>
                                            </Link>

                                            <Link href={`/employees/${emp.id}/edit`}>
                                                <button style={{ marginRight: "10px", cursor: "pointer" }}>
                                                    Edit
                                                </button>
                                            </Link>

                                            <DeleteButton id={emp.id} />
                                        </td>
                                    </tr>
                                )
                            })
                        )}
                </tbody>

            </table>

            {empdata.users.length === 0 ? (
                <></>
            ) : (
                <Pagination
                    page={page}
                    totalPages={totalPages}
                    search={search}
                />
            )}

        </div>
    )
}