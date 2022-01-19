import "./App.css";

import { InvoiceProvidee } from "./context/invoiceProvider";
import { SplitScreen } from "./layout/SplitScreen";
import { RightSideComponent } from "./layout/RightComponent";
import { LeftSideComponent } from "./layout/LeftComponent";
import { useContext } from "react";
import { FromContext } from "./context/form-context/Form-Context";
import { Alert, Snackbar } from "@mui/material";

function Home() {
  const {  newInvoiceLoading } = useContext(FromContext)
  return (
    <InvoiceProvidee>
      {newInvoiceLoading ? <Snackbar><Alert security="success">nvoice Created</Alert></Snackbar>: null}
      <SplitScreen>
        <RightSideComponent />
        <LeftSideComponent />
      </SplitScreen>
    </InvoiceProvidee>
  );
}

export default Home;
