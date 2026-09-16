"use client"

import { useEffect } from "react"

export default function Error({ error, reset }) {

    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="error-page">

            <div className="error-card">

                <div className="error-icon">
                    !
                </div>

                <span className="error-code">
                    500
                </span>

                <h1>
                    Something went wrong
                </h1>

                <p>
                    Sorry, something unexpected happened.
                    Please try again or refresh the page.
                </p>

                <div className="error-actions">

                    <button
                        onClick={() => reset()}
                        className="retry-btn"
                    >
                        Try Again
                    </button>

                    <button
                        onClick={() => window.location.href = "/"}
                        className="home-btn"
                    >
                        Go Home
                    </button>

                </div>

            </div>

            <style jsx>{`

                * {
                    box-sizing: border-box;
                }

                .error-page {
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 30px;
                    background: #f5f8ff;
                    font-family: Arial, sans-serif;
                }

                .error-card {
                    width: 100%;
                    max-width: 520px;
                    text-align: center;
                    background: #ffffff;
                    padding: 55px 40px;
                    border-radius: 24px;
                    box-shadow: 0 20px 60px rgba(30, 64, 175, 0.12);
                }

                .error-icon {
                    width: 80px;
                    height: 80px;
                    margin: 0 auto 25px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border-radius: 50%;
                    background: #eff6ff;
                    color: #2563eb;

                    font-size: 42px;
                    font-weight: 700;
                }

                .error-code {
                    display: block;
                    margin-bottom: 8px;

                    color: #2563eb;
                    font-size: 16px;
                    font-weight: 700;
                    letter-spacing: 3px;
                }

                h1 {
                    margin: 0 0 15px;

                    color: #111827;
                    font-size: 32px;
                    line-height: 1.2;
                }

                p {
                    max-width: 400px;
                    margin: 0 auto 30px;

                    color: #6b7280;
                    font-size: 16px;
                    line-height: 1.7;
                }

                .error-actions {
                    display: flex;
                    justify-content: center;
                    gap: 12px;
                }

                button {
                    border: none;
                    padding: 13px 22px;
                    border-radius: 10px;

                    font-size: 15px;
                    font-weight: 600;
                    cursor: pointer;

                    transition: 0.2s ease;
                }

                .retry-btn {
                    background: #2563eb;
                    color: white;
                }

                .retry-btn:hover {
                    background: #1d4ed8;
                    transform: translateY(-2px);
                }

                .home-btn {
                    background: #f3f4f6;
                    color: #374151;
                }

                .home-btn:hover {
                    background: #e5e7eb;
                    transform: translateY(-2px);
                }

                @media (max-width: 500px) {

                    .error-page {
                        padding: 20px;
                    }

                    .error-card {
                        padding: 40px 25px;
                    }

                    h1 {
                        font-size: 26px;
                    }

                    .error-actions {
                        flex-direction: column;
                    }

                    button {
                        width: 100%;
                    }

                }

            `}</style>

        </div>
    )
}