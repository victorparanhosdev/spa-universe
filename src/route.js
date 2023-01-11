export class Router {

  routes = {}

  add(routeName, page){
    this.routes[routeName] = page
  }

  route(event) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({},"", event.target.href)

    this.handle()
  }

  handle(){
    const { pathname } = window.location
    const route = this.routes[pathname] || this.routes["/"]
    const main = document.querySelector('main')

    if(this.routes[pathname] == this.routes["/universo"]){
      main.style.background = "url(./files/mountains-universe02.png"
      main.style.backgroundSize = "cover"
     }
   
     if(this.routes[pathname] == this.routes["/exploracao"]){
       main.style.background = "url(./files/mountains-universe-3.png)"
       main.style.backgroundSize = "cover"
     }
   
     if(this.routes[pathname] == this.routes["/"]){
       main.style.background = "url(./files/mountains-universe-1.png)"
       main.style.backgroundSize = "cover"
     }
   
    fetch(route)
    .then(data => data.text())
    .then(html => document.querySelector('#app').innerHTML = html)
  
  }

}