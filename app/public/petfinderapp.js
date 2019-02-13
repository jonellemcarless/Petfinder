// $(document).ready(function(){


// Petfinder -- WORKING, just need to update
var apiKey = '996d9ff2e72ad424c69b5b563ba1831c'; // assign our key to a variable, easier to read

// the next line and function set up the button in our html to be clickable and reactive 
document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons(){
	document.getElementById('submitZip').addEventListener('click', function(event){
		event.preventDefault();
		// this line gets the zip code from the form entry
		var type = document.getElementById('type').value;
		var age = document.getElementById('age').value;
		var size = document.getElementById('size').value;
		var zip = document.getElementById('zip').value;
		var url = 'http://api.petfinder.com/pet.getRandom';
		
		// Within $.ajax{...} is where we fill out our query 
		$.ajax({
			url: url,
			jsonp: "callback",
			dataType: "jsonp",
			data: {
				key: apiKey,
				animal: type,
				'location': zip,
				output: 'basic',
				format: 'json',
				'age': age,
				'size': size
			},
			// Here is where we handle the response we got back from Petfinder
			success: function(response) {
				console.log(response); // debugging
				var petName = response.petfinder.pet.name.$t;
				var img = response.petfinder.pet.media.photos.photo[0].$t;
				var id = response.petfinder.pet.id.$t;
				var petType = response.petfinder.pet.animal.$t;
				var petAge = response.petfinder.pet.age.$t;
				var petSize = response.petfinder.pet.size.$t;

				var newName = document.createElement('a');
				var newDiv = document.createElement('div');
				var newType = document.createElement('a');
				var newAge = document.createElement('a');
				var newSize = document.createElement('a');

				newName.textContent = petName;
				newName.href = 'https://www.petfinder.com/petdetail/' + id;
				newType.textContent = petType;
				newAge.textContent = petAge;
				newSize.textContent = petSize;

				var newImg = document.createElement('img');
				newImg.src = img;
				
				var list = document.createElement("div");
				list.setAttribute("id", "List");
				document.body.appendChild(list);

				newDiv.appendChild(newName);
				list.appendChild(newDiv);
				list.appendChild(newImg);
				list.appendChild(newType);
				list.appendChild(newAge);
				list.appendChild(newSize);
			}
		});
		})

}
// });