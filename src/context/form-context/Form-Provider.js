import axios from "axios";
import React, { useContext, useState } from "react";
import { InvoiceContext } from "../invoiceContext";
import { FromContext } from "./Form-Context";

export const FormProvider = ({ children }) => {
  const { setInvoicesList } = useContext(InvoiceContext);
  const [openForm, setOpenForm] = useState(false);
  const [paymentDue, setPaymentDue] = useState("");
  const [description, setDescription] = useState("");
  const [paymentTerms, setPaymentTerms] = useState("");
  const [clientName, setClientsName] = useState("");
  const [clientEmail, setClientsEMail] = useState("");
  const [senderStreet, setSenderStreet] = useState("");
  const [senderCity, setSenderCity] = useState("");
  const [senderState, setSenderState] = useState("");
  const [senderZipcode, setSenderZipcode] = useState("");
  const [clientStreet, setClientStreet] = useState("");
  const [clientCity, setClientCity] = useState("");
  const [clientState, setClientState] = useState("");
  const [clientZipcode, setClientZipcode] = useState("");
  const [total, setTotal] = useState("");
  const [streetErr, ] = useState("");

  const addNewForm = (e) => {
    axios
      .post("http://localhost:8080/api/invoices", {
        clientName,
        paymentDue,
        description,
        paymentTerms,
        clientEmail,
        senderStreet,
        senderCity,
        senderState,
        senderZipcode,
        clientStreet,
        clientCity,
        clientState,
        clientZipcode,
        total,
        setTotal,
      })
      .then((res) => {
        console.log(res);
        setInvoicesList(res.data.invoices)
        setOpenForm(false)
        window.location.reload()
      }).catch(err => {
        console.log(err)
      })
  };



  return (
    <FromContext.Provider
      value={{
        addNewForm,
        streetErr,
        openForm,
        setOpenForm,
        paymentDue,
        setPaymentDue,
        description,
        setDescription,
        paymentTerms,
        setPaymentTerms,
        clientName,
        setClientsName,
        clientEmail,
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
      }}
    >
      {children}
    </FromContext.Provider>
  );
};
