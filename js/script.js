$(document).ready(function() {

// console.log('Hello World!');
//
// function getTemplateAjax(path, target) {
//     var source;
//     var template;
//
//     $.ajax({
//         url: path, //ex. js/templates/mytemplate.handlebars
//         cache: true,
//         success: function(data) {
//             source    = data;
//             template  = Handlebars.compile(source);
//             $(target).html(template);
//         }
//     });
// };
//
// var pathTopNav = './templates/topNav.hbs';
// var targetTopNav = 'TopNav';
//
// getTemplateAjax(pathTopNav, targetTopNav);

// Check for click events on the navbar burger icon
$(".navbar-burger").click(function() {

    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");

});

});
