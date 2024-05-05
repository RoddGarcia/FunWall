import useFetch from "use-http";
import { useEffect, useState } from "react";

const GetUsersData = () => {
  const baseURL = `http://localhost:8080/usuarios`;
  const { get, response } = useFetch(baseURL);
  const [data, setData] = useState([]);
  const buscar = async () => {
    const resp = await get();
    console.log(resp);
    if (response.ok) {
      setData(resp);
    } else {
      setData([]);
    }
  };
  useEffect(() => {
    buscar();
  }, []);

  return data;
};

export default GetUsersData;
