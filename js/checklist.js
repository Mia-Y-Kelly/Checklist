let idNum = 0;

let box = document.getElementById("input");

box.addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
        document.getElementById("add-item").click();
    }
});

function createItem() {
    // Create unique id for element
    let num = "item" + idNum;

    // Create element
    let list = document.createElement("li");

    // Create attributes for element
    list.setAttribute("id", idNum);
    list.setAttribute("class", "todo");
    list.appendChild(document.createTextNode(document.getElementById("input").value));

    document.getElementById("all-todos").appendChild(list);

    // Create event for element
    list.onclick = function () {
        console.log("clicked on " + list.id);
        if (list.className == "todo") {
            list.setAttribute("class", "completed");
            document.getElementById("all-completed").appendChild(list);
        } else {
            list.setAttribute("class", "todo");
            document.getElementById("all-todos").appendChild(list);
        }

    };
    idNum += 1;
}

// toggleDelete() {

// }



