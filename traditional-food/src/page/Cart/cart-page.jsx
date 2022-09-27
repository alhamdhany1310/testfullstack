import React, { useState, useEffect } from 'react';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getAddress } from '../../features/address/addressSlice';
import { updateCart } from '../../features/cart/cartSlice';
import './cart.css';

const CartPage = ({ setCount }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState(JSON.parse(localStorage.getItem('cart')));
  const { cart, isError, message } = useSelector((state) => state.cart);

  const storage = JSON.parse(localStorage.getItem('cart'));
  let harga = data.map((data) => data.product.price * data.qty);
  let total = harga.reduce((a, b) => a + b, 0);
  let qty;

  // ========================== Delete cart ============================
  const deleteHandler = async (items) => {
    //redux cart state
    const newCart = await cart.filter((item) => item.product._id !== items.product._id);
    dispatch(updateCart(newCart));

    //localstorage cart state
    const newData = await data.filter((item) => item.product._id !== items.product._id);
    setData(newData);
    localStorage.setItem('cart', JSON.stringify(newData));
    setCount((prev) => prev - 1);
  };

  // ====================== Increment qty cart ========================
  const cartIncrement = (items) => {
    qty = items.qty + 1;
    const editLocal = storage.find((item) => item.product._id === items.product._id);
    editLocal.qty = qty;
    setData(storage);
    localStorage.setItem('cart', JSON.stringify(storage));
  };

  // -------------------- Decrement qty cart
  const cartDecrement = (items) => {
    if (items.qty <= 1) return;
    qty = items.qty - 1;
    const editLocal = storage.find((item) => item.product._id === items.product._id);
    editLocal.qty = qty;
    setData(storage);
    localStorage.setItem('cart', JSON.stringify(storage));
  };

  //---------------- PesanHandler
  const pesanHandler = () => {
    navigate('/checkout');
    dispatch(updateCart(data));
  };

  //---------------------------------------- useEffect
  const dataAddress = useCallback(() => {
    dispatch(getAddress());
  }, [dispatch]);

  useEffect(() => {
    if (isError) console.error(message);

    dataAddress();
    // return () => {
    //
    //   console.log('save cart');
    // }
  }, [dataAddress, isError, message]);

  return (
    <div>
      <div className="headers bg-warning">
        <div className="container">
          <div className="d-flex align-items-center">
            <div className="d-flex">
              <img className="brand-img mb-2" src="https://asset.hamdhany12.repl.co/assets/brand.png" alt="" />
              <Link to="/" className="text-brand text-white text-decoration-none pt-2">
                Shofood
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="d-flex justify-content-center row">
          <div className="col-md-8">
            <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
              <div className="mx-2">
                <span className="font-weight-bold">Gambar</span>
              </div>
              <div className="d-flex flex-column align-items-center mx-2 product-details">
                <span className="font-weight-bold">Item</span>
              </div>
              <div className="d-flex flex-column align-items-center qty">
                <span className="font-weight-bold">Quantity</span>
              </div>
              <div>
                <span className="font-weight-bold">Harga</span>
              </div>
              <span className="d-flex align-items-center">Aksi</span>
            </div>

            {data.length > 0 ? (
              <>
                {data.map((items) => (
                  <div key={items.product._id + Math.floor(Math.random() * 100)} className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
                    <div className="mr-1">
                      <img className="rounded" alt="Foto Product" src={`http://localhost:4000/public/${items.product.image_url}`} width="70" />
                    </div>
                    <div className="d-flex flex-column align-items-center product-details">
                      <span className="font-weight-bold">{items.product.name}</span>
                      <div className="d-flex flex-row product-desc">
                        <div className="size mr-1">
                          <span className="text-grey">Size:</span>
                          <span className="font-weight-bold">&nbsp;M</span>
                        </div>
                        <div className="color">
                          <span className="text-grey">Color:</span>
                          <span className="font-weight-bold">&nbsp;Grey</span>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center qty">
                      <button onClick={() => cartDecrement(items)} className="btn btn-danger btn-sm">
                        <i className="fa fa-minus text-light"> </i>
                      </button>
                      <h5 className="text-grey mx-2">{(qty = items.qty)}</h5>
                      <button onClick={() => cartIncrement(items)} className="btn btn-success btn-sm">
                        <i className="fa fa-plus text-light"></i>
                      </button>
                    </div>
                    <div>
                      <h5 className="text-grey">Rp. {items.product.price}</h5>
                    </div>
                    <div className="d-flex align-items-center">
                      <button onClick={() => deleteHandler(items)} className="btn btn-danger btn-sm">
                        <i className="fa fa-trash mb-1 text-light"></i>
                      </button>
                    </div>
                  </div>
                ))}
                <div className="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded">
                  <h5 className="text-dark align-items-center pt-2 px-2">
                    Total Harga : <strong className="text-grey">Rp. {total}</strong>
                  </h5>
                </div>
                <div className="d-flex  align-items-center mt-3 p-2 bg-white rounded">
                  <button onClick={() => pesanHandler()} className="btn  pay-button" type="button">
                    Proceed to Pay
                  </button>
                </div>
              </>
            ) : (
              <div className="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded">
                <h5 className="text-dark align-items-center pt-2 px-2">
                  Wahhh.. Keranjang Kamu Kosong nih..
                  <Link to="/" className="text-decoration-none">
                    Yuks Pesan
                  </Link>
                </h5>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
