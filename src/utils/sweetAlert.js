import sweetAlert from "sweetalert";

export const Alert = (handler, type) => {
    sweetAlert({
      title: "Are you sure?",
      text: `Once deleted, you will not be able to recover this ${type}!`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((isOk) => {
      if (isOk) {
        handler();
      }
    });
  };

  export const logoutAlert = (handler) => {
    sweetAlert({
      title: "Are you sure?",
      text: "",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((isOk) => {
      if (isOk) {
        handler();
      }
    });
  };