import axios from "axios";
// axios.defaults.withCredentials = true;


// const baseURL = 'http://localhost:5000'
const baseURL = 'https://safe-courier-app.herokuapp.com'

const axiosApp  = axios.create({
    baseURL,
    withCredentials:true
})

export default axiosApp;