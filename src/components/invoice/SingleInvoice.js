import axios from "axios";
import {  useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleInvoice({ clientName }) {
  const [singleInvoice, setSingleInvoice] = useState({})
  // const singleInvoice = invoicesList.find((item) => item.id === id)
  const { id } = useParams()



  useEffect(() => {
    axios
    .get(`http://localhost:8080/api/invoices/${id}`)
    .then((res) => {
      const SingleInvoice = res.data;
      console.log(SingleInvoice, 'single');
      setSingleInvoice(SingleInvoice)
    })
    .catch((err) => {
      console.log(`${err}: error has occured`);
    });
  }, [id]);

  return (
    <div>
      {console.log( singleInvoice)}
    {singleInvoice.clientName}
    </div>
  );
}

export default SingleInvoice;
