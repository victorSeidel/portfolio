const portfolioData = 
[
    {
        id: 1,
        title: "Hermoso Nombre - E-commerce",
        category: "web",
        description: "Plataforma de e-commerce completa com sistema de pagamento integrado e painel administrativo. </br> HTML, CSS, JavaScript, Node.js, MySQL",
        image: "",
        technologies: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "MongoDB"],
        link: "#",
        github: "https://github.com/victorSeidel/hermoso-nombre-ecommerce"
    },

    {
        id: 2,
        title: "Health Track - Gestão Clínica",
        category: "software",
        description: "Software de gerenciamento hospitalar com registro total de dados dos pacientes. </br> Java, Java Swing, MySQL",
        image: "img/ht-1.png",
        technologies: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "MongoDB"],
        link: "#",
        github: "https://github.com/victorSeidel/health-track"
    },

    {
        id: 3,
        title: "Jogos",
        category: "jogos",
        description: "Jogos desenvolvidor por mim para venda comercial, aprendizado e competições. </br> Unity3D, Unity2D, C#",
        image: "img/jg-1.png",
        technologies: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "MySQL"],
        link: "#",
        github: "https://yviniv.itch.io/"
    },

    {
        id: 4,
        title: "Money Flow - Financial Control",
        category: "web",
        description: "Aplicação para controle e gestão financeira e gestão de inventário de empresas. </br> Java, Spring Web, JavaScript, jQuery, HTML, CSS, Bootstrap",
        image: "img/mf-1.png",
        technologies: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "MongoDB"],
        link: "#",
        github: "https://github.com/victorSeidel/money-flow"
    },
];

const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#nav');
const header = document.querySelector('#header');
const backToTopBtn = document.querySelector('.back-to-top');
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioContainer = document.querySelector('#portfolio-container');
const testimonialItems = document.querySelectorAll('.testimonial-item');
const sliderBtns = document.querySelectorAll('.slider-btn');
const form = document.querySelector('#form');
const year = document.querySelector('#year');

navToggle.addEventListener('click', () => 
{
    nav.classList.toggle('active');
});

document.querySelectorAll('#nav a').forEach(link => 
{
    link.addEventListener('click', () => 
    {
        nav.classList.remove('active');
    });
});

window.addEventListener('scroll', () => 
{
    if (window.scrollY > 100) 
    {
        header.classList.add('scrolled');
    } 
    else 
    {
        header.classList.remove('scrolled');
    }

    if (window.scrollY > 300) 
    {
        backToTopBtn.classList.add('active');
    } 
    else 
    {
        backToTopBtn.classList.remove('active');
    }
});

backToTopBtn.addEventListener('click', () => 
{
    window.scrollTo
    ({
        top: 0,
        behavior: 'smooth'
    });
});

year.textContent = new Date().getFullYear();

filterBtns.forEach(btn => 
{
    btn.addEventListener('click', () => 
    {
        filterBtns.forEach(btn => btn.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        filterPortfolio(filter);
    });
});

function filterPortfolio(filter) 
{
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => 
    {
        if (filter === 'all' || item.classList.contains(filter)) 
        {
            item.style.display = 'block';
        } 
        else 
        {
            item.style.display = 'none';
        }
    });
}

function loadPortfolio() 
{
    let output = '';
    
    portfolioData.forEach(item => 
    {
        output += `
            <div class="portfolio-item ${item.category}">
                <img src="${item.image}" alt="${item.title}" class="portfolio-img">
                <div class="portfolio-overlay">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                    <a href="${item.github}" class="btn">Link</a>
                </div>
            </div>
        `;
    });
    
    portfolioContainer.innerHTML = output;
}

let currentSlide = 0;

function showSlide(index) 
{
    testimonialItems.forEach(item => item.classList.remove('active'));
    sliderBtns.forEach(btn => btn.classList.remove('active'));
    
    testimonialItems[index].classList.add('active');
    sliderBtns[index].classList.add('active');
    currentSlide = index;
}

sliderBtns.forEach(btn => 
{
    btn.addEventListener('click', () => 
    {
        const slideIndex = parseInt(btn.getAttribute('data-slide'));
        showSlide(slideIndex);
    });
});

setInterval(() => 
{
    currentSlide = (currentSlide + 1) % testimonialItems.length;
    showSlide(currentSlide);
}, 5000);

form.addEventListener('submit', (e) => 
{
    e.preventDefault();
    
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const subject = document.querySelector('#subject').value;
    const message = document.querySelector('#message').value;
    
    console.log({ name, email, subject, message });
    
    form.reset();
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => 
{
    anchor.addEventListener('click', function(e) 
{
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) 
        {
            window.scrollTo
            ({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

window.addEventListener('DOMContentLoaded', () => 
{
    loadPortfolio();
});