window.addEventListener('DOMContentLoaded', function(){
    
    // search_line

    document.querySelector('.search__icon').addEventListener('click', function(event){
        document.querySelector('.search__line').classList.remove('search__line__not_active')
    })
    document.querySelector('.search__line__close_icon').addEventListener('click', function(event){
        document.querySelector('.search__line').classList.add('search__line__not_active')
    })

    // steps

    document.querySelectorAll('.how__steps__step__btn').forEach(function(stepBtn) {
        stepBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path
            document.querySelectorAll('.how__content').forEach(function(block) {
                block.classList.remove('how__content__active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('how__content__active')
        })
    })

    // faq_blocks

    document.querySelectorAll('.faq__block__btn').forEach(function(faqBlock){
        faqBlock.addEventListener('click', function(event) {
            const faqPath = event.currentTarget.dataset.path
            document.querySelector(`[data-target="${faqPath}"]`).classList.toggle('faq__block__not_active')
        })
    })
})