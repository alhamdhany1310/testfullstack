import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './header.css';

function Header() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="fixed-top">
      <header className="section-header">
        <nav className="navbar navbar-dark navbar-expand pt-2 ">
          <div className="container">
            <ul className="navbar-nav mr-auto align-items-center ">
              <li className="nav-item">
                <span className="navbar-text text-light">Seller Centre</span>
              </li>
              <div className="hr1 mx-2"></div>
              <li className="nav-item">
                <span className="navbar-text text-light">Mulai Jual</span>
              </li>
              <div className="hr1 mx-2"></div>
              <li className="nav-item">
                <span className="navbar-text text-light">Download</span>
              </li>
              <div className="hr1 mx-2"></div>
              <li className="nav-item mx-2">
                <span className="navbar-text text-light">Ikuti Kami di</span>
              </li>
              <li className="nav-item">
                <img className="icon-media mx-1" src="https://asset.hamdhany12.repl.co/assets/facebook.png" alt="" />
                <img className="icon-media mx-1" src="https://asset.hamdhany12.repl.co/assets/instagram.png" alt="" />
                <img className="icon-media mx-1" src="https://asset.hamdhany12.repl.co/assets/pendidikan.png" alt="" />
              </li>
            </ul>
            <ul className="navbar-nav d-flex align-items-center">
              <li className="nav-item ">
                <img className="icon-media  mx-1" src="https://asset.hamdhany12.repl.co/assets/notif.png" alt="" />
                <span className="text-light mx-1">Notifikasi</span>
              </li>
              <li className="nav-item">
                <img className="icon-media  mx-1" src="https://asset.hamdhany12.repl.co/assets/bantuan.png" alt="" />
                <span className="text-light mx-1">Bantuan</span>
              </li>
              {user ? (
                <>
                  <li className="nav-item">
                    <Link to="/account" className="nav-link d-flex align-items-center" data-abc="true">
                      <strong className="text-light">
                        <i className="fa-solid fa-circle-user"> Profil</i>
                      </strong>
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item" data-abc="true">
                    <Link to="/register" className="nav-link d-flex align-items-center">
                      <strong className="text-light">Daftar</strong>
                    </Link>
                  </li>
                  <div className="hr1 mx-1 "></div>

                  <li className="nav-item">
                    <Link to="/login" className="nav-link d-flex align-items-center" data-abc="true">
                      <strong className="text-light">Log In</strong>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
