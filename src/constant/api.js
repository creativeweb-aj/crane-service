export const API = {
    PORT:
      process.env.NODE_ENV === "development"
        ? "http://192.168.1.7:8010/api/v1"
        : "https://mahalaxmi-crane-service.onrender.com/api/v1",
    Baser_Url: 
      process.env.NODE_ENV === "development"
        ? "http://192.168.1.7:8010"
        : "https://mahalaxmi-crane-service.onrender.com",
};