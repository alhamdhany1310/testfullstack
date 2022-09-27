import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
// import Spinner from '../../component/Spinner';

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ full_name: '', email: '', password: '' });
  const { full_name, email, password } = formData;
  const { registerUser, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

  // ================= onChange input register user ===================
  const onChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // ================= onSubmit form register user ===================
  const onSubmit = (e) => {
    e.preventDefault();
    const userData = { full_name, email, password };
    dispatch(register(userData));
    // console.log(register(userData));
  };

  // ========================== useEffect ============================
  useEffect(() => {
    if (isError) console.error(message);
    // console.log({ isSuccess, registerUser });
    if (isSuccess || registerUser) {
      navigate('/login');
      // console.log('cek status');
    }

    // dispatch(reset());
    // if (isLoading) return <Spinner />;
  }, [registerUser, isError, isSuccess, message, navigate, dispatch]);

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

      <div className="background">
        <div className="container">
          <div className="row bg justify-content-end">
            <div className="col-md-5">
              <div className="card border-0 shadow rounded-1">
                <div className="card-body p-4 p-sm-5">
                  <h5 className="card-title text-center mb-5 fw-light fs-5">Register</h5>
                  <form onSubmit={onSubmit}>
                    <div className=" mb-2">
                      <input type="text" id="full_name" name="full_name" className="form-control" value={full_name} autoComplete="new-email" onChange={onChange} placeholder="Nama" />
                    </div>
                    <div className=" mb-2">
                      <input type="email" id="email" className="form-control" name="email" value={email} autoComplete="new-email" onChange={onChange} placeholder="name@example.com" />
                    </div>
                    <div className="mb-2">
                      <input type="password" className="form-control" name="password" value={password} id="floatingPassword" autoComplete="new-password" onChange={onChange} placeholder="Password" />
                    </div>
                    <div className="d-grid">
                      <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">
                        Register
                      </button>
                    </div>
                    <hr className="my-4" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;
