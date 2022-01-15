import { useContext } from "react";
import { useParams } from "react-router-dom";
import { InvoiceContext } from "../../context/invoiceContext";



function SingleInvoice({ clientName }) {
  const { invoicesList } = useContext(InvoiceContext)
const {id} = useParams()
const singleInvoice = invoicesList.find((item) => item.id === id)

  return (
    <div>
      {singleInvoice.clientName}{ singleInvoice.clientEmail}
   </div>
  );
}

export default SingleInvoice;
