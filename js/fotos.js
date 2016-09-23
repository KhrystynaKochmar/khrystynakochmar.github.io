var images = []

function createArray(){
	
var galeria = document.getElementsByClassName("imagemGaleria").length - 1;
 images = []

for(var i = 0; i <= galeria; i++){

	//alert(document.getElementsByClassName("imagemGaleria")[i].firstChild.attributes[0].value;)
	var value = document.getElementsByClassName("imagemGaleria")[i].firstChild.getAttribute("src");
	images.push(value)

}

console.log(images)
}




console.log(images)

function imgGallery(event) {
	
	console.log(event)
	
	console.log(event.target)
	console.log(event.target)
	
    var flag;
    //Overlay
    var overlay = document.createElement("div");
    overlay.style.background = "rgba(0,0,0,0.7)";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.zIndex = "10";
    overlay.addEventListener("click", function() {
        document.body.removeChild(overlay);
        document.body.style = "  ";
    })

    //Modal
    var modal = document.createElement("div");
    modal.style.background = "white";
    modal.style.width = "60%";
    modal.style.height = "80%";
    modal.style.padding = "20px";
    modal.style.borderRadius = "15px";
    modal.style.position = "relative";
    modal.style.top = "10%";
    modal.style.zIndex = "11";
    modal.style.margin = "auto";
    modal.addEventListener("click", function(event) {
        event.stopPropagation();
    })
	
	var modal_esc = document.createElement("img");
	 modal_esc.src = "img/esc-01.png";
	 modal_esc.style.position = "absolute";
     modal_esc.style.top = "30px";
	 modal_esc.style.right = "40px";	
	
	modal_esc.className = "js-image";

	
	 modal_esc.addEventListener("click", function() {
        document.body.removeChild(overlay);
        document.body.style = "  ";
    })
	
	
	var modal_right = document.createElement("img");
		modal_right.src = "img/d.png";
		modal_right.style.position = "absolute";
		modal_right.style.top = "calc( 80% / 2)";
		modal_right.style.right = "40px";
		modal_right.className = "js-image";
		
		
		modal_right.addEventListener('click', function(){
				var img = document.querySelector("#currentImage").getAttribute("src");
				var index = images.indexOf(document.querySelector("#currentImage").attributes["1"].value)
				index++;
		
				if(index <= (images.length -1)){
				var src = images[index];
						
				document.getElementById("titulo").innerHTML = document.getElementsByClassName("imagemGaleria")[index].firstChild.getAttribute("data-title")	
					document.getElementById("desc").innerHTML = document.getElementsByClassName("imagemGaleria")[index].firstChild.getAttribute("data-description")
				document.querySelector("#currentImage").src =  src
			}
			
			
			
			})


modal.appendChild(modal_right);	




	var modal_left = document.createElement("img");
		modal_left.src = "img/e.png";
		modal_left.style.position = "absolute";
		modal_left.style.top = "calc( 80% / 2)";
		modal_left.style.left = "40px";
		modal_left.className = "js-image";
		
		
		modal_left.addEventListener('click', function(){
				var img = document.querySelector("#currentImage").getAttribute("src");
				
			
				var index = images.indexOf(document.querySelector("#currentImage").attributes["1"].value)
				index--;

				if(index >= 0){
	
				var src = images[index];
				document.querySelector("#currentImage").src =  src
				
				document.getElementById("titulo").innerHTML = document.getElementsByClassName("imagemGaleria")[index].firstChild.getAttribute("data-title")	
				document.getElementById("desc").innerHTML = document.getElementsByClassName("imagemGaleria")[index].firstChild.getAttribute("data-description")
			}
			})


modal.appendChild(modal_left);	








	modal.appendChild(modal_esc);
	overlay.appendChild(modal);
	
	

    //Img
    var image = document.createElement("img");
	image.id="currentImage";
    image.src = event.target.attributes["src"].value;
    image.style.maxWidth = "80%";
    image.style.maxHeight = "80%";
    image.style.display = "block";

    image.style.margin = "auto";
    modal.appendChild(image);

    //Ttulo
    var titulo = document.createElement("h3");
	titulo.style.color = "#111820";
	titulo.id="titulo";
    var texto = document.createTextNode(event.target.attributes["data-title"].value);
    titulo.appendChild(texto);
    modal.appendChild(titulo);

    //Descricao
    var desc = document.createElement("p");
	desc.style.color = "#111820";
	desc.id="desc";
    texto = document.createTextNode(event.target.attributes["data-description"].value);
    desc.style.marginTop = "15px";
    desc.appendChild(texto);
    modal.appendChild(desc);

    flag = false;
    if (flag === false) {
        document.body.appendChild(overlay);
        document.body.style.overflow = "hidden";
        flag = true;

    }
}


