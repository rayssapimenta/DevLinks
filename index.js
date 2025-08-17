function toggleModel(){
    const html = document.documentElement
    
    html.classList.toggle('light')

    const img = document.querySelector("#profile img")

if(html.classList.contains('light')){
    img.setAttribute('src','https:\\github.com/rayssapimenta.png')
    //document.documentElement.querySelector('alt')
}else{
    img.setAttribute('src','./assets/dark.png')

}
}