window.addEventListener('DOMContentLoaded', function(){

  document.querySelector('.header__cabinet__enter').addEventListener('mouseover', function(event){
    document.querySelector('.header__cabinet__arrow__path').style.fill = '#F0BF5F'
  })
  document.querySelector('.header__cabinet__enter').addEventListener('mouseout', function(event){
    document.querySelector('.header__cabinet__arrow__path').style.fill = '#CC9933'
  })
  document.querySelector('.header__cabinet__enter').addEventListener('mousedown', function(event){
    document.querySelector('.header__cabinet__arrow__path').style.fill = '#A47312'
  })
  document.querySelector('.header__cabinet__enter').addEventListener('click', function(event){
    document.querySelector('.header__cabinet__arrow__path').style.fill = '#CC9933'
  })

  document.querySelectorAll('.special__cards__left__pic').forEach(function(block){
    block.addEventListener('mouseover', function(event){
      const path = event.currentTarget.dataset.path
      document.querySelector(`[data-target="${path}"]`).style.paddingRight = '15px'
    })
  })
  document.querySelectorAll('.special__cards__left__pic').forEach(function(block){
    block.addEventListener('mouseout', function(event){
      const path = event.currentTarget.dataset.path
      document.querySelector(`[data-target="${path}"]`).style.paddingRight = '7px'
    })
  })

  document.querySelectorAll('.menu__cards__card').forEach(function(block){
    block.addEventListener('mouseover', function(event){
      const path = event.currentTarget.dataset.path
      document.querySelector(`[data-target="${path}"]`).style.marginRight = '15px'
      document.querySelector(`[data-target="${path}"]`).style.color = '#F0BF5F'
    })
  })
  document.querySelectorAll('.menu__cards__card').forEach(function(block){
    block.addEventListener('mouseout', function(event){
      const path = event.currentTarget.dataset.path
      document.querySelector(`[data-target="${path}"]`).style.marginRight = '7px'
      document.querySelector(`[data-target="${path}"]`).style.color = '#CC9933'
    })
  })
  document.querySelectorAll('.menu__cards__card').forEach(function(block){
    block.addEventListener('mousedown', function(event){
      const path = event.currentTarget.dataset.path
      document.querySelector(`[data-target="${path}"]`).style.color = '#A47312'
    })
  })
  document.querySelectorAll('.menu__cards__card').forEach(function(block){
    block.addEventListener('click', function(event){
      const path = event.currentTarget.dataset.path
      document.querySelector(`[data-target="${path}"]`).style.color = '#CC9933'
    })
  })
})