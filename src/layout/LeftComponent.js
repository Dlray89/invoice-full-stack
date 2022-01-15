import { InvoiceListItems } from "../components/invoice/invoice";
import { InvoiceHeader } from "../components/invoice/invoiceHeader";

export const LeftSideComponent = () => {
  return (
    <div>
      <InvoiceHeader />
      <InvoiceListItems />
    </div>
    );
  };
  