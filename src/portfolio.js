export default function Portfolio(){
    let portfolio_projects = document.createElement('div');
    let card = document.createElement('div');
    card.innerHTML = 'Display projects'
    portfolio_projects.appendChild(card)
    return portfolio_projects;
}