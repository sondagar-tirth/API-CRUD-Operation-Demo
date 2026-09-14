"use client";
import { useRouter } from "next/navigation";

export default function DeleteButton({ id }) {

    const router = useRouter()

    async function deleteEmployee() {
        const res = await fetch(`https://dummyjson.com/users/${id}`, {
            method: "DELETE"
        });

        if(!res.ok){
            throw new Error("Employee Delete Failed")
        }

        const data = await res.json()
        
        console.log(data)
        
        router.refresh()
    }

    return (
        <button onClick={deleteEmployee} style={{cursor: "pointer" }}>Delete</button>
    );
}