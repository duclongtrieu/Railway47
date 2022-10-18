import Api from "./Api";

const url = "/user";

const existsByEmail = (email) => {
  return Api.get(`${url}/email/${email}`);
};

const existsByUsername = (username) => {
  return Api.get(`${url}/username/${username}`);
};

const create = (firstname, lastname, username, email, password) => {
  const body = {
    firstName: firstname,
    lastName: lastname,
    userName: username,
    email: email,
    password: password,
  };

  return Api.post(url, body);
};

const resendEmailToActiveAccount = (email) => {
  const paramerter = {
    email: email,
  };

  return Api.get(`${url}/userRegistrationConfirmRequest`, {
    params: paramerter,
  });
};

const requestResetPassword = (email) => {
  const paramerter = {
    email: email,
  };

  return Api.get(`${url}/resetPasswordRequest`, { params: paramerter });
};

const resendEmailToResetpassword = (email) => {
  const paramerter = {
    email: email,
  };

  return Api.get(`${url}/resendResetPassword`, { params: paramerter });
};

const resetPassword = (token, newPassword) => {
  const paramerter = {
    token: token,
    newPassword: newPassword,
  };

  return Api.get(`${url}/resetPassword`, { params: paramerter });
};

const getProfile = () => {
  return Api.get(`${url}/profile`);
};

const updateProfile = (avatarUrl) => {
  const body = {
    avatarUrl: avatarUrl,
  };
  return Api.put(`${url}/profile`, body);
};
// export
const api = {
  updateProfile,
  getProfile,
  create,
  existsByEmail,
  existsByUsername,
  resendEmailToActiveAccount,
  requestResetPassword,
  resendEmailToResetpassword,
  resetPassword,
};
export default api;
