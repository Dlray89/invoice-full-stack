import React, { useEffect, useState } from "react";
import { InvoiceContext } from "./invoiceContext";
import axios from "axios";
import { createBrowserHistory } from "history";




export const InvoiceProvidee = ({ children, props }) => {
  const [toggleFilterBtn, setToggleFilterBtn] = useState(false)
  const [invoicesList, setInvoicesList] = useState([]);
  const history = createBrowserHistory();
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    axios
      .get("https://invoice-be22.herokuapp.com/api/invoices")
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
      .put(`https://invoice-be22.herokuapp.com/api/invoices/${id}`, { status: true, total: 0 })
      .then((res) => {
        setInvoicesList(res.data.change);
        console.log(res.data.change, "change");
        console.log(invoicesList);
        window.location.reload();
      })
      .catch((err) => {
        console.log(`${err}: 'error had occured`);
      });
  };

  const UntoggleStatus = (id) => {
    axios
      .put(`https://invoice-be22.herokuapp.com/api/invoices/${id}`, { status: false })
      .then((res) => {
        setInvoicesList(res.data.change);
        console.log(res.data.change, "change");
        console.log(invoicesList);
        window.location.reload();
      })
      .catch((err) => {
        console.log(`${err}: 'error had occured`);
      });
  };

  const filterStatus = {
    All: () => true,
    Pending: (item) => !item.status,
    Paid: (item) => item.status,
  };
  const NewStatList = Object.keys(filterStatus);
  const StatusList = NewStatList.map((item) => (
    <>
    
     <button
        className="filter-btn-container"
        aria-pressed={item === filter}
        key={item}
        onClick={() => {
          setFilter(item); setToggleFilterBtn(false)
        }}
      >
        <p     className="filter-btn-container__text">{item}</p>
      </button>
    </>
     
  ));

  const DeleteInvoice = (id) => {
    axios
      .delete(`https://invoice-be22.herokuapp.com/api/invoices/${id}`)
      .then((res) => {
        setInvoicesList(res.data);
        history.push("/");
        window.location.reload();
      })
      .catch((err) => {
        console.log(`${err}: 'error had occured`);
      });
  };

  return (
    <InvoiceContext.Provider
      value={{
        filter,
        setFilter,
        StatusList,
        DeleteInvoice,
        invoicesList,
        setInvoicesList,
        toggleStatus,
        UntoggleStatus,
        filterStatus,
        toggleFilterBtn, setToggleFilterBtn
      }}
    >
      {children}
    </InvoiceContext.Provider>
  );
};
