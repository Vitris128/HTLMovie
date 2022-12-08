$(document).ready(function(e) {
    $('.search-panel .dropdown-menu').find('a').click(function(e) {
        e.preventDefault();
        var param = $(this).attr("href").replace("#", "");
        var concept = $(this).text();
        $('.search-panel span#search_concept').text(concept);
        $('.input-group #search_param').val(param);
    });
});

document.querySelector('#togBtn').addEventListener('input', (event) => {
    document.querySelector('.title').textContent = data[event.currentTarget.checked ? 'japanese' : 'english'].title;
  });
  
  var data = {
    "english": {
      "title": "Hello World"
    },
    "japanese": {
      "title": "ハロー・ワールド"
    }
  }