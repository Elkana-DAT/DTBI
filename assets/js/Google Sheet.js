const scriptURL = 'https://script.google.com/macros/s/AKfycbyGApMko2cm6NJroRIIhcmnrEwtLe2O4FeqYhcE6WXUo3UpqM9cLX25GOUJ46yL-GqGcw/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Your form has been submitted successfully."))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
