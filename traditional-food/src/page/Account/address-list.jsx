import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAddress, getAddress } from '../../features/address/addressSlice';

const AddressList = () => {
  const { address } = useSelector((state) => state.address);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // ==================== Delete Address ======================
  const deleteHandler = async (id) => {
    await dispatch(deleteAddress(id));
    await dispatch(getAddress());
  };
  // console.log(address);

  return (
    <>
      <div className="text-uppercas text-uppercase">
        <div className="row">
          <div className="col-md-6">
            <span>MY Address</span>
          </div>
          <div className="col-md-6 d-flex justify-content-end">
            <button onClick={() => navigate('/account/address-form')} className="btn btn-danger btn-sm">
              Tambah Alamat Baru
            </button>
          </div>
        </div>
      </div>

      {address.length > 0 &&
        address?.map((data) => (
          <div key={data._id} className="order my-3 bg-light rounded">
            <div className="row">
              <div className="col-lg-12 mt-2">
                <table className="table">
                  <tbody>
                    <tr>
                      <td>
                        {data.alamat}, ({data.detail})
                        <p className="text-uppercase">
                          {data.kelurahan}, {data.kecamatan}, {data.kabupaten}, {data.provinsi}
                        </p>
                      </td>
                      <td>
                        <div className="row p-0">
                          <div className="col-4">
                            <span className="text-decoration-none alamat" onClick={() => navigate(`/account/address-form/${data._id}`)}>
                              Edit
                            </span>
                          </div>
                          <div className="col-4">
                            <span className="text-decoration-none alamat" onClick={() => deleteHandler(data._id)}>
                              Hapus
                            </span>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default AddressList;
