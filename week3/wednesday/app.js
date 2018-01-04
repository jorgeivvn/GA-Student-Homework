// function render(data){
// let html = "<div class='addComment'><span>"+data.name+"</span><p>"+data.body+"</p></div><div class='clear'></div>";
//   $('#container').append(html);
// }
// $(document).ready(function() {
//   let comment= [
//   {"name": "Jorge Rodriguez", "body": "This is a comment!"}
// ];
//
// for(let i=0; i<comment.length; i++){
// render(comment[i]);
// $('#addComment').click(function()){
//   let addObj = {
//     "name": $('#name').val(),
//     "body": $('#bodyText').val()
//   };
//   console.log(addObj);
//   comment.push(addObj);
//   render(addObj);
// });
// });
var main = function() {
  $('.btn').click(function() {
    var post = $('.status-box').val();
    $('<li>').text(post).prependTo('.posts');
    $('.status-box').val('');
    $('.counter').text('280');
    $('.btn').addClass('disabled');
  });

  $('.status-box').keyup(function() {
    var postLength = $(this).val().length;
    var charactersLeft = 280 - postLength;
    $('.counter').text(charactersLeft);

    if(charactersLeft < 0) {
      $('.btn').addClass('disabled');
    }
    else if(charactersLeft == 280) {
      $('.btn').addClass('disabled');
    }
    else {
      $('.btn').removeClass('disabled');
    }
  });

  $('.btn').addClass('disabled');
 }

 function savePosts() {
   if(typeof)
 }

$(document).ready(main);


//data: postLength, charactersLeft,
//functions: 


//**************ALEX CODE EXAMPLE//************
function ColorManager() {
	this.colors = ["green", "red", "blue", "magenta", "indigo"];
	this.currentColor = window.localStorage.getItem("color");
	this.$header = $('h1');
	this.setColor = () => {
		let randomNumber = myHelpers.getRandomNumber();

		if (this.currentColor) {
			this.$header.css("color", this.currentColor);
		} else {
			let color = colors[randomNumber];
			$h1.setAttribute("style", "color:" + color);
		}
	}
}

function Helpers() {
	this.getRandomNumber = () => {
		return Math.floor(Math.random() * 5);
	};
	this.addToLocalStorage = () => {
		window.localStorage.setItem("emails", JSON.stringify(myEmailManager.emails));
	}

	this.addLocalStorageToDom = () => {
		myEmailManager.emails.forEach(function(email) {
			myEmailManager.$list.append('<li>').append(email);
		})
	}
}

function EventListener() {
	this.setEventListeners = () => {
		this.addClickToH1();
		this.addSubmitToForm();
	}

	this.addClickToH1 = () => {
		myColorManager.$header.click( function(event) {
			randomNumber = myHelpers.getRandomNumber();
			let color = myColorManager.colors[randomNumber];
			myColorManager.$header.css("color", color);

			event.target.setAttribute("style", "color:" + color);
			window.localStorage.setItem("color", color);
		});
	}

	this.addSubmitToForm = () => {
		myEmailManager.$form.submit(function(event) {
			event.preventDefault();
			let emailAddress = event.target.firstElementChild.value;
			myEmailManager.$list.append('<li>').append(emailAddress);
			myEmailManager.emails.push(emailAddress);
			myHelpers.addToLocalStorage();
		});
	}
}

function EmailManager() {
	this.emails = JSON.parse(localStorage.getItem("emails")) || [];
	this.$form  = $('form');
	this.$list  = $('ol');
}


const myColorManager   = new ColorManager();
const myHelpers        = new Helpers();
const myEventListeners = new EventListener();
const myEmailManager   = new EmailManager();

myColorManager.setColor();
myEventListeners.setEventListeners();
myHelpers.addLocalStorageToDom();
Add Comment



//Couldn't figure out a way to use Local Storage*****

//EXAMPLE OF USING LOCAL STORAGE WITH A CLICK COUNTER
// function clickCounter() {
//     if(typeof(Storage) !== "undefined") {
//         if (localStorage.clickcount) {
//             localStorage.clickcount = Number(localStorage.clickcount)+1;
//         } else {
//             localStorage.clickcount = 1;
//         }
//         document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
//     } else {
//         document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
//     }
// }










// // Start by creating a folder with index.html, style.css and app.js files and initializing a git repo.
// // Your HTML page should have a list in it that will display the posts. It can be empty, with JS adding posts, or have some dummy posts in it to start.
// // Your JS will hold an array of posts that it appends to the HTML list.
// // When your user clicks submit, your JS should handle taking the content of the form and putting it in that array, and updating the DOM.
// // Make frequent commits and pushes. You should commit every time you add a new feature, and it is working! A feature can be something as small as adding a little style.
