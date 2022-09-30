import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrder } from '../../features/order/orderSlice';
import { me } from '../../features/auth/authSlice';

const Profile = () => {
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.auth);

  // ==================== useEffect ======================
  useEffect(() => {
    dispatch(me());
    dispatch(getOrder());
  }, [dispatch]);

  return (
    <div className="col-lg-9 my-lg-0 my-1">
      <div className="row d-flex h-100">
        <div className="col col-md-9 col-lg-7">
          <div className="card-body">
            <div className="d-flex text-black">
              <div className="flex-shrink-0">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp" alt="Generic placeholder image" className="img-fluid" />
              </div>
              <div className="flex-grow-1 ms-3">
                {profile.length > 0 &&
                  profile.map(({ customer_id, full_name, email }) => {
                    return (
                      <div key={customer_id}>
                        <h5 className="mb-1">{full_name}</h5>
                        <p className="mb-2 pb-1">{email}</p>
                      </div>
                    );
                  })}
                <div className="d-flex justify-content-start rounded-3 p-2 mb-2 b">
                  <div className="box me-2 my-1 bg-white">
                    <img src="https://www.freepnglogos.com/uploads/box-png/cardboard-box-brown-vector-graphic-pixabay-2.png" alt="" />
                    <div className="d-flex align-items-center mt-2">
                      <div className="tag">Orders placed</div>
                      <div className="ms-auto number">10</div>
                    </div>
                  </div>
                  <div className="box me-2 my-1 bg-white">
                    <img src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-campus-recreation-university-nebraska-lincoln-30.png" alt="" />
                    <div className="d-flex align-items-center mt-2">
                      <div className="tag">Items in Cart</div>
                      <div className="ms-auto number">10</div>
                    </div>
                  </div>
                  <div className="box me-2 my-1 bg-white">
                    <img src="https://www.freepnglogos.com/uploads/love-png/love-png-heart-symbol-wikipedia-11.png" alt="" />
                    <div className="d-flex align-items-center mt-2">
                      <div className="tag">Wishlist</div>
                      <div className="ms-auto number">10</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
