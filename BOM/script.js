let container = document.querySelectorAll(".container");
let form = document.querySelector(".form");
let input = document.querySelector(".input");
let add = document.querySelector(".add");
let tasks = document.querySelector(".tasks");

window.onload = function() {
    input.focus();
};

input.addEventListener("blur", function() {
    add.onclick = function () {
        if (input.value) {
            window.localStorage.setItem('tasks', `${input.value}`);

            let div = document.createElement("div");
            let inp = document.createElement("input");
            let btn = document.createElement("input");

            div.className = "main";
            inp.className = "copy";
            btn.className = "remove";
            inp.type = "text";
            btn.type = "submit";
            btn.value = "Delete";
            
            
            div.style.cssText = "margin-bottom: 10px";
            inp.style.cssText = "width: 250px;padding: 10px;border-radius: 6px;border:none ";
            btn.style.cssText = "cursor: pointer;margin-left: -50px;padding: 6px;border: none;color: white;background-color: red;border-radius: 6px;width: 50px;font-weight: bold;";
            div.appendChild(inp);
            div.appendChild(btn);
            tasks.appendChild(div);
            inp.value = `${input.value}`;

            input.value = "";
            btn.onclick = function() {
                div.remove();   
            }
        }
    };
});