// ======== JQuery ToDo List =========

var $listitem, $inputvalue, itemcode;

$(document).ready(function(){
    
    //------ clear text box when input gets focus ------
    $("input#listitem").focusin(function(){
        $(this).val("");
        
    });

    //------ add item to list ------
    $('form').submit(function () {
        var inputvalue = $('input').val();
        if ($('input').val() !== '') {
            //itemcode = '<li id="'+inputvalue+'">\n<div class="input-group">\n<span class="input-group-addon">\n<input type="checkbox" class="itemdone" checked="checked"  />\n</span>\n<input type="text" class="form-control" placeholder="'+inputvalue+'" />\n<span class="input-group-btn">\n<button class="btn btn-default" type="button"><a href="" class="removeitem">X</a></button>\n</span>\n</div>\n</li>';
            itemcode = '<li id="'+inputvalue+'">\n<div class="input-group">\n<span class="input-group-btn">\n<button class="btn btn-default removeitem" type="button" value="'+inputvalue+'">X</button>\n</span><input type="text" class="form-control" placeholder="'+inputvalue+'" value="'+inputvalue+'" />\n</div>\n</li>';
            $('ul#listofitems').prepend(itemcode);
        };
        $('input').val('');
        return false;
    });
 
    //------ remove checked item from list ------  
    $(document).on('click', 'button.removeitem', function (e) {
        e.preventDefault();
        var inputvalue = $(this).val();
        $('li#'+inputvalue).remove();
    });
    
});