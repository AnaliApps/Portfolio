export default function About(){
    let div = document.createElement('div');
    let img = document.createElement('img')
    div.appendChild(img)
    let h2 = document.createElement('h2')
    h2.innerHTML='About'
    let h3 = document.createElement('h3')
    h3.innerHTML = 'Biograpghy'
    let p = document.createElement('p')
    p.innerHTML = `<b>Anali Rono</b> is a skilled front-end we developer with a passion for crafting visually appealing and user-friendly websites. With extensive experience in JavaScript,HTML and CSS, Anali excels at bringing creative concepts to life, ensuring seamless functionality and an engaging user experience.`
    let h3_heading = document.createElement('h3');
    h3_heading.innerHTML = 'Skills'
    let ul = document.createElement('ul')
    let li_js = document.createElement('li');
    li_js.innerHTML = 'JavaScript'
    let li_css = document.createElement('li');
    li_css.innerHTML = 'CSS'
    let li_html = document.createElement('li');
    li_html.innerHTML = 'HTML'
    ul.appendChild(li_html)
    ul.appendChild(li_css)
    ul.appendChild(li_js)
    div.appendChild(h2)
    div.appendChild(h3)
    div.appendChild(p);
    div.appendChild(h3_heading)
    div.appendChild(ul)
    return div
}