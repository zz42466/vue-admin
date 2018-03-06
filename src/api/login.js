import axios from './../config/axios';
let path = 'userlogin';

export default function(userName, password) {
  return axios.post(path, {
    usermobile: userName,
    userpassword: password
  });
}
