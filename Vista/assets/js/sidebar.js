

$(function () {
    ToggleSidebarOptions();

    $(window).resize(function () {
        if ($(window).width() < 769)
            $('.main').css("margin-left", "0")

        else
            $('.main').css("margin-left", "7rem")

        ToggleSidebarOptions()
    });

    switch (sidebarLink) {
        case 1:
            $('.sidebar-item')[0].classList.add('sidebar-active');
            break;
        case 2:
            $('.sidebar-item')[1].classList.add('sidebar-active');
            break;
        case 3:
            $('.sidebar-item')[2].classList.add('sidebar-active');
            break;
        case 4:
            $('.sidebar-item')[3].classList.add('sidebar-active');
            break;
        default:
            $('.sidebar-item').removeClass('sidebar-active');
            break;
    }
})

function ToggleSidebarOptions() {
    var width = $(window).width();
    var nav = $('#navegationNavbar-collapse')
    //Mostrar
    if (width < 769) {
        var navbarOptions = $(".nav-item");
        nav.html("");

        $($('.sidebar-item')).each(function (index) {
            var a = $(this).html();
            var link = `<li class="nav-sidebar my-2">${a}</li>`;
            nav.append(link)
        });
        nav.append(navbarOptions)
    }
    //Ocultar
    else {
        $('.nav-sidebar').hide();
    }
}

function ToggleSidebar(op = true) {
    if (op) {
        $('#sidebar').animate({ width: '240px' }, 200);
        setTimeout(() => { $('.main').css("margin-left", "15rem") }, 700)
        $('#btn-toggleSidebar').fadeOut();
    }
    else {
        $('#sidebar').animate({ width: '0px' }, 200);
        $('.main').css("margin-left", "0")
        $('#btn-toggleSidebar').fadeIn();

    }


}
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    if ($('#tabla').length)
    {
        let table = new DataTable('#tabla',
            {
                responsive: true,
                info: false,

                "language": {
                    "search": "Buscar:",
                    "lengthMenu": "Mostrar _MENU_ ",
                    "zeroRecords": "No se encontraron resultados",
                    "info": "Mostrando _START_ a _END_ de _TOTAL_ registros",
                    "infoEmpty": "Mostrando 0 a 0 de 0 registros",
                    "infoFiltered": "(filtrado de _MAX_ registros en total)",
                    "paginate": {
                        "first": "Primero",
                        "last": "Último",
                        "next": "<i class='fa-solid fa-angle-right'></i>",
                        "previous": "<i class='fa-solid fa-angle-left'></i>"
                    },

                }
            });

        $('.dataTables_wrapper .dataTables_paginate .paginate_button.previous').click(function() {
            $(this).find('i').animate({marginLeft: '-5px'}, 'fast')
                .animate({marginLeft: '5px'}, 'fast')
                .animate({marginLeft: '0px'}, 'fast');
        });

        $('.dataTables_wrapper .dataTables_paginate .paginate_button.next').click(function() {
            $(this).find('i').animate({marginLeft: '5px'}, 'fast')
                .animate({marginLeft: '-5px'}, 'fast')
                .animate({marginLeft: '0px'}, 'fast');
        });

    }
