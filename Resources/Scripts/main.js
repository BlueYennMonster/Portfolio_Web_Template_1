$dropdownMenu = $('#dropdown');
$dropdownOptions = $('#dropdown-options');

$dropdownMenu.on('click', function(e){
    e.stopPropagation();
    $dropdownOptions.toggleClass('hidden');
    $dropdownOptions.toggleClass('flex-column');

    $(document.body).click(function(){
        $dropdownOptions.addClass('hidden');
        $dropdownOptions.removeClass('flex-column');
    })
})

