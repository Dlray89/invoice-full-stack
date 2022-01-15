import React, { useContext } from "react";
import { FromContext } from "../../context/form-context/Form-Context";

export const NewInvoiceForm = () => {
  const {
    openForm,
    setOpenForm,
    AddNewInvoice,
    paymentDue,
    setPaymentDue,
    description,
    setDescription,
    paymentTerms,
    setPaymentTerms,
    clientsName,
    setClientsName,
    clientsEmail,
    setClientsEMail,
    senderStreet,
    setSenderStreet,
    senderCity,
    setSenderCity,
    senderState,
    setSenderState,
    senderZipcode,
    setSenderZipcode,
    clientStreet,
    setClientStreet,
    clientCity,
    setClientCity,
    clientState,
    setClientState,
    clientZipcode,
    setClientZipcode,
    total,
    setTotal,
  } = useContext(FromContext);

  return (
      <form className="form-container" onSubmit={(e) => { e.preventDefault(); AddNewInvoice()}}>
      <h3 className="form-container__title">New Invoice</h3>
      <div className="form-container__new-form-container">
        <div className="form-container__new-form-container--bill-from-form">
          <h3>Bill from</h3>
          <label className="form-container__new-form-container--bill-from-form__address">
            {" "}
            Street Address
            <input
              className="form-container__new-form-container--bill-from-form__address--input"
              placeholder="Address"
              value={senderStreet}
              onChange={(e) => setSenderStreet(e.target.value)}
            />
          </label>

          <div className="form-container__new-form-container--bill-from-form__address-two">
            <label className="form-container__new-form-container--bill-from-form__address-two--inputs">
              City
              <input
                placeholder="City"
                className="form-container__new-form-container--bill-from-form__address-two--inputs__input"
                value={senderCity}
                onChange={(e) => setSenderCity(e.target.value)}
              />
            </label>
            <label className="form-container__new-form-container--bill-from-form__address-two--inputs">
              State
              <input
                placeholder="State"
                className="form-container__new-form-container--bill-from-form__address-two--inputs__input"
                value={senderState}
                onChange={(e) => setSenderState(e.target.value)}
              />
            </label>
            <label className="form-container__new-form-container--bill-from-form__address-two--inputs">
              Zip Code
              <input
                placeholder="Zipcode"
                className="form-container__new-form-container--bill-from-form__address-two--inputs__input"
                value={senderZipcode}
                onChange={(e) => setSenderZipcode(e.target.value)}
              />
            </label>
          </div>
        </div>

        <div className="form-container__new-form-container--bill-to">
          <h3>Bill To</h3>
          <label className="form-container__new-form-container--bill-to--inputs">
            Client's Name
            <input
              placeholder="Client's Name"
              className="form-container__new-form-container--bill-to--inputs__input"
              value={clientsName}
              onChange={(e) => setClientsName(e.target.value)}
            />
          </label>
          <label className="form-container__new-form-container--bill-to--inputs">
            Client's Email
            <input
              placeholder="Client's Email"
              className="form-container__new-form-container--bill-to--inputs__input"
              value={clientsEmail}
              onChange={(e) => setClientsEMail(e.target.value)}
            />
          </label>

          <label className="form-container__new-form-container--bill-to--inputs">
            Street Address
            <input
              placeholder="Address "
              className="form-container__new-form-container--bill-to--inputs__input"
              value={clientStreet}
              onChange={(e) => setClientStreet(e.target.value)}
            />
          </label>

          <div className="form-container__new-form-container--bill-to--inputs-two-container">
            <label className="form-container__new-form-container--bill-to--inputs-two-container--inputs">
              City
              <input
                placeholder="City"
                className="form-container__new-form-container--bill-to--inputs-two-container--inputs__input"
                value={clientCity}
                onChange={(e) => setClientCity(e.target.value)}
              />
            </label>
            <label className="form-container__new-form-container--bill-to--inputs-two-container--inputs">
              State
              <input
                placeholder="State"
                className="form-container__new-form-container--bill-to--inputs-two-container--inputs__input"
                value={clientState}
                onChange={(e) => setClientState(e.target.value)}
              />
            </label>
            <label className="form-container__new-form-container--bill-to--inputs-two-container--inputs">
              Zipcode
              <input
                placeholder=" clients Zipcode"
                className="form-container__new-form-container--bill-to--inputs-two-container--inputs__input"
                value={clientZipcode}
                onChange={(e) => setClientZipcode(e.target.value)}
              />
            </label>
          </div>
        </div>

        <div className="form-container__new-form-container--services">
          <div className="form-container__new-form-container--services__date-and-payment">
            <label className="form-container__new-form-container--services__date-and-payment--date">
              {" "}
              Invoice Date
              <input
                className="form-container__new-form-container--services__date-and-payment--date__input"
                type="date"
                value={paymentDue}
                onChange={(e) => setPaymentDue(e.target.value)}
              />
            </label>
            <label className="form-container__new-form-container--services__date-and-payment--payments">
              {" "}
              Payment Terms
              <select
                onChange={(e) => setPaymentTerms(e.target.value)}
                value={paymentTerms}
                className="form-container__new-form-container--services__date-and-payment--payments__input"
              >
                <option>Net 30 days</option>
              </select>
            </label>
          </div>

          <div className="form-container__new-form-container--services__project-desc">
            <label className="form-container__new-form-container--services__project-desc--name">
              Project Description
              <input
                placeholder="Project description"
                className="form-container__new-form-container--services__project-desc--name__input"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
          </div>
        </div>
        <div></div>
      </div>
      <button
        onClick={() => setOpenForm(false)}
        className="form-container__btn"
      >
        Close
          </button>
          <button type="submit" >New invoice</button>
    </form>
  );
};
