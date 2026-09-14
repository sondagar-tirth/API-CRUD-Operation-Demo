'use client'
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Search() {
    const [search, setSearch] = useState("")
    const router = useRouter()

    async function handleSearch() {
        if(!search.trim()){
            return
        }   

        router.push(`/product?search=${search}`)
    }

    return (
        <div style={{paddingBottom: "30px" }}>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid black", width:"fit-content", margin: "0 auto"}} className="searchbar">
                <div className="searchproduct">
                    <input type="text" placeholder="Search products..."
                        value={search}
                        style={{ padding: "8px 22px", textAlign: "center", margin: "0 auto", border: "none" }}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <button style={{ padding: "8px 22px", textAlign: "center" , border: "none", borderLeft: "1px solid black"  }} onClick={handleSearch}>Search</button>
            </div>
        </div>
    )

}