commentFormSubmit = async (event) => {
  event.preventDefault();
  const postId = document.querySelector("#id").value;
  const body = document.querySelector("#comment-body").value.trim();

  const response = await fetch("/api/comment", {
    method: "POST",
    body: JSON.stringify({ postId, body }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
};

document
  .querySelector("#newComment")
  .addEventListener("submit", commentFormSubmit);
