"use client"

import { useRouter } from "next/navigation"
import { useTransition } from "react"

export default function Pagination({ page, totalPages }) {
    const router = useRouter()
    const [isPending, startTransition] = useTransition()

    const goToPage = (newPage) => {
        startTransition(() => {
            router.push(`/employees?page=${newPage}`)
        })
    }

    return (
        <div style={{ margin: "20px 0" }}>
            <button
                onClick={() => goToPage(page - 1)}
                disabled={page <= 1 || isPending}
            >
                {isPending ? "Loading..." : "Previous"}
            </button>

            <span style={{ margin: "0 15px" }}>
                Page {page} of {totalPages}
            </span>

            <button
                onClick={() => goToPage(page + 1)}
                disabled={page >= totalPages || isPending}
            >
                {isPending ? "Loading..." : "Next"}
            </button>
        </div>
    )
}