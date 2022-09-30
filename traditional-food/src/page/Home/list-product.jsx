import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../features/product/productSlice';
import { updateCart } from '../../features/cart/cartSlice';
import { numberWithCommas } from '../../app/utils';

const ListProduct = ({ pageVisited, productPerPage, filterTagHandler, setCount }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState(JSON.parse(localStorage.getItem('cart')));
  const { product, isError, message } = useSelector((state) => state.product);

  // ======================== Pagination ==========================

  const displayProduct = product.slice(pageVisited, pageVisited + productPerPage).map((products) => (
    <div key={products._id} className="col-md-2 pb-2 d-flex pt-2">
      <div className="blog-card">
        <div className="meta">
          <div className="photo">
            <img src={`http://8.219.67.47:4000/public/${products.image_url}`} alt="foto Product" />
          </div>
        </div>
        <div className="row tags">
          {products.tag?.map((list) => (
            <div key={products._id + list._id} className="col-md-12">
              <button className="button p-1 custom-btn btn-11">{list.name}</button>
            </div>
          ))}
        </div>
        <div className="description">
          <div className="row">
            <div className="col-12">
              <h1>{products.name}</h1>
              <h3 className="text-danger">Rp. {numberWithCommas(products.price)}</h3>
              <h2 className="desc">{products.description}</h2>
            </div>
          </div>
          <p className="read-more">
            <button className="butn" onClick={() => updateCartHandler(products)}>
              Add Cart
            </button>
          </p>
        </div>
      </div>
    </div>
  ));

  // ======================== Add Cart ==========================
  const updateCartHandler = (products) => {
    const cart = data ? data : [];

    // check if item already exist
    const itemExist = cart.filter((item) => item.product._id === products._id);

    if (itemExist.length === 0) {
      const newItem = { product: products, qty: 1 };
      const newCart = [...cart, newItem];
      dispatch(updateCart(newCart));
      setData(newCart);
      setCount((prev) => prev + 1);
      localStorage.setItem('cart', JSON.stringify(newCart));
    } else {
      alert('item sudah ada di dalam cart');
    }
  };

  // ========================== useEffect ============================
  useEffect(() => {
    if (isError) {
      console.error(message);
    }

    dispatch(getProduct());
    // console.log('GET');
  }, [dispatch, isError, message]);

  return <div className="row justify-content-start">{displayProduct}</div>;
};

export default ListProduct;
