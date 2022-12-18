import axiosConfig from "../config/axios.config";

const getRandomJoke = () => {
  return axiosConfig.get("/random", {
    validateStatus: function (status) {
      return status < 500; //resolve only if the status code is less than 500
    },
  });
};

export default getRandomJoke;
