function CheckNumberOfRecords(e) {
    e.preventDefault();
    alert("Insert record button clicked");
    $.ajax({
        type: "POST",
        async: false,
        url: "Default.aspx/GetNumberOfRecords",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: '{}',
        success: function (response) {
            alert(response.d);
            if (response.d) {
                AsyncConfirmYesNo("Confirmation", "Do you want to insert the record?", MyYesFunction, MyNoFunction)
            }
        },
        failure: function (response) {
            console.log("Failure");
        },
        error: function (response) {
            console.log("error");
        },

    });
}

function AsyncConfirmYesNo(title, msg, yesFn, noFn) {
    var $confirm = $("#modalConfirmYesNo");
    $confirm.modal('show');
    $("#lblTitleConfirmYesNo").html(title);
    $("#lblMsgConfirmYesNo").html(msg);
    $("#btnYesConfirmYesNo").off('click').click(function () {
        yesFn();
        $confirm.modal("hide");
    });
    $("#btnNoConfirmYesNo").off('click').click(function () {
        noFn();
        $confirm.modal("hide");
    });
}

function MyYesFunction() {
    alert("Clicked Yes!");
    //Make another ajax call to insert the data
}
function MyNoFunction() {
    alert("Clicked No!");
    //just terminate here
}