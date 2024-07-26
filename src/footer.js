export default function Footer(){
    let div = document.createElement('div');
    div.setAttribute('class','footer')
    let links= document.createElement('ul')
    let li_github = document.createElement('li')
    let li_github_a = document.createElement('a')
    li_github_a.innerHTML = 'Github'
    li_github.appendChild(li_github_a)
    let li_copyright = document.createElement('li')
    let li_copyright_a = document.createElement('a')
    let date_ui = new Date().getFullYear();
    li_copyright_a.innerHTML = `CopyRight&copy;${date_ui}`
    li_copyright.appendChild(li_copyright_a)
    links.appendChild(li_github)
    links.appendChild(li_copyright)
    div.appendChild(links)
    return div
}