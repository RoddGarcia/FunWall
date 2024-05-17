import useFetch from "use-http";
import { useEffect, useState } from "react";

const GetData = (tipo) => {
  const baseURL = `http://ec2-3-82-238-164.compute-1.amazonaws.com:25000/${tipo}`;
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
