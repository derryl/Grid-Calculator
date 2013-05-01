$(document).ready( function() {


    var form = $("#settings"),
        fields = form.find("input"),
        num_cols_field = form.find("#num_cols"),
        col_width_field = form.find("#col_width"),
        gut_width_field = form.find("#gut_width"),
        output = $(".results");


    function calculateWidth(num_cols, col_width, gut_width) {
        return (num_cols * col_width) + ((num_cols - 1) * gut_width);
    }

    function showResults(num_cols, col_width, gut_width) {

        totalWidth = calculateWidth(num_cols, col_width, gut_width);

        html = "This grid will be " + totalWidth + "px wide.";

        output.html(html);
    }

    $("a.submit").click( function() {

        var num_cols = num_cols_field.val(),
            col_width = col_width_field.val(),
            gut_width = gut_width_field.val();

        showResults(num_cols, col_width, gut_width);

    });

});