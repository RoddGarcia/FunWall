import useFetch from "use-http";
import { useEffect, useState } from "react";

const GetData = (tipo) => {
  const baseURL = `http://localhost:8080/${tipo}`;
  const { get, response } = useFetch(baseURL);
  const [data, setData] = useState([]);
  const buscar = async () => {
    const resp = await get();
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

export default GetData;
