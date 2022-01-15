import React, { useContext, useEffect, useState } from "react";
import { InvoiceContext } from "../invoiceContext";
import { FromContext } from "./Form-Context";

export const FormProvider = ({ children }) => {
  const { invoicesList, setInvoicesList } = useContext(InvoiceContext);
  const [openForm, setOpenForm] = useState(false);
  const [paymentDue, setPaymentDue] = useState("");
  const [description, setDescription] = useState("");
  const [paymentTerms, setPaymentTerms] = useState("");
  const [clientsName, setClientsName] = useState("");
  const [clientsEmail, setClientsEMail] = useState("");
  const [senderStreet, setSenderStreet] = useState("");
  const [senderCity, setSenderCity] = useState("");
  const [senderState, setSenderState] = useState("");
  const [senderZipcode, setSenderZipcode] = useState("");
  const [clientStreet, setClientStreet] = useState("");
  const [clientCity, setClientCity] = useState("");
  const [clientState, setClientState] = useState("");
  const [clientZipcode, setClientZipcode] = useState("");
  const [total, setTotal] = useState("");

  const AddNewInvoice = () => {
    const newArr = [...invoicesList]
    const newInvoice = {
      id: Date.now(),
      createdAt: new Date(),
      paymentDue: paymentDue,
      description: description,
      paymentTerms: paymentTerms,
      clientsName: clientsName,
      clientsEmail: clientsEmail,
      status: "Pending",
      sendersAddress: {
        street: senderStreet,
        city: senderCity,
        state: senderState,
        zipcode: senderZipcode,
      },
      clientAddress: {
        street: clientStreet,
        city: clientCity,
        state: clientState,
        zipcode: clientZipcode,
      },
      items: [],
      total: 0,
    };
    setInvoicesList(invoicesList.concat(newInvoice))
    console.log(invoicesList, 'newArr');
    // console.log(invoicesList, invoicesList.concat(newInvoice), 'new arr')
    // setInvoicesList(newArr.push(newInvoice));
    setSenderStreet("");
    setSenderCity("");
    setSenderState("");
    setSenderZipcode("");
    setClientStreet("");
    setClientCity("");
    setClientState("");
    setClientZipcode("");
    setClientsName("");
    setClientsEMail("");
    setPaymentDue("");
    setPaymentTerms("");
    setDescription("");
    setOpenForm(false);
   
  };

  useEffect(() => {
      AddNewInvoice()
  }, [])

  return (
    <FromContext.Provider
      value={{
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
      }}
    >
      {children}
    </FromContext.Provider>
  );
};
