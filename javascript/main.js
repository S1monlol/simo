let nothingness_state = true;


// stackWindows(3, {top: window.innerHeight / 2 - 100, left: window.innerWidth / 2 - 500}, {length: 100, width:500},'this is the title', 'wassup', 100)

dragElement(document.getElementById("simo"));

welcome();

async function welcome() {

    // await sleep(1000);

    const menus = {
        "&Projects": [
            {
                item: "&Pillow (Broken!)",
                action: () => {
                    const $w = $Window({ title: "Warning", resizable: false, maximizeButton: false, minimizeButton: false });
                    $w.$content.html("<p>Warning: Pillow is currently broken, I have no intent to fix it. Ive moved on from web proxies. Feel free to check out my other projects</p>");
                    $w.$Button("OK", () => $w.close()).focus().css({ width: 100 });

                    // window.location.href = "https://pillow.simo.ng";
                },
                shortcut: "pillow.simo.ng",
                description: "My frontend for a web proxy called ultraviolet",
            },
            {
                item: "&Imdb but based",
                action: () => {
                    const $w = $Window({ title: "Imdb But Based", resizable: false, maximizeButton: true, minimizeButton: true });
                    $w.$content.html(`<p>This is my frontend for IMDB that uses the OMDb API</p> 
                    <a href="https://github.com/S1monlol/Imdb-but-based">https://github.com/S1monlol/Imdb-but-based</a>
                    <br>
                    <iframe src="https://imdb.simo.ng/?search=doctor+strange" width="800" height="400" frameborder="0" allowfullscreen>
                    <!-- Content to display if the browser does not support iframes -->
                    <p>Your browser does not support iframes.</p>
                </iframe>
                <br>`);
                    $w.$Button("OK", () => $w.close()).focus().css({ width: 100 });
                },
                description: "Another simplified imdb frontend",
            },

        ],
        "&Me": [
            {
                item: "&About me",
                action: () => {
                    const $w = $Window({ title: "Me", resizable: false, maximizeButton: false, minimizeButton: false });
                    $w.$content.html("<p>I'm Simon, a self taught programmer</p> <p>I currently know python, html, css, javascript, and nodejs</p>");
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
                            $w.$Button("OK", () => $w.close()).focus().css({ width: 100 });
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
                            $w.$Button("OK", () => $w.close()).focus().css({ width: 100 });
                        },
                        description: "Crypto Bots"
                    },


                ],
                description: "Past work"
            },
            // contact me
            {
                item: "&Contact me",
                action: () => {
                    const $w = $Window({
                        title: "Contact me",
                        resizable: false,
                        maximizeButton: false,
                        minimizeButton: false
                    });
                    $w.$content.html("<p> For any inquiries, you can contact me via email at simon@simo.ng, or on discord at S1mon#0001</p>");
                    $w.$Button("OK", () => $w.close()).focus().css({ width: 100 });
                },
                description: "Want to reach out?"
            },
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

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}





// DRAG STUFF

function dragElement(elmnt) {

    elmnt.style.zIndex = 0

    let x = JSON.parse(localStorage.getItem('simo_pos'));

    if (x != null) {

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

        let pos = { 'top': elmnt.style.top, 'left': elmnt.style.left };

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