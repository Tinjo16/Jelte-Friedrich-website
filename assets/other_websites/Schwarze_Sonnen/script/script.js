document.addEventListener('DOMContentLoaded', function() {
  // Alle Links auswählen
  const links = document.querySelectorAll('#schwarzes_loch a');

  // Funktion, die aufgerufen wird, wenn ein Link geklickt wird
  function handleClick(event) {
      // Verhindern, dass der Link die Seite neu lädt
      event.preventDefault();

      // ID des geklickten Links abrufen
      const targetId = this.getAttribute('id').replace('link', 'hole');

      // Alle Absätze auswählen und verstecken
      const paragraphs = document.querySelectorAll('#vartxt > div');
      paragraphs.forEach(paragraph => {
          paragraph.classList.add('hidden');
      });

      // Den Zielabsatz anzeigen
      const targetParagraph = document.getElementById(targetId);
      targetParagraph.classList.remove('hidden');
  }

  // Eventlistener für jeden Link hinzufügen
  links.forEach(link => {
      link.addEventListener('click', handleClick);
  });
});



// zu internen links sliden
    $('nav a, .scroll').click(function(){
        var nav_hoch = $('header > div:first-of-type').outerHeight();
        console.log(nav_hoch)
        var linkziel = $(this).attr('href');
        $('html,body').animate({scrollTop:$(linkziel).offset().top - nav_hoch},1000);
    });


    // akt. link focus
    $('#nodesk2 a').on('click', function(event) {
        $('#nodesk2 a').removeClass('akt');
        $(this).addClass('akt');
    });
