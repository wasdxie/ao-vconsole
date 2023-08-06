function parseUrl(url) {
    const parsedUrl = new URL(url);
    const params = new URLSearchParams(parsedUrl.search);
    return params;
}

function appendVconsole(url) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src =
      "https://cdn.bootcdn.net/ajax/libs/vConsole/3.9.5/vconsole.min.js";
    script.onload = function () {
      // @ts-ignore
      new VConsole();
    };
    document.body.appendChild(script);
}

export default function aoVconsole() {
    const params = parseUrl(window.location.href);
    if (params.get("debug") == '1') {
        appendVconsole();
    }
}

