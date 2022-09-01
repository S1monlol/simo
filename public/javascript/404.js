

// stackWindows(3, {top: window.innerHeight / 2 - 100, left: window.innerWidth / 2 - 500}, {length: 100, width:500},'this is the title', 'wassup', 100)
chat('404!');

dragElement(document.getElementById("simo"));

goBack();

function back(w){


    window.history.back();

}

async function goBack(){

    await sleep(500)
    const $tool_window_1 = new $Window({title: ':(', toolWindow: true});
    // $tool_window_1.$content.text(content);
    $tool_window_1.$content.text('Go back?')
    $tool_window_1.$Button("ok", () => back())

    $tool_window_1.css({

        width: "100px"

    })



}










function simoClick(){

    stackWindows(10, {top: window.innerHeight / 2 - 100, left: window.innerWidth / 2 - 500}, {length: 100, width:500},'>:(', 'Dont touch me', 50)

}




async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function chat(text_content){

    // await sleep(1000);
    let box = document.createElement("img");



    box.id = 'box'
    box.src = "image/chat.png";

    let textBox = document.createElement("div")

    textBox.id = 'textBox'

    textBox.class = 'text'


    let text = document.createElement("h1");

    text.id = 'text'



    text.innerHTML = text_content








    let simon = document.getElementById('simo')

    simon.appendChild(box);

    simon.appendChild(textBox);

    textBox.appendChild(text);






}



async function stackWindows(times, position, scale, title, content, interval) {

    for (var i = 0; i < times; i++) {

        const $tool_window_1 = new $Window({title: title, toolWindow: true});
        // $tool_window_1.$content.text(content);
        $tool_window_1.$content.text(content)

        $tool_window_1.css({

            top: position.top,
            left: position.left,

            height: scale.length,
            width: scale.width



        })

        position.top -= 10
        position.left += 10

        await sleep(interval)


    }


}





// DRAG STUFF

function dragElement(elmnt) {

    elmnt.style.zIndex = 0

    let x = JSON.parse(localStorage.getItem('simo_pos'));



    elmnt.style.top = '50%'

    elmnt.style.left = '50%'









    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {

        let pos = {'top': elmnt.style.top, 'left': elmnt.style.left};

        localStorage.setItem('simo_pos', JSON.stringify(pos));
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}