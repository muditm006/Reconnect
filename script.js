
// Creates the map
function initMap()
{
	var options=
	{
		zoom:7,
		center: {lat: 28.370752672063887, lng: -81.4272698136905} //centers on central florida (Kissimmee)
	}
	var map= new google.maps.Map(document.getElementById('map'), options);

	// Function to add markers to map

	function addMarker(props)
		{
			var marker= new google.maps.Marker
			({
				position: props.coords,
				map:map,
				icon: 'images/park.png'
			});

			/*
			if (props.iconImage)
			{
				marker.setIcon(props.iconImage);
			}
			*/

			// Check Content
			if(props.content)
			{
				var infoWindow= new google.maps.InfoWindow
				({
					content: props.content
				});

				marker.addListener('click', function()
				{
				infoWindow.open(map,marker);
				});
			}
			
		}

	// Listen for click on map
	
	/*
	google.maps.event.addListener(map, 'click',
	function(event)
	{
		addMarker({coords:event.latLng, iconImage: 'park.png'});
	}
	);
	*/


	// Creates array of markers

	var markers= [{coords:{lat: 25.6785, lng: -80.27422},
		content: "<center><h1>Fairchild Tropical Botanical Garden</h1></center><div class='container'><div class='image'> <img style='width:300px;height:200px;' src='images/fairchild.jpg' alt='Scenery at Fairchild Garden'></div><div class='text'><h3>Described by many as a tropical wonderland, Fairchild is home to a beautiful selection of rare, tropical plants and native flowers. It also focuses on educating its visitors, as it offers school programs, scholarships, and even graduate fellowships.</h3></div></div>"},
	{coords:{lat: 25.849405269180505, lng: -80.16459259788341},
		content: "<center><h1>Pelican Harbor Seabird Station</h1></center><div class='container'><div class='image'> <img style='width:300px;height:200px;' img src='images/pelican_harbor.png' alt='Releasing a pelican at Pelican Harbor'></div><div class='text'><h3>Since its founding, the Pelican Harbor Seabird Station has done priceless work, rescuing over 35,821 native birds, mammals, and reptiles. Visitors are given the opportunity to volunteer to care for the animals being taken care of by cleaning after and feeding them. The organization also provides Seabird Cruises, which take passengers along waters to observe over 30 species of birds.</h3></div></div>"},
	{coords:{lat: 26.499573832858726, lng: -80.21232937408512},
		content: "<center><h1>Arthur R. Marshall Loxahatchee National Wildlife Refuge</h1></center><div class='container'><div class='image'> <img style='width:300px;height:200px;' img src='images/loxahatchee.jpg' alt='Sunset at Loxahatchee Wildlife Refuge'></div><div class='text'><h3>This wildlife sanctuary houses the most northern remnant of the historic Everglades wetlands, protecting the integrity of the remaining ecosystem. Visitor activities include hiking, biking, wildlife observation, photography, and much more!</h3></div></div>"},
	{coords:{lat: 26.36631133640211, lng: -80.07013981422405},
		content: "<center><h1>Gumbo Limbo Nature Center</h1></center><div class='container'><div class='image'> <img style='width:300px;height:200px;' src='images/gumbo-limbo.jpg' alt='Sea Turtle at Gumbo Limbo Nature Center'></div><div class='text'><h3>Gumbo Limbo is a fun, interactive nature center focused on rehabilitating marine wildlife, specifically sea turtles. Visitors can adopt a sea turtle, go on a walk on their Boardwalk Trail, check out their Butterfly Garden, and so much more. They are also often involved in beach cleanups!</h3></div></div>"},
	{coords:{lat: 29.167783709963093, lng: -81.79159879100125},
	    content: "<center><h1>Ocala National Forest</h1></center><div class='container'><div class='image'> <img style='width:300px;height:200px;' src='images/ocala.jpg' alt='A spring in Ocala National Forest'></div><div class='text'><h3>Ocala National Forest is known for its large areas of sand pine scrub forest. Its multiple springs and recreation areas have clean, natural pools and canoe runs, which have been cited to be very relaxing and fun!</h3></div></div>"},
	{coords:{lat: 25.484541535607914, lng: -80.20791265433957},
		content: "<center><h1>Biscayne National Park</h1></center><div class='container'><div class='image'> <img style='width:300px;height:200px;' src='images/biscayne.jpg' alt='Lighthouse at Biscayne National Park'></div><div class='text'><h3>This park allows visitors to take a break from the busy streets of downtown Miami for relaxation in nature. It works to conserve and protect a unique blend of aquamarine waters, emerald islands, and fish-bejeweled coral reefs. Visitors are able to boat, snorkel, camp, watch wildlife, or just take a walk to see the stunning views.</h3></div></div>"},
	    //this image's width fits perfectly, but height too big sigh
	{coords:{lat: 25.27471779658046, lng: -80.90248989934324},
		content: "<center><h1>Everglades National Park </h1></center><div class='container'><div class='image'> <img style='width:300px;height:200px;' src='images/everglades.jpg' alt='Sunset in the Everglades'></div><div class='text'><h3>The Everglades National Park protects the southern 20% of the original Everglades in Florida, encompassing 1.5 million acres of tropical and subtropical habitat with one of the world’s most diverse ecosystems. Visitors are able to interact with wildlife; tour the park on boat, bike, or foot; and immerse themselves in the wonders of the swamp.</h3></div></div>"}];
	    
	// Loops through array of markers, adding them to map

	for(var i=0; i< markers.length; i++)
	{
		addMarker(markers[i])
	}
	return map;
}

var events= ["Fairchild Tropical Botanical Garden", "Pelican Harbor Seabird Station", "Arthur R. Marshall Loxahatchee National Wildlife Refuge", "Gumbo Limbo Nature Center", "Ocala National Forest", "Biscayne National Park","Everglades National Park"];


function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

function submit()
{
		var options=
	{
		zoom:7,
		center: {lat: 28.370752672063887, lng: -81.4272698136905} //centers on central florida (Kissimmee)
	}
	var map= new google.maps.Map(document.getElementById('map'), options);

	// Function to add markers to map

	function addMarker(props)
		{
			var marker= new google.maps.Marker
			({
				position: props.coords,
				map:map,
				icon: 'images/park.png'
			});

			/*
			if (props.iconImage)
			{
				marker.setIcon(props.iconImage);
			}
			*/

			// Check Content
			if(props.content)
			{
				var infoWindow= new google.maps.InfoWindow
				({
					content: props.content
				});

				marker.addListener('click', function()
				{
				infoWindow.open(map,marker);
				});
			}
			
		}

	// Listen for click on map
	
	/*
	google.maps.event.addListener(map, 'click',
	function(event)
	{
		addMarker({coords:event.latLng, iconImage: 'park.png'});
	}
	);
	*/


	// Creates array of markers

	var markers= [{coords:{lat: 25.6785, lng: -80.27422},
		content: "<center><h1>Fairchild Tropical Botanical Garden</h1></center><div class='container'><div class='image'> <img style='width:300px;height:200px;' src='images/fairchild.jpg' alt='Scenery at Fairchild Garden'></div><div class='text'><h3>Described by many as a tropical wonderland, Fairchild is home to a beautiful selection of rare, tropical plants and native flowers. It also focuses on educating its visitors, as it offers school programs, scholarships, and even graduate fellowships.</h3></div></div>"},
	{coords:{lat: 25.849405269180505, lng: -80.16459259788341},
		content: "<center><h1>Pelican Harbor Seabird Station</h1></center><div class='container'><div class='image'> <img style='width:300px;height:200px;' img src='images/pelican_harbor.png' alt='Releasing a pelican at Pelican Harbor'></div><div class='text'><h3>Since its founding, the Pelican Harbor Seabird Station has done priceless work, rescuing over 35,821 native birds, mammals, and reptiles. Visitors are given the opportunity to volunteer to care for the animals being taken care of by cleaning after and feeding them. The organization also provides Seabird Cruises, which take passengers along waters to observe over 30 species of birds.</h3></div></div>"},
	{coords:{lat: 26.499573832858726, lng: -80.21232937408512},
		content: "<center><h1>Arthur R. Marshall Loxahatchee National Wildlife Refuge</h1></center><div class='container'><div class='image'> <img style='width:300px;height:200px;' img src='images/loxahatchee.jpg' alt='Sunset at Loxahatchee Wildlife Refuge'></div><div class='text'><h3>This wildlife sanctuary houses the most northern remnant of the historic Everglades wetlands, protecting the integrity of the remaining ecosystem. Visitor activities include hiking, biking, wildlife observation, photography, and much more!</h3></div></div>"},
	{coords:{lat: 26.36631133640211, lng: -80.07013981422405},
		content: "<center><h1>Gumbo Limbo Nature Center</h1></center><div class='container'><div class='image'> <img style='width:300px;height:200px;' src='images/gumbo-limbo.jpg' alt='Sea Turtle at Gumbo Limbo Nature Center'></div><div class='text'><h3>Gumbo Limbo is a fun, interactive nature center focused on rehabilitating marine wildlife, specifically sea turtles. Visitors can adopt a sea turtle, go on a walk on their Boardwalk Trail, check out their Butterfly Garden, and so much more. They are also often involved in beach cleanups!</h3></div></div>"},
	{coords:{lat: 29.167783709963093, lng: -81.79159879100125},
	    content: "<center><h1>Ocala National Forest</h1></center><div class='container'><div class='image'> <img style='width:300px;height:200px;' src='images/ocala.jpg' alt='A spring in Ocala National Forest'></div><div class='text'><h3>Ocala National Forest is known for its large areas of sand pine scrub forest. Its multiple springs and recreation areas have clean, natural pools and canoe runs, which have been cited to be very relaxing and fun!</h3></div></div>"},
	{coords:{lat: 25.484541535607914, lng: -80.20791265433957},
		content: "<center><h1>Biscayne National Park</h1></center><div class='container'><div class='image'> <img style='width:300px;height:200px;' src='images/biscayne.jpg' alt='Lighthouse at Biscayne National Park'></div><div class='text'><h3>This park allows visitors to take a break from the busy streets of downtown Miami for relaxation in nature. It works to conserve and protect a unique blend of aquamarine waters, emerald islands, and fish-bejeweled coral reefs. Visitors are able to boat, snorkel, camp, watch wildlife, or just take a walk to see the stunning views.</h3></div></div>"},
	    //this image's width fits perfectly, but height too big sigh
	{coords:{lat: 25.27471779658046, lng: -80.90248989934324},
		content: "<center><h1>Everglades National Park </h1></center><div class='container'><div class='image'> <img style='width:300px;height:200px;' src='images/everglades.jpg' alt='Sunset in the Everglades'></div><div class='text'><h3>The Everglades National Park protects the southern 20% of the original Everglades in Florida, encompassing 1.5 million acres of tropical and subtropical habitat with one of the world’s most diverse ecosystems. Visitors are able to interact with wildlife; tour the park on boat, bike, or foot; and immerse themselves in the wonders of the swamp.</h3></div></div>"}];
	    
	// Loops through array of markers, adding them to map

	for(var i=0; i< markers.length; i++)
	{
		addMarker(markers[i])
	}
	var latitude= document.getElementById("latitude");
	var longitude= document.getElementById("longitude");
	var title= document.getElementById("name");
	events.push(title.value);
	var description= document.getElementById("description");
	var description_image = document.getElementById("description_image");
	var full_description= "<center><h1>" + title.value + "</h1></center><div class='container'><div class='image'> <img style='width:300px;height:200px;' src=" + description_image.value +"></div><div class='text'><h3>"+ description.value+"</h3></div></div>";
	var test= {coords: {lat: Number(latitude.value), lng: Number(longitude.value)}, content: full_description};
	addMarker(test)
	latitude.value = " ";
	longitude.value = " ";
	title.value = "";
	description.value = "";
	description_image.value = "";
	return map;
}


function fn1()
{
	for(var i= 0; i<events.length;i++)
	{
		var b= "rd"+(i+1);
		var elemento= document.getElementById(b);
		if(elemento.checked==true)
		{
			alert("Registered for " + elemento.value);
		}
	}
}

function event_click()
{
	document.getElementById("elements").innerHTML = "";
	var a= document.getElementById("elements");
	for(var i=0; i<events.length;i++)
	{
		var radiobox = document.createElement('input');
		var label= document.createElement("label");
		var br = document.createElement("br");
		radiobox.type = 'radio';
		radiobox.id = 'rd'+(i+1);
		radiobox.value = events[i];
		radiobox.name= 'grp1';
		label.setAttribute("for",radiobox);
		label.innerHTML= events[i];
		a.appendChild(radiobox); 
		a.appendChild(label);    
		a.appendChild(br);
	}
	a.innerHTML += "<button onclick= 'fn1()'>Submit</button>";
	
}

