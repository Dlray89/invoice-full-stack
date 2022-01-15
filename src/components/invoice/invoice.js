import { useContext, useEffect, useState } from "react";
import { InvoiceContext } from "../../context/invoiceContext";
import { useParams, Link } from "react-router-dom";
import leftarrow from "../../assets/icon-arrow-right.svg";
import empty from "../../assets/illustration-empty.svg";
import { FromContext } from "../../context/form-context/Form-Context";
import { NewInvoiceForm } from "../forms/new-invoice-form";
import { FilterContext } from "../../context/filter-btn/FilterContext";
import axios from "axios";

export const InvoiceListItems = () => {
  const { invoicesList } = useContext(InvoiceContext);
  const { openForm } = useContext(FromContext);
  const {  filter,  filterStatus} = useContext(FilterContext)
  const numberOfInvoices = invoicesList.length;
  const [arr, setArr] = useState([])


  useEffect(() => {
    (async () => {
      const response = await axios.get('http://localhost:8080/invoices')
      setArr(response.data)
      console.log(response.data,'data')
   })()
  }, [])

  return numberOfInvoices === 0 ? (
    <>
      <div className="empty-invoices">
        {console.log(arr)}
        <img className="empty-invoices__img" src={empty} alt="empty" />
        <div className="empty-invoices__text-content">
          <h3 className="empty-invoices__text-content--title">
            There is nothing here
          </h3>
          <button className="empty-invoices__text-content--content">
            Create an invoice by clicking the{" "}
            <span className="empty-invoices__text-content--content__special-text">
              New Invoice
            </span>{" "}
            button and get started
          </button>
        </div>
      </div>
      {openForm ? (
        <>
          <NewInvoiceForm />
        </>
      ) : (
        <>{null}</>
      )}
    </>
  ) : (
    <>
      {" "}
      <div className="invoice-list-container">
        {invoicesList.map((invoice) => (
          <Link
            to={`${invoice.id}`}
            className="invoice-list-container__list"
            key={invoice.id}
          >
            <p className="invoice-list-container__list--text">
              <span>#</span>
              {invoice.id}
            </p>
            <p>{invoice.paymentDue}</p>
            <p>{invoice.clientName}</p>
            <p>${invoice.total} </p>
            <p
              className={
                invoice.status === "pending"
                  ? "invoice-list-container__list--textOrange"
                  : "invoice-list-container__list--textGreen"
              }
            >
              {invoice.status}
            </p>
            <Link to={`${invoice.id}`}>
              <img src={leftarrow} alt="left arrow" />
            </Link>
          </Link>
        ))}
      </div>
      {openForm ? (
        <>
          <NewInvoiceForm />
        </>
      ) : (
        <>{null}</>
      )}
    </>
  );
};
