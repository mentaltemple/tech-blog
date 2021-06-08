commentFormSubmit = async (event) => {
  event.preventDefault();
  const id = document.querySelector("#id").value;
  const body = document.querySelector("#comment-body").value.trim();

  const response = await fetch("/api/comment", {
    method: "POST",
    body: JSON.stringify({ id, body }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
};

document
  .querySelector("newComment")
  .addEventListener("submit", commentFormSubmit);
