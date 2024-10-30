import React, { Fragment, useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetail } from '../../action/productAction';
import ReactStars from "react-rating-stars-component"
import './productDetail.css';

const ProductDetails = ({ match }) => {
    const dispatch = useDispatch();

    const { product, loading, error } = useSelector((state) => state.productDetails);

    useEffect(() => {
        dispatch(getProductDetail(match.params.id));
    }, [dispatch, match.params.id]);

    const options = {
        edit: false,
        color: "rgba(20, 20, 20, 0.1)",
        activateColor: "tomato",
        size: window.innerWidth < 600 ? 20 : 25,
        value: product.ratings,
        isHalf: true
    }

    return (
        <Fragment>
            <div className="productDetail">
                <div>
                    <Carousel>
                        {product.images &&
                            product.images.map((item, i) => (
                                <img
                                    className="carosalImage"
                                    key={item.url}
                                    src={item.url}
                                    alt={`${i} Slide`}
                                />
                            ))}
                    </Carousel>
                </div>

     <div>
             <div className='blockfirst'>
      <h2>{product.name}</h2>
             </div>

            <div className='blocksecond'>
            <ReactStars { ...options}/>
            <span>({product.noOfReviews} Reviews)</span>

            </div>
     </div>

            </div>
        </Fragment>
    );
};

export default ProductDetails;
