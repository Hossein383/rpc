var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "آموزش دیسکورد از 0 تا 100",
assets : {
large_image : "sye-tech-profile",
large_text : "سای تک"
},
buttons : [{label : "Website 💥" , url : "https://syetech.ir"},{label : "Youtube 🔥",url : "https://youtube.com/c/mestersye"}]
}
})
})
client.login({ clientId : "TOKEN" }).catch(console.error);