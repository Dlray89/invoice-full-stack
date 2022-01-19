import axios from "axios";
import React, { useContext, useState } from "react";
import { InvoiceContext } from "../invoiceContext";
import { FromContext } from "./Form-Context";

export const FormProvider = ({ children }) => {
  const { setInvoicesList } = useContext(InvoiceContext);
  const [, setItems] = useState([]);
  const [openForm, setOpenForm] = useState(false);
  const [openEditForm, setOpenEditForm] = useState(false);
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
  const [itemName, setItemName] = useState("");
  const [qty, setQty] = useState("");
  const [price, setPrice] = useState("");
  const [invoice_id, setInvoice_id] = useState("");
  const [newInvoiceLoading, setNewInvoiceLoading] = useState(false);
  const [newInvoiceErr, setNewInvoiceErr] = useState(false);
  const [errorFormText, setErrorFormText] = useState("");
  const [total, setTotal] = useState('');
  const [streetErr] = useState("");

  const addNewForm = (e) => {
    axios
      .post("https://invoice-be22.herokuapp.com/api/invoices", {
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
        console.log(res.data, "res");
        setInvoicesList(res.data.invoices);

        axios
          .post("https://invoice-be22.herokuapp.com/api/items", {
            invoice_id: res.data.id,
            itemName,
            qty,
            price,
          })
          .then((res) => {
            console.log(res.data, invoice_id);
            setItems(res.data.item);
            setTotal(Number(qty) * Number(price));
          })
          .catch((err) => {
            console.log(err);
            setNewInvoiceErr(true);
          });
        setOpenForm(false);
        setTotal(Number(qty) * Number(price));
        setInvoice_id(res.data.id);
        window.location.reload();
        setNewInvoiceLoading(true);
      })
      .catch((err) => {
        console.log(err);
        setNewInvoiceErr(true);
        setErrorFormText("That Email Already Exists");

      });
  };

  const toggleEditInouts = (id) => {
    axios
      .put(`https://invoice-be22.herokuapp.com/api/invoices/${id}`, {
        paymentDue: paymentDue,
        description: description,
        paymentTerms: paymentTerms,
        clientName: clientName,
        clientEmail: clientEmail,
        senderStreet: senderStreet,
        senderCity: senderCity,
        senderState: senderState,
        senderZipcode: senderZipcode,
        clientStreet: clientStreet,
        clientCity: clientCity,
        clientState: clientState,
        clientZipcode: clientZipcode,
      })
      .then((res) => {
        setInvoicesList(res.data.change);
        console.log(res.data.change, "change");
        //   console.log(invoicesList)
        window.location.reload();
      })
      .catch((err) => {
        console.log(`${err}: 'error had occured`);
      });
  };

  return (
    <FromContext.Provider
      value={{
        newInvoiceLoading,
        toggleEditInouts,
        openEditForm,
        setOpenEditForm,
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
        price,
        setPrice,
        qty,
        setQty,
        itemName,
        setItemName,
        setTotal,
        invoice_id,
        newInvoiceErr,
        setNewInvoiceErr,
        errorFormText,
        setErrorFormText,
      }}
    >
      {children}
    </FromContext.Provider>
  );
};
