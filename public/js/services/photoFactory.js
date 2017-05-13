app.factory('photoFactory', function() {
      var photos = [
        {
            name: "Minimalist flower",
            type: "Black and white",
            location: "Halomot Zichron",
            image: "https://scontent.fhfa2-1.fna.fbcdn.net/v/t1.0-9/15285088_1416511051707344_7568113755115400838_n.jpg?oh=66de0535d4807b74f1133b4d81b9cde8&oe=59B90158",
            rating: [],
            avRate: 0

        },
        {
            name: "Man running with dog",
            type: "Bird's eye view",
            location: "Binyamina quarry",
            image: "https://scontent.fhfa2-1.fna.fbcdn.net/v/t1.0-9/14632901_1380933595265090_1411533564117017189_n.jpg?oh=f3cf649bc1f658e6e5c27ddaf8547c2f&oe=597E7FCD",
            rating: [],
            avRate: 0
        },

        {
            name: "Fern Tango",
            type: "Patterns",
            location: "Ramat haNadiv",
            image: "https://scontent.fhfa2-1.fna.fbcdn.net/v/t1.0-9/14479783_1340183922673391_1955881069940096038_n.jpg?oh=d66d8bb04bbf5e543ed946de15ac7a3c&oe=59B02F4F",
            rating: [],
            avRate: 0
        },


        {
            name: "My personality",
            type: "Self portrait",
            location: "At home",
            image: "https://scontent.fhfa2-1.fna.fbcdn.net/v/t1.0-9/12036491_1051470488211404_8259230543319189830_n.jpg?oh=3d64b748baefceaca11786cec630d6c8&oe=59AEA7D8",
            rating: [],
            avRate: 0
        }

    ];

var addPhoto = function (newPhoto) {
  photos.push(newPhoto);
  console.log(photos);
    };

var removePhoto = function($index){
    photos.splice($index,1);  
    }



    return {
      photos: photos,
      addPhoto: addPhoto,
      removePhoto: removePhoto,
    }
});