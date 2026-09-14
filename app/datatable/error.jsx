'use client'
export default function Error({ error, reset }) {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "700px" }}>
            <div>
                <h2>Error</h2>
                <p style={{ color: "red" }}>{error.message}</p>
                <button onClick={reset}>Try again</button>
            </div>
        </div>
    )
}