// Notifications

import { Notyf } from "notyf";

const Notify = (props) => {
  const notification = new Notyf({
    duration: 4000,
    ripple: false,
    position: { x: "left", y: "top" },
  });
  if (props.success === true) {
    notification.success(props.message);
  } else {
    const message = getErrorMessage(props.err);
    notification.error(message);
  }

  function getErrorMessage(err) {
    // Frontend exception throwing a string, e.g: throw "...":
    if (typeof err === "string") {
      return err;
    }

    // Axios receives a string error, e.g: 401, 403, 404, 500:
    if (typeof err.response?.data === "string") {
      return err.response.data;
    }

    // Axios receives an array of errors, e.g: 400:
    if (Array.isArray(err.response?.data)) {
      return err.response.data[0];
      // let allErrors = "";
      // for (const item of err.response.data) {
      //     allErrors += item + "\n";
      // }
      // return allErrors;
    }

    // Frontend exception throwing one of the Error types, e.g: throw new Error("..."), throw new RangeError("...") etc.
    // Note: must be last cause previous one also can also contain a message:
    if (typeof err.message === "string") {
      return err.message;
    }

    // Any other error format:
    return "Some error occurred, please try again.";
  }
};

export default Notify;
