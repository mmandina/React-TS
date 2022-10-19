import { useState, useRef, useEffect } from "react";
const Users = [
  {
    name: "Sarah",
    age: 20,
  },
  { name: "Alex", age: 20 },
  { name: "Michael", age: 20 },
];

const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  let [name, setName] = useState("");
  let [user, setUser] = useState<undefined | { name: string; age: number }>();

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  }, []);
  function onClick() {
    for (let i = 0; i < Users.length; i++) {
      if (Users[i].name === name) {
        setUser(Users[i]);
      }
    }
  }
  return (
    <div>
      User Search
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>Find User</button>
      <div>{user && user.name}</div>
    </div>
  );
};

export default UserSearch;
