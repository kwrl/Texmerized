/**
 * Created by haakonkaurel on 21/05/15.
 */

$(document).ready(function() {
    $("#urlfield").on("keyup", function() {
        $("#textcontainer").empty();
        $.post("/", {"fetchurl" : $(this).val()})
            .success(function(data) {
                $("#textcontainer").empty();
                if(data!="") {
                    data.text_units.forEach(function(element) {
                        if(element!="") {
                            $("#textcontainer").append("\<div class='well'\><h4\>"+element+"\</h4\>\</div\>");
                        }
                    });
                }
            });
    });
});
