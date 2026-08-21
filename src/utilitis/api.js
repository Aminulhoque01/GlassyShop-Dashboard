/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import axios from "axios";

 
const apiUrl = import.meta.env.VITE_API_URL;

export const postData = async (url, formData) => {
  try {
    const response = await fetch(apiUrl + url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
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




export const aditData = async (url, updatedData) => {
  const params = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      'Content-Type':'application/json'
    },
  };

  var response;
    await axios.put(apiUrl + url, updatedData, params).then((res)=>{
    console.log(res);
    response=res
  });
  return response;
  
};

export const uploadCategoryImage = async (
  url,
  formData
) => {
  try {
    const response = await axios.post(
      `${apiUrl}${url}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(
            "accessToken"
          )}`,
        },
      }
    );

    return response;

  } catch (error) {
    console.log(
      "Upload Image Error:",
      error
    );

    return {
      data: {
        success: false,
        error: true,
        message:
          error?.response?.data?.message ||
          error.message,
      },
    };
  }
};

export const deleteImagesCloudinary= async(url,image)=>{
  const {res}= await axios.delete(`${apiUrl}${url}`,image);
  return res;
}


export const editData = async (url, body) => {
  try {
    const response = await fetch(`${apiUrl}${url}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);

    return {
      success: false,
      error: true,
      message: error.message,
    };
  }
};

export const deleteData = async (url) => {
  try {
    const response = await fetch(apiUrl + url, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);

    return {
      success: false,
      error: true,
      message: error.message,
    };
  }
};


export const uploadImage = async (url, formData) => {
  try {
    const response = await axios.post(
      `${apiUrl}${url}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );

    return response;
  } catch (error) {
    console.log("Upload Image Error:", error);

    return {
      data: {
        success: false,
        message:
          error?.response?.data?.message ||
          error.message ||
          "Image upload failed",
      },
    };
  }
};