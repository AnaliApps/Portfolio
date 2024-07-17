export default function Home(){
    let div = document.createElement('div');
    let h1 = document.createElement('h1');
    h1.innerHTML =  'Home'
    let img = document.createElement('img');
    let h2 = document.createElement('h2');
    h2.innerHTML = 'Introduction'
    div.appendChild(h1)
    div.appendChild(img);
    div.appendChild(h2);
    return div;
}