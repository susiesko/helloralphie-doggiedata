import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://susie-general-use-db-default-rtdb.firebaseio.com/doggieData'
});

export default instance;