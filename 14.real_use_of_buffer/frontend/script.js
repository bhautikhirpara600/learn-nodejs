fetch("http://localhost:3000/", {
  method: "POST",
  body: "Hello Bhautik",
})
  .then((res) => res.text())
  .then((data) => {
    console.log(data);
  });
