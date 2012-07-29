//function that is called when the Index window is loaded
function initIndex(){

//change background colour
document.getElementById("seasons-backgr").style.backgroundColor="#abc5bd";
document.getElementById("selected").style.backgroundColor="#abc5bd";
document.body.style.backgroundImage = "url('images/palegreen_gradient.jpg')";

//calling a function to rotate the banner images
RotateImages(0);
}

//function that is called when the Spring window is loaded
function initSpring(){

//change background colour
document.getElementById("seasons-backgr").style.backgroundColor="#66aaee";
document.getElementById("selected").style.backgroundColor="#66aaee";
document.body.style.backgroundImage = "url('images/blue_gradient.jpg')";

//call a function to initialise the event handlers in the accordion tab menu
initAccordion();
//call a function to load google maps and places
initMapsSpring();
}

//function that is called when the Summer window is loaded
function initSummer(){
document.getElementById("seasons-backgr").style.backgroundColor="#99cc88";
document.getElementById("selected").style.backgroundColor="#99cc88";
document.body.style.backgroundImage = "url('images/green_gradient.jpg')";
//call a function to initialise the event handlers in the accordion tab menu
initAccordion();
//call a function to load google maps and places
initMapsSummer();
}

//function that is called when the Autumn window is loaded
//change background colour
function initAutumn(){
document.getElementById("seasons-backgr").style.backgroundColor="#CDAF95";
document.getElementById("selected").style.backgroundColor="#CDAF95";
document.body.style.backgroundImage = "url('images/brown_gradient.jpg')";
//call a function to initialise the event handlers in the accordion tab menu
initAccordion();
//call a function to load google maps and places
initMapsAutumn();
} 

//function that is called when the Winter window is loaded
function initWinter(){
document.getElementById("seasons-backgr").style.backgroundColor="#A2B5CD";
document.getElementById("selected").style.backgroundColor="#A2B5CD";
document.body.style.backgroundImage = "url('images/gray_gradient.jpg')";
//call a function to initialise the event handlers in the accordion tab menu
initAccordion();
//call a function to load google maps and places
initMapsWinter();
} 

//function that is called when the Info window is loaded
function initInfo(){
document.getElementById("seasons-backgr").style.backgroundColor="#3399CC";
document.getElementById("selected").style.backgroundColor="#3399CC";
document.body.style.backgroundImage = "url('images/darkblue_gradient.jpg')";
document.getElementById('li_tab1').style.backgroundColor="beige";
//validation form function
document.getElementById('infoForm1').onsubmit = validate;

}








//array for the banner images that rotate on the index page
var RotatingImageArray=new Array("killarney_banner.jpg",
				"clonmacnoise_banner.jpg", 		 
				"christchurch_banner.jpg", 
				"burren_banner.jpg",
				"ashford_castle.jpg");
				
				
//function for rotating the banner images at the top of the page
function RotateImages(Start){
  	var a = "RotatingImageArray";
  	var b = document.getElementById("seasons-backgr-img");
  	if(Start>=5)
  		Start=0;
  	b.src = "images/" + RotatingImageArray[Start];
  	window.setTimeout("RotateImages("+(Start+1)+")",5000);	
  }








/*Expand and collapse div section on the page
inspired by tutorials: http://www.cssnewbie.com/showhide-content-css-javascript/
*/

function showHide(shID) {
	if (document.getElementById(shID)) {
		if (document.getElementById(shID+'-show').style.display != 'none') {
			document.getElementById(shID+'-show').style.display = 'none';
			document.getElementById(shID).style.display = 'block';
		}
		else {
			document.getElementById(shID+'-show').style.display = 'inline';
			document.getElementById(shID).style.display = 'none';
		
		}
	}
}





//function for the 4 tabbed section on info page for travel info
function selecttab(tab) {
	//first set all displays to none, and all tabs to not active, then set selected tab to active, and display to block
	
	document.getElementById('tab1').style.display = 'none';
	document.getElementById('tab2').style.display = 'none';
	document.getElementById('tab3').style.display = 'none';
	document.getElementById('tab4').style.display = 'none';
	

	document.getElementById('li_tab1').setAttribute("class","");
	document.getElementById('li_tab1').style.backgroundColor="white";
	document.getElementById('li_tab2').setAttribute("class","");
	document.getElementById('li_tab2').style.backgroundColor="white";
	document.getElementById('li_tab3').setAttribute("class","");
	document.getElementById('li_tab3').style.backgroundColor="white";
	document.getElementById('li_tab4').setAttribute("class","");
	document.getElementById('li_tab4').style.backgroundColor="white";

	document.getElementById(tab).style.display = 'block';
	document.getElementById('li_'+tab).setAttribute("class", "active");
	document.getElementById('li_'+tab).style.backgroundColor="beige";
	
	}
	
	

//function for the 4 tabbed section on index page for seasonal weather info, to show and hide certain elements 
function tab(tab) {

	//first set all displays to none, and all tabs to not active, then set selected tab to active, and display to block
	document.getElementById('tab1').style.display = 'none';
	document.getElementById('tab2').style.display = 'none';
	document.getElementById('tab3').style.display = 'none';
	document.getElementById('tab4').style.display = 'none';

	document.getElementById('li_tab1').setAttribute("class","");
	document.getElementById('li_tab2').setAttribute("class","");
	document.getElementById('li_tab3').setAttribute("class","");
	document.getElementById('li_tab4').setAttribute("class","");

	document.getElementById(tab).style.display = 'block';
	document.getElementById('li_'+tab).setAttribute("class", "active");
	}
	
	



//function to initialise the accordion tabs, including the event handlers
function initAccordion(){

	// function for the sliding tabs in the accordion
	$(function() {
		$("#accordion").tabs( "#accordion div.pane", {tabs: 'h2', effect: 'slide', initialIndex: null}  );
	});
	


	//event handlers for the 16 link elements that are in the accordion tabs (4 on each tab)
	var accordionelements = document.getElementsByClassName("acc_tabs");
	for (i=0; i<accordionelements.length; i++) {
	        accordionelements[i].onmouseover=show;
	        accordionelements[i].onmouseout=hide;
    	}
    	 	
}//end of initAccordion function




//the following 3 arrays are for populating a hidden text area, that is displayed with an event handler, from the accordion tab menu
var hiddenHeaderArray = ["Blarney Castle <br/> Co. Cork",
			"Cruising the Shannon <br/> Co. Roscommon",
			"National Heritage Park <br/> Co. Wexford",
			"Christchurch <br/> Co. Dublin",
			"Cliffs of Moher <br/> Co. Clare",
			"The Burren <br/> Co. Galway",
			"Benbulben Mountain <br/> Co. Sligo",
			"Aran Islands <br/> Co. Galway",
			"Powerscourt <br/> Co. Wicklow",
			"Clonmacnoise <br/> Co. Roscommon",
			"Glendalough <br/> Co. Galway",
			"Trinity College <br/> Co. Dublin",
			"Bunratty Castle <br/> Co. Limerick",
			"Guinness Brewery <br/> Co. Dublin",
			"Newgrange <br/> Co. Meath",
			"Titanic <br/> Co. Cork"			
			]
			


var hiddenTextArray = ["<b>Opeing Hours: 9am to 5pm.</b><br/> <b>Days: Mon - Sat </b><br/> This historic castle is most famous for its stone, which has the traditional power of conferring eloquence on all who kiss it.",
			"<b>Opeing Hours: 9am to 9pm.</b><br/> <b>Days: Mon - Fri </b><br/> Emerald Star is one of Ireland's best boating holiday companies established for over 34 years, having over 200 cruisers available.",
			"<b>Opeing Hours: 10am to 4pm.</b><br/> <b>Days: Daily </b><br/> The National Heritage Park, in Ferrycarrig County Wexford, covers 35 acres, and takes visitors through 9,000 years of Irish history.",
			"<b>Opeing Hours: 9am to 5pm.</b><br/> <b>Days: Mon - Sat </b><br/> Christ Church Cathedral is Dublin's oldest building, a leading visitor attraction and a place of pilgrimage for almost 1,000 years.",
			"<b>Opeing Hours: 9am to 5pm.</b><br/> <b>Days: Tue - Sat </b><br/> The Cliffs of Moher, one of Ireland's top visitor attractions, loom high over County Clare's west coast.",
			"<b>Opeing Hours: 9am to 5pm.</b><br/> <b>Days: Mon - Sat </b><br/> The Burren in County Clare is a karstic plateau, with a full assemblage of the curious landforms that characterise such limestone landscapes.",
			"<b>Opeing Hours: 9am to 5pm.</b><br/> <b>Days: Mon - Sat </b><br/> Benbulben is famously known as County Sligo's 'Table Mountain' and is part of the Dartry Mountains.",
			"<b>Opeing Hours: 9am to 5pm.</b><br/> <b>Days: Mon - Sat </b><br/> In Galway Bay lie three rocky limestone outcrops that make up the Aran Islands. They are a bastion of traditional language, culture and music.",
			"<b>Opeing Hours: 9am to 5pm.</b><br/> <b>Days: Mon - Sat </b><br/> Powerscourt is one of Europe's great treasures and Ireland's most famous estates and is located in the Wicklow Mountains. ",
			"<b>Opeing Hours: 9am to 5pm.</b><br/> <b>Days: Mon - Sat </b><br/> Clonmacnoise is an ancient monastic site near Shannonbridge, County Offaly. It was founded by St Ciaran in the mid-6th century.",
			"<b>Opeing Hours: 9am to 5pm.</b><br/> <b>Days: Mon - Sat </b><br/> The early Christian Monastic site of Glendalough, in County Wicklow, was founded by St Kevin in the 6th century.",
			"<b>Opeing Hours: 9am to 5pm.</b><br/> <b>Days: Mon - Sat </b><br/> Trinity College, right in the heart of Dublin centre, has the largest library in Ireland, dating back to the establishment of the college in 1592.",
			"<b>Opeing Hours: 9am to 5pm.</b><br/> <b>Days: Mon - Sat </b><br/> A visit to County Clare should always include a trip to medieval Bunratty Castle and the adjoining Folk Park.",
			"<b>Opeing Hours: 9am to 5pm.</b><br/> <b>Days: Mon - Sat </b><br/> The Guinness Storehouse is located in the heart of the St James's Gate Brewery in the centre of Dublin, which has been home to the 'black stuff' since 1759.",
			"<b>Opeing Hours: 9am to 5pm.</b><br/> <b>Days: Mon - Sat </b><br/> The Megalithic Passage Tomb at Newgrange was built about 3200 BC. The 19 metre long inner passage leads to a cruciform chamber with a corbelled roof.",
			"<b>Opeing Hours: 9am to 5pm.</b><br/> <b>Days: Mon - Sat </b><br/> The Titanic Experience Cobh exhibition is housed in the original White Star Line building in Cobh, the site where the last 123 passengers boarded the Titanic."];
			
			
var hiddenImageArray = ["images/blarney_castle.jpg",
			"images/shannon.jpg",
			"images/heritage_park.jpg",
			"images/christchurch.jpg",
			"images/cliffs_of_moher.jpg",
			"images/burren.jpg",
			"images/benbulben.jpg",
			"images/aran_islands.jpg",
			"images/powerscourt_gardens.jpg",
			"images/clonmacnoise.jpg",
			"images/glendalough.jpg",
			"images/trinity.jpg",
			"images/bunratty_castle.jpg",
			"images/guinness.jpg",
			"images/newgrange.jpg",
			"images/titanic_exhibition.jpg"			
			];
			


	

// function to show text from the above arrays, and background area, called from a mouseover event handler in the initAccordion function	
function show()  {

		var tabName = this.id;
		
		//get last 2 characters from the id name, and convert it to an integer by multiplying by 1
		var tabNumString = tabName.charAt(12)+tabName.charAt(13);
		var tabNum = tabNumString*1;
		
		//subtract 1 from the tabNum, to give the correct index number for the arrays that are to be shown
		var index = tabNum-1;
		
		
		//populate the arrays, based on the element number, and then display them
	 	document.getElementById("hiddenHdr").innerHTML = hiddenHeaderArray[index];
	 	document.getElementById("hiddenImg").src = hiddenImageArray[index];
	 	document.getElementById("hiddenInfo").innerHTML = hiddenTextArray[index];						

	 	//display the hidden elements by setting the display to 'block'
	 	//this does not display correctly in IE, so it remains hidden for IE browsers.
	 	var isMSIE = /*@cc_on!@*/0;
		
		if (isMSIE) {
		  // if browser is IE, do not display the hidden text and background
	 	document.getElementById("hidden_background").style.display = 'hidden';
		} else {
		  // if browser is not IE, display the hidden text and background
		document.getElementById("hiddentext").style.display = 'block';
	 	document.getElementById("hidden_background").style.display = 'block';
		}		
	}



// function to hide a text and background area, called from a mouseout event handler in the accordion tab
function hide() {
	document.getElementById("hidden_background").style.display = 'none';
	document.getElementById("hiddentext").style.display = 'none';
	//return false;
	}
	
	
	
	
	



//latitudes and longitudes for adding places to google maps
	 var map;
	 var blarneyLatitude = 51.931389;
	 var blarneyLongitude = -8.5685;
	 var shannonLatitude = 53.94355;
	 var shannonLongitude = -8.0954;
	 var heritageLatitude = 52.352163;
	 var heritageLongitude = -6.496627;
	 var christchurchLatitude = 53.343073;
	 var christchurchLongitude = -6.270763;
	 var aranLatitude = 53.1288;
	 var aranLongitude = -9.7196;
	 var benbulbenLatitude = 54.3644;
	 var benbulbenLongitude = -8.4746;
	 var burrenLatitude = 53.5402;
	 var burrenLongitude = -9.8829;
	 var moherLatitude = 52.9702;
	 var moherLongitude = -9.4248;
	 var powerscourtLatitude = 53.1935;
	 var powerscourtLongitude = -6.1707;
	 var glendaloughLatitude = 53.0119;
	 var glendaloughLongitude = -6.3298;
	 var clonmacnoiseLatitude = 53.3232;
	 var clonmacnoiseLongitude = -7.9813;
	 var trinityLatitude = 53.3429;
	 var trinityLongitude = -6.2545;
	 var bunrattyLatitude = 52.6988;
	 var bunrattyLongitude = -8.8111;
	 var guinnessLatitude = 53.3437;
	 var guinnessLongitude = -6.2865;
	 var newgrangeLatitude = 53.6799;
	 var newgrangeLongitude = -6.4449;
	 var titanicLatitude = 51.8503;
	 var titanicLongitude = -8.2942;
	 


//function to add google maps and places to the spring.html page
function initMapsSpring() {

	var blarneyLocation = new google.maps.LatLng(blarneyLatitude, blarneyLongitude);
	var shannonLocation = new google.maps.LatLng(shannonLatitude, shannonLongitude);
	var heritageLocation = new google.maps.LatLng(heritageLatitude, heritageLongitude);
	var christchurchLocation = new google.maps.LatLng(christchurchLatitude, christchurchLongitude);
	var centreLocation = new google.maps.LatLng(53.5, -8);


	var myOptions = {
		zoom: 6,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		center: centreLocation
	}

    	map = new google.maps.Map(document.getElementById('map'), myOptions);


	var marker = new google.maps.Marker({
		position: blarneyLocation,
		title:"Blarney Castle"
	});
	marker.setMap(map);

	var marker = new google.maps.Marker({
		position: shannonLocation,
		title:"Carrick-On-Shannon"
	});
	marker.setMap(map);

	var marker = new google.maps.Marker({
		position: heritageLocation,
		title:"National Heritage Park"
	});
	marker.setMap(map);
		
	var marker = new google.maps.Marker({
		position: christchurchLocation,
		title:"Christchurch Cathedral"
	});
	marker.setMap(map);		
		
	}



//function to add google maps and places to the spring.html page
function initMapsSummer() {

	var aranLocation = new google.maps.LatLng(aranLatitude, aranLongitude);
	var benbulbenLocation = new google.maps.LatLng(benbulbenLatitude, benbulbenLongitude);
	var burrenLocation = new google.maps.LatLng(burrenLatitude, burrenLongitude);
	var moherLocation = new google.maps.LatLng(moherLatitude, moherLongitude);
	var centreLocation = new google.maps.LatLng(53.5, -8);


	var myOptions = {
		zoom: 6,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		center: centreLocation
	}

    	map = new google.maps.Map(document.getElementById('map'), myOptions);


	var marker = new google.maps.Marker({
		position: aranLocation,
		title:"Aran Islands"
	});
	marker.setMap(map);

	var marker = new google.maps.Marker({
		position: benbulbenLocation,
		title:"Benbulben Mountain"
	});
	marker.setMap(map);

	var marker = new google.maps.Marker({
		position: burrenLocation,
		title:"The Burren"
	});
	marker.setMap(map);
		
	var marker = new google.maps.Marker({
		position: moherLocation,
		title:"Cliffs of Moher"
	});
	marker.setMap(map);		
		
	}
	
	
	
//function to add google maps and places to the spring.html page
function initMapsAutumn() {

	var powerscourtLocation = new google.maps.LatLng(powerscourtLatitude, powerscourtLongitude);
	var glendaloughLocation = new google.maps.LatLng(glendaloughLatitude, glendaloughLongitude);
	var clonmacnoiseLocation = new google.maps.LatLng(clonmacnoiseLatitude, clonmacnoiseLongitude);
	var trinityLocation = new google.maps.LatLng(trinityLatitude, trinityLongitude);
	var centreLocation = new google.maps.LatLng(53.5, -8);


	var myOptions = {
		zoom: 6,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		center: centreLocation
	}

    	map = new google.maps.Map(document.getElementById('map'), myOptions);


	var marker = new google.maps.Marker({
		position: powerscourtLocation,
		title:"Powerscourt House and Gardens"
	});
	marker.setMap(map);

	var marker = new google.maps.Marker({
		position: glendaloughLocation,
		title:"Glendalough"
	});
	marker.setMap(map);

	var marker = new google.maps.Marker({
		position: clonmacnoiseLocation,
		title:"Clonmacnoise"
	});
	marker.setMap(map);
		
	var marker = new google.maps.Marker({
		position: trinityLocation,
		title:"Trinity College"
	});
	marker.setMap(map);		
		
	}



//function to add google maps and places to the spring.html page
function initMapsWinter() {

	var bunrattyLocation = new google.maps.LatLng(bunrattyLatitude, bunrattyLongitude);
	var guinnessLocation = new google.maps.LatLng(guinnessLatitude, guinnessLongitude);
	var titanicLocation = new google.maps.LatLng(titanicLatitude, titanicLongitude);
	var newgrangeLocation = new google.maps.LatLng(newgrangeLatitude, newgrangeLongitude);
	var centreLocation = new google.maps.LatLng(53.5, -8);


	var myOptions = {
		zoom: 6,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		center: centreLocation
	}

    	map = new google.maps.Map(document.getElementById('map'), myOptions);


	var marker = new google.maps.Marker({
		position: bunrattyLocation,
		title:"Bunratty Castle"
	});
	marker.setMap(map);

	var marker = new google.maps.Marker({
		position: guinnessLocation,
		title:"Guinness Brewery"
	});
	marker.setMap(map);

	var marker = new google.maps.Marker({
		position: newgrangeLocation,
		title:"Newgrange"
	});
	marker.setMap(map);
		
	var marker = new google.maps.Marker({
		position: titanicLocation,
		title:"Titanic Exhibition"
	});
	marker.setMap(map);		
		
}

function error(msg) {
	alert(msg);
}





//function to change the image in the gallery section at the bottom of the spring, summer, autumn and winter pages
$(document).ready(function() {
	$(".thumbnails span").click(function() {
		$("#main_pic img").removeClass("opaque");

		var imageToShow = $(this).attr("id").replace("for-", "");
		$("#main_pic #"+imageToShow).addClass("opaque");

		$(".thumbnails span").removeClass("selected");
		$(this).addClass("selected");
	});
});






//functions used on Info page: validation and popup windows

function OpenPopup(c){
	window.open(c, 'window','width=480,height=480,scrollbars=yes,status=yes');
	}
	
	
function validate(){
		var x=document.forms["InfoForm"]["your-name"].value;
		var y=document.forms["InfoForm"]["your-email"].value;
		var atpos=y.indexOf("@");
		var dotpos=y.lastIndexOf(".");
		if (x==null || x==""){
  			alert("Your name must be filled out");
  			return false;
 			 }
 			 else if (atpos<1 || dotpos<atpos+2 || dotpos+2>=y.length){
  				alert("Not a valid e-mail address");
  				return false;
  					}
  					else{
					setTimeout('clear_form()', 200);
					return true;
  					}
 			 }	
function clear_form() {
document.getElementById("infoForm1").reset();}	



