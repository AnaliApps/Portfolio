export default function NavBar(){
    let navDiv = document.createElement('div');
    navDiv.setAttribute('id','navigation');
    let ul = document.createElement('ul');
    let li_home = document.createElement('li');
    // li_home.setAttribute('id','home')
    li_home.setAttribute('class','unorderedList')
    let a_home = document.createElement('a');
    a_home.setAttribute('href',"#")
    a_home.setAttribute('id','home')
    a_home.innerText = 'Home';
    li_home.appendChild(a_home);
    let li_about = document.createElement('li');
    // li_about.setAttribute('id','about')
    li_about.setAttribute('class','unorderedList')
    let a_about = document.createElement('a');
    a_about.setAttribute('href',"#")
    a_about.setAttribute('id','about')
    a_about.innerText = 'About'
    li_about.appendChild(a_about);
    let li_portfolio = document.createElement('li');
    // li_portfolio.setAttribute('id','portfolio')
    li_portfolio.setAttribute('class','unorderedList')
    let a_portfolio = document.createElement('a');
    a_portfolio.setAttribute('href',"#")
    a_portfolio.setAttribute('id','portfolio')
    a_portfolio.innerText = 'Portfolio';
    li_portfolio.appendChild(a_portfolio);
    let li_contact = document.createElement('li');
    // li_contact.setAttribute('id','contact')
    li_contact.setAttribute('class','unorderedList')
    let a_contact = document.createElement('a');
    a_contact.setAttribute('href',"#")
    a_contact.setAttribute('id','contact')
    a_contact.innerText = 'Contact';
    li_contact.appendChild(a_contact);
    ul.appendChild(li_home)
    ul.appendChild(li_about)
    ul.appendChild(li_portfolio)
    ul.appendChild(li_contact)
    navDiv.appendChild(ul);
    return navDiv
}