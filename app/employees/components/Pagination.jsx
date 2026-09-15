"use client"

import { useRouter } from "next/navigation"
import { useTransition } from "react"

export default function Pagination({ page, totalPages, search }) {

    const router = useRouter()

    const [isPending, startTransition] = useTransition()

    function handlePageChange(newPage) {

        startTransition(() => {

            if (search) {
                router.push(`/employees?search=${search}&page=${newPage}`)
            } else {
                router.push(`/employees?page=${newPage}`)
            }

        })
    }

    return (
        <>
            {isPending && (
                <h2>Loading...</h2>
            )}
            
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                    justifyContent: "space-between"
                }}
            >

                <button
                    disabled={page === 1 || isPending}
                    onClick={() => handlePageChange(page - 1)}
                    style={{ cursor: "pointer" }}
                >
                    Previous
                </button>

                <h3>
                    Page: {page}/{totalPages}
                </h3>

                <button
                    disabled={page === totalPages || isPending}
                    onClick={() => handlePageChange(page + 1)}
                    style={{ cursor: "pointer" }}
                >
                    Next
                </button>


            </div>

        </>

    )
}