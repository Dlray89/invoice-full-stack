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

  const toggleStatus = (id) => {
    axios
      .put(`http://localhost:8080/api/invoices/${id}`, {  status: true })
      .then((res) => {
        setInvoicesList(res.data.change)
          console.log(res.data.change,'change');
          console.log(invoicesList)
          window.location.reload()
      })
      .catch((err) => {
        console.log(`${err}: 'error had occured`);
      });
  };

  const UntoggleStatus = (id) => {
    axios
      .put(`http://localhost:8080/api/invoices/${id}`, {  status: false})
      .then((res) => {
        setInvoicesList(res.data.change)
          console.log(res.data.change,'change');
          console.log(invoicesList)
          window.location.reload()
      })
      .catch((err) => {
        console.log(`${err}: 'error had occured`);
      });
  };
 

  return (
    <InvoiceContext.Provider
      value={{ invoicesList, setInvoicesList, toggleStatus, UntoggleStatus}}
    >
      {children}
    </InvoiceContext.Provider>
  );
};
