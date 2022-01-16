import { useContext } from "react";
import { InvoiceContext } from "../../context/invoiceContext";
import { Link } from "react-router-dom";
import leftarrow from "../../assets/icon-arrow-right.svg";
import empty from "../../assets/illustration-empty.svg";
import { FromContext } from "../../context/form-context/Form-Context";
import { NewInvoiceForm } from "../forms/new-invoice-form";

export const InvoiceListItems = () => {
  const { invoicesList } = useContext(InvoiceContext);
  const { openForm } = useContext(FromContext);
  const numberOfInvoices = invoicesList.length;

  return numberOfInvoices === 0 ? (
    <>
      <div className="empty-invoices">
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
            <p>${Number(invoice.total).toFixed(2)} </p>
            <p
              className={
                invoice.status === "pending"
                  ? "invoice-list-container__list--textGreen"
                  : "invoice-list-container__list--textOrange"
              }
            >
              {invoice.status ? "Paid" : "Pending"}
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
