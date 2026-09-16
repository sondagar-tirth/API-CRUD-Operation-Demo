const BASE_URL = "https://dummyjson.com/users"

// Get all employees
export async function getEmployees(limit = 10, skip = 0) {
    const res = await fetch(`${BASE_URL}?limit=${limit}&skip=${skip}`)

    if (!res.ok) {
        throw new Error("Failed to fetch employees")
    }

    return res.json()
}

// Get single employee
export async function getEmployeeById(id) {
    const res = await fetch(`${BASE_URL}/${id}`)

    if (!res.ok) {
        throw new Error("Failed to fetch employee")
    }

    return res.json()
}

// Search employees
export async function searchEmployees(query) {
    const res = await fetch(
        `${BASE_URL}/search?q=${encodeURIComponent(query)}`
    )

    if (!res.ok) {
        throw new Error("Failed to search employees")
    }

    return res.json()
}

// Create employee
export async function createEmployee(employeeData) {
    const res = await fetch(`${BASE_URL}/add`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(employeeData),
    })

    if (!res.ok) {
        throw new Error("Failed to create employee")
    }

    return res.json()
}

// Update employee
export async function updateEmployee(id, employeeData) {
    const res = await fetch(`${BASE_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(employeeData),
    })

    if (!res.ok) {
        throw new Error("Failed to update employee")
    }

    return res.json()
}

// Delete employee
export async function deleteEmployee(id) {
    const res = await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE",
    })

    if (!res.ok) {
        throw new Error("Failed to delete employee")
    }

    return res.json()
}