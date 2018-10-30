function checkPesel()
{
	var nrPesel=document.getElementById("pesel").value;
	if(nrPesel.length==11)
	{
		if(Number(nrPesel))
		{
				
			if((nrPesel[9]=="0")||(nrPesel[9]=="2")||(nrPesel[9]=="4")||(nrPesel[9]=="6")||(nrPesel[9]=="8"))
			{
				document.getElementById("plec").style.color="blue";
				document.getElementById("plec").innerHTML="Kobieta";
				sumCRT(nrPesel);
				dateBirhday(nrPesel);
			}
			else if((nrPesel[9]=="1")||(nrPesel[9]=="3")||(nrPesel[9]=="5")||(nrPesel[9]=="7")||(nrPesel[9]=="9"))
			{
				document.getElementById("plec").style.color="blue";
				document.getElementById("plec").innerHTML="Mężczyzna";
				sumCRT(nrPesel);
				
				dateBirhday(nrPesel);
			}
			else
			{
				alert("Brak zdefiniowanej płci");
			}
		}
		else
		{
			alert("W ciągu nie występują cyfry");
		}
	}
	else
	{
		alert("Zła długość numeru pesel");
	}

}
function sumCRT(nrPesel2)
{
	var suma = (9*nrPesel2[0])+(7*nrPesel2[1])+(3*nrPesel2[2])+(1*nrPesel2[3])+(9*nrPesel2[4])+(7*nrPesel2[5])+(3*nrPesel2[6])+(1*nrPesel2[7])+(9*nrPesel2[8])+(7*nrPesel2[9]);
	var reszta=suma%10;
	if(reszta==nrPesel2[10])
	{
		document.getElementById("prawidlowy").style.color="blue";
		document.getElementById("prawidlowy").innerHTML="pesel prawidłowy";

	}
	else
	{
		document.getElementById("prawidlowy").style.color = "red";
		document.getElementById("prawidlowy").innerHTML="pesel nie prawidłowy";
	}
}
function dateBirhday(nrPesel)
{
	var day=nrPesel[4]+nrPesel[5];
	var month=nrPesel[2]+nrPesel[3];
	var year=nrPesel[0]+nrPesel[1];
	
	if((month>=21)&&(month<=32))
	{
		document.getElementById("date").style.color="blue";
		document.getElementById("date").innerHTML=day+" "+month+" "+"20"+year;
	}
	else if((month>=1)&&(month<=12))
	{
		document.getElementById("date").style.color="blue";
		document.getElementById("date").innerHTML=day+" "+month+" "+"19"+year;
	}
}

