export default async function EmpDetails({ params }) {

    const { id } = await params

    const res = await fetch(`https://dummy.restapiexample.com/api/v1/employee/${id}`)

    if (!res.ok) {
        throw new Error("Failed to fetch data")
    }

    const empdata = await res.json()

    return (
        <>
            {empdata && (
                <div>
                    <h1>Employee Details</h1>
                    <hr />
                    <p>ID: {empdata.data.id}</p>
                    <p>Name: {empdata.data.employee_name}</p>
                    <p>Salary: {empdata.data.employee_salary}</p>
                    <p>Age: {empdata.data.employee_age}</p>
                </div>
            )}
        </>
    )
}