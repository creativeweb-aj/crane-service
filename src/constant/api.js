export const API = {
    PORT:
      process.env.NODE_ENV === "development"
        ? "http://0.0.0.0:8010/api/v1"
        : "https://mcsadmin.pythonanywhere.com/api/v1",
    Base_Url: 
      process.env.NODE_ENV === "development"
        ? "http://0.0.0.0:8010/"
        : "https://mcsadmin.pythonanywhere.com/",
};