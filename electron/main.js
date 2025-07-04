const { app, BrowserWindow } =  require("electron");
const path = require("path");

function createWindow() {
    const win = new BrowserWindow({
        width: 1024,
        height: 768,
        icon: path.join(__dirname, "plant.svg"),
        webPreferences: { preload: path.join(__dirname, "preload.js") },
    });
    if (!app.isPackaged) {
        win.loadURL("http://localhost:5173");
    } else {
        win.loadFile(path.join(__dirname, "../dist/index.html"));
    }
}

app.whenReady().then(createWindow);
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
});
