const faqs = [
    {
        title: 'What is Netflix?',
        content:`<p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.</p><p>You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</p>`
    },
    {
        title: 'How much does Netflix cost?',
        content:`<p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₱149 to ₱549 a month. No extra costs, no contracts.</p>`
    },
    {
        title: 'Where can I watch?',
        content: `<p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.</p><p>You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>`
    },
    {
        title:'How do I cancel?',
        content:`<p>Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>`
    },
    {
        title: 'What can I watch on Netflix?',
        content: '<p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>'
    },
    {
        title: 'Is Netflix good for kids?',
        content:`<p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.</p><p>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p>`
    }
]
const inputBoxes = document.querySelectorAll('.input-box')
const getStartedInputs = document.querySelectorAll('.get-started-input')
document.addEventListener('DOMContentLoaded', () => {
    addFaqToDom()
    faqArticles()
    addActiveClass()
    // removeActiveClass()
})

function addFaqToDom(){
    const faqLists = document.querySelector('#faq-lists')
    
    
    faqs.forEach((faq) =>{
       const article = document.createElement('article')
       const faqHeader = document.createElement('header')
       const faqH4 = document.createElement('h4')
       const faqCloseWrapper = document.createElement('div')
       const faqContent = document.createElement('div')
       
       article.setAttribute('class', 'faq-inner-content-item')
       faqCloseWrapper.setAttribute('class', 'close-faq')
       faqHeader.setAttribute('class', 'faq-inner-content-item-header')
       faqContent.setAttribute('class', 'faq-inner-content-item-desc')

       faqH4.innerText = faq.title 
       faqCloseWrapper.innerHTML = `<span>&times;</span>`
       faqContent.innerHTML = faq.content
       
       faqHeader.append(faqH4)
       faqHeader.append(faqCloseWrapper)
       article.append(faqHeader)
       article.append(faqContent)
       faqLists.appendChild(article)
    })
    
}
function faqArticles(){
    const faqHeaders = document.querySelectorAll('.faq-inner-content-item-header')

    faqHeaders.forEach((header) => {
        header.addEventListener('click', () => {
            if(!header.parentElement.classList.contains('toggle-faq')){
                removeClassToggle(faqHeaders)
                header.parentElement.classList.add('toggle-faq')
            }else if(header.parentElement.classList.contains('toggle-faq')){
                header.parentElement.classList.remove('toggle-faq')
            }
        })
    })
}
function removeClassToggle(objects){
    objects.forEach(obj => {
        if(obj.parentElement.classList.contains('toggle-faq')){
            obj.parentElement.classList.remove('toggle-faq')
        }
    })
}
function addActiveClass(){
    document.addEventListener('click', (e) => {
        if(e.target.id === 'email'){
            inputBoxes.forEach(inputBox =>{
                if(!inputBox.classList.contains('active')){
                    removeActiveClass()
                    e.target.parentElement.classList.add('active')
                }
            })
        }
        if(e.target.id !== 'email'){
            inputBoxes.forEach(inputBox =>{
                if(inputBox.classList.contains('active')){
                    if(inputBox.querySelector('input').value == ''){
                        inputBox.classList.remove('active')
                    }
                }
            })
        }
    })
    getStartedInputs.forEach(input => {
        input.addEventListener('keyup', () => {
            if(input.value !== ''){
                if(!input.parentElement.classList.contains('active')){
                    input.parentElement.classList.add('active')
                }
            }
        })
    })
}
function removeActiveClass(){
    inputBoxes.forEach(inputBox =>{
        if(inputBox.classList.contains('active')){
            inputBox.classList.remove('active')
        }
    })
}