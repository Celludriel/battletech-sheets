import * as axios from 'axios';

const AxiosFactory = {
    getAxiosClient: function () {
        axios.interceptors.response.use((response) => {
            return response
        }, (error) => {
            if (error.response && error.response.data && error.response.data.location) {
                window.location = error.response.data.location
            }
            return Promise.reject(error)

        })
        return axios;
    }
}

export default AxiosFactory;