//alert('hello');
//calculating age in days

function ageInDays() {
	var birthYear=prompt('What year were you born');
	var dt=new Date();
	var currYear=dt.getFullYear();
	var age=(currYear-birthYear)*365;
	var h1=document.createElement('h1');
	var ans=document.createTextNode('Your age in days is '+ age);
	h1.setAttribute('id','aid');
	h1.appendChild(ans);
	document.getElementById('flex-box-result').appendChild(h1);
	//console.log(age);
}

function getZodiac() {
	var month=prompt('Enter the month number');
	var day=prompt('Enter the day');
	var zodiac;
	if((month==1 && day>=20) || (month==2 && day<=18))
		zodiac='Aquarius';
	else if((month==2 && day>=19) || (month==3 && day<=20))
		zodiac='Pisces';
	else if((month==3 && day>=21) || (month==4 && day<=19))
		zodiac='Aries';
	else if((month==4 && day>=20) || (month==5 && day<=20))
		zodiac='Taurus';
	else if((month==5 && day>=21) || (month==6 && day<=20))
		zodiac='Gemini';
	else if((month==6 && day>=21) || (month==7 && day<=22))
		zodiac='Cancer';
	else if((month==7 && day>=23) || (month==8 && day<=22))
		zodiac='Leo';
	else if((month==8 && day>=23) || (month==9 && day<=22))
		zodiac='Virgo';
	else if((month==9 && day>=23) || (month==10 && day<=22))
		zodiac='Libra';
	else if((month==10 && day>=23) || (month==11 && day<=21))
		zodiac='Scorpio';
	else if((month==11 && day>=22) || (month==12 && day<=21))
		zodiac='Sagittarius';
	else if((month=12 && day>=22) || (month==1 && day<=19))
		zodiac='Capricorn';

	var h2=document.createElement('h2');
	var res=document.createTextNode('Your zodiac sign is '+zodiac);
	h2.setAttribute('id','zod');
	h2.appendChild(res);
	document.getElementById('Zodiac').appendChild(h2);
}

function reset() {
	document.getElementById('aid').remove();
	document.getElementById('zod').remove();
}
