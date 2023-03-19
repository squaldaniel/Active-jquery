$(document).ready(function() {
    $('a').click(function(e) {
      e.preventDefault();
      var currentPath = window.location.pathname;
      var newUrl = $(this).attr('href');
      var caminho = encodeURIComponent(newUrl);
      window.history.pushState({path:caminho},caminho,caminho);
    });
    
  });