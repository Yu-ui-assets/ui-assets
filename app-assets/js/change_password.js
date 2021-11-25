$("#change_password_btn").click(function () {
    toastr.success("Password has been updated");
    setInterval(function () {
        window.location.href = "login.html"
    }, 3000);
});
$("input#change_pwd").blur(function () {
    $('#dynamic').removeClass("dynamic_margin");
    $("#pwd_strength_wrap").fadeOut(400);
});
$('#change_pwd').click(function () {
    $('#dynamic').addClass("dynamic_margin");
});
$("input#change_pwd").on("focus keyup", function () {
    var score = 0;
    var a = $(this).val();
    var desc = new Array();

    // strength desc
    desc[0] = "Too short";
    desc[1] = "Weak";
    desc[2] = "Good";
    desc[3] = "Strong";
    desc[4] = "Best";

    $("#pwd_strength_wrap").fadeIn(400);

    // password length
    if (a.length >= 6) {
        $("#length").removeClass("invalid").addClass("valid");
        score++;
    } else {
        $("#length").removeClass("valid").addClass("invalid");
    }

    // at least 1 digit in password
    if (a.match(/\d/)) {
        $("#pnum").removeClass("invalid").addClass("valid");
        score++;
    } else {
        $("#pnum").removeClass("valid").addClass("invalid");
    }

    // at least 1 capital & lower letter in password
    if (a.match(/[A-Z]/) && a.match(/[a-z]/)) {
        $("#capital").removeClass("invalid").addClass("valid");
        score++;
    } else {
        $("#capital").removeClass("valid").addClass("invalid");
    }

    // at least 1 special character in password {
    if (a.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)) {
        $("#spchar").removeClass("invalid").addClass("valid");
        score++;
    } else {
        $("#spchar").removeClass("valid").addClass("invalid");
    }
    if (score > 1) {
        $('#cnfm_pwd').prop('disabled', false);
        $('#cnfm_pwd').removeClass('disabled_input');
    } else if (score < 2) {
        $('#cnfm_pwd').prop('disabled', true);
        $('#cnfm_pwd').addClass('disabled_input');
        $('#cnfm_pwd').val('');
    }
    if (a.length > 0) {
        //show strength text
        $("#passwordDescription").text(desc[score]);
        // show indicator
        $("#passwordStrength").removeClass().addClass("strength" + score);
    } else {
        $("#passwordDescription").text("Password not entered");
        $("#passwordStrength").removeClass().addClass("strength" + score);
    }
});
$('#show_confirm_password_btn').click(function () {
    if ($('#cnfm_pwd').get(0).type == 'password') {
        $('#cnfm_pwd').get(0).type = 'text';
        $('#show_confirm_password_btn').removeClass('ft-eye-off');
        $('#show_confirm_password_btn').addClass('ft-eye');
    } else {
        $('#cnfm_pwd').get(0).type = 'password';
        $('#show_confirm_password_btn').removeClass('ft-eye');
        $('#show_confirm_password_btn').addClass('ft-eye-off');
    }
});
$('#show_new_password_btn').click(function () {
    if ($('#change_pwd').get(0).type == 'password') {
        $('#change_pwd').get(0).type = 'text';
        $('#show_new_password_btn').removeClass('ft-eye-off');
        $('#show_new_password_btn').addClass('ft-eye');
    } else {
        $('#change_pwd').get(0).type = 'password';
        $('#show_new_password_btn').removeClass('ft-eye');
        $('#show_new_password_btn').addClass('ft-eye-off');
    }
});
$('#show_old_password_btn').click(function () {
    if ($('#old_pwd').get(0).type == 'password') {
        $('#old_pwd').get(0).type = 'text';
        $('#show_old_password_btn').removeClass('ft-eye-off');
        $('#show_old_password_btn').addClass('ft-eye');
    } else {
        $('#old_pwd').get(0).type = 'password';
        $('#show_old_password_btn').removeClass('ft-eye');
        $('#show_old_password_btn').addClass('ft-eye-off');
    }
});


$('#change_pwd').keyup(function () {
    var old_password = $('#old_pwd').val();
    var new_password = $('#change_pwd').val();
    if (old_password == new_password) {
        $('#change_compare_msg').html("New Password is same as Old Password");
        $('#change_password_btn').prop('disabled', true)
    } else {
        $('#change_password_btn').removeClass('disabled_input');
        $('#change_password_btn').prop('disabled', false).css({"cursor": "pointer"});
        $('#change_compare_msg').html("");
    }
});

$('#cnfm_pwd').keyup(function () {
    var password = $('#change_pwd').val();
    var c_password = $('#cnfm_pwd').val();
    if (password != c_password) {
        $('#change_compare_msg').html("Password Doesn't Match");
        $('#change_password_btn').prop('disabled', true);
    } else {
        $('#change_password_btn').removeClass('disabled_input');
        $('#change_password_btn').prop('disabled', false);
        $('#change_compare_msg').html("");
    }
});