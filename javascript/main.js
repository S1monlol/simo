let nothingness_state = true;

function github_update() {
    var has_styles = false;
    var box_title_png = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAXCAMAAAAx3e/WAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIE1hY2ludG9zaCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEQjIyNkJERkM0NjYxMUUxOEFDQzk3ODcxRDkzRjhCRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEQjIyNkJFMEM0NjYxMUUxOEFDQzk3ODcxRDkzRjhCRSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkRCMjI2QkREQzQ2NjExRTE4QUNDOTc4NzFEOTNGOEJFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkRCMjI2QkRFQzQ2NjExRTE4QUNDOTc4NzFEOTNGOEJFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+dka2KgAAAEVQTFRFxMTEyMjI0tLSvb29vr6+zc3Ny8vLxcXFz8/P6enp3t7ex8fH0dHR1NTUw8PDwMDAzs7OvLy8wcHBu7u7v7+/zMzM////budQFwAAABd0Uk5T/////////////////////////////wDmQOZeAAAAcklEQVR42tSQSQ7DMAwD6chOukWs5eX/Ty2coo0T9wOdEzEgdRBuzNmnDofgja52JDyz5TCqUp0O6kfrb4bzSXkRiTviEZZ6JKLMJ5VQ2v8iGbtbfEwXmjFMG0VwdQo10hQNxYqtLMv9O6xvpZ/QeAkwAKjwHiJLaJc3AAAAAElFTkSuQmCC';
    var stats_png = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAqCAMAAACEJ4viAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIE1hY2ludG9zaCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEQjIyNkJEQkM0NjYxMUUxOEFDQzk3ODcxRDkzRjhCRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEQjIyNkJEQ0M0NjYxMUUxOEFDQzk3ODcxRDkzRjhCRSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkRCMjI2QkQ5QzQ2NjExRTE4QUNDOTc4NzFEOTNGOEJFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkRCMjI2QkRBQzQ2NjExRTE4QUNDOTc4NzFEOTNGOEJFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+h1kA9gAAAK5QTFRF+fn5sbGx8fHx09PTmpqa2dnZ/f3919fX9PT00NDQ1dXVpKSk+vr6+/v7vb298vLyycnJ8/PztLS0zc3N6enp/v7+q6ur2NjY9/f3srKy/Pz8p6en7u7uoaGhnJyc4eHhtbW1pqam6Ojo9fX17e3toqKirKys1NTUzs7Ox8fHwcHBwMDA5eXlnZ2dpaWl0dHR9vb25ubm4uLi3d3dqqqqwsLCv7+/oKCgmZmZ////8yEsbwAAAMBJREFUeNrE0tcOgjAUBuDSliUoMhTEvfdef9//xUQjgaLX0Ium/ZLT/+SkRPxZpGykvuf5VMJogy5jY9yjDHcWFhqlcRuHc4o6B1QK0BDg+hcZgNDh3NWTwzItH/bRrhvT+g3zSxZkNGCZpoWGIbU0a3Y6zV5VA6keyeDxiw62P0gUqEW0FbDim4nVikFJbU2zZXybUEaxhCqOQqyh5/G0wpWICUwthyqwD4InOMuXJ7/gs7WkoPdVg1vykF8CDACEFanKO3aSYwAAAABJRU5ErkJggg==';

    var widgets = document.getElementsByClassName("github-widget");

    var getCallback = function (widgetIndex) {
        return function (results) {
            var repo = results.data, date, pushed_at = 'unknown';

            if (repo.pushed_at) {
                date = new Date(repo.pushed_at);
                pushed_at = (date.getMonth() + 1) + '-' + date.getDate() + '-' + date.getFullYear();
            }

            document.getElementById('watchers' + widgetIndex).innerHTML = repo.watchers;
            document.getElementById('forks' + widgetIndex).innerHTML = repo.forks;
            document.getElementById('description' + widgetIndex).innerHTML = repo.description;
            document.getElementById('updated' + widgetIndex).innerHTML = 'Latest commit to the <strong>' + repo.default_branch + '</strong> branch on ' + pushed_at;

            // Don't show "null" if the repo has no homepage URL.
            if (repo.homepage !== "") {
                document.getElementById('updated' + widgetIndex).innerHTML = '<a href="' + repo.homepage + '">' + repo.homepage + '</a>';
            }
        };
    };

    for (var widgetIndex = 0; widgetIndex < widgets.length; widgetIndex++) {
        if (!has_styles) {
            var style;
            style = document.createElement('style');
            style.type = 'text/css';
            style.innerText =
                ['<style type="text/css">',
                    '.github-box *{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;}',
                    '.github-box{font-family:helvetica,arial,sans-serif;font-size:13px;line-height:18px;background:#fafafa;border:1px solid #ddd;color:#666;border-radius:3px}',
                    '.github-box a{color:#4183c4;border:0;text-decoration:none}',
                    '.github-box .github-box-title{position:relative;border-bottom:1px solid #ddd;border-radius:3px 3px 0 0;background:#fcfcfc;background:-moz-linear-gradient(#fcfcfc,#ebebeb);background:-webkit-linear-gradient(#fcfcfc,#ebebeb);}',
                    '.github-box .github-box-title h3{word-wrap:break-word;font-family:helvetica,arial,sans-serif;font-weight:normal;font-size:16px;color:gray;margin:0;padding:10px 10px 10px 30px;background:url(' + box_title_png + ') 7px center no-repeat; width: auto;}',
                    '.github-box .github-box-title h3 .repo{font-weight:bold}',
                    '.github-box .github-box-title .github-stats{float:right;position:absolute;top:8px;right:10px;font-size:11px;font-weight:bold;line-height:21px;height:auto;min-height:21px}',
                    '.github-box .github-box-title .github-stats a{display:inline-block;height:21px;color:#666;border:1px solid #ddd;border-radius:3px;padding:0 5px 0 18px;background: white url(' + stats_png + ') no-repeat}',
                    '.github-box .github-box-title .github-stats .watchers{border-right:1px solid #ddd}',
                    '.github-box .github-box-title .github-stats .forks{background-position:-4px -21px;padding-left:15px}',
                    '.github-box .github-box-content{padding:10px;font-weight:300}',
                    '.github-box .github-box-content p{margin:0}',
                    '.github-box .github-box-content .link{font-weight:bold}',
                    '.github-box .github-box-download{position:relative;border-top:1px solid #ddd;background:white;border-radius:0 0 3px 3px;padding:10px;height:auto;min-height:24px;}',
                    '.github-box .github-box-download .updated{word-wrap:break-word;margin:0;font-size:11px;color:#666;line-height:24px;font-weight:300;width:auto}',
                    '.github-box .github-box-download .updated strong{font-weight:bold;color:#000}',
                    '.github-box .github-box-download .download{float:right;position:absolute;top:10px;right:10px;height:24px;line-height:24px;font-size:12px;color:#666;font-weight:bold;text-shadow:0 1px 0 rgba(255,255,255,0.9);padding:0 10px;border:1px solid #ddd;border-bottom-color:#bbb;border-radius:3px;background:#f5f5f5;background:-moz-linear-gradient(#f5f5f5,#e5e5e5);background:-webkit-linear-gradient(#f5f5f5,#e5e5e5);}',
                    '.github-box .github-box-download .download:hover{color:#527894;border-color:#cfe3ed;border-bottom-color:#9fc7db;background:#f1f7fa;background:-moz-linear-gradient(#f1f7fa,#dbeaf1);background:-webkit-linear-gradient(#f1f7fa,#dbeaf1);}',
                    '@media (max-width: 767px) {',
                    '.github-box .github-box-title{height:auto;min-height:60px}',
                    '.github-box .github-box-title h3 .repo{display:block}',
                    '.github-box .github-box-title .github-stats a{display:block;clear:right;float:right;}',
                    '.github-box .github-box-download{height:auto;min-height:46px;}',
                    '.github-box .github-box-download .download{top:32px;}',
                    '}',
                    '</style>'].join('\n');
            document.getElementsByTagName('head')[0].appendChild(style);
            has_styles = true;
        }

        var widget = widgets[widgetIndex],
            repo = widget.getAttribute('data-repo'),
            vendorName = repo.split('/')[0],
            repoName = repo.split('/')[1],
            vendorUrl = "http://github.com/" + vendorName,
            repoUrl = "http://github.com/" + vendorName + '/' + repoName;

        widget.innerHTML =
            ['<div class="github-box repo">',
                '<div class="github-box-title">',
                '<h3>',
                '<a class="owner" href="' + vendorUrl + '" title="' + vendorUrl + '">' + vendorName + '</a>',
                '/',
                '<a class="repo" href="' + repoUrl + '" title="' + repoUrl + '">' + repoName + '</a>',
                '</h3>',
                '<div class="github-stats">',
                '<a class="watchers" id="watchers' + widgetIndex + '" href="' + repoUrl + '/watchers" title="See watchers">?</a>',
                '<a class="forks" id="forks' + widgetIndex + '" href="' + repoUrl + '/network/members" title="See forkers">?</a>',
                '</div>',
                '</div>',
                '<div class="github-box-content">',
                '<p class="description"><span id="description' + widgetIndex + '"></span> &mdash; <a href="' + repoUrl + '#readme">Read More</a></p>',
                '<p class="link" id="link' + widgetIndex + '"></p>',
                '</div>',
                '<div class="github-box-download">',
                '<div class="updated" id="updated' + widgetIndex + '"></div>',
                '<a class="download" href="' + repoUrl + '/zipball/master" title="Get an archive of this repository">Download as zip</a>',
                '</div>',
                '</div>'].join('\n');

        window['githubRepoCallback' + widgetIndex] = getCallback(widgetIndex);

        var script;
        script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://api.github.com/repos/' + repo + '?callback=githubRepoCallback' + widgetIndex;
        document.getElementsByTagName('head')[0].appendChild(script);

    }
}




// stackWindows(3, {top: window.innerHeight / 2 - 100, left: window.innerWidth / 2 - 500}, {length: 100, width:500},'this is the title', 'wassup', 100)

dragElement(document.getElementById("simo"));

welcome();

async function welcome() {

    // await sleep(1000);

    const menus = {
        "&Projects": [
            {
                item: "&Summize",
                action: () => {
                    const $w = $Window({ title: "Summize", resizable: false, maximizeButton: true, minimizeButton: true });
                    $w.css({
                        top: window.innerHeight / 2 - 400,
                        left: window.innerWidth / 2 - 450
                    })
                    $w.$content.html(`
                    <div class="github-widget" data-repo="S1monlol/Summize"></div>
                    <br>
                    <div id="summize">
                        <h1 style="margin: 0;">Summize - A YouTube Video Summarizer</h1>

                        <img id="sum" src="https://user-images.githubusercontent.com/47905276/217866101-15722291-994f-4a73-be7f-4dc6e13f92e7.png" alt="example">

                        <p>Summize is a browser extension that summarizes YouTube videos using OpenAI's GPT-3.5 language model. With it, you can quickly get a summary of a video, saving you time and making it easier to understand.</p>

                        <h2>Features</h2>

                        <ul>
                            <li>Summarizes YouTube videos in real-time when you open the video</li>
                            <li>Uses OpenAI's GPT-3.5 language model to generate summaries</li>
                            <li>Uses chatgpt's website to generate summaries instead of the api, making it completely free</li>
                        </ul>
                    </div>

                    
                <br>`);
                    $w.$Button("OK", () => $w.close()).focus().css({ width: 100 });

                    github_update()

                },
                description: "A Chatgpt-powered youtube summarizer",
            },
            {
                item: "&Imdb but based",
                action: () => {
                    const $w = $Window({ title: "Imdb But Based", resizable: false, maximizeButton: true, minimizeButton: true });
                    $w.css({
                        top: window.innerHeight / 2 - 300,
                        left: window.innerWidth / 2 - 450
                    })
                    $w.$content.html(`
                    <div class="github-widget" data-repo="S1monlol/Imdb-But-Based"></div>
                    <br>
                    <iframe src="https://imdb.simo.ng/?search=doctor+strange" width="800" height="400" frameborder="0" allowfullscreen>
                    <!-- Content to display if the browser does not support iframes -->
                    <p>Your browser does not support iframes.</p>
                </iframe>
                <br>`);
                    $w.$Button("OK", () => $w.close()).focus().css({ width: 100 });

                    github_update()

                },
                description: "Another simplified imdb frontend",
            },
            {
                item: "&Notion Canvas",
                action: () => {
                    const $w = $Window({ title: "Notion Canvas", resizable: true, left: 500, maximizeButton: true, minimizeButton: true });
                    $w.css({
                        top: window.innerHeight / 2 - 400,
                        left: window.innerWidth / 2 - 450
                    })
                    $w.$content.html(`
                    <div class="github-widget" data-repo="S1monlol/notionCanvas"></div>
                    <br>
                    <div id="canvas">
                    <h1 style="margin:0;">Canvas to Notion Integration</h1>
                        <p>An integration between a Canvas calendar and a Notion database. It makes it (somewhat) easy to import assignments into your notion assignment database </p>
                        <div>
                            <video src="https://user-images.githubusercontent.com/47905276/231315139-766bd6af-6c75-4c37-9d6f-a94c7ab232a5.mov" controls></video>
                        </div>
                    </div>
                <br>`);
                    $w.$Button("OK", () => $w.close()).focus().css({ width: 100 });

                    github_update()

                },
                description: "A script to import canvas assignments into notion",
            },
            {
                item: "&Pillow",
                action: () => {
                    const $w = $Window({ title: "Warning", resizable: false, maximizeButton: false, minimizeButton: false });
                    $w.css({
                        // top: window.innerHeight / 2 - 400,
                        left: window.innerWidth / 2 - 450,
                        width: 500,
                    })

                    $w.$content.html(`
                        <div class="github-widget" data-repo="S1monlol/pillow"></div>
                        <p>Warning: Pillow is currently broken, I have no intent to fix it. Ive moved on from web proxies. Feel free to check out my other projects</p>
                    `);
                    $w.$Button("OK", () => $w.close()).focus().css({ width: 100 });

                    github_update()

                    // window.location.href = "https://pillow.simo.ng";
                },
                description: "My frontend for a web proxy called ultraviolet",
            }


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
                item: "&Github",
                action: () => {
                    window.open("http://www.github.com/S1monlol", "_blank");
                },
                description: "My Github"
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