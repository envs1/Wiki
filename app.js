$(document).ready(function(){
  

  $('#conductSearch').click(function(){
    var enteredSearch = $('#enterSearch').val();


    var urlResult = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+enteredSearch+"&format=json&callback=?";
    

    $.ajax({
      type:"GET",
      url:urlResult,
      async:false,
      dataType:"json",
      success:function(wikiData){
     
        $('#searchResults').html('');
        

     for (var i=0; i<wikiData[1].length; i++) {
        $('#searchResults').prepend("<li><a href="+wikiData[3][i]+">"+wikiData[1][i]+"</a><p>"+wikiData[2][i]+"</p></li>");
     } 


$('#enterSearch').val('');        


var list = $('ul');
var listItems = list.children('li');
list.append(listItems.get().reverse());
        
      },
      
      error:function(errorCommunication){
        alert("There has been an error");
      }
      
      });
    
    }); 
  
 
  $('#enterSearch').keypress(function(typing){
    if (typing.which===13) {
      $('#conductSearch').click();
    }
  });
  
});