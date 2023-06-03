function push()
{
	x=parseInt(prompt("Enter a number to push into stack"))
	if(!isNaN(x)) 
	{
		t = document.getElementsByTagName('tr')
		t[0].appendChild(document.createElement('th')).innerHTML=x
	}
}
function pop()
{
	t = document.getElementsByTagName('th')
	if(t.length>0)
		t[t.length-1].remove()
}