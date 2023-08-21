import {useNavigate} from 'react-router-dom';

export const Logout = async () => {
    const navigate = useNavigate();
    let isLogout = false
    try {
      localStorage.setItem('token', null);
      isLogout = true
      navigate("/login");
    } catch (e) {
      console.log(e);
    }
    return isLogout
}