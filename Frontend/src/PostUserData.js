import useFetch from "use-http";
import { useEffect, useState } from "react";

const PostUserData = async (x) => {
  const baseURL = `http://ec2-3-82-238-164.compute-1.amazonaws.com:25000/usuarios`;
  const { post, response } = useFetch(baseURL);
  console.log(x);
  // const HandleEvaluate = async () => {
  //   if (rating === 0 || comment === "") {
  //     alert("Você não deu uma nota à obra.");
  //   } else {
  //     setUserAval({
  //       obra: movieInfo.titulo,
  //       nota: rating,
  //       texto: comment,
  //       user_id: { id: cookies.user.id },
  //     });

  //     try {
  //       const result = await post("", userAval);
  //       if (response.ok) {
  //         console.log("Avaliação enviada com sucesso:", result);
  //         window.location.reload();
  //       } else {
  //         console.error("Erro ao enviar avaliação:", response.data);
  //       }
  //     } catch (error) {
  //       console.error("Erro ao enviar avaliação:", error);
  //     }
  //   }
  // };

  // const { get, response } = useFetch(baseURL);
  // const [data, setData] = useState([]);
  // const buscar = async () => {
  //   const resp = await get();
  //   console.log(resp);
  //   if (response.ok) {
  //     setData(resp);
  //   } else {
  //     setData([]);
  //   }
  // };
  // useEffect(() => {
  //   buscar();
  // }, []);

  // return data;
};

export default PostUserData;
