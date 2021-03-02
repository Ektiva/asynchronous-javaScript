console.log("Hello")

let url = "https://cat-fact.herokuapp.com/facts/random"


//Promise with Fetch
function getData(url){
    return fetch(url, {
        method: "GET",
        headers: {
            "Accept": "application/json",
        }
        })
        .then(resp => resp.json())
        .then(resp => displayData(resp))
        .catch(error => console.log(error));
}

function displayData(data){
    let dataText = data["text"];
    let label = document.createElement("p");
    label.textContent = "Cat facts:";
    label.style.fontHeight = "bold";
    let temp = document.createElement("p");
    temp.textContent  = dataText;

    document.body.append(label, temp);
}

getData(url);

// Await and Fetch
const data = async () => {

    let result = await fetch('https://cat-fact.herokuapp.com/facts/random', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        }
    })
    
   let name = await result.json();
   console.log( name)
    return name;
}

let button1 = document.querySelector("#button1");
button1.addEventListener("click", awaitCatData ) ;

 async function awaitCatData()
 {
    let mydata = await data();
    console.log("Cat Data: ", mydata["text"]);
    let theCat = document.querySelector("#cat1");
    theCat.innerHTML =  mydata["text"] ;
    
 }