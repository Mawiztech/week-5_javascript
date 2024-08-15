// 1.  Even or Odd Function

function EvenorOdd(number){
    if(number % 2 == 0){
        console.log("Even") 
    } else{
        console.log("odd")

    }
}
EvenorOdd(7)



//2.  Add Item to List


function addItem() {
    
    const list = document.getElementById('itemList');
    
    const newItem = document.createElement('li');
    
    newItem.textContent = `cart ${list.children.length + 1}`;
    
    list.appendChild(newItem);
}




 
// 3.  Change Background Color Based on Response


function ChangeBackground(a = failed, b = successful){
   const msg = document.getElementById("demo");
   if (a === "failed") {
    msg.style.backgroundColor = "red"
    
   } else if (b === "successful") {
    msg.style.backgroundColor = "green"
   }else{
    console.log("invalid")
   };

}


ChangeBackground(failed)


























//4.  Fetch and Display Data

const ct = document.querySelector("#lamp")


const makeRequest = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(res => {

        console.log(res)


        res.forEach((item, index) => {
            ct.innerHTML += `

                <div>
                    <h3>${item.id}</h3>
                    <h4>${item.name}</h4>
                    <p>${item.username}</p>
                    <hr>
                </div>
            `
        });
    })

   
}
makeRequest()



 /*5 Solve and Arithmetic Problem Using a Formula
Write a function that accepts variables to solve an arithmetic problem using any formula of your choice. You can choose a formula like the area of a circle, 
the Pythagorean theorem, or any other mathematical formula.*/

function AreaOfcircle(radius = 4){
    const pi = 3.142
    result = pi * radius**2
    console.log(result)
}
AreaOfcircle()















