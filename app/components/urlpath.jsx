'use client'
import usePathname from 'next/navigation';

export default function UrlPath() {

    const pathname = usePathname();

    return (
        <div style={{ width: "100%", textAlign: "center", backgroundColor: "#f1f1f1" }}>
            <h3>
                {pathname}
            </h3>
        </div>
    )
}