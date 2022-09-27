import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, reset } from '../../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../component/Spinner';
import './login.css';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { email, password } = formData;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

  // ================= onChange input login user ===================
  const onChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // ================= onSubmit form login user ===================
  const onSubmit = (e) => {
    e.preventDefault();
    const userData = { email, password };
    dispatch(login(userData));
  };

  // ====================== useEffect ========================
  useEffect(() => {
    if (isError) console.error(message);
    if (isSuccess || user) navigate('/account');
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  if (isLoading) return <Spinner />;

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
                  <h5 className="card-title text-center mb-5 fw-light fs-5">Sign In</h5>
                  <form onSubmit={onSubmit}>
                    <div className="form-floating mb-3">
                      <input type="email" name="email" className="form-control" value={email} id="floatingInput" autoComplete="new-email" onChange={onChange} placeholder="name@example.com" />
                      <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input type="password" name="password" className="form-control" value={password} id="floatingPassword" autoComplete="new-password" onChange={onChange} placeholder="Password" />
                      <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="d-grid">
                      <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">
                        Sign in
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
export default Login;
