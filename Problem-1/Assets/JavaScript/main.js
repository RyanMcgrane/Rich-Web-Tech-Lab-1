/*
$(document).ready(function()
{
    $("#addBtn").click(function()
    {
       var txt = $("#inputTxt").val();
       if(txt)
       {
          var listsize = $("#list").children().length;
          alert(listsize%3);

          if(listsize%3==0)
          {
            $("#list").append("<li class='red'>"+txt+"</li>");
          
          }
          else
          {
            $("#list").append("<li>"+txt+"</li>");
          }
       
        }
    }); 
});
*/
   
var counter = 0;

function addLi()
{
  var txtVal = document.getElementById('txtVal').value,
    listNode = document.getElementById('list'),
    liNode = document.createElement('LI'),
    txtNode = document.createTextNode(txtVal);
    
    console.log(txtNode);
    
    if(txtVal != '')
    {
      console.log("input empty!");

      liNode.appendChild(txtNode);
      listNode.appendChild(liNode);
  
      var elements = document.querySelectorAll("li");
  
      counter++;
      document.getElementById('txtVal').value = "";
      document.getElementById('showError').innerHTML = "";
      
      if(counter == 3)
      {
        listNode.appendChild(liNode).style.color = "red";
        counter = 0;
      }

    }
    else
    {
       document.getElementById('showError').innerHTML = "Field cannont be empty!";
    }


    
   
  /* for (var i=0; i < elements.length; i++) 
    {
      if(i % 3 == 0)
      {
        elements[i].style.color = "red";
      }
    
    }
    */

}

