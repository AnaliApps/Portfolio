export default function Home(){
    let div = document.createElement('div');
    let h1 = document.createElement('h1');
    h1.innerHTML =  'Front-End Web developer'
    let img = document.createElement('img');
    let p = document.createElement('p');
    p.innerHTML = 'Transforming ideas into interactive web solutionas. Let\'s create a digital experience that captivates and converts'
    div.appendChild(h1)
    div.appendChild(img);
    div.appendChild(p);
    return div;
}