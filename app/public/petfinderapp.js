// $(document).ready(function(){


// Petfinder -- working except for form
var apiKey = '996d9ff2e72ad424c69b5b563ba1831c'; // assign our key to a variable, easier to read

// the next line and function set up the button in our html to be clickable and reactive 
document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons() {
 document.getElementById('submit').addEventListener('click', function (event) {
  event.preventDefault();
  // this line gets the information from the form entry
  var type = document.getElementById("type").value;
  console.log(type);
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
    "location": zip,
    output: 'full',
    format: 'json',
    'age': age,
    "size": size
   },
   // Here is where we handle the response we got back from Petfinder
   success: function (response) {
    console.log(response); // debugging
    var petName = response.petfinder.pet.name.$t;
    var img = response.petfinder.pet.media.photos.photo[0].$t;
    var id = response.petfinder.pet.id.$t;
    var petType = response.petfinder.pet.animal.$t;
    console.log(petType);
    var petAge = response.petfinder.pet.age.$t;
    var petSize = response.petfinder.pet.size.$t;
    var location = response.petfinder.pet.contact.zip.$t;
    console.log(location);
    var petDesc = response.petfinder.pet.description.$t;

    // Creating elements for each response
    var newDiv = document.createElement('div');
    newDiv.setAttribute("class", "row")

    var newCol = document.createElement('div');
    newCol.setAttribute("class", "col s12 m12");


    // Creating new card div with pet info
    var newCard = document.createElement("div");
    newCard.setAttribute("class", "card flex-item");

    // Image variable
    var newHeader = document.createElement('div');
    newHeader.setAttribute("class", "card-image");

    var newImg = document.createElement("img");
    newImg.src = img;

    // Pet Name
    var newName = document.createElement('span');
    newName.setAttribute("class", "card-title");
    newName.textContent = petName;

    // Pet type
    var newType = document.createElement('div');
    newType.textContent = petType;

    // Pet age
    var newAge = document.createElement("div");
    newAge.textContent = petAge;

    // Pet size
    var newSize = document.createElement("div");
    newSize.textContent = petSize;

    // Pet location
    var newLoc = document.createElement("div");
    newLoc.textContent = location;

    // Pet description
    var newDesc = document.createElement("div");
    newDesc.setAttribute("class", "card-content");
    newDesc.textContent = petDesc;

    var newAction = document.createElement("div");
    newAction.setAttribute("class", "card-action");
    var link = document.createElement("a");
    link.textContent = "More Info Here"
    link.href = 'https://www.petfinder.com/petdetail/' + id;





    // Adding new info to body
    document.body.appendChild(newDiv);

    newDiv.appendChild(newCol);
    newCol.appendChild(newCard)
    newCard.appendChild(newHeader);
    newHeader.appendChild(newImg);
    newHeader.appendChild(newName);
    newCard.appendChild(newType);
    newCard.appendChild(newAge);
    newCard.appendChild(newSize);
    newCard.appendChild(newLoc)
    newCard.appendChild(newDesc);
    newCard.appendChild(newAction);
    newAction.appendChild(link);
   }
  });
 })

}
// });