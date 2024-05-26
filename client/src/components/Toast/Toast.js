import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Add Book
export function bookAdded() {
  toast.success("Book added successfully", {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "dark",
  });
}

//updated- lend
export function updated() {
  toast.success("Updated successfully", {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "dark",
  });
}

//username and password wrong
export function authFailed() {
  toast.warn("Check your username and password", {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "dark",
  });
}

//book returned
export function returned() {
  toast.success("Book returned successfully", {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "dark",
  });
}