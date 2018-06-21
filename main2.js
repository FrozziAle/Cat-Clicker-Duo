var catArray = [{
	name: 'Poplinre',
	img: 'img/poplinre.jpg',
	counter: 0,
}, {
	name: 'Chewie',
	img: 'img/chewie.jpg',
	counter: 0,
}];

function catList(catArray) {
	for(var i = 0; i < catArray.length; i++) {

		var myElem = document.createElement('div');

		var catName = document.createElement('h3');
		catName.innerHTML = catArray[i].name;
		myElem.appendChild(catName);

		var catImage = document.createElement('img');
		catImage.src = catArray[i].img;
		catImage.classList.add('cats');
		myElem.appendChild(catImage);

		var catCounter = document.createElement('p');
		catCounter.innerHTML = catArray[i].counter+' click';
		myElem.appendChild(catCounter);

		catImage.addEventListener('click', function(){
			return function() {
  			count[i] +=1;
  			catCounter.innerHTML = count[i]+' click';
			};
	});

		document.body.appendChild(myElem);

	};
};
catList(catArray);

/*


/**/
