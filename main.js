
function route(event) {
  event = event || window.event
  event.preventDefault()
  window.history.pushState({},"", event.target.href)
  handle()
}

function handle(){
  const { pathname }= window.location
  const route = routes[pathname] || routes["/"]
  fetch(route)
  .then(data => data.text())
  .then(html => document.querySelector('#app').innerHTML = html)

}

const routes = {
  "/": "/pages/home.html",
  "/universo": "./pages/ouniverso.html",
  "/exploracao": "./pages/exploracao.html",
}

handle()