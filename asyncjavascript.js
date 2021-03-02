console.log("Hello")

// Fetch a random cat fact
/* let url = "https://cat-fact.herokuapp.com/facts/random"

//
function getData(url){
    fetch(url, {
        method: "GET",
        headers: {
            "Accept": "application/json",
        }
        })
        .then(resp => resp.json())
        .then(resp => console.log(resp))
        .catch(error => console.log(error));
    return data;
}

// getData(url);*/

//To Find: How to create a Promise with find Fetch


// Await and Fetch
const data = async () => {

    let result = await fetch('https://cat-fact.herokuapp.com/facts/random', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        }
    })
    
    let name = await result.json();
   // console.log( name)
    return name;
}
 // data();

  let button = document.querySelector("#button");
  button.addEventListener("click", awaitCatData ) ;

 async function awaitCatData()
 {
    let mydata = await data();

   // console.log("Cat Data: ", data1["text"]);
    let theCat = document.querySelector("#cat");
    theCat.innerHTML =  mydata["text"] ;
    
 }