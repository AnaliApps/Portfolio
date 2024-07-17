export default function Footer(){
    let div = document.createElement('div');
    let h2  = document.createElement('h2')
    h2.innerHTML = 'Footer'
    let p= document.createElement('p')
    p.innerHTML = 'Additional LInks and privacy'
    div.appendChild(h2)
    div.appendChild(p)
    return div
}