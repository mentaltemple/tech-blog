newPostFormSubmit = async (event) => {
  event.preventDefault();
  const title = document.querySelector("#new-post-title").value;
  const body = document.querySelector("#new-post-body").value.trim();

  const response = await fetch("/api/post", {
    method: "POST",
    body: JSON.stringify({ title, body }),
    headers: { "Content-Type": "application/json" },
  });
  console.log(response);
  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
};

document
  .querySelector("#new-post-form")
  .addEventListener("submit", newPostFormSubmit);
