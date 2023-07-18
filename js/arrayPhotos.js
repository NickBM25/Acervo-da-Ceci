var arrayPhotos = [];
2
$.ajax({
    url: './assets/images/',
    success: function(data) {
      $(data).find("a").attr("href", function(i, val) {
        if (val.match(/\.(jpe?g|png|gif)$/)) {
            const fotoURL = val;
            arrayPhotos.push(fotoURL);
          }
      });
    }
  });
