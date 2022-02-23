import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SideBar } from "../../sidebar/sidebar";

import { SplitScreen } from "../../../layout/SplitScreen";
import { SingleInvoiceHeader } from "./SingleInvoiceHeader";
import { GoBackBtn } from "./Go-back-btn";
import { FromContext } from "../../../context/form-context/Form-Context";

function SingleInvoice() {
  const [singleInvoice, setSingleInvoice] = useState({});
  const { openEditForm, setOpenEditForm} = useContext(FromContext);
  const [singleItems, setSingleItems] = useState([]);

  const { id } = useParams();

  
  // const getAmount = getPrice.reduce((a, b) => a + b)


  useEffect(() => {
    axios
      .get(`https://invoice-be22.herokuapp.com/api/invoices/${id}`)
      .then((res) => {
        const SingleInvoice = res.data;
        console.log(SingleInvoice, "single");
        setSingleInvoice(SingleInvoice);
        setSingleItems(res.data.items);
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
          <SingleInvoiceHeader
            setOpenEditForm={setOpenEditForm}
            openEditForm={openEditForm}
            status={singleInvoice.status}
            id={singleInvoice.id}
            name={singleInvoice.clientName}
            singleInvoice={singleInvoice}
          />
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
                  {singleInvoice.senderCity}, {singleInvoice.senderState},{" "}
                  {singleInvoice.senderZipcode}
                </p>
              </div>
            </div>

            <div className="single-invoice-container--details__bill-to">
              <div className="single-invoice-container--details__bill-to--dates">
                <div className="single-invoice-container--details__bill-to--dates__date">
                  <h4 className="single-invoice-container--details__bill-to--dates__date--title">
                    Invoice Date
                  </h4>
                  <p className="single-invoice-container--details__bill-to--dates__date--subdate">
                    {singleInvoice.createdAt}
                  </p>
                </div>
                <div className="single-invoice-container--details__bill-to--dates__date">
                  <h4 className="single-invoice-container--details__bill-to--dates__date--title">
                    Payment Due
                  </h4>
                  <p className="single-invoice-container--details__bill-to--dates__date--subdate">
                    {singleInvoice.paymentDue}
                  </p>
                </div>
              </div>

              <div className="single-invoice-container--details__bill-to--container">
                <div className="single-invoice-container--details__bill-to--container__name-box">
                  <h4 className="single-invoice-container--details__bill-to--container__name-box--title">
                    Bill To
                  </h4>
                  <h4 className="single-invoice-container--details__bill-to--container__name-box--name">
                    {singleInvoice.clientName}
                  </h4>
                </div>

                <div className="single-invoice-container--details__bill-to--container__address-box">
                  <p className="single-invoice-container--details__bill-to--container__address-box--address">
                    {singleInvoice.clientStreet}
                  </p>
                  <p className="single-invoice-container--details__bill-to--container__address-box--address">
                    {singleInvoice.clientCity}, {singleInvoice.clientState},{" "}
                    {singleInvoice.clientZipcode}
                  </p>
                </div>
              </div>

              <div className="single-invoice-container--details__bill-to--email-box">
                <h4 className="single-invoice-container--details__bill-to--email-box__title">
                  Send To
                </h4>
                <p className="single-invoice-container--details__bill-to--email-box__email">
                  {singleInvoice.clientEmail}
                </p>
              </div>
            </div>

            <div className="single-invoice-container--details__items-box">
                  
              {singleItems.map((item) => (
                <>
                  <div key={item.id} className="single-invoice-container--details__items-box--items">
                    <div>
                      <h4>Item Name</h4>
                      <p> {item.itemName}</p>
                    </div>

                    <div>
                      <h4>QTY</h4>
                      <p>{Number(item.QTY)}</p>
                    </div>
                    <div>
                      <h4>Price</h4>
                      <p>${Number(item.Price).toFixed(2)}</p>
                    </div>
                    <div>
                      <h4>Total </h4>
                      <p>
                        $
                        {Number(
                          Number(item.Price).toFixed(2) *
                            Number(item.QTY).toFixed(2)
                        ).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </>
              ))}
              <div>
                {" "}
                <div className="single-invoice-container--details__items-box--amount-box">
                  <p className="single-invoice-container--details__items-box--amount-box--title">Amount Due</p>
                  <p className="single-invoice-container--details__items-box--amount-box--title">${ Number(singleInvoice.total)}</p>
                </div>
              </div>
            </div>
          </div>

          <div>{console.log(singleItems, "items")}</div>
        </div>
      </SplitScreen>
      {console.log(singleInvoice)}
    </>
  );
}

export default SingleInvoice;
