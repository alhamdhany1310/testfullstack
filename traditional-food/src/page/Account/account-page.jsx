import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useCallback, useState } from 'react';
import { logout, me, reset } from '../../features/auth/authSlice';
import Profile from './profile';
import Order from './order';
import Address from './address';
import AddressForm from './address-form';
import './account-page.css';
import { useEffect } from 'react';
import { getAddress } from '../../features/address/addressSlice';
import { getOrder } from '../../features/order/orderSlice';

const AccountPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [listSelect, setListSelect] = useState('Profile');

  // ==================== Display page ======================
  const dataList = [
    {
      id: 'Profile',
      page: <Profile />,
    },
    {
      id: 'Order',
      page: <Order />,
    },
    {
      id: 'Address',
      page: <Address setListSelect={setListSelect} />,
    },
    {
      id: 'AddressForm',
      page: <AddressForm />,
    },
  ];

  let display = '';
  dataList.map((e) => (e.id === listSelect ? (display = e.page) : e));

  // =================== Logout handler =====================
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };

  // =================== useEffect =====================
  const getdata = useCallback(() => {
    dispatch(me());
    dispatch(getAddress());
    dispatch(getOrder());
  }, [dispatch]);

  useEffect(() => {
    getdata();
  }, [getdata]);

  return (
    <div>
      <div className="headers">
        <div className="container">
          <div className="d-flex align-items-center">
            <div className="d-flex">
              <Link to="/">
                <span className="text-brand text-dark">Shofood</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-3 my-lg-0 my-md-1">
            <div id="sidebar" className="bg-purple">
              <div className="h4 text-white ">Account</div>
              <ul>
                <li onClick={() => setListSelect('Profile')} className={listSelect === 'Profile' ? 'active' : ''}>
                  <div className="d-flex align-items-start">
                    <div className="fas fa-box pt-2 me-3"></div>
                    <div className="d-flex flex-column">
                      <div className="link">My Account</div>
                      <div className="link-desc">Lihat Profil</div>
                    </div>
                  </div>
                </li>
                <li onClick={() => setListSelect('Address')} className={listSelect === 'Address' ? 'active' : listSelect === 'AddressForm' ? 'active' : ''}>
                  <div className="d-flex align-items-start">
                    <div className="far fa-address-book pt-2 me-3"></div>
                    <div className="d-flex flex-column">
                      <div className="link">Address Book</div>
                      <div className="link-desc">Lihat dan Kelola Alamat</div>
                    </div>
                  </div>
                </li>
                <li onClick={() => setListSelect('Order')} className={listSelect === 'Order' ? 'active' : ''}>
                  <div className="d-flex align-items-start">
                    <div className="fas fa-box-open pt-2 me-3"></div>
                    <div className="d-flex flex-column">
                      <div className="link">My Orders</div>
                      <div className="link-desc">View & Manage orders and returns</div>
                    </div>
                  </div>
                </li>
                <li onClick={onLogout}>
                  <div className="d-flex align-items-start">
                    <div className="fas fa-right-from-bracket pt-2 me-3"></div>
                    <div className="d-flex flex-column">
                      <div className="link">Keluar</div>
                      <div className="link-desc">View & Manage orders and returns</div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-9 my-lg-0 my-1">
            <div id="main-content" className="bg-white border">
              {display}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
