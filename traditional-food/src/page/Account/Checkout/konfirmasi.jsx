import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { updateCart } from '../../../features/cart/cartSlice';
import { createOrder } from '../../../features/order/orderSlice';

const Konfirmasi = ({ setListSelect, addressSelect, setCount }) => {
  const dispatch = useDispatch();
  const { address } = useSelector((state) => state.address);

  const storage = JSON.parse(localStorage.getItem('cart'));
  const harga = storage.map((data) => data.product.price * data.qty);
  const total = harga.reduce((a, b) => a + b, 0);

  // ======================== Pesan / Order ==========================
  const findAddress = address.find((data) => data._id === addressSelect);
  const order = { delivery_fee: 2000, delivery_address: findAddress._id };

  const pesanHandler = () => {
    dispatch(createOrder(order));

    //reset cart state to empty
    const newdata = [];
    dispatch(updateCart(newdata));
    localStorage.setItem('cart', JSON.stringify(newdata));
    setListSelect('Invoice');
    setCount(0);
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-center row">
        <div className="col-md-8">
          <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3">
            <div className="mx-2">
              <span className="font-weight-bold">Konfirmasi</span>
            </div>
          </div>

          <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
            <table className="table">
              <tbody>
                <tr>
                  <td className="w-25">Alamat</td>
                  {[findAddress].map((data) => (
                    <td key={data._id}>
                      {data.alamat}, {data.detail}, {data.kelurahan}, {data.kecamatan}, {data.kabupaten}, {data.provinsi},
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Sub Total</td>
                  <td>Rp. {total}</td>
                </tr>
                <tr>
                  <td>Ongkir</td>
                  <td>Rp. {order.delivery_fee}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
            <h5 className="text-dark align-items-center pt-2 px-2">
              Total Harga : <strong className="text-grey">Rp. {order.delivery_fee + total}</strong>
            </h5>
          </div>

          <div className="align-items-center mt-3 p-2 bg-white rounded">
            <div className="row">
              <div className="col-md-6">
                <button className="btn btn-warning pay-button" onClick={() => setListSelect('PickAddress')} type="button">
                  Kembali
                </button>
              </div>
              <div className="col-md-6">
                <button className="btn btn-warning pay-button" onClick={() => pesanHandler()} type="button">
                  Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Konfirmasi;
