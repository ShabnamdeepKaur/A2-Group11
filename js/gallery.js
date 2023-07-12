// Image gallery items
var galleryItems = [
	{
		title: "Flower stall at the market in Münster, North Rhine-Westphalia, Germany (2017)",
		filenameLarge: "flowers-pink-large.jpg",
		filenameSmall: "flowers-pink-small.jpg",
		credit: "By Dietmar Rabich - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=61514522"
	},
	{
		title: "Sentmaring Park is valued for its natural beauty, encompassing expansive green spaces, and scenic landscapes.",
		filenameLarge: "flowers-purple-large.jpg",
		filenameSmall: "flowers-purple-small.jpg",
		credit: "By Dietmar Rabich - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=40957238"
	},
	{
		title: "Poppy is widely recognized as a symbol of remembrance for soldiers who have lost their lives in war",
		filenameLarge: "flowers-red-large.jpg",
		filenameSmall: "flowers-red-small.jpg",
		credit: "By Dietmar Rabich - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=48211466"
	},
	{
		title: "Daffodils are seen as a symbol of hope, positivity, and optimism",
		filenameLarge: "flowers-white-large.jpg",
		filenameSmall: "flowers-white-small.jpg",
		credit: "By Dietmar Rabich - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=48576226"
	},
	{
		title: "Sunflowers are associated with positive symbolism, representing happiness, warmth, loyalty, and longevity.",
		filenameLarge: "flowers-yellow-large.jpg",
		filenameSmall: "flowers-yellow-small.jpg",
		credit: "By Dietmar Rabich - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=62071586"
	}
];

// Function to create thumbnail elements dynamically
function createThumbnailElements() {
	var thumbnailList = document.getElementById("thumbnailList");

	for (var i = 0; i < galleryItems.length; i++) {
		var listItem = document.createElement("li");
		var image = document.createElement("img");

		image.src = "images/" + galleryItems[i].filenameSmall;
		image.alt = galleryItems[i].title;
		image.width = 240;
		image.height = 160;

		image.addEventListener("click", function(index) {
			return function() {
				updateMainImage(index);
			};
		}(i));

		listItem.appendChild(image);
		thumbnailList.appendChild(listItem);
	}
}

// Function to update the main image and caption
function updateMainImage(index) {
	var mainImage = document.getElementById("mainImage");
	var imageCaption = document.getElementById("imageCaption");

	mainImage.src = "images/" + galleryItems[index].filenameLarge;
	imageCaption.textContent = galleryItems[index].title;

	// Remove 'active' class from all thumbnail images
	var thumbnailImages = document.querySelectorAll("#thumbnailList li img");
	thumbnailImages.forEach(function(image) {
		image.classList.remove("active");
	});

	// Add 'active' class to the clicked thumbnail image
	thumbnailImages[index].classList.add("active");
}

// Call the function to create thumbnail elements
createThumbnailElements();
