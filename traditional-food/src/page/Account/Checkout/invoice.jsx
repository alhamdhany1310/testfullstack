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
                        <td>Payment Method</td>
                        <td>
                          <div className="justify-content-start align-items-center p-2 bg-light rounded">
                            <div className="d-flex flex-row">
                              <div className="shadow-sm p-2 mb-1 bg-body rounded px-2" data-bs-toggle="collapse" href="#seabank" role="button" aria-expanded="false" aria-controls="collapseExample">
                                <img src="https://cf.shopee.co.id/file/5589c755ab085d2fac3e33f4755c6a9e" alt="" />
                              </div>
                              <div className="shadow-sm p-2 mb-1 bg-body rounded mx-1" data-bs-toggle="collapse" href="#seabank" role="button" aria-expanded="false" aria-controls="collapseExample">
                                <img src="https://cf.shopee.co.id/file/49656d7100598b911a1f247dec64fda4" alt="" />
                              </div>
                              <div className="shadow-sm p-2 mb-1 bg-body rounded mx-1" data-bs-toggle="collapse" href="#seabank" role="button" aria-expanded="false" aria-controls="collapseExample">
                                <img src="https://cf.shopee.co.id/file/e7865f5fb066b8b5e73f9d5c36fc7154" alt="" />
                              </div>
                              <div className="shadow-sm p-2 mb-1 bg-body rounded mx-1" data-bs-toggle="collapse" href="#seabank" role="button" aria-expanded="false" aria-controls="collapseExample">
                                <img src="https://cf.shopee.co.id/file/1ad101bcf0e90b74b5697db1511de529" alt="" />
                              </div>
                              <div className="shadow-sm p-2 mb-1 bg-body rounded mx-1" data-bs-toggle="collapse" href="#seabank" role="button" aria-expanded="false" aria-controls="collapseExample">
                                <img src="https://cf.shopee.co.id/file/41e4c83bae13f67b9898c7579dd53d05" alt="" />
                              </div>
                              <div className="shadow-sm p-2 mb-1 bg-body rounded mx-1" data-bs-toggle="collapse" href="#seabank" role="button" aria-expanded="false" aria-controls="collapseExample">
                                <img src="https://cf.shopee.co.id/file/9a08d3abab3dd059fff945c72ca372d9" alt="" />
                              </div>
                            </div>
                            <div class="collapse" id="seabank">
                              <div class="shadow-sm p-2 mb-1 bg-body rounded px-2">
                                <p>Silahkan Transfer Pembayarannya ke:</p>
                                <p>Nama : Al Hamdhany</p>
                                <p>No. Rek : 0987265138817299938</p>
                              </div>
                            </div>
                          </div>
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
