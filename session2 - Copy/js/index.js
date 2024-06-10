var userNameInput = document.getElementById("siteName");
var userUrlInput = document.getElementById("siteUrl");
// console.log(userNameInput,userUrlInput)
var infoContainer;

if (localStorage.getItem("info") == null) {
  infoContainer = [];
} else {
  infoContainer = JSON.parse(localStorage.getItem("info"));
  displayInfo();
}

function addInfo() {
  var info = {
    name: userNameInput.value,
    url: userUrlInput.value,
  };
  if (isVaild(info.name, info.url)) {
    infoContainer.push(info);
    clear();
    displayInfo();
    localStorage.setItem("info", JSON.stringify(infoContainer));
  }

  // console.log(infoContainer)
}
function clear() {
  userNameInput.value = "";
  userUrlInput.value = "";
}
function displayInfo() {
  var x = ``;

  for (var i = 0; i < infoContainer.length; i++) {
    x += ` <tr>
        <th class="py-2">${[i]}</th>
        <th class="py-2">${infoContainer[i].name}</th>
        <th class="py-2">  <a target="_blank" href="${
          infoContainer[i].url
        }">visit</a></th>
        <th class="py-2"><button onclick="deleteInfo(${i})" class="border-0 bg-white fw-bold">Delete</button> </th>
      </tr>`;
  }
  document.getElementById("tableData").innerHTML = x;
}

function deleteInfo(deletedIndex) {
  infoContainer.splice(deletedIndex, 1);
  // console.log(infoContainer);
  displayInfo();
  localStorage.setItem("info", JSON.stringify(infoContainer));
}

function isVaild(name, url) {
  if (name.length < 3) {
    alert("name is not valid!");
    return false;
  }
  var valid = /^(ftp|http|https):\/\/[^ "]+$/.test(url);
  if (!valid) {
    alert("url is not valid!");
    return false;
  }
  return true;
}
