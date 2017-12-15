


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

$(document).ready(main);













// // Start by creating a folder with index.html, style.css and app.js files and initializing a git repo.
// // Your HTML page should have a list in it that will display the posts. It can be empty, with JS adding posts, or have some dummy posts in it to start.
// // Your JS will hold an array of posts that it appends to the HTML list.
// // When your user clicks submit, your JS should handle taking the content of the form and putting it in that array, and updating the DOM.
// // Make frequent commits and pushes. You should commit every time you add a new feature, and it is working! A feature can be something as small as adding a little style.
