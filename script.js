let cb = () => console.log("window.onload is worked!");

function WindowLoad(cb) {
  document.addEventListener("DOMContentLoaded", () => {
    cb();
  });
}

WindowLoad(cb);
//функция в начале кода
