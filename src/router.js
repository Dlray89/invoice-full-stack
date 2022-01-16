import React from "react";
import { Routes, Route } from "react-router-dom";
import SingleInvoice from "./components/invoice/SingleInvoice";
import Home from "./Home";

export const Router = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":id" element={<SingleInvoice />} />
      </Routes>
    </>
  );
};
