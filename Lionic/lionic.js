window.addEventListener('DOMContentLoaded', function(){
    document.querySelector('.products_li').addEventListener('mouseover', function(event){
        document.querySelector('.products__menu').classList.remove('not_active')
    })
    document.querySelector('.products_li').addEventListener('mouseout', function(event){
        document.querySelector('.products__menu').classList.add('not_active')
    })

    document.querySelectorAll('.occupation__cards__card').forEach(function(card){
        card.addEventListener('mouseover', function(event){
            const path = event.currentTarget.dataset.path
            document.querySelector(`[data-target="${path}"]`).style.backgroundColor = '#3172b9';
            document.querySelector(`[data-target="${path}"]`).querySelectorAll('.occupation__cards__card__txt').forEach(function(txt){
                txt.style.color = '#ffffff';
            })
            document.querySelector(`[data-target="${path}"]`).querySelector('.white_icon').classList.add('card_active')
            
        })
        card.addEventListener('mouseout', function(event){
            const path = event.currentTarget.dataset.path
            document.querySelector(`[data-target="${path}"]`).style.backgroundColor = '#ffffff';
            document.querySelector(`[data-target="${path}"]`).querySelectorAll('.occupation__cards__card__txt').forEach(function(txt){
                txt.style.color = '#1c1c1c';
            })
            document.querySelector(`[data-target="${path}"]`).querySelector('.white_icon').classList.remove('card_active')
            
        })
    })
})