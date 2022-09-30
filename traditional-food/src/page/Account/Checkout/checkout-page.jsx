import React, { useState } from 'react';
import Invoice from './invoice';
import Konfirmasi from './konfirmasi';
import PickAddress from './pick-address';
import './checkout.css';
import { Link } from 'react-router-dom';

const CheckoutPage = ({ setCount }) => {
  const [addressSelect, setAddressSelect] = useState('');
  const [listSelect, setListSelect] = useState('PickAddress');

  // ==================== Display page ======================
  const dataList = [
    {
      id: 'PickAddress',
      page: <PickAddress setListSelect={setListSelect} setAddressSelect={setAddressSelect} addressSelect={addressSelect} />,
    },
    {
      id: 'Konfirmasi',
      page: <Konfirmasi setListSelect={setListSelect} addressSelect={addressSelect} setCount={setCount} />,
    },
    {
      id: 'Invoice',
      page: <Invoice />,
    },
  ];

  let display = '';
  dataList.map((e) => (e.id === listSelect ? (display = e.page) : e));

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
      {display}
    </div>
  );
};

export default CheckoutPage;
