function addDiv(email) {
  var containerElement = document.getElementById("email-container");

  var newElement = document.createElement("div");
  newElement.innerHTML = email;
  newElement.id = email;

  containerElement.appendChild(newElement);
}

function addEmail() {
  var newEmail = document.getElementById("newEmail").value;
  addDiv(newEmail);
}

function createInitialList() {
  var emailList = ["hollisjamison@gmail.com", "hollis@yahoo.com", "test@test.com"];

  for (var i = 0; i < emailList.length; i++) {
    var currentEmail = emailList[i];
    addDiv(currentEmail);
  }
}

createInitialList()
