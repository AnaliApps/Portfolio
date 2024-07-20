import Home from './home.js'
import NavBar from './navBar.js'
import Portfolio from './portfolio.js'
import About from './about.js';
import Contact from './contact.js';
import Footer from './footer.js';
import './style.css'

let main = document.createElement('div');
main.setAttribute('class','main')
let content = document.createElement('div');
content.setAttribute('id','content');
content.appendChild(Home())
main.setAttribute('class','main');
main.appendChild(NavBar());
main.appendChild(content)
main.appendChild(Footer())
document.body.appendChild(main);
function toggleClass(activeLink){
    if(activeLink.contains('active')){
        activeLink.classList.remove('active')
    }else{
        activeLink.classList.add('active')
    }
}
console.log(main)
let navUl = document.querySelectorAll('#navigation>ul>li')
navUl.forEach(item=>{
    item.addEventListener('click',e=>{
        if(e.target.id === 'home'){
            content.innerHTML = ''
            content.appendChild(Home())
            toggleClass(e.target)
        }else if(e.target.id === 'portfolio'){
            content.innerHTML =  '';
            content.appendChild(Portfolio())
            toggleClass(e.target)
        }else if(e.target.id === 'about'){
            content.innerHTML =  '';
            content.appendChild(About())
            toggleClass(e.target)
        }else if(e.target.id === 'contact'){
            content.innerHTML =  '';
            content.appendChild(Contact())
            toggleClass(e.target)
        }
    })
})

