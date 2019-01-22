// Desktop nav

$dropdownMenu = $('#dropdown');
$mobileDropdown = $('#mobile-nav-links');
$dropdownOptions = $('#dropdown-options');
$mobileDropdownOptions = $('#mobile-dropdown-options')

function dropdownMenu(clickElement, nav){
    clickElement.on('click', function(e){
        e.stopPropagation();
        nav.toggleClass('hidden');
        nav.toggleClass('flex-column');
    
        $(document.body).click(function(){
            nav.addClass('hidden');
            nav.removeClass('flex-column');
        })
    })
}

// Desktop nav
dropdownMenu($dropdownMenu, $dropdownOptions);

// Mobile nav
dropdownMenu($mobileDropdown, $mobileDropdownOptions);