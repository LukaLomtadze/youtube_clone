import axios from "axios";

const Base_URL = "https://youtube-v31.p.rapidapi.com";

const headers = {
  'x-rapidapi-key': process.env.REACT_APP_RAPI_API_KEY,
  'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
};

export const fetchFromAPI = async (url, params) => {
  const { data } = await axios.get(`${Base_URL}/${url}`, {
    params,
    headers
  });
  return data;
};

///search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50