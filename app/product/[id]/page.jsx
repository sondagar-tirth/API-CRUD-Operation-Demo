import Image from 'next/image';
import "./single_product.css"

export default async function ProductDetail({ params }) {

    const { id } = await params;

    // const singleProduct = products.find((item) => item.id === Number(id));

    const response = await fetch(`https://dummyjson.com/products/${id}`);

    if(!response.ok){
        throw new Error("Product Not Found")
    }

    const singleProduct = await response.json();

    return (

        <div className='single_product'>

            <h1 style={{ paddingBottom: "30px" }}>{singleProduct?.title || "Unknown"}  Detail</h1>

            {singleProduct && (
                <div className='single_product_detail'>

                    <div className="single_product_img">
                        <img src={singleProduct.images[0]} fill alt="Product Image" />
                    </div>

                    <div className="single_product_detail_left">
                        <h1 style={{ padding: "10px 0"}}>{singleProduct.title}</h1>
                        <p style={{ fontSize: "20px", width: "60%" , padding: "10px 0"}}>{singleProduct.description}</p>
                        <p style={{ fontSize: "20px", width: "60%" , padding: "10px 0"}}>Rating: <b>{singleProduct.rating}</b></p>
                        <p style={{ fontSize: "20px", width: "60%" }}>Price: <b>$ {singleProduct.price}</b></p>
                    </div>

                </div>
            )}

            {!singleProduct && (
                <h2 style={{color: "red"}}>Product not found.</h2>
            )}

        </div>
    )
}