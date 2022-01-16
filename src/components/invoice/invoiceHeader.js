import React, { useContext } from "react";
import Plus from "../../assets/icon-plus.svg";
import { InvoiceContext } from "../../context/invoiceContext";
import { FromContext } from "../../context/form-context/Form-Context";
import { FilterBtn } from "../filter-btn/Filter-btn";

export const InvoiceHeader = () => {
  const { invoicesList } = useContext(InvoiceContext);
  const { setOpenForm } = useContext(FromContext);

  return (
    <div className="header-container">
      <div className="header-container--title-content">
        <h1 className="header-container--title-content__title">Invoices</h1>
        <p className="header-container--title-content__subtitle">
          {/* There are {invoicesList.length} total invoices */}
        </p>
      </div>

      <div className="header-container--filter-container">
        {/* ////filter button here */}
        <FilterBtn />
        <button
          onClick={() => setOpenForm(true)}
          className="header-container--filter-container__button"
        >
          <img
            className="header-container--filter-container__button--icon"
            src={Plus}
            alt="icon plus"
          />
          <span className="header-container--filter-container__button--text">
            New Invoice
          </span>
        </button>
      </div>
    </div>
  );
};
