"use strict";

const bs = require("browser-sync").create(),
      os = require("os"),
      ip = require("ip"),
      open = require("open");

const openServer = (serverPath) => {
    bs.init({
        server: serverPath
    });
};

const openBrowsers = () => {
    const localIP = "http://" + ip.address() + ":3000";
    let chrome;

    if(os.platform() === "linux") {
        chrome = 'google-chrome';
    }
    if(os.platform() === 'darwin') {
        chrome = 'google chrome';
    }
    if(os.platform() === 'win32') {
        chrome = 'chrome';
        open(localIP, "iexplore")
    }
    open(localIP, chrome);
    open(localIP, "firefox");
    open(localIP, "opera");
    open(localIP, "safari");
};

const init = (serverPath) => {
    openServer(serverPath);
    bs.emitter.on("init", () => {
        openBrowsers();
    });
};

module.exports = init;