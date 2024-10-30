import React, { Fragment, useEffect } from 'react';
import "./Prosduct.css";
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../action/productAction';
import Product from '../Home/Product';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

const Products = (props) => { // Note the props parameter
    const dispatch = useDispatch();

    const { products, loading, error, productsCount,params } = useSelector((state) => state.products);

    const keyword = props.match.params.keyword; // Extract keyword from props

    useEffect(() => {
        dispatch(getProduct(keyword));
    }, [dispatch, keyword,params]);

    return (
        <Fragment>
            <h2 className="h2">Products</h2>
            <div className="products">
                {products &&
                    products.map((product) => (
                        <Product key={product._id} product={product} />
                    ))}
            </div>

            <div className="filter">
                <Typography>
                    Price
                </Typography>
                <Slider
                // Slider props
                />
            </div>
        </Fragment>
    );
};

export default Products;
