/*
If you're somehow reading this, please keep the passcodes a secret
it ruins the fun of discovering the secret logs, so if you could, please...
"kindly piss off"
*/

const CORRUPTFUCK_BOMB = false; //Make sure to disable before fixing issues.


const Super_Debug = false;

  const Omni_Pass_List={
	"TimeMouseKey_000":{"Code":"Darkness","Pass_Page":"_Killertoy_NovaLog_PA_000"},
	"TimeMouseKey_001":{"Code":"Overload","Pass_Page":"_Killertoy_NovaLog_PA_001"},
	"TimeMouseKey_002":{"Code":"Lilac","Pass_Page":"_Killertoy_NovaLog_PA_002"},
}; 
var usingtouch=false;
var passdata_cloud;
var Noselect = false;
var NeverLosePass ="";
var RequirePass = false;
var Init = true;
var KAYS;
var OLD_TEXT_CLOUD =null;
var PastaKey="";
var PLR_CUR;
PreviousPage="_Hub";
SelectedPage="_Hub";
old_Pas1=["12345","_Hub","_Hub"];

   function ToBlositeresult()
{
document.getElementById("ResultBlos").innerHTML = Translate(document.getElementById("ToBlos").value,true);

}

function FromBlositeresult()
{

document.getElementById("ResultHUMAN").innerHTML = Translate(document.getElementById("FromBlos").value,false);

}


//The massive code that handles the Blosite language and special text handlers//

/*
Blosite attributes:
none-Translate
Decode - Decodes Blositations
Menu - Initalizes a Menu (doesnt translate)
MenuOption - menu option (doesnt translate)
ForceTranslate - Forces the text to translate
MenuData - Holds Blosite Menu pages (doesnt translate) (max of 1 per html file!)
*/

var Humaninput= false;



function Translate(Text,Bakify=true,IsConsole,Selectable,DOITANYWAYS,Blosite_Obj,BulkBlob,ReplacementList)
{

	if(BulkBlob){//Folder = Blosite_Obj;
	return'';}
var Mojibake_Cosmium = !ReplacementList?{
"Mojibakify":["░","▒","▓","�"],
"upperprefix":"◹",
"lowerprefix":"◿",
"opensing":"▹",
"opendoub":"▸",
"closesing":"◃",
"closedoub":"◂",
".":"❯",
"?":"○",
"!":"◊",
",":"◦",
"/":"✦",
":":"◬",
";":"◕",
"-":"✏",

"a":"■",
"b":"□",
"c":"◎",
"d":"▣",
"e":"▤",
"f":"◶",
"g":"▦",
"h":"▧",
"i":"▨",
"j":"◴",
"k":"◇",
"l":"◫",
"m":"◭",
"n":"◮",
"o":"◍",
"p":"◗",
"q":"◖",
"r":"◤",
"s":"◧",
"t":"◳",
"u":"◢",
"v":"▼",
"w":"◣",
"x":"▩",
"y":"▽",
"z":"◈",
"_":"▬",
/*
	■	□	▢	▣	▤	▥	▦	▧	▨	▩	▪	▫	▬	▭	▮	▯
U+25Bx	▰	▱	▲	△	▴	▵	▶	▷	▸	▹	►	▻	▼	▽	▾	▿⬤
U+25Cx	◀	◁	◂	◃	◄	◅	◆	◇	◈	◉	◊	○	◌	◍	◎	●
U+25Dx	⬤◐◑◒◓◔	◕	◖	◗	◘	◙	◚	◛	◜	◝	◞	◟
U+25Ex	◠	◡	◢	◣	◤	◥	◦	◧	◨	◩	◪	◫	◬	◭	◮	◯
U+25Fx	◰	◱	◲	◳	◴	◵	◶	◷	◸	◹	◺	◻	◼	◽	◾	◿
*/
"one":"▖",
"two":"▗",
"three":"▝",
"four":"▘",
"five":"▚",
"six":"▛",
"seven":"▜",
"eight":"▙",
"nine":"▟",
"zero":"▞",
" ":" ",
"@":"✉",
"*":"❆",
"$":"⯏",
"|":"⬗"
}:ReplacementList;
//console.log(Mojibake_Cosmium);
const Id10t_Fixer = ["zero","one",
"two",
"three",
"four",
"five",
"six",
"seven",
"eight",
"nine"
];
const Mojibake_SingleCase_List = [" ","0","1","2","3","4","5","6","7","8","9",".",",","/","?","!",";",":","\"","'","@","*","$","|"];
const UNINEZ=[
"✬","✭","✮","✯","❧","❀","❥","❖","❴","❵","🕱","☰","☱","☲","☳","☴","☵","☶","☷","⚙","☉","☄","☼","☾","❀","🞠","🞛","◈","🞚","◇"];
//Cosmium Curenncy:
//◇[28]-Pistils (flower related)
//🞚[27]-Sepals (◇x100)
//◈[26]-Petals (🞚x100)
//🞛[25]-??? (◈x100)
const Symbol_Convert = {
"...":"⌛︎",
". . .":"⌛︎",

}
let TranText = "";
var casecheck = Text;
let Upper = false;
let sOpen = false;
let dOpen = false;
Text = Text.toLowerCase();
var r = 0;
if(Bakify)
{
		
for(r=0;r<Text.length;r++)
{


//console.log(Text[r]);
//Stepone: check if item is part of the main list or Single case list
if((Text.substr(r,5))==". . .")
{
			TranText+="⌛︎";	
	r+=5;
	continue;
}

if((Text.substr(r,7)).split(".")[0]=="&nez" || Text.substr(r,4)=="<br>"||Text.substr(r,2)=="\n"){
	if((Text.substr(r,10)).split(".")[1]=="curen")
		{
	let Calendate="";
	let W = r+10;
	let U = W-9;
	while(W<Text.length)
	{
	U = W-9;
		//console.log(Text.substr(W,1),U,W);	
	
	if(Text.substr(W,1)==";")
	{
	Calendate = (Text.substr(r,10+U-1).split(".")[2]);
	//console.log(Calendate);
	break;
	}
	W++;
	}
	TranText+=MONEYMONEY(Calendate);
	
	r+=(W-r);	
	continue;	
	}
		
	else
	if ((Text.substr(r,10)).split(".")[1]=="calen")
	{
	let Calendate="";
	let W = r+10;
	let U = W-9;
	while(W<Text.length)
	{
	U = W-9;
		//console.log(Text.substr(W,1),U,W);	
	
	if(Text.substr(W,1)==";")
	{
	Calendate = (Text.substr(r,10+U-1).split(".")[2]);
	//console.log(Calendate);
	break;
	}
	W++;
	}
	TranText+=Blos_Convert(true,Calendate);
	
	r+=(W-r);	
	continue;	
	}
	if ((Text.substr(r,10)).split(".")[1]=="cal_ez")
	{
	let Calendate="";
	let W = r+10;
	let U = W-9;
	while(W<Text.length)
	{
	U = W-9;
		//console.log(Text.substr(W,1),U,W);	
	
	if(Text.substr(W,1)==";")
	{
	Calendate = (Text.substr(r,10+U-1).split(".")[2]);
	//console.log(Calendate);
	break;
	}
	W++;
	}
	TranText+=Blos_Convert(true,Calendate,1);
	
	r+=(W-r);	
	continue;	
	}
	if ((Text.substr(r,10)).split(".")[1]=="cal_rel")
	{
	let Calendate="";
	let W = r+10;
	let U = W-9;
	while(W<Text.length)
	{
	U = W-9;
		//console.log(Text.substr(W,1),U,W);	
	
	if(Text.substr(W,1)==";")
	{
	Calendate = (Text.substr(r,10+U-1).split(".")[2]);
	//console.log(Calendate);
	break;
	}
	W++;
	}
	TranText+=Blos_Convert(true,Calendate,2);
	
	r+=(W-r);	
	continue;	
	}
	if(Text.substr(r,4)=="<br>")
	{
		TranText+="\n";	
	r+=4;	
	continue;
	}
	if(Text.substr(r,2)=="\n")
	{
	r+=2;	
	continue;
	}
	if((casecheck.substr(r,7)).split(".")[1]=="br")
	{
	//console.log("SKIP");
	TranText+="\n";	
	r+=6;
	continue;
	}else
if(!isNaN(parseInt((casecheck.substr(r,8)).split(".")[1],10)))
{
let uniNez_Key = parseInt((casecheck.substr(r,8)).split(".")[1],10);
TranText+=!UNINEZ[uniNez_Key]?Mojibake_Cosmium["Mojibakify"][3]:UNINEZ[uniNez_Key];
r+=7;
continue;
}
}

if(Object.keys(Mojibake_Cosmium).includes(Text[r])||Mojibake_SingleCase_List.includes(casecheck[r]))
{

if (Object.keys(Mojibake_Cosmium).includes(Text[r]) != Mojibake_SingleCase_List.includes(Text[r]))
{
//console.log("LETTER");//NEW CHECK FOR THE &BS-X; key
if(Mojibake_SingleCase_List.includes(Text[r])){
if(Text[r]=="'")
{sOpen = !sOpen;
TranText += Mojibake_Cosmium[sOpen?"opensing":"closesing"];}
else if(Text[r]=="\"")
{dOpen = !dOpen;
TranText += Mojibake_Cosmium[dOpen?"opendoub":"closedoub"];}
else
{
//console.log(Number(Text[r]));
if(isNaN(parseInt(Text[r],10)))
{
TranText += Mojibake_Cosmium[Text[r]];}
else{
TranText+= Mojibake_Cosmium[Id10t_Fixer[Text[r]]];
}
}
}else{
if(casecheck[r]!=Text[r])
{
let old=Upper
Upper = true;
if(old!=Upper)
{
TranText += Mojibake_Cosmium[Upper?"upperprefix":"lowerprefix"];
}
}else if (Upper && Text[r]!=" "){
Upper = false;
TranText += Mojibake_Cosmium[Upper?"upperprefix":"lowerprefix"];
}
TranText += Mojibake_Cosmium[Text[r]];
}
}else{
//console.log("SYMBOL");
if(Text[r]=="'")
{sOpen = !sOpen;
TranText += Mojibake_Cosmium[sOpen?"opensing":"closesing"];}
else if(Text[r]=="\"")
{dOpen = !dOpen;
TranText += Mojibake_Cosmium[dOpen?"opendoub":"closedoub"];}
else
{
if(isNaN(parseInt(Text[r],10)))
{
TranText += Mojibake_Cosmium[Text[r]];}
else{
TranText+= Mojibake_Cosmium[Id10t_Fixer[Text[r]]];
}

}

}
}else{
TranText += Mojibake_Cosmium["Mojibakify"][3];
}


}

//.isUpperCase();

}else{
	if(!ReplacementList){}else{
	Mojibake_Cosmium = ReplacementList;	
	}
	//console.log(Mojibake_Cosmium)
const FlipObject=function(OBJECT_){
let Mirror = new Object();
let AA = Object.keys(OBJECT_);
for(let A=0;A<AA.length;A++)
{
if(OBJECT_[AA[A]].constructor !== Array)
{
Mirror[OBJECT_[AA[A]]] = AA[A];
}
}
return Mirror;

}
let New_READONLY = FlipObject(Mojibake_Cosmium);
for(let r=0;r<Text.length;r++)
{
if((Text.substr(r,2))=="⌛︎")
{
			TranText+=". . . ";	
	r+=1;
	continue;
}
if(Text[r]==Mojibake_Cosmium["Mojibakify"][3]||!Object.values(Mojibake_Cosmium).includes(Text[r]))
{
TranText += Mojibake_Cosmium["Mojibakify"][3];
continue;
}
//console.log(New_READONLY[Text[r]])
if(New_READONLY[Text[r]]=="upperprefix")
{
Upper = true;
continue;
}
if(New_READONLY[Text[r]]=="lowerprefix")
{
Upper=false;
continue;
}

if(New_READONLY[Text[r]]=="opensing"||New_READONLY[Text[r]]=="closesing")
{
TranText+="'";
continue;
}
if(New_READONLY[Text[r]]=="opendoub"||New_READONLY[Text[r]]=="closedoub")
{
TranText+="\"";
continue;
}
if(Id10t_Fixer.includes(New_READONLY[Text[r]]))
{
TranText+= Id10t_Fixer.indexOf(New_READONLY[Text[r]]);
continue;
}
TranText+= Upper?New_READONLY[Text[r]].toUpperCase():New_READONLY[Text[r]];


}

}
return TranText;
}


function MONEYMONEY(AMOUNT)
	{
	let A = AMOUNT.split("#");	
	let Pistals = Number((A[3]%100));
	let Sepals =Number((A[2]%100)) + Math.floor((A[3])/100);
	let Petals = Number(1+(A[1])%100) + Math.floor((A[2])/100);
	let Sakuras = Number(1+(A[0])%100) + Math.floor((A[1])/100);
	return Translate((Sakuras>0?"&nez.026"+Sakuras:"")+(Petals>0?"&nez.027"+Petals:"")+(Sepals>0?"&nez.028"+Sepals:"")+(Pistals>0?"&nez.029"+Pistals:""));
	}
function Blos_Convert(translate,Text,mode=0)
{
	let A = Text.split("#");
	if(mode==0)
	{
	let Day = Number((A[4]%32))+1;
	let Month =Number((A[3]%16)+1) + Math.floor((A[4])/32);
	let Season = Number(1+(A[2]%4)) + Math.floor((A[3])/16);
	let Year = Number(1+(A[1]%4096)) + Math.floor((A[2])/4);
	let Eon =Number( (A[0])+1) + Math.floor((A[1])/4096);
	return Translate((Eon>0?"&nez.024"+Eon:"")+(Year>0?"&nez.023"+Year:"")+(Season>0?"&nez.022"+Season:"")+(Month>0?"&nez.021"+Month:"")+(Day>-2?"&nez.020"+Day:""));
	}
		if(mode==1)//Simple 1:1
	{
	}
			if(mode==2)
	{
	let Day = Number((A[4]%32))+1;
	let Month =Number((A[3]%16)+1) + Math.floor((A[4])/32);
	let Season = Number(1+(A[2]%4)) + Math.floor((A[3])/16);
	let Year = Number(1+(A[1]%4096)) + Math.floor((A[2])/4);
	let Eon =Number( (A[0])+1) + Math.floor((A[1])/4096);
	return Translate((Eon>0?"&nez.024"+Eon:"")+(Year>0?"&nez.023"+Year:"")+(Season>0?"&nez.022"+Season:"")+(Month>0?"&nez.021"+Month:"")+(Day>-2?"&nez.020"+Day:""));
	}
}

//Cooker.next();

//COOOOOOOOKIIIEEEE!!//
//source : www.w3schools.com//

function Cookie_Monster()
{
	document.cookie = "expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;Secure;SameSite=None;";
}
//There are secret documents in the archive, entering the password will unlock it

function Inital_Cookie()//Massive cookie with the secret log data flags
{
const d = new Date();
  d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  //"&" is the object splitter
  //console.log(document.querySelectorAll("Blosite[CookiePagesMeta]")[0]);
  var data = document.querySelectorAll("Blosite[CookiePagesMeta]")[0].textContent.split(',');
  for(var I=0;I<data.length;I++)
  {
	data[I] +="&false";
  }
	//console.log("?"+data.toString()+"?");
  document.cookie = "Savedas=\"?"+data.toString()+"?\";" + expires + ";SameSite=None;Secure;path=/";
}

function Pagesavecookie()
{
const d = new Date();
  d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
document.cookie = "LastPage=\""+SelectedPage+"\";" + expires + ";SameSite=None;Secure;path=/";

document.cookie = "Databackup="+(JSON.stringify(CFV))+";" + expires + ";SameSite=None;Secure;path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function Mod_Cookie(Name,flag)
{
let biscuit = getCookie("Savedas")
	 if(biscuit!="")
 {
	var A =biscuit.split("?")[1].split(",");
	//console.log(A);
	for(var I=0;I<A.length;I++)
	{
	var B = A[I].split("&");
	if(B[0].toLowerCase()==Name.toLowerCase())
	{
	B[1] =  Boolean(flag)
	}
	A[I]=B[0]+"&"+B[1];
	}
	//console.log(document.cookie);
	document.cookie="Savedas=\"?"+A.toString()+"?\";" + ";SameSite=None;Secure;path=/";
	//console.log(document.cookie);
 }else{
	//console.log("no cookie. sad");
	Inital_Cookie()
 }
} 
function Get_Cookie_Secret(Name,flag)
{
let biscuit = getCookie("Savedas")
	 if(biscuit!="")
 {
	var A = biscuit.split("?")[1].split(",");
	//console.log(A);
	for(var I=0;I<A.length;I++)
	{
	var B = A[I].split("&");
	if(B[0].toLowerCase()==Name.toLowerCase())
	{
	//console.log(Boolean(B[1]));
	return Boolean(B[1]=="true");
	}
	}
 }else{
	//console.log("no cookie. sad");
	Inital_Cookie()
 }

}	

function Cookie_Update()
{

 //Get all the password flags
var ModernData = document.querySelectorAll("Blosite[CookiePagesMeta]")[0].textContent.split(',');
var OldCookie = document.cookie.split("?")[1].split(",");
//obtain the old flags
var Collected=[];

	for(var I=0;I<OldCookie.length;I++)
	{
	var B = OldCookie[I].split("&");
	Collected[I]=B[0];
	}
  for(var I=0;I<ModernData.length;I++)
  {
	  if(!Collected.includes(ModernData[I]))
	  {
		OldCookie[I]=(ModernData+"&false"); 
	  }
  }

	//console.log(document.cookie);
	document.cookie="Savedas=\"?"+OldCookie.toString()+"?\";" + ";SameSite=None;Secure;path=/";
	//console.log(document.cookie);
}




function checkCookie() {
 if(document.cookie.startsWith("Savedas"))
 {
	//now. UPDATE THE CookieFlag
	Cookie_Update();
 }else{
	//console.log("no cookie. sad");
	Inital_Cookie()
 }
} 
if(document.getElementById("Nez.Body").hasAttribute("Cookies")){
checkCookie();
}
//Reworked system below (with my new knowledge of html-js)
let PERM_input = true;
let PERM_Passwordscreen = false;
var SELECT_DATA;
var SELECTOR_Point=0;
var SELECTOR_Max=1;
const COND_Passpage = "_Password_Novau";

var PASS_ref;
//V Error function V//
function Errorscreen(txt)
{
PERM_input=false;

if(!document.getElementById("Error_Screen"))
{
	document.getElementById("Visiblemenu").innerHTML="<b>&lt;O'&gt; We ran into a problem!</b><br>Reason:<br><span id=\"Error_Screen\"class=\"Hate\"></span>";
document.getElementById("Error_Screen").innerText =txt;

}
else	
{
document.getElementById("Error_Screen").innerText =txt;
}

}
//^ Error function ^//

//V Menudata check function V//
GET_Menu = function (start="_Hub",moar)
{
	//console.log(moar);
	var COND_PASSAGE = true;
	if(PERM_Passwordscreen&&moar.hasAttribute("_VerifyPassword"))
	{
	if(document.querySelector("Blosite[input]:not(readonly)").innerText.toLowerCase()!=Omni_Pass_List[PASS_ref]["Code"].toLowerCase())
	{
	document.querySelector("#Visiblemenu span[Announcer]").innerText="Incorrect!";
	document.querySelector("#Visiblemenu span[Announcer]").className = "Hate";
	return;
	}else{
	document.querySelector("#Visiblemenu span[Announcer]").innerText="Correct!";
	document.querySelector("#Visiblemenu span[Announcer]").className = "";
	Mod_Cookie(PASS_ref,true);
	start =Omni_Pass_List[PASS_ref]["Pass_Page"];
	}
	
	}
	PERM_Passwordscreen=(start==COND_Passpage);
	if(PERM_Passwordscreen)
	{
	if(!Omni_Pass_List[moar.getAttribute("cookieflag")])
	{
	Errorscreen("password key ("+(moar.getAttribute("cookieflag"))+") is invalid");
	return;
	}else{
	PASS_ref = moar.getAttribute("cookieflag");	
	
	}
	}
if(!document.querySelector("Blosite[MenuData]")&&!document.body.hasAttribute("NoMenu"))	
{
Errorscreen("Menudata is missing");

}
else if(document.querySelectorAll("Blosite[MenuData]").length>1)
{
Errorscreen("ONLY ONE instance a Blosite Tag can have the attribute \"MenuData\".\n \""+document.querySelectorAll("Blosite[MenuData]").length+"\" instances of Blosite containing MenuData exist!");	

}
else
{
//once the menu data is found, look for the specified page (_Hub is the default). spit error if the page doesnt exist or duplicates.
if(document.querySelectorAll("Blosite[MenuData]>Blosite["+start+"]").length==1)
{
GET_page(start);
}else if(document.querySelectorAll("Blosite[MenuData]>Blosite["+start+"]").length>1){//too many
Errorscreen(document.querySelectorAll("Blosite[MenuData]>Blosite["+start+"]").length+" Copies of \""+start+"\" exist!");
}else if(document.querySelectorAll("Blosite[MenuData]>Blosite["+start+"]").length<1&&start!="_Hub"){//too little
console.error("Requested page ("+start+") does not exist!"); //shout at the user
GET_Menu();//attempt hub find
}else{
Errorscreen("Requested page ("+start+") does not exist!");	
}
}
}
//^ Menudata check function ^//

//V Page get function V//
function GET_page(Page,concatted)
{
if (document.querySelectorAll("Blosite[MenuData]>Blosite["+Page+"]").length==0)
{
Errorscreen("Requested page ("+Page+") does not exist!");
}else if(document.querySelectorAll("Blosite[MenuData]>Blosite["+Page+"]").length>1)
{
Errorscreen(document.querySelectorAll("Blosite[MenuData]>Blosite["+Page+"]").length+" Copies of \""+start+"\" exist!");	
}else
{
if(concatted)
{
return document.querySelector("Blosite[MenuData]>Blosite["+Page+"]").innerHTML;
}
PREP_page(Page,document.querySelector("Blosite[MenuData]>Blosite["+Page+"]").hasAttribute("Secure"));

}

}

//^ Page get function ^//

//V super text function V//
function Create_SuperText(Node)
{
var Searchquery ="";
for(var c=0;c<Node.attributes.length;c++)
{
	//console.log(RESTYLE[b].attributes[c].localName);
	if((Node.attributes[c].localName).startsWith("_"))
	{
	Searchquery=Node.attributes[c].localName;
	break;
	}
}
if(Super_Debug)
{
return"<sub> ["+(Node.hasAttribute("nezid")?"nezid["+Node.getAttribute("nezid")+"] ":"")+(Node.hasAttribute(Searchquery)?"\'"+Searchquery+"\' ":"")+(Node.hasAttribute("CookieFlag")?"CookieFlag["+Node.getAttribute("CookieFlag")+"] ":"")+"]</sub>";



}	
else{
return"";	
}
}



//^ super text function ^//


//V property managing function V//
SET_PERMS = function (Page,Primal)//Primal is the data from the selected function
{

}
//^ property managing function ^//

//V Page Prepare and Set functions V//
var BLOS;
function PREP_page(Page,Primal)
{
var Temp_ID = 0;
BLOS = document.createElement("Blosite");
BLOS = document.querySelector("Blosite[MenuData]>Blosite["+Page+"]").cloneNode(true);
//console.log(BLOS);
//console.log(BLOS.querySelectorAll(":not(Blosite[MenuData]>Blosite["+Page+"])"));
var RESTYLE = BLOS.querySelectorAll(":not(Blosite[MenuData]>Blosite["+Page+"])");
for(var b=0;b<RESTYLE.length;b++)
{
//find the _page attribute
var Searchquery ="";
for(var c=0;c<RESTYLE[b].attributes.length;c++)
{
	//console.log(RESTYLE[b].attributes[c].localName);
	if((RESTYLE[b].attributes[c].localName).startsWith("_"))
	{
	Searchquery=RESTYLE[b].attributes[c].localName;
	break;
	}
}

//console.log(RESTYLE[b].nodeName);
if(RESTYLE[b].nodeName=="BLOSITE")
{
if(RESTYLE[b].hasAttribute("MenuOption"))
{

	if(RESTYLE[b].hasAttribute("_break"))
	{
		
		RESTYLE[b].style.color="#FFFF00";
		RESTYLE[b].setAttribute("Click_Broken","");
	RESTYLE[b].setAttribute("nezid",Temp_ID);
	RESTYLE[b].innerHTML+=Create_SuperText(RESTYLE[b]);
	Temp_ID++;
	}
	else if(Searchquery=="_verifypassword")
	{
	RESTYLE[b].setAttribute("Click_Safe","");
			RESTYLE[b].setAttribute("nezid",Temp_ID);
		RESTYLE[b].onclick = function(){
		Mobilelink_Set(RESTYLE[b]);}
		RESTYLE[b].innerHTML+=Create_SuperText(RESTYLE[b]);
	Temp_ID++;
	}
	else if(document.querySelectorAll("Blosite[MenuData]>Blosite["+Searchquery+"]").length!=1)
	{
		RESTYLE[b].style.color="#FF0000";
		RESTYLE[b].setAttribute("Click_Broken2","");
	RESTYLE[b].setAttribute("nezid",Temp_ID);
	RESTYLE[b].innerHTML+=Create_SuperText(RESTYLE[b]);
	Temp_ID++;
	}
	else{
	
	if(RESTYLE[b].hasAttribute("CookieFlag"))
	{
	RESTYLE[b].style.color="#FF00FF";
	RESTYLE[b].setAttribute("Click_Safe","");
	if(RESTYLE[b].hasAttribute("RedCode")&&!Get_Cookie_Secret(RESTYLE[b].getAttribute("CookieFlag")))
	{
	RESTYLE[b].style.color="#FF0000";
	RESTYLE[b].setAttribute("Click_Mystry","");
		RESTYLE[b].setAttribute("nezid",Temp_ID);
		RESTYLE[b].onclick = function(){
		Mobilelink_Set(RESTYLE[b]);}
	Temp_ID++;
	RESTYLE[b].innerHTML+=Create_SuperText(RESTYLE[b]);
	}else if(Get_Cookie_Secret(RESTYLE[b].getAttribute("CookieFlag"))){
		RESTYLE[b].setAttribute("nezid",Temp_ID);
	Temp_ID++;
	RESTYLE[b].innerHTML+=Create_SuperText(RESTYLE[b]);
	}else{
	RESTYLE[b].remove();
	RESTYLE[b+1].remove();
	}
	}else{
	RESTYLE[b].setAttribute("Click_Safe","");
		RESTYLE[b].setAttribute("nezid",Temp_ID);
	Temp_ID++;	
if(RESTYLE[b].hasAttribute("ForceTranslate"))
{	
	RESTYLE[b].innerText = Translate(RESTYLE[b].innerText,!RESTYLE[b].hasAttribute("Decode"),RESTYLE[b].hasAttribute("Menu"),RESTYLE[b].hasAttribute("MenuOption"),RESTYLE[b].hasAttribute("ForceTranslate"),RESTYLE[b],RESTYLE[b].hasAttribute("MenuData"));		
}
RESTYLE[b].innerHTML+=Create_SuperText(RESTYLE[b]);
	}
	}
}else{
	if(RESTYLE[b].hasAttribute("Input"))
	{
	RESTYLE[b].removeAttribute("READONLY");
	}
RESTYLE[b].innerText = Translate(RESTYLE[b].innerText,!RESTYLE[b].hasAttribute("Decode"),RESTYLE[b].hasAttribute("Menu"),RESTYLE[b].hasAttribute("MenuOption"),RESTYLE[b].hasAttribute("ForceTranslate"),RESTYLE[b],RESTYLE[b].hasAttribute("MenuData"));


}	
}


}
//now find ALL blosite nodes THAT ARE NOT IN THE MenuData
SET_page(Page,Primal)
}
function SET_page(Page,Primal)
{
if(Primal)
{
	document.getElementById("Archivetitle").innerHTML="<span class=\"Apex\" style=\"text-align: center;\"><b>[SECRET LOG {</b> "+document.querySelector("Blosite[MenuData]>Blosite["+Page+"]").getAttribute("Secure")+" <b>}]</b></span>";
	document.getElementById("Archivetitle").style["text-align"]="center";
	document.getElementsByTagName("div")[0].className ="Apex";
	document.getElementsByTagName("div")[1].className ="Apex";
	}else{
	if(document.getElementById("Nez.Body").hasAttribute("RP_VARS"))
	{
	document.getElementById("Archivetitle").innerHTML=(!CFV.NORMALTITLE?document.title:CFV.NORMALTITLE)	
	document.querySelector(':root').style.setProperty('--DEFAULTCOLOR', (!CFV.SCENECOLOR?'#00FF00':CFV.SCENECOLOR))
	document.getElementsByTagName("div")[0].className ="";
		document.getElementById("Archivetitle").style["text-align"]="left";
		document.getElementById("Archivetitle").style.left="10%";
	document.getElementsByTagName("div")[1].className ="";
	}else{
	document.getElementById("Archivetitle").innerHTML="Genjituyon Archives";}
		document.getElementsByTagName("div")[0].className ="";
		document.getElementById("Archivetitle").style["text-align"]="left";
		document.getElementById("Archivetitle").style.left="10%";
	document.getElementsByTagName("div")[1].className ="";
	}

document.getElementById("Visiblemenu").innerHTML = BLOS.innerHTML;
	COMPILE_VARS(document.getElementById("Visiblemenu"));
//console.log(document.querySelectorAll("#Visiblemenu :not(Blosite[MenuData]>Blosite["+Page+"]):not(br)"));//Now we finish setting it up
var BLOS2 = document.querySelectorAll("#Visiblemenu :not(Blosite[MenuData]>Blosite["+Page+"]):not(br)");
for(var b=0;b<BLOS2.length;b++)
{
	if(BLOS2[b].hasAttribute("Click_Mystry")||BLOS2[b].hasAttribute("Click_Safe")){
	let I = BLOS2[b];
	if(!BLOS2[b].onclick){
	BLOS2[b].onclick = function(){
	Mobilelink_Set(document.querySelector("Blosite[NEZID=\""+I.getAttribute("NEZID")+"\"]"));}}
	}
}

}
//^ Page Prepare and Set functions ^//

//V CF icon Formatter V//
function PA_FORMAT(OBJ)
{
var F=document.querySelectorAll("CF");
for(var i=0;i<F.length;i++)
{

F[i].outerHTML ="<div CF_Icon ><img CF_Icon="+F[i].innerHTML+" src=\"./Internals/Icon_CF.png\"></img></div>";


}
}
//^ CF icon Formatter//

//V All CF Compiler Script V//
const CF_VAR_PAT = /\{@((([^@]+)-)+(\([^@]+\))|save|load|RESET)@\}/igm;
const Test_text = "{@Valid-CF_VAR-OBJ@} {@Not-va!lid@} {@Also-Valid@} {@Notvalid@}";
function INIT_VARS()
{

}
const keyify = (obj, prefix = '') => 
  Object.keys(obj).reduce((res, el) => {
    if( Array.isArray(obj[el]) ) {
      return res;
    } else if( typeof obj[el] === 'object' && obj[el] !== null ) {
      return [...res, ...keyify(obj[el], prefix + el + '.')];
    }
    return [...res, prefix + el];
  }, []);
function index(obj,is, value) {
    if (typeof is == 'string')
        return index(obj,is.split('.'), value);
    else if (is.length==1 && value!==undefined)
        return obj[is[0]] = value;
    else if (is.length==0)
        return obj;
    else
        return index(obj[is[0]],is.slice(1), value);
}
function COMPILE_VARS(OBJ)
{
if(!OBJ.innerHTML.match(CF_VAR_PAT)||!document.getElementById("Nez.Body").hasAttribute("RP_VARS")){return;}
if(OBJ.innerHTML.match(CF_VAR_PAT).length==0){return;}
	var newpasta = keyify(CFV);
//console.log(CFV);
let result = OBJ.innerHTML.match(CF_VAR_PAT);
//console.log(result);


//Only concat looping
for(var i2=0;i2<result.length;i2++)
{
var data=result[i2].slice(2, -2).split("-");
newpasta = keyify(CFV);
	switch(data[0].toUpperCase())
	{	
	case "BIFURCATE":
	 var BIFU = result[i2].match(CF_VAR_PAT)[0];
	 BIFU = BIFU.replace(/&gt;/igm,">");
	 BIFU = BIFU.replace(/&lt;/igm,"<");
	  BIFU = BIFU.replace(/&amp;/igm,"&");
	    BIFU = BIFU.replace(/&quot;/igm,"\"");
		BIFU = BIFU.replace(/\n/igm,"");
	 console.log("BIFURCATE");

	 var dataBIF=BIFU.slice(2, -2).split("-");
	 
	 	dataBIF[1] = dataBIF[1].slice(1, -1);
	for(var i=0;i<newpasta.length;i++)
	{
	if(newpasta[i].startsWith("CFV.")){continue;}
	var PATS = new RegExp(newpasta[i], "gm");
	dataBIF[1] = dataBIF[1].replace(PATS,"CFV."+newpasta[i])
	}
	 
	  dataBIF[2] = dataBIF[2].slice(1, -1);
	
	for(var i=0;i<newpasta.length;i++)
	{
	if(newpasta[i].startsWith("CFV.")){continue;}
	var PATS = new RegExp(newpasta[i], "gm");
	dataBIF[2] = dataBIF[2].replace(PATS,"CFV."+newpasta[i])
	}
	 
	//the if else code piece
	//Template -> {@bifurcate-[conditions]-[result]@}
	//example: {@bifurcate-A>B,A>C,A>D-(->)@}
	//an if/else is repesented by -> (A->B->C)
	var CONDS = dataBIF[1].split(",");
	var OUTPUTS = dataBIF[2].split("►");

	console.log(CONDS,OUTPUTS,dataBIF[2]);
	console.log("test",OUTPUTS);
	console.log(eval(CONDS[0]));
	console.log(eval(OUTPUTS[0]));
	console.log("pass");
	for(var B=0;B<=CONDS.length;B++)
	{
	console.log(B,CONDS.length);
	if(eval(CONDS[B]))
	{		
	OBJ.innerHTML = OBJ.innerHTML.replace(result[i2],eval(OUTPUTS[B]));
	COMPILE_VARS(OBJ);
	return;
	}else if(!OUTPUTS[B])
	{
	OBJ.innerHTML = OBJ.innerHTML.replace(result[i2],"");
	break;	
	}else if(B==CONDS.length){
	OBJ.innerHTML = OBJ.innerHTML.replace(result[i2],eval(OUTPUTS[B]));
	COMPILE_VARS(OBJ);
	return;

	}
	}
	break;
	
	case "CONCAT":
	//get the menu
	OBJ.innerHTML = OBJ.innerHTML.replace(result[i2],GET_page(data[1],true));
	COMPILE_VARS(OBJ);
	return;
	}
}
//Do it again
for(var i2=0;i2<result.length;i2++)
{
	var data=result[i2].slice(2, -2).split("-");
newpasta = keyify(CFV);
	switch(data[0].toUpperCase())
	{	
	case "SET":
	var _SET = data[2];
	function TRAY(){try{return JSON.parse(data[2].slice(1, -1));}catch(e){return}}
	if(!TRAY())
	{	
	switch(data[2].slice(1, -1)[0])
	{	
	case"+":
	case"%":
	//console.log(data[1],data[2].startsWith("%"));
	_SET = Number(data[2].slice(1))*(data[2].startsWith("%")?-1:1);
	index(CFV,data[1],_SET);
	OBJ.innerHTML = OBJ.innerHTML.replace(result[i2],"");
	break;
	}
	}else{
		console.log("oh");
	_SET = JSON.parse(data[2].slice(1, -1));	
	index(CFV,data[1],_SET);
	OBJ.innerHTML = OBJ.innerHTML.replace(result[i2],"");
	}

	//console.log(CFV);
	break;
	case "INPUT"://only number and bool input for now
		var INPU = result[i2].match(CF_VAR_PAT)[0];
		INPU = INPU.replace(/&gt;/igm,">");
		INPU = INPU.replace(/&lt;/igm,"<");
		INPU = INPU.replace(/&amp;/igm,"&");
		INPU = INPU.replace(/&quot;/igm,"\"");
		INPU = INPU.replace(/\n/igm,"");
		var INPUDAT=INPU.slice(2, -2).split("-");
		console.log(INPU,INPUDAT)
		var Info = INPUDAT[1].split(",");//Type,Style
		var Data = INPUDAT[2].split(",");//Min,set,Max,Increments
	if(Info[0].toUpperCase() ==="NUMBER")
	{
	if(Info[1].toUpperCase()==="TEXT")
	{
	let Subtrac = document.createElement("span")
	Subtrac.id="Subtrac";
	Subtrac.innerHTML="[-]";
	Subtrac.onclick=function()
	{
	var _SET;
	//console.log(data[1],data[2].startsWith("%"));
	_SET = Math.min(Math.max(Number(index(CFV,INPUDAT[3].slice(1, -1)))-Info[3],Info[2]),Info[0]);
	index(CFV,Data[3].slice(1, -1),_SET);
	soft_Reload()	
	}
	let Additio = document.createElement("span")
	Additio.innerHTML="[+]";
	Additio.id="Additio";
	Additio.onclick=function()
	{
	var _SET;
	//console.log(data[1],data[2].startsWith("%"));
	_SET = Math.min(Math.max(Number(index(CFV,INPUDAT[3].slice(1, -1)))+Info[3],Info[2]),Info[0]);
	index(CFV,Data[3].slice(1, -1),_SET);

	soft_Reload()	
	}
	let Visib = document.createElement("span")
	Visib.innerHTML="["+Number(index(CFV,INPUDAT[3].slice(1, -1)))+"]";
	
	OBJ.innerHTML = OBJ.innerHTML.replace(result[i2],Subtrac.outerHTML+" "+Visib.outerHTML+" "+Additio.outerHTML);
	document.getElementById("Subtrac").onclick=function()
	{
	var _SET;
	//console.log(data[1],data[2].startsWith("%"));
	_SET = Math.min(Math.max(Number(index(CFV,INPUDAT[3].slice(1, -1)))-Info[3],Info[2]),Info[0]);
	index(CFV,Data[3].slice(1, -1),_SET);
	soft_Reload()	
	}
	document.getElementById("Additio").onclick=function()
	{
	var _SET;
	//console.log(data[1],data[2].startsWith("%"));
	_SET = Math.min(Math.max(Number(index(CFV,INPUDAT[3].slice(1, -1)))+Info[3],Info[2]),Info[0]);
	index(CFV,Data[3].slice(1, -1),_SET);

	soft_Reload()	
	}
	}
	

	
	}
	break;
	
	case "DISPLAY":
	OBJ.innerHTML = OBJ.innerHTML.replace(result[i2],index(CFV,data[1].slice(1, -1)));
	break;
	
	case "FUNCTION_SET":
	//Set up the new string

  
	var newscript = data[2].slice(1, -1);
	//console.log(newpasta);
	for(var i=0;i<newpasta.length;i++)
	{
	if(newpasta[i].startsWith("CFV.")){continue;}
	var PATS = new RegExp(newpasta[i], "g");
	newscript = newscript.replace(PATS,"CFV."+newpasta[i])
	//console.log(newpasta);
	}
	//console.log(newpasta);
	console.log(newscript);
	index(CFV,data[1],eval(""+newscript+";"))
	OBJ.innerHTML = OBJ.innerHTML.replace(result[i2],"");
		COMPILE_VARS(OBJ);
	return;
	break;
		case "FUNCTION_DISPLAY":
	//Set up the new string


	var newscript = data[2].slice(1, -1);
	
	for(var i=0;i<newpasta.length;i++)
	{
	if(newpasta[i].startsWith("CFV.")){continue;}
	
	var PATS = new RegExp(newpasta[i], "gm");
	newscript = newscript.replace(PATS,"CFV."+newpasta[i])
	
	}
	//console.log(newpasta);
	console.log(data[1]+"("+newscript+");");
	OBJ.innerHTML = OBJ.innerHTML.replace(result[i2],eval(" "+newscript+";"));
		COMPILE_VARS(OBJ);
	return;
	break;
	case "BIFURCATE":
	 var BIFU = result[i2].match(CF_VAR_PAT)[0];
	 BIFU = BIFU.replace(/&gt;/igm,">");
	 BIFU = BIFU.replace(/&lt;/igm,"<");
	  BIFU = BIFU.replace(/&amp;/igm,"&");
	    BIFU = BIFU.replace(/&quot;/igm,"\"");
		BIFU = BIFU.replace(/\n/igm,"");
	 console.log("BIFURCATE");

	 var dataBIF=BIFU.slice(2, -2).split("-");
	 
	 	dataBIF[1] = dataBIF[1].slice(1, -1);
	for(var i=0;i<newpasta.length;i++)
	{
	if(newpasta[i].startsWith("CFV.")){continue;}
	var PATS = new RegExp(newpasta[i], "gm");
	dataBIF[1] = dataBIF[1].replace(PATS,"CFV."+newpasta[i])
	}
	 
	  dataBIF[2] = dataBIF[2].slice(1, -1);
	
	for(var i=0;i<newpasta.length;i++)
	{
	if(newpasta[i].startsWith("CFV.")){continue;}
	var PATS = new RegExp(newpasta[i], "gm");
	dataBIF[2] = dataBIF[2].replace(PATS,"CFV."+newpasta[i])
	}
	 
	//the if else code piece
	//Template -> {@bifurcate-[conditions]-[result]@}
	//example: {@bifurcate-A>B,A>C,A>D-(->)@}
	//an if/else is repesented by -> (A->B->C)
	var CONDS = dataBIF[1].split(",");
	var OUTPUTS = dataBIF[2].split("►");

	console.log(CONDS,OUTPUTS,dataBIF[2]);
	console.log("test",OUTPUTS);
	console.log(eval(CONDS[0]));
	console.log(eval(OUTPUTS[0]));
	console.log("pass");
	for(var B=0;B<=CONDS.length;B++)
	{
	console.log(B,CONDS.length);
	if(eval(CONDS[B]))
	{		
	OBJ.innerHTML = OBJ.innerHTML.replace(result[i2],eval(OUTPUTS[B]));
		COMPILE_VARS(OBJ);
	return;
	}else if(!OUTPUTS[B])
	{
	OBJ.innerHTML = OBJ.innerHTML.replace(result[i2],"");
	break;	
	}else if(B==CONDS.length){
		
	OBJ.innerHTML = OBJ.innerHTML.replace(result[i2],eval(OUTPUTS[B]));

		COMPILE_VARS(OBJ);
	return;
	}
	}
	break;
	case "BIFURCATE_HIDE":
	 var BIFU = result[i2].match(CF_VAR_PAT)[0];
	 BIFU = BIFU.replace(/&gt;/igm,">");
	 BIFU = BIFU.replace(/&lt;/igm,"<");
	  BIFU = BIFU.replace(/&amp;/igm,"&");
	  BIFU = BIFU.replace(/&quot;/igm,"\"");
	  BIFU = BIFU.replace(/\n/igm,"");
	 console.log("BIFURCATE");

	 var dataBIF=BIFU.slice(2, -2).split("-");
	 
	 	dataBIF[1] = dataBIF[1].slice(1, -1);
	for(var i=0;i<newpasta.length;i++)
	{
	if(newpasta[i].startsWith("CFV.")){continue;}
	var PATS = new RegExp(newpasta[i], "gm");
	dataBIF[1] = dataBIF[1].replace(PATS,"CFV."+newpasta[i])
	}
	 
	  dataBIF[2] = dataBIF[2].slice(1, -1);
	
	for(var i=0;i<newpasta.length;i++)
	{
	if(newpasta[i].startsWith("CFV.")){continue;}
	var PATS = new RegExp(newpasta[i], "gm");
	dataBIF[2] = dataBIF[2].replace(PATS,"CFV."+newpasta[i])
	}
	 
	//the if else code piece
	//Template -> {@bifurcate-[conditions]-[result]@}
	//example: {@bifurcate-A>B,A>C,A>D-(->)@}
	//an if/else is repesented by -> (A->B->C)
	var CONDS = dataBIF[1].split(",");
	var OUTPUTS = dataBIF[2].split("►");
	console.log(CONDS,OUTPUTS,dataBIF[2]);
	for(var B=0;B<=CONDS.length;B++)
	{
	console.log(B,CONDS.length);
	if(eval(CONDS[B]))
	{		

	OBJ.innerHTML = OBJ.innerHTML.replace(result[i2],"");
	break;
	}else if(!OUTPUTS[B])
	{
	OBJ.innerHTML = OBJ.innerHTML.replace(result[i2],"");
	break;	
	}else if(B==CONDS.length){

OBJ.innerHTML = OBJ.innerHTML.replace(result[i2],"");
	break;
	}
	}
	break;
	case "CONCAT":
	//get the menu
	OBJ.innerHTML = OBJ.innerHTML.replace(result[i2],GET_page(data[1],true));
	COMPILE_VARS(OBJ);
	return;
	case "STATE":
	
	var newscript = data[2].slice(1, -1);
	for(var i=0;i<newpasta.length;i++)
	{
	var PATS = new RegExp(newpasta[i], "g");
	if(newpasta[i].startsWith("CFV.")){continue;}
	newscript = newscript.replace(PATS,"CFV."+newpasta[i])
	//console.log(newpasta);
	}
	//console.log(data[1]+"("+newscript+");");
	OBJ.innerHTML = OBJ.innerHTML.replace(result[i2],eval(data[1]+"("+newscript+");"));
	COMPILE_VARS(OBJ);
	return;
	break;
	case "SAVE":
	OBJ.innerHTML = OBJ.innerHTML.replace(result[i2],"");
	break;
	case "LOAD":
	OBJ.innerHTML = OBJ.innerHTML.replace(result[i2],"");
	break;
	case "RESET":
	OBJ.innerHTML = OBJ.innerHTML.replace(result[i2],"");
	break;
	default:
	Errorscreen("("+data[0].toUpperCase()+") Is invalid [Object is "+result[i2]+"]")
	return;
	}
}
}
INIT_VARS();
//^  All CF Compiler Script//



//V Mouse/select function V//
function Mobilelink_Set(Blosite_Obj)
{
	if(!PERM_input){return;}
	usingtouch=true;

	console.warn(Blosite_Obj.hasAttribute("RedCode"));
	SELECTOR_Point = Number(Blosite_Obj.getAttribute("nezid"));
	//same search query
	var Searchquery ="";
for(var c=0;c<Blosite_Obj.attributes.length;c++)
{
	if((Blosite_Obj.attributes[c].localName).startsWith("_"))
	{
	Searchquery=Blosite_Obj.attributes[c].localName;
	PreviousPage = SelectedPage;
	console.log(PreviousPage);
	SelectedPage=Blosite_Obj.attributes[c].localName;
	Pagesavecookie()
	break;
	}
}
	if(Blosite_Obj.hasAttribute("Reroute"))
	{
	PreviousPage = Blosite_Obj.getAttribute("Reroute");
	}
	GET_Menu(Blosite_Obj.hasAttribute("RedCode")&&!Get_Cookie_Secret(Blosite_Obj.getAttribute("cookieflag"))?"_Password_Novau":Searchquery,Blosite_Obj,Searchquery);
}

//^ Mouse/select function ^//




//V Password writing function V//
document.addEventListener('keydown',function(event){
if(!PERM_Passwordscreen){return;}
	var key = event.key;
const NO_Keys=["shift","control","alt",
"f1",
"f2",
"f3",
"f4",
"f5",
"f6",
"f7",
"f8",
"f9",
"f10",
"f11",
"f12",
"os",
"tab",
"capslock",
"enter",
"home",
"end",
"delete",
"escape",
"insert",
"pageup",
"pagedown",
];
if(NO_Keys.includes(key.toLowerCase())){return;}
if(key=="Backspace")
	{
	if(document.querySelectorAll("Blosite[input]")[0].innerHTML.length==1)
	{
	document.querySelectorAll("Blosite[input]")[0].innerHTML="";	
	}else{

	document.querySelectorAll("Blosite[input]")[0].innerHTML=document.querySelectorAll("Blosite[input]")[0].innerHTML.slice(0,document.querySelectorAll("Blosite[input]")[0].innerHTML.length-1);}
	}else{
	document.querySelectorAll("Blosite[input]")[0].innerHTML+=key;	
	}
}
);
//^ Password writing function ^//

//V link Shortcut crypter V//
function BACKDOOR(Unscrew=true,Totext)
{

var hack = window.location.href.split("?")[1];
console.log(hack)
 if(!hack)
 {
	hack = Totext;
 }
if(!hack&&!Totext)
 {return;}	
const Debreaker	={
	"Mojibakify":["░","▒","▓","�"],
"upperprefix":"◹",
"lowerprefix":"◿",
"opensing":"▹",
"opendoub":"▸",
"closesing":"◃",
"closedoub":"◂",
".":"❯",
"?":"○",
"!":"◊",
",":"◦",
"/":"✦",
":":"◬",
";":"◕",
"-":"✏",
	
"z":"■",
"y":"□",
"x":"◎",
"a":"▣",
"b":"▤",
"c":"◶",
"w":"▦",
"v":"▧",
"u":"▨",
"d":"◴",
"e":"◇",
"f":"◫",
"t":"◭",
"s":"◮",
"r":"◍",
"g":"◗",
"h":"◖",
"i":"◤",
"q":"◧",
"p":"◳",
"o":"◢",
"j":"▼",
"k":"◣",
"l":"▩",
"n":"▽",
"m":"◈",
"_":"▬",
"zero":"▖",
"nine":"▗",
"eight":"▝",
"six":"▘",
"seven":"▚",
"four":"▛",
"five":"▜",
"three":"▙",
"two":"▟",
"one":"▞",
}
if(Unscrew)//This to text to blosite back to text
{
	//console.log(Translate(Totext.toLowerCase(),false,null,null,null,null,null,Debreaker));
	const Result = Translate(decodeURIComponent(hack),false,null,null,null,null,null,Debreaker);
	if(Object.keys(Omni_Pass_List).includes(Result))
	{
	console.log(":0")	
	var Dummy_Pagedata = document.createElement("Blosite");
	Dummy_Pagedata.setAttribute("CookieFlag",Result)
	
	return [!Get_Cookie_Secret(Result)?"_Password_Novau":Omni_Pass_List[Result]["Pass_Page"],Dummy_Pagedata]
	}else{
		return [Result,null];
		
	}
}else{
console.log(Translate(Totext,true,null,null,null,null,null,Debreaker));
return Translate(Totext,true,null,null,null,null,null,Debreaker);
}
	
}
//^ link Shortcut crypter ^//

//V Initalize stuff V//
//BACKDOOR(false,"TimeMouseKey_001");
//BACKDOOR(false,"TimeMouseKey_000");
//BACKDOOR(false,"TimeMouseKey_002");
if(!document.getElementById("Nez.Body").hasAttribute("Menuless")){
if(getCookie("LastPage"))
{
CFV=JSON.parse(getCookie("Databackup"));
GET_Menu(getCookie("LastPage").slice(1,-1));
}
else{
GET_Menu(!BACKDOOR(true)?undefined:BACKDOOR(true)[0],!BACKDOOR(true)?undefined:BACKDOOR(true)[1]);
}

}PA_FORMAT();

	/*!
devtools-detect
https://github.com/sindresorhus/devtools-detect
By Sindre Sorhus
MIT License
*/

const devtools = {
	isOpen: false,
	orientation: undefined,
};

const threshold = 160;

const emitEvent = (isOpen, orientation) => {
	globalThis.dispatchEvent(new globalThis.CustomEvent('devtoolschange', {
		detail: {
			isOpen,
			orientation,
		},
	}));
};

const main = ({emitEvents = true} = {}) => {
	const widthThreshold = globalThis.outerWidth - globalThis.innerWidth > threshold;
	const heightThreshold = globalThis.outerHeight - globalThis.innerHeight > threshold;
	const orientation = widthThreshold ? 'vertical' : 'horizontal';

	if (
		!(heightThreshold && widthThreshold)
		&& ((globalThis.Firebug && globalThis.Firebug.chrome && globalThis.Firebug.chrome.isInitialized) || widthThreshold || heightThreshold)
	) {
		if ((!devtools.isOpen || devtools.orientation !== orientation) && emitEvents) {
			emitEvent(true, orientation);
		}

		devtools.isOpen = true;
		devtools.orientation = orientation;
	} else {
		if (devtools.isOpen && emitEvents) {
			emitEvent(false, undefined);
		}

		devtools.isOpen = false;
		devtools.orientation = undefined;
	}
};

main({emitEvents: false});
setInterval(main, 100);
function Corruption_Bomb(Text)
{
var Bomb="";
const CorruptList = [" ","0","1","2","3","4","5","6","7","8","9",".","?","!",",","/",":",";","-","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",]
for(var L=0;L<Text.length;L++)
{
Bomb+=CorruptList[Math.floor(Math.random()*CorruptList.length)];
}
return "<b>Bomb activated!</b><br>"+Translate(Bomb)+"";
}


if(devtools.isOpen&&CORRUPTFUCK_BOMB)
{
document.documentElement.innerHTML=Corruption_Bomb(document.documentElement.innerHTML)
}

window.addEventListener('devtoolschange', event => {
if(devtools.isOpen&&CORRUPTFUCK_BOMB)
{
document.documentElement.innerHTML=Corruption_Bomb(document.documentElement.innerHTML)
}
	});
