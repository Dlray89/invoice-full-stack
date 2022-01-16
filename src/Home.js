import "./App.css";

import { InvoiceProvidee } from "./context/invoiceProvider";
import { SplitScreen } from "./layout/SplitScreen";
import { RightSideComponent } from "./layout/RightComponent";
import { LeftSideComponent } from "./layout/LeftComponent";

function Home() {
  return (
    <InvoiceProvidee>
      <SplitScreen>
        <RightSideComponent />
        <LeftSideComponent />
      </SplitScreen>
    </InvoiceProvidee>
  );
}

export default Home;
