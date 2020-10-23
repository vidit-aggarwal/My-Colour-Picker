import React from "react";
import ToastComponent from "../ToastContent/ToastComponent";
import { toast } from "react-toastify";

const notification = (data, error = "") => {
  if (data && data.trim().length > 0) {
    toast.info(<ToastComponent text={data}></ToastComponent>);
  } else {
    var errorMsg = "Unable to copy data";
    if (error && error.trim().length > 0) errorMsg += ", due to error";
    toast.error(errorMsg);
  }
};

export default notification;
