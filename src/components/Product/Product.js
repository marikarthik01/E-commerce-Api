import React,{ useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addCart } from '../../redux/action';
import './Product.css';
import { NavLink } from "react-router-dom";
import { useParams } from 'react-router';

export default function Product() {
    
    const {id} = useParams();
    const [product, setproduct] = useState([]);
    const [loading,setLoading] = useState(false);
    const dispatch = useDispatch();

    const addProduct = (product) => {
        dispatch(addCart(product));
    }

    useEffect(() => {
        const getproduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setproduct(await response.json());
            setLoading(false);
        }
        getproduct();
    }, [])
    
    const ShowProduct = () => {
        return(
            <>
            <div className="col-md-6">
                <img className="product-img" src={product.image} alt={product.title} height="400px" width="400px"/>
            </div><br />
            <div className="col-md-6">
                <h4 className="text-uppercase product-cat text-black -50">{product.category}</h4>
                <h1 className="display-5 product-title">{product.title}</h1>
                <p className="lead fw-bolder">
                    Rating {product.rating && product.rating.rate}
                    <i className="fa fa-star"></i>
                </p>
                <h3 className="display-6 fw-bold product-price my-4">
                    ${product.price}
                </h3>
                <p className="lead">{product.description}</p>
                <div className="product-btn">
                <button className="btn btn-outline-dark px-4 py-2" onClick={()=>addProduct(product)}>Add to Cart</button>
                <NavLink to="/cart" className="btn btn-outline-dark ms-2 px-3 py-2">Go to Cart</NavLink>
                </div>
            </div>
            </>
        )
    }

    return (
        <div>
            <div className="container py-5">
                <div className="row py-4">
                     <ShowProduct/>
                </div>
            </div>
        </div>

    )
}
