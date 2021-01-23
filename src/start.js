const { app } = require('electron')
const { createWindow } = require("./functions/electron")

let mainWindow
const createMainWindow = () => mainWindow = createWindow()

app.on("ready", createMainWindow)
app.on("window-all-closed", () => process.platform !== "darwin" ? app.quit() : null)
app.on("activate", () => mainWindow === null ? createMainWindow() : null)