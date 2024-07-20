export default function About(){
    let div = document.createElement('div');
    div.setAttribute('class','about_content')
    let img = document.createElement('img')
    div.appendChild(img)
    let h2 = document.createElement('h2')
    h2.innerHTML='About'
    let h3 = document.createElement('h3')
    h3.innerHTML = 'Biograpghy'
    let p = document.createElement('p')
    p.innerHTML = `<b>Anali Rono</b> is a skilled front-end we developer with a passion for\n crafting visually appealing and user-friendly websites. With extensive experience \nin JavaScript,HTML and CSS, Anali excels at bringing creative concepts \nto life, ensuring seamless functionality and an engaging user experience.`
    let div_bio = document.createElement('div');
    div_bio.appendChild(h3)
    div_bio.appendChild(p)
    div_bio.setAttribute('class','div_bio')
    let h3_heading = document.createElement('h3');
    h3_heading.innerHTML = 'Skills'
    let ul = document.createElement('ul')
    let li_js = document.createElement('li');
    li_js.innerHTML = 'JavaScript'
    let li_css = document.createElement('li');
    li_css.innerHTML = 'CSS'
    let li_html = document.createElement('li');
    li_html.innerHTML = 'HTML'
    let li_react = document.createElement('li');
    li_react.innerHTML = 'React'
    let div_list = document.createElement('div')
    div_list.setAttribute('class','div_list')
    ul.appendChild(li_html)
    ul.appendChild(li_css)
    ul.appendChild(li_js)
    ul.appendChild(li_react)
    div_list.appendChild(ul)
    div.appendChild(h2)
    div.appendChild(div_bio);
    div.appendChild(h3_heading)
    div.appendChild(div_list)
    return div
}