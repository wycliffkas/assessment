import { toast } from "react-toastify";
export const notify = (status) =>
  status === "success"
    ? toast.success("User has been successfully")
    : toast.error("Error saving user");
