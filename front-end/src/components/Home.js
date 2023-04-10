import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
// import {useEffect} from 'react'
import { GET_ALL_QUOTES } from "../graphqloperations/queries.js";

export default function Home() {
  const { loading, error, data } = useQuery(GET_ALL_QUOTES);
  console.log(data);
  if (loading) return <h1>Loading...</h1>;
  if (error) {
    console.log(error.message);
  }
  if (data.products.length === 0) {
    return <h2>No products available</h2>;
  }
  return (
    <div className="container my-container">
      <div className="p-maindiv">
        {data.products.map((product) => {
          return (
            <div className="product">
              <div className="center">
                <img src={`${product.url}`} alt="pic" />
              </div>
              <h5 style={{marginTop: "20px"}}>{product.name}</h5>
              <div>
                Price: <strong>$ {product.price}</strong>
              </div>
              <p>{product.discription}</p>
              <Link to={`/profile/${product.by._id}`}>
                <p className="right-align">~ {product.by.fname}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}



// useEffect(() => {
//   fetch('http://localhost:5000/',{
//     method:"post",
//     headers:{
//       "Content-Type":"application/json"
//     },
//     body:JSON.stringify({
//       query:`
//       query getAllQuotes{
//         quotes{
//           name
//           by{
//             fname
//           }
//         }}`
//       })
//   }).then(res=>res.json())
//   .then(data=>console.log(data))

// }, []);
