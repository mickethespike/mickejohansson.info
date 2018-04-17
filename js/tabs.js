$('#projectlink').click(() => {
  $('#content-home').css('display', 'none')
  $('#content-monster-hunter').css('display', 'none')
  $('#content-project').css('display', 'flex')
})

$('#homelink').click(() => {
  $('#content-project').css('display', 'none')
  $('#content-monster-hunter').css('display', 'none')
  $('#content-home').css('display', 'flex')
})

$('#monsterlink').click(() => {
  $('#content-project').css('display', 'none')
  $('#content-home').css('display', 'none')
  $('#content-monster-hunter').css('display', 'flex')
})
