import ProductCard from "../components/productCard";
import './product.css';
import Search from "./search"

export default async function Product({searchParams}) {
    let apiUrl = "https://dummyjson.com/products";

    const params = await searchParams
    const search = params.search

    if(search){
        apiUrl = `https://dummyjson.com/products/search?q=${search}`
    }

    const response = await fetch(apiUrl) 

    if (!response.ok) {
        throw new Error("Failed to fetch data")
    }

    const data = await response.json()


    return (
        <>
            <h1 style={{ textAlign: "center", paddingBottom: "30px" }}>Our Products..</h1>

            <Search />

            <div className="products_card">

                {data.products.map((product, index) => {
                    return (
                        <ProductCard
                            key={index}
                            id={product.id}
                            img={product.images[0]}
                            name={product.title}
                            desc={product.description}
                            price={product.price}
                            rating={product.rating}
                        />
                    )
                })}

            </div>
        </>
    )
}