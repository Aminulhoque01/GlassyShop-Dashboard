/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import axios from "axios";

 
const apiUrl = import.meta.env.VITE_API_URL;

export const postData = async (url, formData) => {
  try {
    const response = await fetch(apiUrl + url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const data = await response.json();
      // console.log(data)
      return data;
    } else {
      const errorData = await response.json();
      return errorData;
    }
  } catch (error) {
    console.log(error);
  }
};

export const fetchDataFromApi = async (url) => {
  try {
    const params={
        headers:{
          'Authorization':`Bearer ${localStorage.getItem('accessToken')}`,
          'content-type':`application/json`,
        }
    }


    const { data } = await axios.get(apiUrl + url,params);
     
    return data;
    
  } catch (error) {
    console.log(error.message);
    return error;
  }
};
