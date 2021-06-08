commentFormSubmit = (event) => {
  event.preventDefault();
  const id = document.querySelector("#id").value;
  const body = document.querySelector("#comment-body").value.trim();
};
