import Swal from "sweetalert2";


export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const errorPopup = (err) => {
  if (!err.response) {
    err.response = {};
    err.response.status = `Нет соединения`;
    err.response.data = {};
    err.response.data.error = `Проверьте соедение с интернетом`;
  }

  return Swal.fire({
    icon: `error`,
    title: `Oops... ${err.response.status}`,
    text: err.response.data.error,
  });
};

