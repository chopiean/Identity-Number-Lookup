function show() {
  var identityNumber = document.getElementById("identityNumber").value;
  var answerDiv = document.getElementById('answer');

  if (identityNumber.length !== 11) {
    answerDiv.innerHTML = "<p class='error'>Invalid identity number.</p>";
    return;
  }

  var genderChar = identityNumber.charAt(identityNumber.length - 2);
  var gender = parseInt(genderChar) % 2 === 0 ? "Female" : "Male";
  var day = identityNumber.substring(0, 2);
  var month = identityNumber.substring(2, 4);
  var year = identityNumber.substring(4, 6);
  var separator = identityNumber.charAt(6);

  if (separator === "+") {
    year = "18" + year;
  } else if (separator === "-") {
    year = "19" + year;
  } else if (separator === "A") {
    year = "20" + year;
  } else {
    answerDiv.innerHTML = "<p class='error'>Invalid separator character in the identity number.</p>";
    return;
  }

  var birthDate = day + "." + month + "." + year;
  var result = "<p>" + gender + ", born " + birthDate + "</p>";
  answerDiv.innerHTML = result;
}
