
$('#projectlink').click(() => {
  $('#content-home').css('display', 'none')
  $('#content-monster-slaught').css('display', 'none')
  $('#content-todo').css('display', 'none')
  $('#content-project').css('display', 'flex')
})

$('#homelink').click(() => {
  $('#content-project').css('display', 'none')
  $('#content-monster-slaught').css('display', 'none')
  $('#content-todo').css('display', 'none')
  $('#content-home').css('display', 'flex')
})

$('#monsterlink').click(() => {
  $('#content-project').css('display', 'none')
  $('#content-home').css('display', 'none')
  $('#content-todo').css('display', 'none')
  $('#content-monster-slaught').css('display', 'flex')
})

$('#todolink').click(() => {
  $('#content-project').css('display', 'none')
  $('#content-home').css('display', 'none')
  $('#content-monster-slaught').css('display', 'none')
  $('#content-todo').css('display', 'flex')
})
