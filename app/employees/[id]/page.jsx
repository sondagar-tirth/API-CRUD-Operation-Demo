export default async function EmployeeDetailPage({params}){

    const {id} = await params

    const res = await fetch(`https://dummyjson.com/users/${id}`)

    if(!res.ok){
        throw new Error("Data Fetching Failed!!!")
    }

    const empDetail = await res.json()

    return(
        <div style={{ padding: "30px 20px", width: "fit-content" }}>
            <h1 style={{ textAlign: "center"}}>Employee Detail</h1>
            <hr />
            <table border="1" cellPadding="10" cellSpacing="0">
                <tr>
                    <th>Employee Id</th>
                    <td>{empDetail.id}</td>
                </tr>
                <tr>
                    <th>Profile Picture</th>
                    <td><img src={empDetail.image} alt="Employee Image" /></td>
                </tr>
                <tr>
                    <th>Employee Name</th>
                    <td>{empDetail.firstName} {empDetail.lastName}</td>
                </tr>
                <tr>
                    <th>Employee Gender</th>
                    <td>{empDetail.gender}</td>
                </tr>
                <tr>
                    <th>Employee Age</th>
                    <td>{empDetail.age}</td>
                </tr>
                <tr>
                    <th>Employee Email</th>
                    <td>{empDetail.email}</td>
                </tr>
            </table>
        </div>
    )
}