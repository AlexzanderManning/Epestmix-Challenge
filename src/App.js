import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Layout from "./components/Layout";
import BatchDashBoard from "./features/BatchDashBoard/BatchDashBoard";

function App() {
  return (
    <BrowserRouter>
      <div className="h-full">
        <Layout>
          <Routes>
            <Route path="/" exact="true" element={<BatchDashBoard />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Routes>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
