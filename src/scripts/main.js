document.addEventListener('DOMContentLoaded', function(){
    const logoButton = document.getElementById('logo_button');
    const bLeft = document.getElementById('button_left');
    const bRight = document.getElementById('button_right');

    const bSummary = document.getElementById('button_summary');
    const bComics = document.getElementById('button_comics');

    const bProduction1= document.getElementById('productionButton1');
    const bProduction2= document.getElementById('productionButton2');
    const bProduction3= document.getElementById('productionButton3');
    const tTexto1= document.getElementById('production_text_1');
    const tTexto2= document.getElementById('production_text_2');
    const tTexto3= document.getElementById('production_text_3');


    logoButton.addEventListener('click', function() {
        bLeft.classList.toggle('home_logo_menu_left-is-active');
        bRight.classList.toggle('home_logo_menu_right-is-active');
    });


    bComics.addEventListener('click', function() {
        const cSummary = document.getElementById('content_summary');
        const cComics = document.getElementById('content_comics');
        cSummary.classList.add('inactive');
        cComics.classList.remove('inactive');
        bComics.classList.remove('dark_button');
        bSummary.classList.add('dark_button');
        

        })
    bSummary.addEventListener('click', function(){
        const cSummary = document.getElementById('content_summary');
        const cComics = document.getElementById('content_comics');
        cSummary.classList.remove('inactive');
        cComics.classList.add('inactive');
        bComics.classList.add('dark_button');
        bSummary.classList.remove('dark_button');
    })

    bProduction2.addEventListener('click', function(){
        tTexto1.classList.add('inactive');
        tTexto2.classList.remove('inactive');
        tTexto3.classList.add('inactive');
        bProduction1.classList.add('dark_button');
        bProduction2.classList.remove('dark_button');
        bProduction3.classList.add('dark_button');
    })
    bProduction3.addEventListener('click', function(){
        tTexto1.classList.add('inactive');
        tTexto2.classList.add('inactive');
        tTexto3.classList.remove('inactive');
        bProduction1.classList.add('dark_button');
        bProduction2.classList.add('dark_button');
        bProduction3.classList.remove('dark_button');
    })
    bProduction1.addEventListener('click', function(){
        tTexto1.classList.remove('inactive');
        tTexto2.classList.add('inactive');
        tTexto3.classList.add('inactive');
        bProduction1.classList.remove('dark_button');
        bProduction2.classList.add('dark_button');
        bProduction3.classList.add('dark_button');
    })

    bRight.addEventListener('click', function(){
        const categoryElement = document.getElementById('production');
        categoryElement.scrollIntoView({ behavior: 'smooth' });
    })
    bLeft.addEventListener('click', function(){
        const categoryElement = document.getElementById('story');
        categoryElement.scrollIntoView({ behavior: 'smooth' });
    })

})


