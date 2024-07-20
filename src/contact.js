export default function Contact(){
    let div = document.createElement('div')
    let p_email = document.createElement('p');
    p_email.innerHTML = `<b>Email:</b> anali.rono@example.com`
    let p_phone = document.createElement('p')
    p_phone.innerHTML = `<b>Phone:</b> (123) 456-7890`
    let p_website = document.createElement('p')
    p_website.innerHTML = `<b>Portfolio Website:</b> www.anali-rono.dev`
    let p_linkedIn = document.createElement('p')
    p_linkedIn.innerHTML=`<b>LinkedIn:</b> linkedin.com/in/anali-rono`
    let p_github = document.createElement('p');
    p_github.innerHTML = `<b>GitHub: </b>github.com/anali-rono`
    let h2 = document.createElement('h2')
    h2.innerHTML = 'Contact Information'
    div.appendChild(h2)
    div.appendChild(p_email)
    div.appendChild(p_phone)
    div.appendChild(p_website)
    div.appendChild(p_linkedIn)
    div.appendChild(p_github)
    return div
}