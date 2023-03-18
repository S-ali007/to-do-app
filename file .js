const item = document.querySelector("#item");
const toDOBox = document.querySelector("#to-do-box");


item.addEventListener(
    "keyup",
    function (event) {
        if (event.key == "Enter") {
            addToDo(this.value);
            console.log(event);
            this.value = " ";
        }
        // else if (event.key == '     '){
        //     document.getElementById('error').innerHTML="Please enter value";
        //     addToDo(this.value);
        //     this.value = "please enter something  ";
        // }
        // else   {
        //     document.getElementById('error').innerHTML="Please enter value";
        // }
    }
)

const addToDo = (item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
    ${item}   
      <i class="fa-regular fa-circle-xmark"></i>
      <button id="edit" style="width: 20px;  ">
      <img src="./assests/pen-to-square-solid.svg" alt="">
    </button>
    <button id="update" style="width: 20px ;">
      <img src="./assests/pen-solid.svg" alt="">
    `;

    listItem.addEventListener(
            "click" , function(){
            this.classList.toggle ("done");
        }
        )

        listItem.querySelector("i").addEventListener("click", function(){
            listItem.remove()
    }  
      )
        

    toDOBox.appendChild(listItem);

    // console.log(listItem);
}