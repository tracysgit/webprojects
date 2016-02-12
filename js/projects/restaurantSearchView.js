// ======== JSON Restaurant Search =========

$(document).ready(function(){
    var searchItem = 0;
    var searchName = "";
    var searchURL = "";
    var results;
    
    //$(".modal-backdrop").removeClass("in").addClass("out");
    //location.reload();
    //return false;
    
    // ----- Run ajax to grab external JSON file of restaurant data -----
    $.ajax({
         url: "json/json_restaurant_search.txt",
         dataType: "text",
         success: function(data){
             results = $.parseJSON(data);
             
             // ----- Populate the drop-down list options -----
             for(var j=0;j<results.length;j++){
                 $('a.select').text(function(j){
                     return results[j].name;
                 });
             }
         },
         error: function() { // callback if there's an error
            alert("could not process JSON dataset");
         }
    });   

    // ----- Process the data display based on selected option ----- 
    $('a.select').on("click", function(){
        //e.stopPropagation();
        searchName = $(this).attr("name");
        $("#dropdown").removeClass("open");
        //$("#dropdown").dropdown("toggle");
        //$("#resSelect").hide();
        displayInfo(results[searchName]);
        return false;
    });

    // ----- Display the data based on selected option -----
    function displayInfo(r) {
        $("#restaurants").addClass("well");
        $("#resLogo").html("<img src='images/restaurants/"+r.logo+"' alt ='"+r.logo+"' width='130' class='img-responsive' />");
        $("#resName").text(r.name);
        $("#resStreetNum").text(r.address.building);
        $("#resStreetName").text(r.address.street);
        $("#resType").text(r.cuisine).addClass("bold");
        $("#resDesc").text(r.description);
        var listOfSpecials = "";
        for(var i=0;i<r.specials.length;i++){
               listOfSpecials += "<li>" + r.specials[i] + "</li>";
        }
        $("#resSpecials").html(listOfSpecials);
        //$("#dropdown").dropdown("toggle");
        
    }
    
});