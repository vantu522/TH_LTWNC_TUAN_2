import axios, { type AxiosInstance, type InternalAxiosRequestConfig, type AxiosResponse, AxiosError } from 'axios';

// Khởi tạo một instance của Axios với các cấu hình mặc định
const axiosClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api', // Thay thế bằng URL API thực tế của bạn hoặc dùng biến môi trường
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // Thời gian chờ tối đa 10 giây
});

// Thêm một request interceptor
axiosClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Làm gì đó trước khi request được gửi đi
    // Ví dụ: đính kèm token vào header
    // const token = localStorage.getItem('token');
    // if (token && config.headers) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error: AxiosError) => {
    // Xử lý lỗi request
    return Promise.reject(error);
  }
);

// Thêm một response interceptor
axiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    // Bất kỳ mã trạng thái nào nằm trong dải 2xx đều khiến hàm này được kích hoạt
    // Làm gì đó với dữ liệu response

    // Thường thì API hay bọc data trong response.data, tùy cấu trúc server bạn có thể bóc tách luôn ở đây
    return response.data;
  },
  (error: AxiosError) => {
    // Bất kỳ mã trạng thái nào lọt ra ngoài dải 2xx đều khiến hàm này được kích hoạt
    // Xử lý lỗi response

    // Ví dụ: xử lý lỗi 401 Unauthorized
    // if (error.response?.status === 401) {
    //   // Xử lý logic logout hoặc refresh token ở đây
    // }

    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default axiosClient;
