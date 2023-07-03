document.addEventListener("DOMContentLoaded", initialize);

function initialize() {
  console.log("we are in");
  getData();
}

function getData() {
  let form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault(), console.log("i was clicked");
    let inputUser = e.target[0].value;

    fetchData(inputUser);
  });
}

function fetchData(input) {
  fetch(`https://api.github.com/search/users?q=${input}`)
    .then((response) => response.json())
    .then((data) => displayData(data));
}
function displayData(userInfo) {
//   console.log(typeof userInfo);
  let userNames = document.getElementById("user-list");
  let data=userInfo.items[0].login
  userNames.innerText =data;

  userNames.addEventListener("click",(e)=>{
      e.preventDefault();
      fetch(`https://api.github.com/users/${data}/repos`)
      .then(response=>response.json())
      .then(data=>data.forEach(element=>element.name))
      .catch(console.error())

  })
}
function displayRepos(reposData){

    let repos_list=document.querySelector("repos-list");
    repos_list.innerText =reposData.name;
}