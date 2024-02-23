import React from "react";
import ReactDOM from "react-dom/client";

console.log("hello from JS");

// This is react element
const heading = <h3>React Element</h3>;

// This is normal js function , so we can call it like that only
const heading2 = () => <h2>Functional component calling</h2>;

// This is functional component and writing JSX [ html look alike]
const HeaderComponent = () => {
  return (
    <div>
      {heading}
      {heading2()}
      <heading />
      <h1>This is from functional component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
