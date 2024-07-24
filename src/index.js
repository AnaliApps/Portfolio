import Home from './home.js'
import NavBar from './navBar.js'
import Portfolio from './portfolio.js'
import About from './about.js';
import Contact from './contact.js';
import Footer from './footer.js';
import './style.css'

class Projects{
    constructor(title,link){
        this.title = title;
        this.link = link;
    }
    setTitle(_title){
        this.title = _title;
    }
    
}
let STORAGE_KEY_PORTFOLIO_SITE = 'projects.lists'
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
function refreshPage(){
    window.location.reload()
}
function save(arr){
    let storageString = JSON.stringify(arr);
    localStorage.setItem(STORAGE_KEY_PORTFOLIO_SITE,storageString);
}
function accessData(){
    let accessString = localStorage.getItem(STORAGE_KEY_PORTFOLIO_SITE)
    let accessedData = JSON.parse(accessString)
    return accessedData
}
function updateUI(card){
    let allProjects  = accessData()
    allProjects.forEach(item=>{
        let projectHeader = document.createElement('h2')
        let projectLink = document.createElement("a")
        let ul = document.createElement('ul')
        ul.setAttribute('class','allProjectItems')
        let li = document.createElement('li')
        li.setAttribute('class','projectItem')
        let item_div = document.createElement('div')
        let buttonDel = document.createElement('button')
        buttonDel.setAttribute('id','btnDel')
        buttonDel.textContent = 'Delete'
        let buttonEdit = document.createElement('button')
        let buttonDiv = document.createElement('div')
        buttonDiv.setAttribute('id','deleditbtn')
        buttonEdit.setAttribute('id','btnEdit')
        buttonEdit.textContent = 'Edit'
        buttonDiv.appendChild(buttonEdit)
        buttonDiv.appendChild(buttonDel)
        projectHeader.innerHTML = item.title;
        projectLink.innerHTML = `<a href=${item.link}>View Project</a>`
        item_div.appendChild(projectHeader)
        item_div.appendChild(projectLink)
        item_div.appendChild(buttonDiv)
        li.appendChild(item_div)
        ul.appendChild(li)
        card.appendChild(ul)
    })
}

function deleteProject(){
    let storedData = accessData()
    let allProjects = document.querySelectorAll('.projectItem')
    allProjects.forEach((item,index)=>{
        item.addEventListener('click',(e)=>{
            if(e.target.id === 'btnDel'){
                e.target.parentNode.remove()
                storedData.splice(index,1)
                localStorage.setItem(STORAGE_KEY_PORTFOLIO_SITE,JSON.stringify(storedData))
                refreshPage()
                console.log(`deleting at ${index}`)
            }else if(e.target.id === 'btnEdit'){
                title.value = storedData[index].title;
                link.value = storedData[index].link
                e.target.addEventListener('click',()=>{
                    storedData[index].title = title.value;
                    storedData[index].link = link.value
                    localStorage.setItem(STORAGE_KEY_PORTFOLIO_SITE,JSON.stringify(storedData))
                    refreshPage()
                })
            }else{
                return;
            }
        })
    })
    console.log(allProjects)
    return allProjects
}
console.log(main)
let navUl = document.querySelectorAll('#navigation>ul>li')
navUl.forEach(item=>{
    item.addEventListener('click',e=>{
        if(e.target.id === 'home'){
            content.innerHTML = ''
            content.appendChild(Home())
            toggleClass(e)
        }else if(e.target.id === 'portfolio'){
            content.innerHTML =  '';
            content.appendChild(Portfolio())
            let projectsList = accessData()||[];
            let btnAdd = document.querySelector('.btnAdd')
            let title = document.querySelector('#title')
            let link = document.querySelector('#link')
            let projects_card = document.querySelector('.projects_card')
             updateUI(projects_card)
            btnAdd.addEventListener('click',()=>{
                let project = new Projects(title.value,link.value)
                projectsList = [...projectsList,project]
                save(projectsList)
                updateUI(projects_card)
                refreshPage()
                console.log(projectsList)
            })
            deleteProject()
            toggleClass(e)
        }else if(e.target.id === 'about'){
            content.innerHTML =  '';
            content.appendChild(About())
            toggleClass(e)
        }else if(e.target.id === 'contact'){
            content.innerHTML =  '';
            content.appendChild(Contact())
            toggleClass(e)
        }
    })
})

