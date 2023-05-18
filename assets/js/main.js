$(() =>{
const forms = $("#searchBox .form")


let lupas = $(".firsti, .secondi, .thirdi")



lupas.on("click", function(){
    forms.css("background-color", "inherit")
    
    if($(this).hasClass("firsti")){
        $(this).parent().css("background-color", "green")
    }
    else if($(this).hasClass("secondi")){
        $(this).parent().css("background-color", "yellow")

    }
    else if($(this).hasClass("thirdi")){
        $(this).parent().css("background-color", "cyan")
        
    }
})






})