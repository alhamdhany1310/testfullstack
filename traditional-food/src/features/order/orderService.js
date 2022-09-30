import axios from 'axios';

const API_URL = 'http://8.219.67.47:4000/api/order/';

//Get cart
const getOrder = async (num, token) => {
  let response;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  if (!num) {
    response = await axios.get(API_URL, config);
  } else {
    response = await axios.get(API_URL + `?skip=${num}`, config);
  }

  return response.data;
};

// Post order
const createOrder = async (data, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, data, config);

  return response.data;
};

//Get invoice
const getInvoice = async (id, token) => {
  if (!id) return;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get('http://8.219.67.47:4000/api/invoice/' + id, config);

  console.log('invoice', response.data);

  return [response.data];
};

const orderService = {
  getOrder,
  createOrder,
  getInvoice,
};

export default orderService;
