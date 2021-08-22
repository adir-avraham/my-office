const form = document.getElementById("my-form");
      
async function handleSubmit(event) {
  event.preventDefault();
  const status = document.getElementById("my-form-status");
  const data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    status.innerHTML = "תודה על פנייתכם!";
    form.reset()
  }).catch(error => {
    status.innerHTML = "קיימת שגיאה במשלוח ההודעה. אנא נסה לפנות אלינו בדרכים חלופיות."
  });
}
form.addEventListener("submit", handleSubmit)