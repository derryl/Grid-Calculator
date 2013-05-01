$(document).ready( function() {


    var form = $("#settings"),
        fields = form.find("input"),
        num_cols_field = form.find("#num_cols"),
        col_width_field = form.find("#col_width"),
        gut_width_field = form.find("#gut_width"),
        output = $(".results"),
        preview = $(".preview .row");


    function calculateWidth(num_cols, col_width, gut_width) {
        return (num_cols * col_width) + ((num_cols - 1) * gut_width);
    }

    function showResults(num_cols, col_width, gut_width) {

        totalWidth = calculateWidth(num_cols, col_width, gut_width);

        html = "This grid will be " + totalWidth + "px wide.";

        output.html(html);

        showPreview(num_cols, col_width, gut_width)
    }


    function showPreview(num_cols, col_width, gut_width) {

        preview.empty();

        html = "<div class='col' ";
        html += "style='";
        html += "width: " + col_width + "px; ";
        html += "margin-left: " + gut_width + "px; ";
        html += "'></div>";

        var i = 0;

        for (; i < num_cols; i++) {
            preview.append(html);
        }

        preview.attr("style","margin-left: -" + gut_width + "px");

    }


    $("a.submit").click( function() {

        var num_cols = num_cols_field.val(),
            col_width = col_width_field.val(),
            gut_width = gut_width_field.val();

        showResults(num_cols, col_width, gut_width);

    });

});