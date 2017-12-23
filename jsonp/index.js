 $('.show').addEventListener('click', function(){
    var script = document.createElement('script');
    script.src = 'http://127.0.0.1:8080/getNews?callback=appendHtml';
    document.head.appendChild(script);
    document.head.removeChild(script);
  })

  function appendHtml(news){
    console.log(news)
    var html = '';
    for( var i=0; i<news.length; i++){
      html += '<li>' + news[i] + '</li>';
    }
    console.log(html);
    $('.news').innerHTML = html;
  }

  function $(id){
    return document.querySelector(id);
  }