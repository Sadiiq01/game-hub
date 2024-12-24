import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "612159d4597b4bedaab0a1c99de373bb",
  },
});
