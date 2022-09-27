import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { createAddress, updateAddress } from '../../features/address/addressSlice';

const AddressForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { address } = useSelector((state) => state.address);
  const [createData, setCreateData] = useState({
    alamat: String,
    kelurahan: String,
    kecamatan: String,
    kabupaten: String,
    provinsi: String,
    detail: String,
  });

  const { alamat, kelurahan, kecamatan, kabupaten, provinsi, detail } = createData;

  // ================= onChange input addrress ===================
  const onChange = (e) => {
    setCreateData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // ==================== Edit address ======================
  const editAddress = (e) => {
    e.preventDefault();
    const _id = id;

    const newAddress = {
      _id,
      alamat,
      kelurahan,
      kecamatan,
      kabupaten,
      provinsi,
      detail,
    };

    dispatch(updateAddress(newAddress));
    navigate('/account');

    setCreateData({
      alamat: String,
      kelurahan: String,
      kecamatan: String,
      kabupaten: String,
      provinsi: String,
      detail: String,
    });
  };

  // ==================== Add/Create address ======================
  const addNewAddress = (e) => {
    e.preventDefault();
    const newAddress = {
      alamat,
      kelurahan,
      kecamatan,
      kabupaten,
      provinsi,
      detail,
    };

    dispatch(createAddress(newAddress));

    setCreateData({
      alamat: String,
      kelurahan: String,
      kecamatan: String,
      kabupaten: String,
      provinsi: String,
      detail: String,
    });

    navigate('/account');
  };

  return (
    <div>
      <div className="headers">
        <div className="container">
          <div className="d-flex align-items-center">
            <div className="d-flex">
              <span className="text-brand text-dark">Shofood</span>
            </div>
          </div>
        </div>
      </div>
      {id ? (
        address
          .filter((list) => list._id.includes(id))
          .map((data) => {
            return (
              <div className="wrapper rounded bg-white mt-3 mx-auto">
                <div className="h3">Edit Alamat</div>
                <form className="form" key={data._id} onSubmit={editAddress}>
                  <div className="row">
                    <div className="col-md-6 mt-md-0 mt-3">
                      <label>Provinsi</label>
                      <input type="text" id="provinsi" name="provinsi" placeholder={data.provinsi} defaultValue={data.provinsi} onChange={(e) => onChange(e)} className="form-control" required />
                    </div>
                    <div className="col-md-6 mt-md-0 mt-3">
                      <label>Kabupaten</label>
                      <input type="text" id="kabupaten" name="kabupaten" placeholder={data.kabupaten} defaultValue={data.kabupaten} onChange={(e) => onChange(e)} className="form-control" required />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mt-md-0 mt-3">
                      <label>Kecamatan</label>
                      <input type="text" id="kecamatan" name="kecamatan" placeholder={data.kecamatan} defaultValue={data.kecamatan} onChange={(e) => onChange(e)} className="form-control" required />
                    </div>
                    <div className="col-md-6 mt-md-0 mt-3">
                      <label>Kelurahan</label>
                      <input type="text" id="kelurahan" name="kelurahan" placeholder={data.kelurahan} defaultValue={data.kelurahan} onChange={(e) => onChange(e)} className="form-control" required />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 mt-md-0 mt-3">
                      <label for="Alamat" className="form-label" required>
                        alamat
                      </label>
                      <textarea id="alamat" name="alamat" className="form-control" placeholder={data.alamat} defaultValue={data.alamat} onChange={(e) => onChange(e)} rows="3"></textarea>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 mt-md-0 mt-3">
                      <label>Detail</label>
                      <input type="text" id="detail" name="detail" className="form-control" placeholder={data.detail} defaultValue={data.detail} onChange={(e) => onChange(e)} required />
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary mt-3 w-100">
                    Submit
                  </button>
                </form>
              </div>
            );
          })
      ) : (
        <div className="wrapper rounded bg-white mt-3 mx-auto">
          <div className="h3">Alamat Baru</div>
          <form className="from" onSubmit={addNewAddress}>
            <div className="row">
              <div className="col-md-6 mt-md-0 mt-3">
                <label>Provinsi</label>
                <input type="text" id="provinsi" name="provinsi" defaultValue={provinsi} onChange={(e) => onChange(e)} placeholder="Provinsi" className="form-control" required />
              </div>
              <div className="col-md-6 mt-md-0 mt-3">
                <label>Kabupaten</label>
                <input type="text" id="kabupaten" name="kabupaten" defaultValue={kabupaten} onChange={(e) => onChange(e)} placeholder="Kabupaten / Kota" className="form-control" required />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mt-md-0 mt-3">
                <label>Kecamatan</label>
                <input type="text" id="kecamatan" name="kecamatan" defaultValue={kecamatan} onChange={(e) => onChange(e)} placeholder="Kecamatan" className="form-control" required />
              </div>
              <div className="col-md-6 mt-md-0 mt-3">
                <label>Kelurahan</label>
                <input type="text" id="kelurahan" name="kelurahan" defaultValue={kelurahan} onChange={(e) => onChange(e)} placeholder="Desa / Kelurahan" className="form-control" required />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 mt-md-0 mt-3">
                <label for="alamat" className="form-label" required>
                  alamat
                </label>
                <textarea name="alamat" defaultValue={alamat} onChange={(e) => onChange(e)} className="form-control" id="alamat" placeholder="Nama Jalan, Gedung, No. Rumah" rows="3"></textarea>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 mt-md-0 mt-3">
                <label>Detail</label>
                <input id="detail" name="detail" type="text" defaultValue={detail} onChange={(e) => onChange(e)} className="form-control" placeholder="Cth: Blok/ Unit No. Patokan" required />
              </div>
            </div>
            <button type="submit" className="btn btn-primary mt-3 w-100">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddressForm;
