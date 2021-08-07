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
	var longitude= document.getElementById("longitude").value;
	var latitude= document.getElementById("latitude").value;
	alert(longitude + latitude);
	
	
}


	



function initMap()
{
	var options= 
	{
		zoom:5,
		center: {lat: 42.35866, lng: -71.05674}
	}
	var map= new google.maps.Map(document.getElementById('map'), options);
	
	//Add Marker Function

	function addMarker(props)
		{
			var marker= new google.maps.Marker
			({
				position: props.coords, 
				map:map, 
				icon: 'park.png'
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
	
	google.maps.event.addListener(map, 'click', 
	function(event)
	{
		addMarker({coords:event.latLng, iconImage: 'park.png'});
	}
	);
	
	
	// Array of Markers
	
	var markers= [{coords:{lat:42.466763, lng: -70.949493}, content: '<h1>Yooooo</h1><img src="park.png" alt="Girl in a jacket">'},{coords:{lat:46, lng: -72}}];
	
	// Loop through markers
	
	for(var i=0; i< markers.length; i++)
	{
		addMarker(markers[i])
	}

}
