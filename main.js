let input=document.getElementById('input-file')

function readFile(input) {
    let file = input.files[0]; 
    let fileReader = new FileReader(); 
    fileReader.readAsText(file); 
    fileReader.onload = function() {
      alert(fileReader.result);
    }; 
    fileReader.onerror = function() {
      alert(fileReader.error);
    }; 
  }

  input.addEventListener('change',readFile);