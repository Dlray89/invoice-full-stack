import axios from "axios";
import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import { SideBar } from "../../sidebar/sidebar";

import { SplitScreen } from "../../../layout/SplitScreen";
import { SingleInvoiceHeader } from "./SingleInvoiceHeader";
import { GoBackBtn } from "./Go-back-btn";


function SingleInvoice() {
  const [singleInvoice, setSingleInvoice] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://invoice-be22.herokuapp.com/invoices/${id}`)
      .then((res) => {
        const SingleInvoice = res.data;
        console.log(SingleInvoice, "single");
        setSingleInvoice(SingleInvoice);
      })
      .catch((err) => {
        console.log(`${err}: error has occured`);
      });
  }, [id]);

  return (
    <>
      <SplitScreen>
        <>
          <SideBar />
        </>
        <div className="single-invoice-container">
          <GoBackBtn />
          <SingleInvoiceHeader status={singleInvoice.status} id={singleInvoice.id} />
          <div className="single-invoice-container--details">
            <div className="single-invoice-container--details__senders-info">
              <div className="single-invoice-container--details__senders-info--title-box">
                <h4 className="single-invoice-container--details__senders-info--title-box__id">
                  #{singleInvoice.id}
                </h4>
                <p className="single-invoice-container--details__senders-info--title-box__descript">
                  {singleInvoice.description}
                </p>
              </div>

              <div className="single-invoice-container--details__senders-info--address">
                <p className="single-invoice-container--details__senders-info--address__text">
                  {singleInvoice.senderStreet}
                </p>
                <p className="single-invoice-container--details__senders-info--address__text">
                  {singleInvoice.senderCity}, {singleInvoice.senderState}, {" "}
                  {singleInvoice.senderZipcode}
                </p>
              </div>
            </div>

            <div className="single-invoice-container--details__bill-to">

              <div className="single-invoice-container--details__bill-to--dates">
                <div className="single-invoice-container--details__bill-to--dates__date">
                  <h4 className="single-invoice-container--details__bill-to--dates__date--title">Invoice Date</h4>
                  <p className="single-invoice-container--details__bill-to--dates__date--subdate">{singleInvoice.createdAt}</p>
                </div>
                <div className="single-invoice-container--details__bill-to--dates__date">
                  <h4 className="single-invoice-container--details__bill-to--dates__date--title">Payment Due</h4>
                  <p className="single-invoice-container--details__bill-to--dates__date--subdate">{ singleInvoice.paymentDue}</p>
                </div>
              </div>


              <div className="single-invoice-container--details__bill-to--container">
                <div className="single-invoice-container--details__bill-to--container__name-box">
                  <h4 className="single-invoice-container--details__bill-to--container__name-box--title">Bill To</h4>
                  <h4 className="single-invoice-container--details__bill-to--container__name-box--name">{ singleInvoice.clientName}</h4>
                </div>

                <div className="single-invoice-container--details__bill-to--container__address-box">
                  <p  className="single-invoice-container--details__bill-to--container__address-box--address">{ singleInvoice.clientStreet}</p>
                  <p  className="single-invoice-container--details__bill-to--container__address-box--address">{ singleInvoice.clientCity}, { singleInvoice.clientState}, { singleInvoice.clientZipcode}</p>
                </div>
              </div>






              <div className="single-invoice-container--details__bill-to--email-box">
                <h4 className="single-invoice-container--details__bill-to--email-box__title">Send To</h4>
                <p className="single-invoice-container--details__bill-to--email-box__email">{ singleInvoice.clientEmail}</p>
              </div>
            </div>
          </div>
        </div>
      </SplitScreen>
      {console.log(singleInvoice)}
    </>
  );
}

export default SingleInvoice;
