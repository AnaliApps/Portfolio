export default function About(){
    let div = document.createElement('div');
    let img = document.createElement('img')
    div.appendChild(img)
    let h2 = document.createElement('h2')
    h2.innerHTML='About'
    let h3 = document.createElement('h3')
    h3.innerHTML = 'Biograpghy'
    let p = document.createElement('p')
    p.innerHTML = 'asdasdiuiuasd oiasodiashod oias diashdsa aisdasidoasidhos'
    let ul = document.createElement('ul')
    let li = document.createElement('li');
    li.innerHTML = 'Skills'
    ul.appendChild(li)
    div.appendChild(h2)
    div.appendChild(h3)
    div.appendChild(p);
    div.appendChild(ul)
    return div
}