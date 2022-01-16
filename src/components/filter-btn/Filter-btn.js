import React, { useContext } from 'react'
import { FilterContext } from '../../context/filter-btn/FilterContext';
import ArrowDwn from "../../assets/icon-arrow-down.svg";





export const FilterBtn = () => {

    const { toggleFilterBtn, setToggleFilterBtn  } = useContext(FilterContext);
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
                <button aria-pressed  className="header-container--filter-container__filter-btn-container--selection-filters__btn">
                  All
                </button>
                <button className="header-container--filter-container__filter-btn-container--selection-filters__btn">
                  Pending
                </button>
                <button className="header-container--filter-container__filter-btn-container--selection-filters__btn">
                  Paid
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <button
              onClick={() => setToggleFilterBtn(true)}
              className="header-container--filter-container__title-container"
            >
              <span className="header-container--filter-container__title-container--title"> Filter by status</span>{" "}
              <img
                className="header-container--filter-container__title-container--icon"
                src={ArrowDwn}
                alt="icon of down arrow"
              />
            </button>
          </>
        )}
        </>
    )
}