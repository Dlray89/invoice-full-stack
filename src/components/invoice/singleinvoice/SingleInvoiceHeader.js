import { useContext, useState } from "react";
import { InvoiceContext } from "../../../context/invoiceContext";
import { EditForm } from "../../forms/edit-form";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";

export const SingleInvoiceHeader = ({
  name,
  status,
  id,
  openEditForm,
  setOpenEditForm,
}) => {
  const { invoicesList, toggleStatus, UntoggleStatus, DeleteInvoice } =
    useContext(InvoiceContext);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  
  return (
    <>
      <div className="single-invoice-container__header">
        {console.log(invoicesList)}

        <div className="single-invoice-container__header--title-box">
          <p>
            Status:{" "}
            <span
              className={
                status
                  ? "single-invoice-container__header--title-box__status-green"
                  : "single-invoice-container__header--title-box__status-orange"
              }
            >
              {" "}
              {status ? "Paid" : "Pending"}
            </span>
          </p>
        </div>

        <div className="single-invoice-container__header--btns-container">
          <button
            onClick={() => setOpenEditForm(true)}
            className="single-invoice-container__header--btns-container__edit"
          >
            Edit
          </button>
          <button
            onClick={() => {
              setOpenDeleteModal(true);
            }}
            className="single-invoice-container__header--btns-container__delete"
          >
            Delete
          </button>
          <button
            onClick={() => {
              status ? UntoggleStatus(id) : toggleStatus(id);
            }}
            className="single-invoice-container__header--btns-container__markaspaid"
          >
            {status ? "Mark As Unpaid" : "Mark As Paid"}
          </button>
        </div>
      </div>
      <Dialog open={openDeleteModal} onClose={() => setOpenDeleteModal(false)}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <p className="dialog-content">
            {" "}
            Are you sure you want to delete invoice #{id}? This action can't be
            undone!
          </p>
          <div className="btn-container">
            {" "}
            <button
              className="btn-container--cancel"
              onClick={() => setOpenDeleteModal(false)}
            >
              Cancel
            </button>
            <button
              className="btn-container--delete"
              onClick={() => DeleteInvoice(id)}
            >
              Delete
            </button>
          </div>
        </DialogContent>
      </Dialog>

      {openEditForm ? <EditForm id={id} name={name} /> : null}
    </>
  );
};
