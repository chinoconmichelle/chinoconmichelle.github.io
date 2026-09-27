// Prints all topics as JSON, loading data files in the order used by index.html.
const fs=require('fs'), path=require('path');
const root=path.join(__dirname,'..');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
global.window={};
for(const m of html.matchAll(/<script src="(data\/[^"]+)"><\/script>/g)) eval(fs.readFileSync(path.join(root,m[1]),'utf8'));
console.log(JSON.stringify(window.TOPICS));
