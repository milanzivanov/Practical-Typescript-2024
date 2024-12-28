// import { useState } from "react";

// type Person = {
//   name: string;
// };

// function Component() {
//   const [text, setText] = useState("");
//   const [email, setEmail] = useState("");

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     console.log(e.target.value);
//     setEmail(e.target.value);
//   };

//   const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     // const formData = new FormData(e.target as HTMLFormElement)
//     const formData = new FormData(e.currentTarget);

//     const data = Object.fromEntries(formData);
//     console.log(data);

//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     const text = formData.get("text") as string;

//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     const person: Person = {
//       name: data.text as string
//     };
//   };

//   return (
//     <section>
//       <h2>Event example</h2>
//       <form onSubmit={handleSubmit} className="form">
//         <input
//           type="text"
//           className="form-input mb-1"
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//           name="name"
//         />
//         <input
//           type="email"
//           className="form-input mb-1"
//           value={email}
//           onChange={handleChange}
//           name="email"
//         />
//         <button type="submit" className="btn btn-block">
//           submit
//         </button>
//       </form>
//       <h2>Events</h2>
//     </section>
//   );
// }
// export default Component;
