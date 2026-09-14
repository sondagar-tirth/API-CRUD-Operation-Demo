import Link from "next/link";

export default function Home() {
  return (
    <>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          padding: "0 0 50px",
        }}
      >

        <h1 className="homepage_title">Welcome To My Store</h1>
        <h2>Find Amazing Products</h2>

        {/* <Link href="/counter">
          <h3 style={{ cursor: "pointer", margin: "0", paddingBottom: "10px"}}>Go To Counter</h3>
        </Link> */}
        
        <Link href="/product">  
          <button
            style={{
              padding: "15px 35px",
              backgroundColor: "#fff",
              border: "1px solid black",
              borderRadius: "50px",
              cursor: "pointer",
              marginBottom: "10px"
            }}
          >
            Shop Now
          </button>
        </Link>

        <Link href="/employees">
          <button
            style={{
              padding: "15px 35px",
              backgroundColor: "#fff",
              border: "1px solid black",
              borderRadius: "50px",
              cursor: "pointer",
              margin: "0 auto",
            }}
          >
            Employee Lists
          </button>
        </Link>
      </div>

    </>
  );
}
