import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getInvoice } from '../../../features/order/orderSlice';

const Invoice = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { invoice, id } = useSelector((state) => state.order);

  console.log('data invoice', invoice);
  useEffect(() => {
    dispatch(getInvoice(id));
  }, [dispatch, id]);

  return (
    <div className="container">
      <div className="d-flex justify-content-center row">
        <div className="col-md-8">
          <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3">
            <div className="mx-2">
              <span className="font-weight-bold">Tagihan</span>
            </div>
          </div>
          {invoice ? (
            <>
              {invoice.map((data) => (
                <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
                  <table className="table">
                    <tbody key={data._id}>
                      <tr>
                        <td className="w-50">Status</td>
                        <td>{data.payment_status}</td>
                      </tr>
                      <tr>
                        <td>Order Id</td>
                        <td>{data._id}</td>
                      </tr>
                      <tr>
                        <td>Total Pembayaran</td>
                        <td>Rp. {data.total}</td>
                      </tr>
                      <tr>
                        <td>Di Tagih Ke</td>
                        <td>
                          {data.user.full_name}, {data.user.email}{' '}
                          <p>
                            {data.delivery_address.kelurahan}, {data.delivery_address.kecamatan}, {data.delivery_address.kabupaten}, {data.delivery_address.provinsi}, {data.delivery_address.detail}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>Payment to</td>
                        <td>
                          <p>test</p>
                          <p>test@gmail.com</p>
                          <p>BCA</p>
                          <p>xxxxx-xxxxxx-333-34</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ))}
            </>
          ) : (
            <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
              <p>Wah Gak Ada Tagihan Nih</p>
            </div>
          )}

          <div className="align-items-center mt-3 p-2 bg-white rounded">
            <div className="row">
              <div className="col-md-6">
                <button className="btn btn-warning pay-button" onClick={() => navigate('/')} type="button">
                  Halaman Depan
                </button>
              </div>
              <div className="col-md-6">
                <button className="btn btn-warning pay-button" onClick={() => navigate('/account')} type="button">
                  Akun
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
