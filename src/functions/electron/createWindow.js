const { BrowserWindow } = require('electron')

module.exports = createWindow = () =>
{
    let newWindow = new BrowserWindow(
    {
        width: 800,
        height: 800,
        webPreferences: 
        {
            nodeIntegration: true
        }
    })

    newWindow.loadURL(process.env.ELECTRON_START_URL)
    newWindow.on("closed", () => newWindow = null)

    return newWindow
}