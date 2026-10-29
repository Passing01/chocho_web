// Usage : node update-apk.js chemin/vers/app-release.apk 1.2.0 "Nouveautés (optionnel)"
const fs=require('fs');const [,, apk, version, notes=''] = process.argv;
if(!apk||!version){console.log('Usage: node update-apk.js <fichier.apk> <version> ["notes"]');process.exit(1)}
fs.mkdirSync('app',{recursive:true});fs.copyFileSync(apk,'app/Chocho.apk');
const size=fs.statSync('app/Chocho.apk').size;
fs.writeFileSync('version.json',JSON.stringify({version,date:new Date().toISOString().slice(0,10),size,url:'app/Chocho.apk?v='+version,notes},null,2));
console.log('OK : version',version,'-',(size/1048576).toFixed(1),'Mo. Déployez avec : vercel --prod');
