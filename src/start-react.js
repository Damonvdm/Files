const net = require("net")
const childProcess = require("child_process")

const port = process.env.PORT - 100
process.env.ELECTRON_START_URL = `http://localhost:${port}`

const client = new net.Socket()

let startedElectron
const tryConnection = () => client
    .connect({ port }, () =>
    {
        client.end()
        if (startedElectron) return
        startedElectron = true
        const exec = childProcess.exec
        exec("npm run electron")
    })

tryConnection()
client.on("error", () => setTimeout(tryConnection, 1000))