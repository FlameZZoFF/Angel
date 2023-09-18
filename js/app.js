const tabs = document.querySelectorAll('.tab_button')
const tabsContent = document.querySelectorAll('.tab')
const tab1scroll = document.querySelector('.main_block2')
const headerLink1 = document.querySelector('.header_link_1')
const headerLink2 = document.querySelector('.header_link_2')
const headerLink3 = document.querySelector('.header_link_3')
const headerLink4 = document.querySelector('.header_link_4')
const headerLink5 = document.querySelector('.header_link_5')
const headerLink6 = document.querySelector('.header_link_6')

const mainblock1 = document.querySelector('.main_block2')
const mainblock2 = document.querySelector('.main_block3')
const mainblock3 = document.querySelector('.main_block4')
const mainblock4 = document.querySelector('.cost_wrapper')
const mainblock5 = document.querySelector('.footer')

headerLink1.addEventListener('click',(e)=>{
  mainblock1.scrollIntoView({behavior:'smooth'})
  
})

headerLink2.addEventListener('click',(e)=>{
  mainblock2.scrollIntoView({behavior:'smooth'})
  
})

headerLink3.addEventListener('click',(e)=>{
  mainblock3.scrollIntoView({behavior:'smooth'})
  
})

headerLink4.addEventListener('click',(e)=>{
  mainblock4.scrollIntoView({behavior:'smooth'})
  
})

headerLink5.addEventListener('click',(e)=>{
  mainblock5.scrollIntoView({behavior:'smooth'})
  
})

tabs.forEach((tab)=>{
    tab.addEventListener('click',(e)=>{ 
      tabs.forEach((tab)=>{
        tab.classList.remove('active_span')
      })
      tab.classList.add('active_span')
      e.preventDefault()
      tabsContent.forEach((content)=>{
        if(tab.id == content.id){
          content.classList.add('active_tab')
        }else{
          content.classList.remove('active_tab')
        }

        
  
      })
    })
  })
