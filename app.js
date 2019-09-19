jQuery(document).ready(function () {
  $('a').click(function (event) {
    header = $(this).attr('href')
    $.ajax({
      url: header,
    })
      .done(function (html) {
        $('main').empty().append(html)
      })
      .fail(function () {
        console.log('error')
        return false
      })
      .always(function () {
        console.log('complete')
      })
    return false
  })
})

fetch("./main.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("main").innerHTML = data
  })


fetch("./footer.html")
  .then(response => { 
    return response.text()
  })
  .then(data => {
    document.querySelector("footer").innerHTML = data
  })






