import { Grommet, grommet } from "grommet";
import SignUp from "./pages/SignUp";
import { Route, Routes } from "react-router";
import Login from "./pages/Login";
import { BrowserRouter } from "react-router-dom";
import Results from "./pages/Results";

function App() {
  return (
    <Grommet theme={grommet}>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/results" element={<Results />} />
          <Route path="/" element={<Login />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Grommet>
  );
}

export default App;
