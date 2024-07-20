class Projects{
    constructor(title,link){
        this.title = title;
        this.link = link;
    }
}
export default function Portfolio(){
    let portfolio_projects = document.createElement('div');
    let btnAdd = document.createElement('button');
    let addTitleInput = document.createElement('input');
    addTitleInput.setAttribute('id','title')
    let addLinkInput = document.createElement('input');
    addLinkInput.setAttribute('id','link')
    btnAdd.innerText = 'Submit'
    btnAdd.setAttribute('class','btnAdd')
    portfolio_projects.appendChild(btnAdd)
    portfolio_projects.appendChild(addTitleInput)
    portfolio_projects.appendChild(addLinkInput)
    return portfolio_projects;
}