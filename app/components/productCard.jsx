'use client'
import { useState, useEffect } from 'react';
import Counter from './count';
import './productCard.css';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard(props) {

  const outline_like = "/assets/images/outline-heart.png";
  const fill_like = "/assets/images/fill-heart.png";

  const [like, setLike] = useState(outline_like)
  const [productCount, setProductCount] = useState(0);

  useEffect(() => {
    console.log("like state changed to: ", like == outline_like ? "Dislike" : "Like")
  })

  return (

    <div className="card">

      <Link href={`/product/${props.id}`}>
        <div className="card_img">
          <img style={{transition: "transform 0.2s ease-in-out"}} src={props.img} fill sizes='1' alt="Image" />
        </div>
      </Link>

      <h2 className='card_h2' style={{padding: "10px 10px 0 10px"}}>{props.name}</h2>
      <p className='card_p' style={{padding: "10px 10px 0 10px"}}>{props.desc}</p>
      <p className='card_p'>Price: <b>$ {productCount == 0 ? props.price : props.price * productCount}</b></p>

      <Counter productCount={productCount} setProductCount={setProductCount} />

      <hr style={{ width: "100%" }} />

      <div className="productCard_bottom">

        <div className="productCardlike"
          onClick={() => like == outline_like ? setLike(fill_like) : setLike(outline_like)}>
          <Image src={like} fill sizes='1' alt='Like' />
        </div>

        <Link href={`/product/${props.id}`}>
          <button>Buy Now</button>
        </Link>

      </div>

    </div>
    
  );
}