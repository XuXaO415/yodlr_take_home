// import React from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { get, post } from "../helpers/api";

// //simple signup form with axios that signs up user

// function Signup() {
//   const [name, setName] = React.useState("");
//   const [email, setEmail] = React.useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     post("users/signup", {
//       name,
//       email,
//     })
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   return (
//     <div>
//       <h1>Signup</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <input
//           type="email"
//           placeholder="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }
// // function Signup() {
// //   const [name, setName] = React.useState("");
// //   const [email, setEmail] = React.useState("");

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     axios
// //       .post("http://localhost:3000/api/users/signup", {
// //         name,
// //         email,
// //       })
// //       .then((res) => {
// //         console.log(res);
// //       })
// //       .catch((err) => {
// //         console.log(err);
// //       });
// //   };

// //   return (
// //     <div>
// //       <h1>Signup</h1>
// //       <form onSubmit={handleSubmit}>
// //         <input
// //           type="text"
// //           placeholder="name"
// //           value={name}
// //           onChange={(e) => setName(e.target.value)}
// //         />
// //         <input
// //           type="email"
// //           placeholder="email"
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //         />
// //         <button type="submit">Submit</button>
// //       </form>
// //     </div>
// //   );
// // }

export default Signup;
