const CACHE='assistant-dossards-v2';
const XLSX='https://cdn.sheetjs.com/xlsx-0.20.3/package/dist/xlsx.full.min.js';
const ASSETS=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./xlsx.full.min.js'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(async c=>{await c.addAll(ASSETS); try{await c.add(XLSX)}catch(e){}; await self.skipWaiting()}))});
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{const copy=res.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return res}).catch(()=>caches.match('./index.html'))))});
