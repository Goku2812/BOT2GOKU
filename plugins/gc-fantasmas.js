let handler = async (m, { conn, text, participants }) => {
let member = participants.map(u => u.id)
if(!text) {
var sum = member.length
} else {
var sum = text} 
var total = 0
var sider = []
for(let i = 0; i < sum; i++) {
let users = m.isGroup ? participants.find(u => u.id == member[i]) : {}
if((typeof global.db.data.users[member[i]] == 'undefined' || global.db.data.users[member[i]].chat == 0) && !users.isAdmin && !users.isSuperAdmin) { 
if (typeof global.db.data.users[member[i]] !== 'undefined'){
if(global.db.data.users[member[i]].whitelist == false){
total++
sider.push(member[i])}
}else {
total++
sider.push(member[i])}}}
if(total == 0) return conn.reply(m.chat, `*[β] π΄πππ΄ πΆπππΏπΎ π΄π π°π²ππΈππΎ, π½πΎ ππΈπ΄π½π΄ π΅π°π½ππ°ππΌπ°π :D*`, m) 
m.reply(`*[ β  ππ΄ππΈππΈπΎπ½ π³π΄ πΈπ½π°π²ππΈππΎπ β  ]*\n\n*πΆπππΏπΎ:* ${await conn.getName(m.chat)}\n*πΌπΈπ΄πΌπ±ππΎπ π³π΄π» πΆπππΏπΎ:* ${sum}\n\n*[ π» π»πΈπππ° π³π΄ π΅π°π½ππ°ππΌπ°π π» ]*\n${sider.map(v => '  ππ» @' + v.replace(/@.+/, '')).join('\n')}\n\n*π½πΎππ°: π΄πππΎ πΏππ΄π³π΄ π½πΎ ππ΄π π·πΆπΆ% π°π²π΄πππ°π³πΎ, π΄π» π±πΎπ πΈπ½πΈπ²πΈπ° π΄π» π²πΎπ½ππ΄πΎ π³π΄ πΌπ΄π½ππ°πΉπ΄π π°πΏπ°πππΈπ π³π΄ πππ΄ ππ΄ π°π²ππΈππΎ π΄π½ π΄πππ΄ π½ππΌπ΄ππΎ*`, null, { mentions: sider })}
handler.command = /^(verfantasmas|fantasmas|sider)$/i
handler.admin = true
handler.botAdmin = true
export default handler
