import { Alert } from "@mui/material";
import React, { useContext  } from "react";
import { FromContext } from "../../context/form-context/Form-Context";

export const AddItemForm = () => {
  const {
    qty,
    setQty,
    price,
    setPrice,
    itemName,
    newItem,
    setItemName,
    total,
    setTotal,
  } = useContext(FromContext);

  return (
    <>
      {" "}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          newItem();
        }}
        className="form-container__itemsList--input-boxes"
      >
        <label
          style={{ textAlign: "left" }}
          className="form-container__itemsList--input-boxes__itemNAme"
        >
          Service Name{" "}
          <input
            className="form-container__itemsList--input-boxes__itemInput"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            placeholder="Add Item"
          />
          <div id="#input"></div>
        </label>

        <label className="form-container__itemsList--input-boxes__itemNAme">
          Qty.{" "}
          <input
            className="form-container__itemsList--input-boxes__itemNAme--input"
            placeholder="QTY"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
          />{" "}
          <div id="#inputQTY"></div>
        </label>

        <label className="form-container__itemsList--input-boxes__itemNAme">
          Price
          <input
            className="form-container__itemsList--input-boxes__itemNAme--input"
            placeholder="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>

        <label className="form-container__itemsList--input-boxes__itemNAme">
          Total
          <input
            className="form-container__itemsList--input-boxes__itemNAme--input"
            placeholder={Number(qty) * Number(price)}
            value={total}
            onChange={(e) => setTotal(e.target.value)}
          />
          {/* {total.length < 0 ? "sdqwx": "wefdewr"} */}
        </label>
      </form>
      {total.length < 1 ? <Alert style={{width:'100%', }} severity="error" >You must type reflected Total!</Alert> : null}

    </>
  );
};
