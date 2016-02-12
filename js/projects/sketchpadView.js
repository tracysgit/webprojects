// ======== JQuery Sketchpad =========

 // --------- JQuery code after page load ----------
$(document).ready(function(){
    
    
    // initial settings and functions
    document.getElementById("fullgrid").innerHTML = makeGrid(30,30);
    crayonColor("blue");
    
    // --------- set color of the grid boxes to a color ----------
    function crayonColor(color){
        $('.sketchpad-grid').mouseover(function(){
            $(this).css("background-color",color);
        });  
    };
    
    // --------- change the color of the grid boxes to selected color ----------
    //$('select#chooseColor').click(function(){
   // $('button#chooseColor').click(function(){
    //    var chooseColor = $('button#chooseColor option:selected').val();
  //        var chooseColor = $('a.select name:selected').val();
  //        crayonColor(chooseColor);
  //  });  
    
    $('a.select').on("click", function(){
        //e.stopPropagation();
        searchName = $(this).attr("name");
        //$("#colorSelect").parent("#button-group").removeClass("open");
        $("#button-group").removeClass("open");
        var chooseColor = searchName;
        crayonColor(chooseColor);
        return false;
    });
    
    // --------- change the color of the grid boxes to random color ----------
    $('button[name="randomColor"]').click(function(){
        $('.sketchpad-grid').mouseover(function(){
            var randColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            $(this).css("background-color",randColor);            
        });
    }); 
      
    // --------- clear all color from all grid boxes ----------
    $('button[name="clearGrid"]').click(function(){
        //$('.sketchpad-grid').removeClass('active'); 
        $('.sketchpad-grid').css("background-color","#EEE");
    });
    
    // --------- create a new grid of boxes ----------
    $('button[name="createGrid"]').click(function(){
        var userRows = prompt("Please enter your desired number of rows");
        var userCols = prompt("Please enter your desired number of columns");
        if ((userCols != null) && (userRows != null)) {
            document.getElementById("fullgrid").innerHTML = makeGrid(userRows,userCols);
            crayonColor("blue");
        } else {
            document.getElementById("fullgrid").innerHTML = makeGrid(30,30);
            crayonColor("blue");
        } 
    });
    
    // --------- fades color to leave a motion trail ----------
    $('button[name="leaveTrail"]').click(function(){
        //$('.sketchpad-grid').mouseover(function(){
        $('.sketchpad-grid').hover(function(){
            //$(this).fadeOut(600).fadeIn(100);
            $(this).fadeOut(600),
            $(this).fadeIn(100);
        });
    });
    
    // --------- show/hide border on boxes per checkbox ---------- 
    $('input[name="showBorder"]').click(function(){
        if ( $(this).prop('checked') ) {
            $('.sketchpad-grid').css({"border-width":"1px","margin":"-1px"});
        }  else {
            $('.sketchpad-grid').css({"border-width":"0px","margin":"-1px"});    
        }
    });
           
});

// --------- this function creates a grid of boxes in html ----------
   function makeGrid(rows,cols){
        var rowcode = "";
        var screenWidth = $('#fullgrid').width();
        //var screenWidth = 960;
        var boxWidth = Math.floor(screenWidth/cols);
        var boxHeight = boxWidth;
        for(var r=1;r<=rows;r++){  // for each row
            var colcode = "";
            for(var c=1;c<=cols;c++){  // for each div col in the grid
                colcode += '\n<div id=\"box' + r + '-' + c + '\" class=\"sketchpad-grid\" style=\"width:' + boxWidth + 'px;height:' + boxHeight + 'px;\"></div>';
                //colcode += '\n<div id=\"box' + r + "-" + c + '\" class=\"sketchpad-grid\">' + 'row ' + r + ' - col ' + c + '</div>';      
            }
        rowcode += "\n<div class=\"sketchpad-row\">" + colcode + "\n</div>"; 
        }
        return rowcode;
    };

