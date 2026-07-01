import axios from "axios";

const API = "http://127.0.0.1:5000/api";

const token = () => localStorage.getItem("token");

export const getTasks = async () => {
  const res = await axios.get(`${API}/tasks`, {
    headers: {
      Authorization: `Bearer ${token()}`,
    },
  });

  return res.data;
};

export const addTask = async (title) => {
  const res = await axios.post(
    `${API}/tasks`,
    { title },
    {
      headers: {
        Authorization: `Bearer ${token()}`,
      },
    }
  );

  return res.data;
};

export const toggleTask = async (id) => {
  const res = await axios.put(
    `${API}/tasks/${id}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token()}`,
      },
    }
  );

  return res.data;
};

export const deleteTask = async (id) => {
  const res = await axios.delete(`${API}/tasks/${id}`, {
    headers: {
      Authorization: `Bearer ${token()}`,
    },
  });

  return res.data;
};