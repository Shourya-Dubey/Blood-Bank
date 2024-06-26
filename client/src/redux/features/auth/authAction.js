import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../services/API";
// import { toast } from "react-toastify";

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ role, email, password }, { rejectWithValue }) => {
    try {
      const { data } = await API.post("/auth/login", {
        role,
        email,
        password,
      });
      //store token
      if (data.sucess) {
        localStorage.setItem("token", data.token);
        alert(data.message);
        window.location.replace("/");
      }
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const userRegister = createAsyncThunk(
  "auth/register",
  async (
    {
      name,
      role,
      email,
      Password,
      organisationName,
      hospitalName,
      address,
      phoneNumber,
      website,
    },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await API.post("auth/register", {
        name,
        role,
        email,
        Password,
        organisationName,
        hospitalName,
        address,
        phoneNumber,
        website,
      });
      if (data?.success) {
        // toast.success(data.message);
        window.location.replace("/login");
        alert("user Register Successfully");
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

//current user
export const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async ({ rejectWithValue }) => {
    try {
      const res = await API.get("/auth/current-user");
      if (res?.data) {
        // return res && res.data
        return res?.data;
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
