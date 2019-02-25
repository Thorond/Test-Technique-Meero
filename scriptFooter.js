var flecheMonte = document.querySelector(".flecheRemonte");
var section = document.querySelector("section");
var remonte = false;
var inter ;
var footer = document.querySelector("footer");


section.addEventListener("click", function(){ // lorsque l'utilisateur clique sur un endroit de la page, le défilement s'arrête 
	if ( remonte ) {
		clearInterval(inter);
		remonte = false ;
	}
});

flecheMonte.addEventListener("click", function() {  // initiale le processus de défilement
	remonte = true;
	inter = setInterval("remont()",1);
});

function remont(){
	if ( document.body.scrollTop != 0 ) { // pour chrome et autre 
		if ( remonte ) {
			document.body.scrollTop = document.body.scrollTop - 3 ;
		}
		if ( document.body.scrollTop < 1 ){
			remonte = false ;
			clearInterval( inter );
		}
	} 
	if ( document.documentElement.scrollTop != 0 ) { // pour firefox , ici le fait de monter est saccadé .. 
		if ( remonte ) {
			document.documentElement.scrollTop = document.documentElement.scrollTop - 2 ;
		}
		if ( document.documentElement.scrollTop < 1 ){
			remonte = false ;
			clearInterval( inter );
		}
	}
	
}


