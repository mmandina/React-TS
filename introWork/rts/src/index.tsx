// 1) Import ReactDOM library
import ReactDOM from "react-dom/client";
//import GuestList from "./state/GuestList";
//import UserSearch from "./state/UserSearch";
//import EventComponent from "./events/eventComponent";
//import UserSearch from "./classes/UserSearch";
import UserSearch from "./refs/UserSearch";
// 2) Get a reference to the div with ID root
const el = document.getElementById("root");

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el!);

// 4) Create a component
const App = () => {
  return (
    <div>
      <UserSearch />
    </div>
  );
};
const Users = [
  {
    name: "Sarah",
    age: 20,
  },
  { name: "Alex", age: 20 },
  { name: "Michael", age: 20 },
];
// 5) Show the component on the screen
root.render(<App />);
