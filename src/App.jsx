import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Users from "./components/Users";

const App = () => {
  return (
    <div className="w-[80%] bg-zinc-200 mt-5 mx-auto p-5">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:id" element={<Users />} />
      </Routes>
    </div>
  );
};

export default App;
