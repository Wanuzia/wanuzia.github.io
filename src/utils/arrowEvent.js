const data =[
{
    id: '#education',
    className: '.education-skills'
},
{
    id: '#languages',
    className: '.languages-skills'
},
{
    id: '#technical',
    className: '.computer-skills'
},
{
    id:'#volunteer',
    className: '.volunteer-experience'
}
]



function arrowEvent(id, className) {
    const arrowSpan = document.querySelector(id);
    const paragraphSkill = document.querySelector(className);
                  
    arrowSpan.addEventListener('click', () => {
    paragraphSkill.classList.toggle('hidden');
    });
}

data.map((item) => arrowEvent(item.id, item.className));
