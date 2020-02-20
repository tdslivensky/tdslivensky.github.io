 function downloadButton(fileLink, name){
      var element = document.createElement('a');
      element.setAttribute('href', fileLink);
      element.setAttribute('download', name)
      
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
 };