async function fetchdata(finallang , finaltyped) {
    const url = 'https://translator82.p.rapidapi.com/api/translate';
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '65cb3c1018msh65a33c10b84cb22p1a0e9bjsnc40f848a2740',
            'X-RapidAPI-Host': 'translator82.p.rapidapi.com'
        },
        body: JSON.stringify({
            language: finallang,
            text: finaltyped
        })
    };
    try {
        traslated.textContent = 'Please wait ...'
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        traslated.textContent = result.result
    } catch (error) {
        console.error(error);
        traslated.textContent = "Error Occured Check Console !"
    }
}


const copyButton = document.querySelector('#copy');
const translatedText = document.querySelector('#translated_text');

copyButton.addEventListener('click', () => {
  const copiedText = translatedText.value;

  // Create a temporary textarea element
  const textarea = document.createElement('textarea');
  textarea.value = copiedText;

  // Append the textarea to the document
  document.body.appendChild(textarea);

  // Copy the text from the textarea
  textarea.select();
  document.execCommand('copy');

  // Remove the temporary textarea
  document.body.removeChild(textarea);

  copyButton.textContent = 'Copied!';
  setTimeout(() => {
    copyButton.textContent = 'Copy';
  }, 1500);
});


let alrt = document.querySelector('#alrt')
alrt.addEventListener('click',()=>{
    alert("Currently we only support English as texting . ")
})
let finallanguage = '';
let lang = document.querySelector("#lang");
lang.addEventListener('change', () => {
  let langtext = lang.value;
  finallanguage = langtext.toLowerCase().substring(0,2)
});

let finaltyped = '';
let text = document.querySelector('#typed_text');
text.addEventListener('change',()=>{
    finaltyped= text.value
})

let tranlatebtn = document.querySelector('#btn')
let traslated = document.querySelector('#translated_text')

tranlatebtn.addEventListener('click',()=>{
    fetchdata(finallanguage,finaltyped)
})


