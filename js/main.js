function mouseenter() {
  $('.wrapper__main_visit-etc_work-this-button').click(function(){
    if (!$(this).data('status')) {
      $(this).html('Отменить запрос в сотрудники');
      $(this).data('status', true);
    }
    else {
      $(this).html('Работаете в этой компании?');
      $(this).data('status', false);
    }
  });
};

$(document).ready(function() {
  mouseenter();
});
