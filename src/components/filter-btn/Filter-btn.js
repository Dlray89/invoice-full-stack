import React, { useContext } from "react";
import ArrowDwn from "../../assets/icon-arrow-down.svg";
import { InvoiceContext } from "../../context/invoiceContext";

export const FilterBtn = ({ status, pressed, setFilter, filter}) => {
  const { StatusList, toggleFilterBtn, setToggleFilterBtn} = useContext(InvoiceContext)


  return (
    <>
      {toggleFilterBtn ? (
        <>
          <div className="header-container--filter-container__filter-btn-container">
            {" "}
            <button
              className="header-container--filter-container__filter-btn-container--btn"
              onClick={() => setToggleFilterBtn()}
            >
              <span className="header-container--filter-container__filter-btn-container--btn__text">
                {" "}
                Close
              </span>{" "}
              <img className="" src={ArrowDwn} alt="icon of down arrow" />
            </button>{" "}
            <div className="header-container--filter-container__filter-btn-container--selection-filters">
              <div
                aria-pressed
                className="header-container--filter-container__filter-btn-container--selection-filters__btn"
              >
              {StatusList}
                {console.log(status, 'status to', StatusList)}
              </div>
              
            </div>
          </div>
        </>
      ) : (
        <>
          <button
            onClick={() => setToggleFilterBtn(true)}
            className="header-container--filter-container__title-container"
          >
            <span className="header-container--filter-container__title-container--title">
              {" "}
              Filter by status
            </span>{" "}
            <img
              className="header-container--filter-container__title-container--icon"
              src={ArrowDwn}
              alt="icon of down arrow"
            />
          </button>
        </>
      )}
    </>
  );
};
