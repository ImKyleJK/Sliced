document.addEventListener('DOMContentLoaded', function(){

    var log = document.getElementById('log')
    var form = document.getElementById('input')
    var input = form.children[0];
  
    input.focus();
  
    form.addEventListener('submit', function(event){
      event.preventDefault();
      socket.send(input.value);
      input.value = '';
      input.focus();
    }, false);
    
    socket = new io.Socket('localhost', {port: 8888});
    socket.connect();
    socket.on('message', function(data){
        log.innerHTML = log.innerHTML + data + "\n";
        log.scrollTop = log.scrollHeight;
    });  
  
  }, false);