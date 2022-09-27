import ReactPaginate from 'react-paginate';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrder } from '../../features/order/orderSlice';

const Order = () => {
  const dispatch = useDispatch();
  const { order } = useSelector((state) => state.order);
  const [pageNumber, setpageNumber] = useState(0);

  const totalOrder = (items) => {
    const fee = items.delivery_fee;
    const item = items.order_item?.map((data) => data.price * data.qty);
    const itemTotal = item?.reduce((a, b) => a + b, 0);
    const grandTotal = itemTotal + fee;
    return grandTotal;
  };

  // ======================== Pagination ==========================
  const orderPerPage = 3;
  const pageVisited = pageNumber * orderPerPage;
  const pageCount = Math.ceil(order.data.length / orderPerPage);

  const displayOrder = order.data.slice(pageVisited, pageVisited + orderPerPage)?.map((list) => (
    <div key={list._id} className="my-3 bg-light rounded pb-2">
      <div className="row px-2">
        <div className="col-md-12">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Nama Item</th>
                <th scope="col">Harga</th>
                <th scope="col">Jumlah</th>
              </tr>
            </thead>
            {list.order_item?.map((data) => {
              return (
                <tbody key={list._id + data._id} className="table-group-divider table-divider-color">
                  <tr>
                    <td>{data.name}</td>
                    <td>Rp. {data.price}</td>
                    <td>{data.qty}</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
          <div className="row">
            <div className="col-lg-5">
              <div className="d-flex flex-column justify-content-between">
                <div className="align-items-center">
                  <h6 className="text-uppercase fw-bold">Order id :</h6>
                  <span>{list._id}</span>
                </div>
                <div className="align-items-center">
                  <h6 className="text-uppercase fw-bold">Total Harga :</h6>
                  <span>Rp. {totalOrder(list)}</span>
                </div>
              </div>
            </div>
            <div className="col-lg-7 align-items-sm-start ">
              <div className="d-sm-flex justify-content-sm-between ">
                <div className="align-items-center">
                  <h6 className="text-uppercase">Status : {list.status}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  const onPageChange = ({ selected }) => {
    setpageNumber(selected);
  };

  // ======================== useEffect ==========================
  useEffect(() => {
    dispatch(getOrder());
  }, [dispatch]);

  return (
    <div>
      <div className="text-uppercase">My recent orders</div>
      {displayOrder}
      <section>
        <ReactPaginate
          containerClassName={'pagination-btn order-btn'}
          activeClassName={'pagination-btn-active'}
          previousLabel={<i className="fa fa-chevron-left text-muted fs-4 text"></i>}
          nextLabel={<i className="fa fa-chevron-right text-muted fs-4 text"></i>}
          pageCount={pageCount}
          onPageChange={onPageChange}
        />
      </section>
    </div>
  );
};

export default Order;
