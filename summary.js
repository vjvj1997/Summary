function addition() {
			var a = parseFloat(document.getElementById('a').value),
			b = parseFloat(document.getElementById('b').value),
			f = (a + '').split ('.') [1],
			e = (b + '').split ('.') [1],

			//if (isNaN(a)===true) a=0;
			//if (isNaN(b)===true) b=0;
 
			c = (a * f) / f + (b * e) / e;
 
			document.getElementById('result').innerHTML = c;
		}