// etape_1
function etape_1(){
	var image_list = document.getElementsByTagName("img");
	var nbImage = image_list.length;


	for (var i = 0; i < nbImage; i++){
		var src = image_list[i].src;
		console.log('image' + i + " : " + src);		

	}
}

function etape_2(){
	var section_list = document.querySelectorAll(".section");
	var nbSection  = section_list.length;

	for (var i = 0; i < nbSection; i++) {
		console.log('class section n°' + i + ' nbEnfant : ' + section_list[i].childElementCount);
		var nbH2 = section_list[i].getElementsByTagName("h2").length;
		for (var j = 0; j < nbH2; j++) {
			console.log('Titre H2 n°' + i + ' : ' + section_list[i].getElementsByTagName("h2")[j].textContent);
		};
	};
}

function etape_3(){

	var link = document.querySelectorAll("nav li a");

	for (var i = 0; i < link.length; i++) {
		link[i].addEventListener("mouseover", function(){
			console.log(this.href);
		})
	}

	var slides = document.querySelectorAll(".slide");
	console.log(slides);

	for (var i = 0; i < slides.length; i++) {
		slides[i].setAttribute("data-index", i);
		slides[i].addEventListener("click", function(e){
			var i = parseInt(this.getAttribute("data-index")) + 1;
			if(i >= slides.length){
				i=0;
			}
			slides[i].classList.toggle("slide-visible");
			this.classList.toggle("slide-visible");
		})
	};

}


function etape_4(){

	var aside_block = document.querySelectorAll(".aside-block");
	console.log(aside_block);
	var aside_block_h3 = [];
	var tab = [];
	var content = [];
	for(var i=0; i < aside_block.length; i++){
		aside_block_h3[i] = aside_block[i].querySelectorAll("h3");
		var h3 = aside_block[i].querySelectorAll(".block-header h3");
		var textContent = aside_block[i].querySelectorAll(".block-body p");
		content = [];
		for(var j = 0; j < h3.length; j++){
			textH3 = h3[j].innerHTML;
			for(var h = 0; h < textContent.length; h++){
				content[h] = textContent[h].innerHTML;
			}
			var o = {
				'titre' : textH3,
				'content' : content
			};
			console.log("o : ")
			console.log(o);
		}
		tab[i] = o;  

	}	
	//console.log(aside_block_h3);
	console.log("tab : "); 
	console.log(tab);


}


function etape_5(){

	var form = document.querySelectorAll("form")[0];
	console.log(form);
	var fieldCount = form[0].childElementCount;
	var inputText = [];
	var index = 0;
	console.log("Champs dans le formaulaire : " + fieldCount);
	var input = form.querySelectorAll("input");
	var select = form.querySelectorAll("select")[0];
	var firstChildSelect = select.children[0];
	firstChildSelect.selected = "true";
	var firstChildSelectContent = firstChildSelect.innerHTML;
	console.log(firstChildSelectContent);
	console.log(select);
	for(var i = 0; i < input.length; i++){
		if(input[i].type == "text"){
			console.log(input[i].type);
			inputText[index] = input[i];
			inputText[index].value = "Default";
			index++;
		}
	}
	console.log(inputText);
	var submit = form.querySelectorAll("button")[0];
	console.log(submit);

	form.addEventListener("submit", function(e){
		console.log("submit");
	})


}


function etape_7(){

	var addField = document.querySelectorAll("#add-field-btn")[0];
	console.log(addField);
	var addCheckBoxes = document.querySelectorAll("#add-checkbox-btn")[0];
	console.log(addCheckBoxes);
	var form = document.querySelectorAll(".block-body form")[0];
	console.log(form);
	var fieldsetsform  = form.querySelectorAll("fieldset");
	var fisrtFieldSetForm = fieldsetsform[0];
	var lastfieldSetFrom = fieldsetsform[fieldsetsform.length-1];
	console.log(lastfieldSetFrom);
	console.log(fisrtFieldSetForm);
	var inputTextAppend = document.createElement("INPUT");
	console.log(inputTextAppend);
	addField.addEventListener("click", function(e){
    	inputTextAppend.setAttribute("type", "text");
    	fisrtFieldSetForm.appendChild(inputTextAppend);
	});
	addCheckBoxes.addEventListener("click", function(e){
    	inputTextAppend.setAttribute("type", "checkbox");
    	lastfieldSetFrom.appendChild(inputTextAppend);
	});

}



function etape_8(){

	window.alert(document.location);
	var form = document.querySelectorAll(".block-body form")[0];
	var btnsSubmit = form.querySelectorAll("button");
	var inputsText = form.querySelectorAll("input[type='text']");
	var inputsCheckbox = form.querySelectorAll("input[type='checkbox']");
	var select = form.querySelectorAll("select")[0];
	var formValide = true;
	console.log(inputsText);
	for(var i = 0; i < btnsSubmit.length; i++){
		if(btnsSubmit[i].type == "submit"){
			var btnSubmit = btnsSubmit[i];
			btnSubmit.addEventListener("click", function(e){
				e.preventDefault();
				formValide = true;
				for(var i = 0; i < inputsText.length; i++){
					if(inputsText[i].checkValidity() == false)
						formValide = false;
				}
				if(formValide == true){
					window.alert("Valide!");
					var json = {};
					for(var i = 0; i < inputsText.length; i++){
						json[inputsText[i].name] = inputsText[i].value;
					}
					for(var i = 0; i < inputsCheckbox.length; i++){
						json[inputsCheckbox[i].value] = inputsCheckbox[i].checked;
					}
					var options = document.querySelectorAll("option");
					for(var i = 0; i < options.length; i++){
						json[options[i].value] = options[i].selected;
					}
					console.log(json);
					form.submit();
					alert(document.location);
				}
				else{
					window.alert("Invalide!");
				}
			});
		}
	}
}