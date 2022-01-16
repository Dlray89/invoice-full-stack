import "./App.css";

import { InvoiceProvidee } from "./context/invoiceProvider";
// import { SplitScreen } from "./layout/SplitScreen";
// import { RightSideComponent } from "./layout/RightComponent";
// import { LeftSideComponent } from "./layout/LeftComponent";
import { Router } from "./router";
import { FormProvider } from "./context/form-context/Form-Provider";
import { FilterProvider } from "./context/filter-btn/FilterProvider";

function App() {
  return (
    <>
      {" "}
      <InvoiceProvidee>
        <FilterProvider>
          <FormProvider>
            <Router />
          </FormProvider>
        </FilterProvider>
      </InvoiceProvidee>
    </>
  );
}

export default App;
