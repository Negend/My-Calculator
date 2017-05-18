clear()
function clear (){
	equation=[]
	print = document.getElementsByClassName('display')
	print[0].value = 'start'
}


var buttons = document.getElementsByClassName('number');


for (var i = 0; i < buttons.length; i++){
	var button = buttons[i];
	button.addEventListener('click', function(event){
		console.log(this.value)
		print[0].value = this.value
		equation.push(this.value)
	})
}


var buttono = document.getElementsByClassName('operator');


for (var i = 0; i < buttono.length; i++){
	var button = buttono[i];
	button.addEventListener('click', function(event){
		console.log(this.value)
		print[0].value = this.value
		equation.push(this.value)
		op = this.value

	})
}




var equate = document.getElementsByClassName('eq')
for (var i = 0; i < equate.length; i++){
button=equate[0]
button.addEventListener('click',function(event){
	math = equation.join('').split(op)
	
	switch(op){
		case "/" :
			var answer =  Number(math[0]) / Number(math[1])
			print[0].value = answer 
			console.log(answer)


		break;
		case "+" :
			var answer =  Number(math[0]) + Number(math[1])
			print[0].value = answer 
			console.log(answer)

		break;
		case "-" :
			var answer =  Number(math[0]) - Number(math[1])
			print[0].value = answer 
			console.log(answer)

		break;
		case "*" :

			var answer =  Number(math[0]) * Number(math[1])
			print[0].value = answer 
			console.log(answer)
		break;
	}

})}

var clean = document.getElementsByClassName('clear')
button=clean[0]
button.addEventListener('click',function(event){
    clear()
})	











