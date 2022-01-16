import { Link } from "react-router-dom";
import LeftArrow from "../../../assets/icon-arrow-left.svg";


export const GoBackBtn = () => {
    return (
      <>
          <div className="single-invoice-container__go-back-btn">
            <Link to="/" className="single-invoice-container__go-back-btn--btn">
              {" "}
              <img
                className="single-invoice-container__go-back-btn--btn__icon"
                alt="left arrow"
                src={LeftArrow}
              />
              <p className="single-invoice-container__go-back-btn--btn__text">
                Go Back
              </p>
            </Link>
          </div>
      </>
    );
  };