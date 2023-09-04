export const API = {
    PORT:
      process.env.NODE_ENV === "development"
        ? "https://mcsadmin.pythonanywhere.com/api/v1"
        : "https://mcsadmin.pythonanywhere.com/api/v1",
    Base_Url: 
      process.env.NODE_ENV === "development"
        ? "https://mcsadmin.pythonanywhere.com/"
        : "https://mcsadmin.pythonanywhere.com/",
};