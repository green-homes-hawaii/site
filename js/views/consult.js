(function() {
  const form = document.getElementById("form");
  form.addEventListener("submit", handleForm);
})();

// email form for consulting handling
function handleForm(e) {
  e.preventDefault();

  const form = this;

  // Prepare data to send
  let data = {};
  const formElements = Array.from(form);

  formElements.map(function(input) {
    data[input.name] = input.value;
  });

  data = removeEmpties(data);

  // Log what our lambda function will receive
  console.log(JSON.stringify(data));

  // Construct an HTTP request
  var xhr = new XMLHttpRequest();
  xhr.open(form.method, form.action, true);
  xhr.setRequestHeader("Accept", "application/json; charset=utf-8");
  xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

  // Send the collected data as JSON
  xhr.send(JSON.stringify(data));

  const formResponse = document.getElementById("js-form-response");

  // Callback function
  xhr.onloadend = function(response) {
    if (response.target.status === 200) {
      // The form submission was successful
      form.reset();

      formResponse.innerHTML =
        "Thanks for the message. I’ll be in touch shortly.";

      closeConsulting();
      formResponse.style = "display: none";
    } else {
      // The form submission failed
      formResponse.innerHTML =
        "We are currently trying to fix our servers, thank you for your patience!";
      console.error(JSON.parse(response.target.response).message);
    }
  };
}
