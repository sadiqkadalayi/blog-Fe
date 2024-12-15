import axios from "axios";

export const AxiosInstance=axios.create({
    baseURL:process.env.REACT_APP_API_BASE_URL
})

AxiosInstance.interceptors.request.use((config)=>{
    const token = localStorage.getItem('token')
    config.headers.Authorization='Bearer' + " " + token
    return config
})

AxiosInstance.interceptors.response.use(
    (response)=>{
    if(response.data){
        console.log(response);
        
    }
    return response

},
(err)=>{
    if(err.status===401 && err.response.data.message==="unauthorized user"){
        localStorage.clear()
        window.location.href="/login"
    }else if(err.status===404){
        window.location.href="/notfount"

    }
    return Promise.reject(err)
}
)