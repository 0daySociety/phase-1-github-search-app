document.addEventListener("DOMContentLoaded",initialize)

function initialize(){
    console.log("we are in")
    getData()
}

function getData(){

   let form =document.querySelector("form");
   form.addEventListener("submit",(e)=>{
    e.preventDefault(),
    console.log("i was clicked")
    let inputUser =e.target[0].value;

   fetchData(inputUser);


   }) 



}


function fetchData(input){



    fetch(`https://api.github.com/search/users?q=${input}`)
    .then(response=>response.json())
    .then(data=>displayData(data))
    

}
function displayData(userInfo){

       
    console.log(typeof(userInfo))
    let userNames =document.getElementById("user-list");
    userNames.innerText=userInfo.items[0].id
  let myImages =document.createElement("img")
   myImages.src=userInfo.items[0].avatar_url;
   userNames.appendChild(myImages);

    
}