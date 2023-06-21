console.log("Hello world]");

const changeColor = () => {
  const div = document.getElementById("div1");
  if (div.style.backgroundColor === "red") {
    div.style.backgroundColor = "blue";
  } else {
    div.style.backgroundColor = "red";
  }
};
