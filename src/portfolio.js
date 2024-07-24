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
    addTitleInput.setAttribute('placeholder','Enter project title..')
    let addLinkInput = document.createElement('input');
    addLinkInput.setAttribute('id','link')
    addLinkInput.setAttribute('placeholder','Enter link address..')
    btnAdd.innerText = 'Submit'
    btnAdd.setAttribute('class','btnAdd')
    let card = document.createElement('div')
    card.setAttribute('class',"projects_card")
    let input_div = document.createElement('div')
    input_div.setAttribute('class','inputDiv')
    input_div.appendChild(btnAdd)
    input_div.appendChild(addTitleInput)
    input_div.appendChild(addLinkInput)
    portfolio_projects.appendChild(input_div)
    portfolio_projects.appendChild(card)
    return portfolio_projects;
}