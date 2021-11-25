

$(document).ready(function () {
    $("#buttonid").on("click", function () {
        $("#files").click();
    });


    var default_image = "./app-assets/images/portrait/small/Ami-sheth.png";

    if (window.File && window.FileList && window.FileReader) {
        $("#files").on("change", function (e) {
            var files = e.target.files,
                filesLength = files.length;
            var f = files[0];
            var fileReader = new FileReader();
            fileReader.onload = function (e) {
                var file = e.target;
                $(".imageThumb").attr("src", e.target.result);
                $(".remove_button").removeClass("hidden");
                $("#buttonid").attr("title", "Change Image");

                $(".remove_button").click(function () {
                    $(".imageThumb").attr("src", default_image);
                    $("#buttonid").attr("title", "Add Image");
                    $(".remove_button").addClass("hidden");
                });
            };
            fileReader.readAsDataURL(f);
        });
    } else {
        alert("Your browser doesn't support to File API");
    }

    $('#edit_profile').click(function(){
        $('.profile_input').prop('disabled',false);
        $('#cancel_profile').show();
        $('#save_profile').show();
    })

    $("#cancel_profile").click(function(){
        $('#cancel_profile').hide();
        $('#save_profile').hide();
        $('.profile_input').prop('disabled',true);
    });

    $("#save_profile").click(function(){
        $('#cancel_profile').hide();
        $('#save_profile').hide();
        $('.profile_input').prop('disabled',true);
    });
    

});
function update_profile() {
    toastr.success("Your profile has been updated");
}