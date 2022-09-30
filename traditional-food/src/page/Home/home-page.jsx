import axios from 'axios';
import ListProduct from './list-product';
import ReactPaginate from 'react-paginate';
import { useEffect, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getProduct } from '../../features/product/productSlice';
import { getAddress } from '../../features/address/addressSlice';
import { getOrder } from '../../features/order/orderSlice';
import { getCart } from '../../features/cart/cartSlice';
import { me } from '../../features/auth/authSlice';
import Header from '../../component/Header';
import './home.css';
import Footer from '../../component/footer';

const HomePage = ({ setCount, count }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.cart);
  const { product } = useSelector((state) => state.product);

  const [getTag, setGetTag] = useState([]);
  const [getCategory, setGetCategory] = useState([]);
  const [filterTag, setFilterTag] = useState([]);
  const [filterCategory, setFilterCategory] = useState('');
  const [search, setSearch] = useState('');
  const [pageNumber, setpageNumber] = useState(0);
  // const [getMe, setGetMe] = useState(dispatch(me()));

  // ======================== Pagination ==========================
  const productPerPage = 18;
  const pageVisited = pageNumber * productPerPage;
  const pageCount = Math.ceil(product.length / productPerPage);

  const onPageChange = ({ selected }) => {
    setpageNumber(selected);
  };

  // ======================== Get category ==========================
  const getDataCategory = useCallback(async () => {
    const response = await axios.get('http://8.219.67.47:4000/api/category');
    setGetCategory(response.data);
  }, []);

  // ========================== Get tag ============================
  const getDataTag = useCallback(async () => {
    const response = await axios.get('http://8.219.67.47:4000/api/tag');
    setGetTag(response.data);
  }, []);

  // ======================== Filter Handler ==========================
  const filterHandler = useCallback(() => {
    const data = {
      tag: filterTag,
      category: filterCategory,
      q: search,
    };

    dispatch(getProduct(data));
  }, [dispatch, filterCategory, filterTag, search]);

  // ======================== Category Handler ==========================
  const filterCategoryHandler = async (tags) => {
    if (filterCategory === tags) {
      setFilterCategory('');
    } else {
      setFilterCategory(tags);
    }
  };

  // ======================== Tag Handler ==========================
  const filterTagHandler = (tags) => {
    if (filterTag.includes(tags)) {
      const newData = filterTag.filter((data) => data !== tags);
      setFilterTag((prev) => (prev = newData));
    } else {
      const tag = [...filterTag, tags];
      setFilterTag((prev) => (prev = tag));
    }
  };

  // ======================== search ==========================
  const debounce = (cb, delay = 300) => {
    let timeout;

    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        cb(...args);
      }, delay);
    };
  };

  const searchProduct = debounce((e) => {
    setSearch(e);
  });

  // ======================== useEffect ==========================
  const get = useCallback(() => {
    getDataCategory();
    getDataTag();

    dispatch(me());
    dispatch(getAddress());
    dispatch(getOrder());
    dispatch(getCart());
    setCount((prev) => (prev = cart.length));
  }, [getDataTag, dispatch, getDataCategory, cart.length, setCount]);
  //  dispatch,

  useEffect(() => {
    // if (!user) {
    //   dispatch(me());
    // }
    filterHandler();
    get();
  }, [get, user, navigate, filterHandler]);

  return (
    <div>
      <Header />
      <div className="header">
        <div className="container">
          <div className="d-flex align-items-center">
            <div className="d-flex mb-2">
              <img className="brand-img mb-2" src="https://asset.hamdhany12.repl.co/assets/brand.png" alt="" />
              <span className="text-brand mt-2">Shofood</span>
            </div>
            <div className="wrap-navbar-input">
              <div className="wrap-search">
                <input type="text" className="form-control1" onChange={(e) => searchProduct(e.target.value)} placeholder="Cari Produk di Store diskon s/d 50%" />
                <div className="wrap-icon-s">
                  <img className="icon-media" src="https://asset.hamdhany12.repl.co/assets/search.png" alt="" />
                </div>
              </div>
              <div className="under-input d-flex mt-2">
                <span className="mx-1 product">Daster Arab</span>
                <span className="mx-1 product">Helm Bogo</span>
                <span className="mx-2 product">Sepatu Converse</span>
                <span className="mx-2 product">Masker Sensi</span>
                <span className="mx-2 product">Jilbab Instan</span>
                <span className="mx-2 product">Sepeda Poligon</span>
                <span className="mx-2 product">Piyam Anak</span>
                <span className="mx-2 product">Speaker Bluetoth</span>
              </div>
            </div>
            {user ? (
              <Link to="/cart" className="cart-btn">
                <img className="icon-shop mb-3" src="https://asset.hamdhany12.repl.co/assets/shop.png" alt="" />
                <span className="cart-quantity text-light nav-link">{cart.length ? cart.length : count === 0 ? '' : count}</span>
              </Link>
            ) : (
              <Link to="/login" className="cart-btn">
                <img className="icon-shop mb-3" src="https://asset.hamdhany12.repl.co/assets/shop.png" alt="" />
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* ============Content=============== */}
      <div className="content">
        <div className="home-header">
          <div className="container pt-4">
            <div className="row pb-4 pt-2">
              <div className="col-8 flex wrap-carousel">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                  <div className="carousel-inner px-1 mt-0">
                    <div className="carousel-item active h-75">
                      <img src="https://asset.hamdhany12.repl.co/assets/slider/3.png" className="d-block w-100 " alt="..." />
                    </div>
                    <div className="carousel-item h-75">
                      <img src="https://asset.hamdhany12.repl.co/assets/slider/4.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item h-75">
                      <img src="https://asset.hamdhany12.repl.co/assets/slider/5.png" className="d-block w-100" alt="..." />
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div className="col-4 flex">
                <div className="h-50">
                  <img className="w-100" src="https://asset.hamdhany12.repl.co/assets/slider/5.png" alt="" />
                </div>
                <div className="h-50">
                  <img className="w-100" src="https://asset.hamdhany12.repl.co/assets/slider/4.png" alt="" />
                </div>
              </div>
            </div>
            {/* =================Category================= */}
            <div className="row category ">
              <h5 className="p-3">kategory</h5>
              <div className="d-flex flex">
                {getCategory.map((categories) => (
                  <div key={categories._id} onClick={() => filterCategoryHandler(categories.name)} className={`col-md-2 d-flex flex-column align-items-center card-category ${filterCategory.includes(categories.name) && 'active'}`}>
                    <div className="wrap-img">
                      <img src={categories.icon} alt="" className="w-100 h-100" />
                    </div>
                    <p className="mb-0 text-center mt-2">{categories.name} </p>
                  </div>
                ))}
              </div>
            </div>
            {/* tags */}
            <div className="row jenis-sale">
              <div className="d-flex flex">
                {getTag.map((tags) => (
                  <div key={tags._id} className="d-flex flex-column align-items-center px-2">
                    <div className={`wrap-img ${filterTag.includes(tags.name) && 'active'}`} onClick={() => filterTagHandler(tags.name)}>
                      <img src={tags.icon} alt="" />
                    </div>
                    <p className="mb-0 mt-2">{tags.name}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="row jenis-sale">
              <span className="rekoment">REKOMENDASI</span>
            </div>
            <ListProduct pageVisited={pageVisited} productPerPage={productPerPage} filterTagHandler={filterTagHandler} setCount={setCount} />
            <ReactPaginate
              containerClassName={'pagination-btn'}
              activeClassName={'pagination-btn-active'}
              previousLabel={<i className="fa-solid fa-chevron-left text-muted fs-4 text"></i>}
              nextLabel={<i className="fa-solid fa-chevron-right text-muted fs-4 text"></i>}
              pageCount={pageCount}
              onPageChange={onPageChange}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
