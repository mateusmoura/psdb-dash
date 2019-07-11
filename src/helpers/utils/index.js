export const SidebarMenu = () => {
  // Plugin metisMenu
  window.jQuery("#side-menu").metisMenu();
  // Collapsar menu 
  window.jQuery('.button-menu-mobile').on('click', function (event) {
    event.preventDefault();
    window.jQuery("body").toggleClass("enlarged");
  });
  // Inicializar tela grande class enlarged
  if (window.jQuery(window).width() < 1025) {
    window.jQuery('body').addClass('enlarged');
  } else {
    window.jQuery('body').removeClass('enlarged');
  }
  // Ativa subitens do menu
  window.jQuery("#sidebar-menu a").each(function () {
    var pageUrl = window.location.href.split(/[?#]/)[0];
    if (this.href === pageUrl) {
      window.jQuery(this).addClass("mm-active");
      window.jQuery(this).parent().addClass("mm-active");
      window.jQuery(this).parent().parent().addClass("mm-show");
      window.jQuery(this).parent().parent().prev().addClass("mm-active");
      window.jQuery(this).parent().parent().parent().addClass("mm-active");
      window.jQuery(this).parent().parent().parent().parent().addClass("mm-show");
      window.jQuery(this).parent().parent().parent().parent().parent().addClass("mm-active");
    }
  });
};
