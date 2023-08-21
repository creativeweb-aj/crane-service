import { toast } from 'react-toastify';

export const Toast = async (status, message) => {
    console.info(status, message)
    const options = {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    }
    if(status){
        toast.success(message, options);
    }else{
        toast.error(message, options);
    }
}