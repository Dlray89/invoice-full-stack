import React, { useEffect, useState } from "react";
import { InvoiceContext } from "./invoiceContext";
import { invoices } from "../data";
import { useParams } from "react-router-dom";
import axios from "axios";




export const InvoiceProvidee = ({children}) => {
const [invoicesList, setInvoicesList] = useState([])
useEffect(() => {
    (async () => {
      const response = await axios.get('http://localhost:8080/invoices')
      setInvoicesList(response.data)
      console.log(response.data,'data')
   })()
  }, [])

    return (
        <InvoiceContext.Provider value={{  invoicesList, setInvoicesList}} >
            {children}
        </InvoiceContext.Provider>
    )
}