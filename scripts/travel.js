function shortlisted(id) {
  // get element using Id of element
  var element = document.getElementById(id);

  //Check for class
  var flag = element.className.includes("text-danger"); // set flag true if text-danger is present in classList
  if (flag) {
    element.classList.remove("text-danger");
    element.classList.add("text-dark");
  } else {
    element.classList.remove("text-dark");
    element.classList.add("text-danger");
  }
}

function loadMore(id) {
  var element = document.getElementById(id);
}

contactUs = () => {
  let formData = document.getElementById("contactForm");
  let name = formData.full_name.value;
  let number = formData.user_number.value;
  let text = formData.user_query.value;
  let mailid = formData.user_email.value;

  document.getElementById("contactForm").innerHTML("We will contact you soon.");
};
