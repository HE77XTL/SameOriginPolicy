  $('.show').addEventListener('click', function(){
    var xhr = new XMLHttpRequest()
    xhr.open('GET', 'http://127.0.0.1:8080/getNews')
    xhr.send()
    xhr.onload = function(){
      appendHtml(JSON.parse(xhr.responseText))
    }
  })

  function appendHtml(news){
    var html = ''
    for( var i=0; i<news.length; i++){
      html += '<li>' + news[i] + '</li>'
    }
    $('.news').innerHTML = html
  }

  function $(selector){
    return document.querySelector(selector)
  }