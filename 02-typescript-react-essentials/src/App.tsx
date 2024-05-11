// import Component from "./starter/01-return";
// import Component from "./starter/02-props";
// import Component from "./starter/03-state";
// import Component from "./starter/04-events";
// import Component from "./final/05-challenge";
import Component from "./starter/05-challenge";

// 01. return
// function App() {
//   return (
//     <main>
//       <Component></Component>;
//     </main>
//   );
// }

// 02. props, children
// function App() {
//   return (
//     <main>
//       <Component name="milan" id={19}>
//         <h2>hello world</h2>
//       </Component>
//       <Component name="ivan" id={20}></Component>
//     </main>
//   );
// }

// 03. props, children
function App() {
  return (
    <main>
      <h2>React Typescript</h2>
      <Component type="basic" name="milan"></Component>
      <Component type="advanced" name="milanko" email="m@m.com"></Component>
    </main>
  );
}

export default App;
