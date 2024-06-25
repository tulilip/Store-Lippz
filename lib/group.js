const fs = require('fs')

exports.groupResponse_Remove = async (ramz, update) => {
try {
ppuser = await ramz.profilePictureUrl(num, 'image')
} catch {
ppuser = 'https://telegra.ph/file/265c672094dfa87caea19.jpg'
}
const metadata = await ramz.groupMetadata(update.id)
for (let participant of update.participants) {
try{
let metadata = await ramz.groupMetadata(update.id)
let participants = update.participants
for (let num of participants) {
if (update.action == 'remove'){
var button = [{ buttonId: '!text_grup', buttonText: { displayText: 'Bye👋'}, type: 1 }]
await ramz.sendMessage(
update.id, 
{
text:``,
footer: metadata.subject, 
mentions: [num] })
}
}
} catch (err) {
console.log(err)
}
}   
}
  
exports.groupResponse_Welcome = async (ramz, update) => {
try {
ppuser = await ramz.profilePictureUrl(num, 'image')
} catch {
ppuser = 'https://telegra.ph/file/265c672094dfa87caea19.jpg'
}
const metadata = await ramz.groupMetadata(update.id)   
for (let participant of update.participants) {
try{
let metadata = await ramz.groupMetadata(update.id)
let participants = update.participants
for (let num of participants) {
if (update.action == 'add') {
var button = [{ buttonId: '!text_grup', buttonText: { displayText: 'Welcome👋'}, type: 1 }]
await ramz.sendMessage(
update.id, 
{ 
text: ``,
footer: metadata.subject,
mentions: [num] })
}
}
} catch (err) {
console.log(err)
}
}   
}
  
exports.groupResponse_Promote = async (ramz, update) => {  
const metadata = await ramz.groupMetadata(update.id)   
for (let participant of update.participants) {
try{
let metadata = await ramz.groupMetadata(update.id)
let participants = update.participants
for (let num of participants) {
if (update.action == 'promote') {
var button = [{ buttonId: '!text_grup', buttonText: { displayText: 'Selamat🎉'}, type: 1 }]
await ramz.sendMessage(
update.id, 
{ 
text: `*@${num.split("@")[0]} Naik jabatan jadi admin grup*`,
footer: metadata.subject,
mentions: [num] })
}
}
} catch (err) {
console.log(err)
}
}   
}
  
exports.groupResponse_Demote = async (ramz, update) => {  
const metadata = await ramz.groupMetadata(update.id)   
for (let participant of update.participants) {
try{
let metadata = await ramz.groupMetadata(update.id)
let participants = update.participants
for (let num of participants) {
if (update.action == 'demote') {
var button = [{ buttonId: '!text_grup', buttonText: { displayText: 'Selamat🎉'}, type: 1 }]
await ramz.sendMessage(
update.id, 
{ 
text: `*@${num.split("@")[0]} Turun jabatan menjadi member biasa*`,
footer: metadata.subject,
mentions: [num] })
}
}
} catch (err) {
console.log(err)
}
}   
}