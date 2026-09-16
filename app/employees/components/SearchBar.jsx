'use client'

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function SearchBar() {

    const [search, setSearch] = useState("")

    const router = useRouter()

    function handleSearch(e) {

        const value = e.target.value

        setSearch(value)

        if (value) {
            router.push(`/employees?search=${value}`)
        } else {
            router.push("/employees")
        }
    }

    return (
        <>
            <input
                type="text"
                value={search}
                placeholder="Search Employee..."
                onChange={handleSearch}
            />
        </>
    )
}