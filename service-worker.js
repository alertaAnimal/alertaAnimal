self.addEventListener("install",event=>{

event.waitUntil(

caches.open("rescue-cache").then(cache=>{

return cache.addAll([

"/",
"/index.html",
"/css/styles.css"

])

})

)

})