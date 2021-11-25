$('#msg').css('display', 'none');
$('#genrate').click(function () {
    generateOTP();
    var code;
    $('#genrate').css('display', 'none');
    $('#msg-1').css('display', 'none');
    $('#msg').css('display', 'inline');
});

function generateOTP() {
    // Declare a digits variable
    // which stores all digits
    var digits = '0123456789';
    let BACKUP_CODE = '';
    for (let i = 0; i < 8; i++) {
        BACKUP_CODE += digits[Math.floor(Math.random() * 10)];
    }
    code = BACKUP_CODE;
    $('#code').text(code);

}

$('#box-1').click(function () {
    $('#box-1').addClass('mfa_active');
    $('#box-2').removeClass('mfa_active');
    $('#box-3').removeClass('mfa_active');
});

$('#box-2').click(function () {
    $('#box-2').addClass('mfa_active');
    $('#box-1').removeClass('mfa_active');
    $('#box-3').removeClass('mfa_active');
});

$('#box-3').click(function () {
    $('#box-3').addClass('mfa_active');
    $('#box-2').removeClass('mfa_active');
    $('#box-1').removeClass('mfa_active');
});