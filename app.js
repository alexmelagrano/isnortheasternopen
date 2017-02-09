/**
 * Created by alexmelagrano on 2/8/17.
 */

var main = function(){

    // On load, go to isnortheasternopen.com and check what it says
    $(document).ready(function() {

        var status = "closed";
        // use Lambda process to scrape the site and find out what's going on
        // change the site's class accordingly

        
        if (status == "closed") {
            $('.title').text('NOPE.');
            $('.subtitle').text('Rejoice, my brethren - \'tis time for celebration! #lit');
            $('#body').addClass('closed');
        }
        if (status == "maybe") {
            $('.title').text('MAYBE?');
            $('.subtitle').text('Check your phones every 5 min for notifications ppl.');
            $('#body').addClass('maybe');
        }
        else {
            $('#body').addClass('open');
        }

        $('.curtain').fadeOut();
    });
};

main();