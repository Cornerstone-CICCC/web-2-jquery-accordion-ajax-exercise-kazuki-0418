$(function() {
  $(".accordion-header").on("click", function () {
    $(".accordion-content").slideUp();
    
    let content = $(this).next(".accordion-content");
    
    if (!content.is(":visible")) {
        content.slideDown();
    }
});


$("button").on("click", function () {
  $.ajax({
      url: "https://dummyjson.com/todos", 
      method: "GET",
      success: function (response) {
          $(".todos ul").empty();

          response.todos.forEach(function (todo) {
              $(".todos ul").append(`<li>${todo.todo}</li>`);
          });
      },
      error: function () {
          alert("Failed to load To-Do items.");
      }
  });
});
})

