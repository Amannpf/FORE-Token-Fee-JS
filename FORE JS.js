let selectedFields = ['course', 'field_336347', 'field_336348', 'field_336349'];
let preselected = 0;
selectedFields.forEach(function (i, e) {
    if ($('#' + i).val() != "") {
        preselected++;
        console.log(preselected)
        $('#field_415541').val() == '' ? $('#field_415541').val(preselected) : console.log($('#field_415541').val());
        $('.'+selectedFields[$('#field_415541').val()-1]).css("pointer-events", "none");
    }
});

$('#' + selectedFields.join(",#")).change(function (i, e) {
    let nowselected = 0;
    selectedFields.forEach(function (i, e) {

        if ($('#' + i).val() != "") {
            nowselected++;
            console.log(nowselected)
        }
    });

    $('#field_415540').val(nowselected - $("#field_415541").val()).change().trigger('chosen:updated');
    console.log(nowselected - preselected)
});


