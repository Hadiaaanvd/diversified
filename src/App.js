import { Route, Routes } from "react-router-dom";

import ScrollToTop from "./components/scroll/scroll.jsx";
import { ScrollContainer } from "react-scroll-motion";

import Layout from "./layout";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ScrollContainer>
        <ScrollToTop />

        <Routes>
          <Route path="*" element={<Layout />} />
        </Routes>
      </ScrollContainer>
    </div>
  );
}

export default App;
