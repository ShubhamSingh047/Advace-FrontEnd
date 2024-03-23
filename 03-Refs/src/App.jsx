import React, {
  useEffect,
  useState,
} from "../../../Intermediate_Frontend/04-Effects-DataFetching/04-Self/node_modules/@types/react";

const App = () => {
  const [value, setValue] = useState("");
  console.log(value);

  /*
  Not a correct way to handle these property so it is 
  recomended to use useRef becouse it is not always 
  possible to add class and event listners

   useEffect(() => {
     const test = document.querySelector(".testingRef");
     test.focus();
     console.log(test);
   }, []);
   */

  return (
    <div>
      <input
        className="testingRef"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
      />
      Hello
    </div>
  );
};

export default App;
