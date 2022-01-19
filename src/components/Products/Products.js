import { Button } from 'bootstrap';
import { NavLink } from "react-router-dom";
import './Products.css';
import React, { useState, useEffect } from 'react';

export default function Products() {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(true);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch('https://fakestoreapi.com/products');
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter);
            }
            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, [])


    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList);
    }


    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center scroll-div mb-5 pb-5">
                    <div className=" cat me-2" onClick={() => setFilter(data)}>
                        <span className="cat-title">All</span><i class="fa fa-globe" aria-hidden="true"></i></div>
                    <div className=" cat me-2" onClick={() => filterProduct("men's clothing")}><span className="cat-title">Men's Clothing</span></div>
                    <div className=" cat me-2" onClick={() => filterProduct("women's clothing")}><span className="cat-title">Women's Clothing</span></div>
                    <div className=" cat me-2" onClick={() => filterProduct("jewelery")}><span className="cat-title">Jewelery</span></div>
                    <div className=" cat me-2" onClick={() => filterProduct("electronics")}><span className="cat-title">Electronic</span></div>
                </div>
                {filter.map((product) => {
                    return (
                        <div className="col-md-3 container">
                            <div class="card h-100 text-center p-4" key={product.id} >
                                <img src={product.image} class="card-img-top" alt={product.title} height="200px" />
                                <div class="card-body">
                                    <h5 class="card-title">{product.title.substring(0, 12)}</h5>
                                    <p class="card-text lead fw-bold">${product.price}</p>
                                    <NavLink to={`/products/${product.id}`} class="btn btn-outline-dark">Buy Now</NavLink>
                                </div>
                            </div>
                        </div>
                    )
                }
                )}
            </>
        );
    };
    return (
        <div>
            <div className="container product  py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder  text-center" id="new-products">Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className="row products justify-content-center">
                    <ShowProducts />
                </div>
            </div>
        </div>
    )
}
