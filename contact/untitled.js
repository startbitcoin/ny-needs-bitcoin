var closureAlert = function(){
	var x = 0;
	var alerter = function(){
		alert(++x);
	};
	return alerter;
};

var add = function(num){
	var num1 = num;
	var addToNum1 = function(num2){
		return num1 + num2;
	};
	return addToNum1;
};

var addTwo = add(2);

addTwo(3);

var square = function(num){
	var squareMe = function(num2){
		return Math.exp(num, 2);
	};
	return squareMe;
};

var square2 = square(5);

square2(5);

function counter(){
	var n = 0;
	return {
	 	count: function() { return n++; },
	 	reset: function(){ n=0; }
	};
}

var scope = "global scope";
function checkscope(){
	var scope = "local scope";
	function innerFunc()
}

var Car = function(){
var gasolineLevel = 10;	    
	function useGas(amt){
		if((gasolineLevel - amt)< 0){ console.log("out of gas :(") 
	} else { gasolineLevel -= amt; }	
	};
	return {
radioStation: "104.5",
changeStation: function(station){
			this.radioStation = station;
		},
		go: function(speed){ useGas(speed); }
	}
}
