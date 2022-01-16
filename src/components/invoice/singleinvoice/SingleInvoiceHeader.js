import { useContext } from "react";
import { InvoiceContext } from "../../../context/invoiceContext";


export const SingleInvoiceHeader = ({ status, id }) => {
    const { invoicesList, toggleStatus, UntoggleStatus } = useContext(InvoiceContext)

    return (
      <>
            <div className="single-invoice-container__header">
                {console.log(invoicesList)}
            <div className="single-invoice-container__header--title-box">
              <p>
                Status:{" "}
                <span
                  className={
                    status
                      ? "single-invoice-container__header--title-box__status-green"
                      : "single-invoice-container__header--title-box__status-orange"
                  }
                >
                  {" "}
                  {status ? "Paid" : "Pending"}
                </span>
              </p>
            </div>

            <div className="single-invoice-container__header--btns-container">
              <button className="single-invoice-container__header--btns-container__edit">
                Edit
              </button>
              <button className="single-invoice-container__header--btns-container__delete">
                Delete
              </button>
              <button onClick={ () => { status? UntoggleStatus(id) : toggleStatus(id) }} className="single-invoice-container__header--btns-container__markaspaid">
                {status ? "Mark As Unpaid":"Mark As Paid"}
              </button>
            </div>
          </div>
      </>
    );
  };