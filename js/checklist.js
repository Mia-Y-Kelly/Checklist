let idNum = 0;
let removeOn = false;

let box = document.getElementById("input");

box.addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
        document.getElementById("add-item").click();
    }
});

function createSVG() {
    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    let path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    let path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");


    svg.setAttribute("width", "20");
    svg.setAttribute("height", "20");
    svg.setAttribute("fill", "currentColor");
    svg.setAttribute("class", "bi-x-lg");
    svg.setAttribute("viewBox", "0 0 16 16");
    svg.setAttribute("style", "border: 1px solid black; float: right; visibility: hidden;");

    path1.setAttribute("fill-rule", "evenodd");
    path1.setAttribute("d", "M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z");
    path2.setAttribute("fill-rule", "evenodd");
    path2.setAttribute("d", "M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z");

    svg.appendChild(path1);
    svg.appendChild(path2);

    return svg;
}

function toggleRemove() {
    // Change the state of the removed

    if (removeOn) {
        removeOn = false;
    } else {
        removeOn = true;
    }

    for (let i = 0; i < idNum; i++) {
        let svg = document.getElementById(String(i));
        if (svg != null && removeOn) {
            svg.setAttribute("style", "border: 1px solid black; float: right; visibility: visibile;");
        } else if (svg != null && !removeOn) {
            svg.setAttribute("style", "border: 1px solid black; float: right; visibility: hidden;");
        }
    }
}

function createItem() {
    // Create unique id for element
    let listID = "item" + idNum;

    // Create element
    let list = document.createElement("li");
    let removeIcon = createSVG();
    removeIcon.setAttribute("id", idNum);

    // Create attributes for element
    list.setAttribute("id", listID);
    list.setAttribute("class", "todo");
    list.appendChild(document.createTextNode(document.getElementById("input").value));
    list.appendChild(removeIcon);

    document.getElementById("all-todos").appendChild(list);

    // Create event for element
    list.onclick = function () {
        if (!removeOn) {
            if (list.className == "todo") {
                list.setAttribute("class", "completed");
                document.getElementById("all-completed").appendChild(list);
            } else {
                list.setAttribute("class", "todo");
                document.getElementById("all-todos").appendChild(list);
            }
        }
    };

    removeIcon.onclick = function () {
        svgID = removeIcon.id;
        item = document.getElementById("item" + parseInt(svgID));
        if (item.className == "completed") {
            document.getElementById("all-completed").removeChild(item);
        } else {
            document.getElementById("all-todos").removeChild(item);
        }

    }

    idNum += 1;
}


