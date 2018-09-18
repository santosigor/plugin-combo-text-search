$(document).ready(function() {

  $('#ctsInput, .ctsInput span').on("click", function (e) {
    e.preventDefault();
    $('.ctsCombo span').css('display', 'block');
    $('#ctsCombo').show();
    $('#resultCTS').hide(); 
  });

  var submn = $(".clkN");
  $("body").on("click", function (e) {
    if (submn.has(e.target).length || e.target == submn[0])
      return;
    $('#ctsCombo').hide();
    $('.ctsCombo span').css('display', 'block');
  });

  $('.ctsCombo span').on("click", function (e) {
    e.preventDefault();
    var txtCTS = $(this).text();
    $('#ctsInput').val();
    $('#ctsInput').val(txtCTS);
    $('.ctsCombo span').css('display', 'block');
  });

});

function searchCT() {
  $('#resultCTS').hide(); 
  var input, filter, div, span, i;
  input = document.getElementById("ctsInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("ctsCombo");
  span = div.getElementsByTagName("span");
  for (i = 0; i < span.length; i++) {
    if (span[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
      span[i].style.display = "";
    } else {
      span[i].style.display = "none";
    }
  }
  var visivel = $('.ctsCombo span').is(':visible');
  if (!visivel) {
    $('#resultCTS').show();
  }
}