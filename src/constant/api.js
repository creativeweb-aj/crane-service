export const API = {
    PORT:
      process.env.NODE_ENV === "development"
        ? "http://localhost:5001/api/v1"
        : "http://localhost:5001/api/v1",
    Base_Url: "http://localhost:5001",
};