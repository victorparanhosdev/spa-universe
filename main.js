
function route(event) {
  event = event || window.event
  event.preventDefault()
  window.history.pushState({},"", event.target.href)
  handle()
}

const main = document.querySelector('main')

function handle(){
  const { pathname } = window.location
  const route = routes[pathname] || routes["/home"]

  if(routes[pathname] == routes["/universo"]){
   main.style.background = "url(./files/mountains-universe02.png"
   main.style.backgroundSize = "cover"
  }

  if(routes[pathname] == routes["/exploracao"]){
    main.style.background = "url(./files/mountains-universe-3.png)"
    main.style.backgroundSize = "cover"
  }

  if(routes[pathname] == routes["/home"]){
    main.style.background = "url(./files/mountains-universe-1.png)"
    main.style.backgroundSize = "cover"
  }

  fetch(route)
  .then(data => data.text())
  .then(html => document.querySelector('#app').innerHTML = html)

}

const routes = {
  "/home": "/pages/home.html",
  "/universo": "/pages/ouniverso.html",
  "/exploracao": "/pages/exploracao.html",
}

handle()