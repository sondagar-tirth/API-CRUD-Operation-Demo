"use client"

import { useRouter } from "next/navigation"
import { useTransition } from "react"
import EmployeeTable from "@/components/EmployeeTable"

export default function EmployeeContent({
    employees,
    page,
    totalPages,
}) {
    const router = useRouter()
    const [isPending, startTransition] = useTransition()

    const goToPage = (newPage) => {
        startTransition(() => {
            router.push(`/employees?page=${newPage}`)
        })
    }

    return (
        <div style={{width: "50%"}}>
            <EmployeeTable
                employees={employees}
                isLoading={isPending}
            />

            <div style={{ margin: "20px 0" , display: "flex", justifyContent: "space-around"}}>
                <button
                    onClick={() => goToPage(page - 1)}
                    disabled={page <= 1 || isPending}
                >
                    Previous
                </button>

                <span style={{ margin: "0 15px" }}>
                    Page {page} of {totalPages}
                </span>

                <button
                    onClick={() => goToPage(page + 1)}
                    disabled={page >= totalPages || isPending}
                >
                    Next
                </button>
            </div>
        </div>
    )
}