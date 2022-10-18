import Api from './Api';


const login = (username,password) => {

    const paramerter = {
        username: username,
        password: password
    }

    return Api.get(`/login`,{params: paramerter });
};


// export
const api = { login}
export default api;
