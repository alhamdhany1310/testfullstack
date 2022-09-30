import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const PickAddress = ({ setListSelect, setAddressSelect, addressSelect }) => {
  const navigate = useNavigate();
  const { address } = useSelector((state) => state.address);

  const addressHandler = (data) => {
    setAddressSelect((prev) => (prev = data._id));
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-center row">
        <div className="col-md-8">
          <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3">
            <div className="mx-2">
              <span className="font-weight-bold">Pilih Alamat</span>
            </div>
          </div>
          {address ? (
            <>
              {address?.map((data) => (
                <div key={data._id} className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
                  <div className="form-check">
                    <input className="form-check-input" checked={data._id === addressSelect ? true : false} onChange={() => addressHandler(data)} type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label className="form-check-label" for="flexRadioDefault2">
                      {data.alamat}, {data.detail}, {data.kelurahan}, {data.kecamatan}, {data.provinsi},
                    </label>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
              <span>Alamat Kamu Belum di ada nih..</span>
            </div>
          )}

          <div className="align-items-center mt-3 p-2 bg-white rounded">
            <div className="row">
              <div className="col-md-6">
                <button className="btn btn-warning pay-button" onClick={() => navigate('/cart')} type="button">
                  Batal
                </button>
              </div>
              <div className="col-md-6">
                <button className="btn btn-warning pay-button" onClick={() => setListSelect('Konfirmasi')} type="button">
                  Berikutnya
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickAddress;
