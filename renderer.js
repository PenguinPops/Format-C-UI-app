const fs = api.require('fs');
function Run() {

    api.require('fs').writeFile('./tuWpiszTekst.txt', document.querySelector('#a').value, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('File written successfully');
        // Execute the API call after the file is written
        api.call();
      }
    });
  }
  
api.onOutput((event) => {document.querySelector('#b').value = fs.readFileSync('./wynik.txt', 'utf-8'); fs.unlinkSync('./wynik.txt');});