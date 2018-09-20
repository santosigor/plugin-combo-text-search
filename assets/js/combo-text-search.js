function openCombo() {
	$('.ctsCombo .itemList').css('display', 'block');
  $('#resultCTS').hide(); 
  $('#ctsCombo').show();
}

$(document).ready(function() {

	$('.itemList').click(function(e) {
	  e.preventDefault();
	  var txtCTS = $(this).text();
	  $('#ctsInput').val();
	  $('#ctsInput').val(txtCTS);
	});

});

function closeCombo() {
	setTimeout(function(){
		$('.ctsCombo .itemList').css('display', 'block');
	  $('#resultCTS').hide(); 
	  $('#ctsCombo').hide();
	}, 100);
}

function searchCT() {
  $('#resultCTS').hide(); 
  var input, filter, div, a, i;
  input = document.getElementById('ctsInput');
  filter = input.value.toUpperCase();
  div = document.getElementById('ctsCombo');
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = '';
    } else {
      a[i].style.display = "none";
    }
  }
  var visivel = $('.ctsCombo .itemList').is(':visible');
  if (!visivel) {
    $('#resultCTS').show();
  }
}