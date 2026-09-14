import Link from 'next/link'
import './navbar.css'

export default function Navbar() {
    return (
        <>
            <nav>
                <div className="logo">
                    <Link href="/">
                        <h2>DEMO-STORE</h2>
                    </Link>
                </div>
                <div className="nav_links">
                    <ul>
                        <Link href="/">
                            <li>Home</li>
                        </Link>
                        <Link href="/product">
                            <li>All Products</li>
                        </Link>
                        <Link href="/about">
                            <li>About Us</li>
                        </Link>
                        <Link href="/contact">
                            <li>Contact Us</li>
                        </Link>
                    </ul>
                </div>
            </nav>
        </>

    )
}