   $(document).ready(function () {
       new WOW().init();

       $('.sandwich').click(function () {
           $('.menu').addClass('active');
       });

       $('.menu__list_link').click(() => {
        $('.menu').removeClass('active');
    });

       $('.menu__clouse').click(() => {
           $('.menu').removeClass('active');
       });


       // valid form

        $('.contact__form').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    email: true
                },
                checkbox: {
                    required: true
                }

            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Введите {0} символа!")
                },
                checkbox:{ 
                    required:"Нажмите, чтобы согласиться"
                },
                email: {
                    required: "Пожалуйста, введите свою почту",
                    email: "Неправильно введен адрес почты"
                }
            }
        });


        // submit form  

    //    $('form').submit(function (e) {
    //     e.preventDefault();
    //     if (!$(this).valid()) {
    //         return;
    //     }
    //     $.ajax({
    //         type: 'POST',
    //         url: 'mailer/smart.php',
    //         data: $(this).serialize()
    //     }).done(function () {
    //         $(this).find('input').val('');
    //         $('#consultation, #order').fadeOut();
    //         $('.overlay, #thanks').fadeIn('slow');

    //         $('form').trigger('reset');
    //     });
    //     return false;
    // });
   });