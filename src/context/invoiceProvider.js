import React, { useEffect, useState } from "react";
import { InvoiceContext } from "./invoiceContext";
import axios from "axios";

export const InvoiceProvidee = ({ children, props }) => {
  const [invoicesList, setInvoicesList] = useState([]);
  

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/invoices")
      .then((res) => {
        const invoiceResults = res.data;
        setInvoicesList(invoiceResults);
        console.log(invoiceResults);
      })
      .catch((err) => {
        console.log(`${err}: error occured`);
      });
  }, []);



  

  return (
    <InvoiceContext.Provider value={{ invoicesList, setInvoicesList}}>
      {children}
    </InvoiceContext.Provider>
  );
};
