let nothingness_state = true;


// stackWindows(3, {top: window.innerHeight / 2 - 100, left: window.innerWidth / 2 - 500}, {length: 100, width:500},'this is the title', 'wassup', 100)

dragElement(document.getElementById("simo"));

welcome();

async function welcome(){

    chat('Welcome to the site!');

    // await sleep(1000);

    const menus = {
        "&Projects": [
            {
                item: "&Pillow",
                action: () => {
                    // redirect to pillow.ninja
                    window.location.href = "https://pillow.ninja";
                },
                shortcut: "pillow.ninja",
                description: "My frontend for a web proxy called ultraviolet",
            },
            {
                item: "&Imdb but based",
                action: () => {
                    // redirect to pillow.ninja
                    window.location.href = "https://imdb.simon.lgbt";
                },
                shortcut: "imdb.simon.lgbt",
                description: "Another simplified imdb frontend",
            },

        ],
        "&Me": [
            {
                item: "&About me",
                action: () => {
                    const $w = $Window({ title: "Me", resizable: false, maximizeButton: false, minimizeButton: false });
                    $w.$content.html("<p>I'm Simon, a self taught programmer</p> <p>I currently know python, html, css, javascript, nodejs, and go</p>");
                    $w.$Button("OK", () => $w.close()).focus().css({ width: 100 });
                },
                description: "About me"
            },
            {
                item: "&Past Work",
                submenu: [
                    {
                        item: "&Abi-bot",
                        action: () => {
                            const $w = $Window({
                                title: "Abi-bot",
                                resizable: false,
                                maximizeButton: false,
                                minimizeButton: false
                            });
                            $w.$content.html("<p>Abi-bot is a discord bot that gets information from the game <a href='https://store.steampowered.com/app/1306570/Fadeout_Underground/'>\"Fadeout Underground\"</a> </p> <img style='width: 500px' src='/image/abi.jpg'> <p>It was made in python and discord.py</p>");
                            $w.$Button("OK", () => $w.close()).focus().css({width: 100});
                        },
                        description: "Abi-bot"
                    },
                    {
                        item: "&Crypto Bots",
                        action: () => {
                            const $w = $Window({
                                title: "Crypto Bots",
                                resizable: false,
                                maximizeButton: false,
                                minimizeButton: false
                            });
                            $w.$content.html("<p>A client hired me to make a bunch of crypto-tracking bots for personal use</p> <img style='width: 200px' src='/image/crypto1.jpg'> <img style='width: 200px' src='/image/crypto2.jpg'> <img style='width: 200px' src='/image/crypto3.jpg'> <p>I made them in python and discord.py</p>");
                            $w.$Button("OK", () => $w.close()).focus().css({width: 100});
                        },
                        description: "Crypto Bots"
                    },


                ],
                description: "Past work"
            }
        ],

       
    };

    const $app_window_2 = new $Window({ title: "Explorer", resizable: true });
    const app_window_2_menu_bar = new MenuBar(menus);
    $app_window_2.setMenuBar(app_window_2_menu_bar);
    $app_window_2.$content.css({
        padding: 0,
        display: "flex",
        flexDirection: "column",
    });
    $app_window_2.$content.append(`
		<div class="inset-deep" style="padding: 20px; background: var(--Window); color: var(--WindowText); user-select: text; cursor: text; flex: 1;">
			<p>Feel free to look at around with the buttons</p>
			<p style="font-size: 10px">all of the window stuff is from <a href="https://os-gui.js.org/">os-gui</a></p>
		</div>
	`);
    const $status_bar = $("<div class='status-bar inset-shallow' style='height:1.5em;line-height:1.5em;font-size:12px;margin-top:2px;'>").appendTo($app_window_2.$content);
    $(app_window_2_menu_bar.element).on("info", (event, info) => {
        // info = `event.detail.description: ${event.detail.description}, jQuery second arg: ${info}`; // testing
        info = event.detail.description; // new API
        $status_bar.text(info);
    });
    function showDefaultStatus() {
        $status_bar.text("");
    }
    showDefaultStatus();
    $(app_window_2_menu_bar.element).on("default-info", (event) => {
        showDefaultStatus();
    });






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

    if(x != null){

        console.log(x);



        elmnt.style.top = x.top

        elmnt.style.left = x.left

    } else {

        elmnt.style.top = '50%'

        elmnt.style.left = '50%'

    }

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