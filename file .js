const item=document.querySelector("#item");
const toDOBox=document.querySelector("#to-do-box");


item.addEventListener(
    "keyup",
    function(event){
        if(event.key =="Enter"){
            addToDo(this.value);
            // console.log(this.value);
            this.value="";
        }
    }
)


const addToDo =(item) => {
    const listItem=document.createElement("li");
    listItem.innerHTML=`${item}`;

    toDOBox.appendChild(listItem);
}