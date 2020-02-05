// $(document).ready(function() {
//   alert("hello");
// });

$(document).ready(function() {
  $("#button").on("click", function() {
    var first = parseInt($("#first-number").val());
    var second = parseInt($("#second-number").val());
    var third = parseInt($("#third-number").val());
    var fourth = parseInt($("#fourth-number").val());
    var fifth = parseInt($("#fifth-number").val());

    var sumNumber = first + second + third + fourth + fifth;
    $("#output").html(sumNumber);
  });
});
