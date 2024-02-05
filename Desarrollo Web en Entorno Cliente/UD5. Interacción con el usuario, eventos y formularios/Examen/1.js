document.addEventListener("keydown", (k) => {
  switch (k.code) {
    case "KeyA":
      document.body.style.backgroundColor = "yellow";
      break;
    case "KeyR":
      document.body.style.backgroundColor = "red";
      break;
    case "KeyN":
      document.body.style.backgroundColor = "black";
      break;
    case "KeyV":
      document.body.style.backgroundColor = "green";
      break;
  }
});

document.addEventListener("mousemove", () => {
  document.body.style.backgroundColor = "#FFFFFF";
});
