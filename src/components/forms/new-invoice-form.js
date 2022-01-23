import React, { useContext, useState } from "react";
import { Alert } from "@mui/material";
import { FromContext } from "../../context/form-context/Form-Context";
import { AddItemForm } from "./add-item-form";

export const NewInvoiceForm = () => {
  const {
    addNewForm,
    setOpenForm,
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

    newInvoiceErr,
    errorFormText,
    newItem,
    itemTwoQty,
    setItemTwoQty,
    itemTwo,
    setItemTwo
  } = useContext(FromContext);

  const [addInput, ] = useState(false);


  const pushInput = () => {
    const newinput = document.createElement("input");
    newinput.className = "form-container__itemsList--input-boxes__itemInput";
    newinput.setAttribute("text", "text");
    newinput.value = itemTwo;
    newinput.addEventListener("change", (e) => setItemTwo(e.target.value))
    newinput.placeholder = "Add Item";

    const newQTYInput = document.createElement("input");
    newQTYInput.className =
      "form-container__itemsList--input-boxes__itemNAme--input";
    newQTYInput.setAttribute("text", "text");
    newQTYInput.value = itemTwoQty;
    newQTYInput.addEventListener('change', (e) => setItemTwoQty(e.target.value))
    newQTYInput.placeholder = "QTY";

    const parent = document.getElementById("#input");
    const parentQTY = document.getElementById("#inputQTY");
    parent.appendChild(newinput);
    parentQTY.appendChild(newQTYInput);
  };

  return (
    <form
      className="form-container"
      onSubmit={(e) => {
        e.preventDefault();
        addNewForm();
        newItem();
      }}
    >
      <h3 className="form-container__title">New Invoice</h3>
      <div className="form-container__new-form-container">
        <div className="form-container__new-form-container--bill-from-form">
          <h3 className="form-container__new-form-container--bill-from-form__title">
            Bill from
          </h3>
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
          <h3 className="form-container__new-form-container--bill-to__title">
            Bill To
          </h3>
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
          {newInvoiceErr ? (
            <Alert severity="error">{errorFormText}</Alert>
          ) : null}

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
                required
                pattern="\d{4}-\d{2}-\d{2}"
                onChange={(e) => setPaymentDue(e.target.value)}
              />
            </label>
            <label className="form-container__new-form-container--services__date-and-payment--payments">
              {" "}
              Payment Terms
              <input
                placeholder="How many month?"
                type="number"
                onChange={(e) => setPaymentTerms(e.target.value)}
                value={paymentTerms}
                className="form-container__new-form-container--services__date-and-payment--payments__input"
              />
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

        <div className="form-container__itemsList">
          <h4 className="form-container__itemsList--title">Services List </h4>
          <AddItemForm />
        </div>
        <div id="#input"></div>
        {addInput}
        {addInput ? <AddItemForm /> : null}
        <button onClick={() => pushInput()}>+ Add Item</button>
      </div>

      <div className="form-container__btn-container">
        {" "}
        <button
          onClick={() => setOpenForm(false)}
          className="form-container__btn-container--discard-btn"
        >
          Discard
        </button>
        <div className="form-container__btn-container--sendbtns">
          <button
            className="form-container__btn-container--sendbtns__draft"
            type="submit"
          >
            Draft
          </button>
          <button
            className="form-container__btn-container--sendbtns__saveandsendbtn"
            type="submit"
          >
            Save & Send
          </button>
        </div>
      </div>
    </form>
  );
};
