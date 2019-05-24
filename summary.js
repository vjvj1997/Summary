function addition() {
			var a = parseFloat(document.getElementById('a').value);
			var b = parseFloat(document.getElementById('b').value);
//			f = (a + '').split ('.') [1],
//			e = (b + '').split ('.') [1],


//			if (isNaN(f)===true) f=1;
//			if (isNaN(e)===true) e=1;
 
			var c = a + b;
 
			document.getElementById('result').innerHTML = c;
		}