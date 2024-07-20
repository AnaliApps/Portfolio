export default function Footer(){
    let div = document.createElement('div');
    div.setAttribute('class','footer')
    let links= document.createElement('ul')
    let li_facebook = document.createElement('li')
    let li_facebook_a = document.createElement('a')
    li_facebook_a.innerHTML = 'Facebook'
    li_facebook.appendChild(li_facebook_a)
    let li_x = document.createElement('li')
    let li_x_a = document.createElement('a')
    li_x_a.innerHTML = 'X'
    li_x.appendChild(li_x_a)
    let li_instagram = document.createElement('li')
    let li_instagram_a = document.createElement('a')
    li_instagram_a.innerHTML = 'Instagram'
    li_instagram.appendChild(li_instagram_a)
    let li_youtube = document.createElement('li')
    let li_youtube_a = document.createElement('a')
    li_youtube_a.innerHTML = 'Youtube'
    li_youtube.appendChild(li_youtube_a)
    links.appendChild(li_facebook)
    links.appendChild(li_instagram)
    links.appendChild(li_x)
    links.appendChild(li_youtube)
    div.appendChild(links)
    return div
}