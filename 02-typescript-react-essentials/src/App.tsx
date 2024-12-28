// import Component from "./starter/01-return";
import Component from "./starter/02-props";
// import Component from "./starter/03-state";
// import Component from "./starter/04-events";
// import Component from "./final/05-challenge";
// import Component from "./starter/05-challenge";
// import Component from "./starter/08-fetch-data/fetch-data-zod/index-fetch";
// import Component from "./starter/08-fetch-data/react-query";
// import Component from "./starter/10-tasks";

// 01. return
// function App() {
//   return (
//     <main>
//       <Component></Component>;
//     </main>
//   );
// }

// 02. props, children
function App() {
  return (
    <main>
      <Component name="milan" id={19}>
        <h2>hello world</h2>
      </Component>
      <Component name="ivan" id={20}></Component>
    </main>
  );
}

// 03. props, children 04. and 05. challenge
// function App() {
//   return (
//     <main>
//       <h2>React Typescript</h2>
//       <Component type="basic" name="milan"></Component>
//       <Component type="advanced" name="milanko" email="m@m.com"></Component>
//     </main>
//   );
// }

// 08. - Fetch Data - UseEffect and Fetch API
// function App() {
//   return (
//     <main>
//       <Component></Component>
//     </main>
//   );
// }

// 10. task
// function App() {
//   return (
//     <main>
//       <Component></Component>
//     </main>
//   );
// }

export default App;
