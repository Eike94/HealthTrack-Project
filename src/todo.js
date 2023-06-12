if (localStorage.getItem('token') == null) {
    alert('Voce Precisa estar logado para acessar essa página');
    window.location.href = 'Login.html';
}

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask()
{
    if(inputBox.value === '') 
    {
        alert("Adicione afazeres!");
    }
    else 
    {
        let li =document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e)
{
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        saveData()
    }
}, false);

function saveData()
{
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTodo()
{
    listContainer.innerHTML = localStorage.getItem("data");
}
showTodo();