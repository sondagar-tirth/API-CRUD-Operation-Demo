"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { deleteEmployee } from "@/lib/api/employees"

export default function DeleteButton({ id }) {

    const router = useRouter()

    const [isDeleting, setIsDeleting] = useState(false)

    async function handleDelete() {

        const confirmDelete = confirm(
            "Are you sure you want to delete this employee?"
        )

        if (!confirmDelete) {
            return
        }

        setIsDeleting(true)

        try {
            await deleteEmployee(id)

            alert("Employee Deleted Successfully!!")

            router.refresh()
        } catch (error) {
            console.error(error)
            alert("Failed to delete employee")
        } finally {
            setIsDeleting(false)
        }
    }

    return (
        <button
            onClick={handleDelete}
            disabled={isDeleting}
            style={{ cursor: "pointer" }}
        >
            {isDeleting ? "Deleting..." : "Delete"}
        </button>
    )
}