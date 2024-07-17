import Home from './home.js'
import NavBar from './navBar.js'
import Portfolio from './portfolio.js'
import About from './about.js';
import Contact from './contact.js';
import Footer from './footer.js';

let main = document.createElement('div');
let content = document.createElement('div');
content.setAttribute('id','content');
main.setAttribute('class','main');
main.appendChild(NavBar());
// let headerDiv = document.createElement('div');
// let p = document.createElement('p')
// p.innerHTML = 'Welcome'
// headerDiv.appendChild(p)
// console.log(headerDiv)
// document.body.appendChild(Home())
// console.log(Home())


// main.appendChild(Home())
// main.appendChild(Portfolio())
// main.appendChild(About())
// main.appendChild(Contact())
// 
main.appendChild(content)
main.appendChild(Footer())
document.body.appendChild(main);
console.log(main)
let navUl = document.querySelectorAll('#navigation>ul>li')
navUl.forEach(item=>{
    item.addEventListener('click',e=>{
        if(e.target.id === 'home'){
            content.innerHTML = ''
            content.appendChild(Home())
        }else if(e.target.id === 'portfolio'){
            content.innerHTML =  '';
            content.appendChild(Portfolio())
        }else if(e.target.id === 'about'){
            content.innerHTML =  '';
            content.appendChild(About())
        }else if(e.target.id === 'contact'){
            content.innerHTML =  '';
            content.appendChild(Contact())
        }
    })
})

