document.addEventListener('DOMContentLoaded', () => {

const inputTextElement = document.getElementById('input');
const translateBtnElement = document.getElementById('translateBtn');
const outputElement = document.getElementById('output');
async function translateText() {
    const inputText = document.getElementById('input-text').value;
    const outputDiv = document.getElementById('output');
    
    if (!inputText.trim()) {
        outputDiv.innerText = "Будь ласка, введіть текст.";
        return;
    }

    const email = "your-email@example.com"; 

    const safeText = encodeURIComponent(inputText);
    

    const url = `https://api.mymemory.translated.net/get?q=${safeText}&langpair=uk|en&de=${email}`;
    
    try {
        outputDiv.innerText = "Переклад...";
        
        const response = await fetch(url);
        const data = await response.json();

        if (data.responseStatus === 200) {
            outputDiv.innerText = data.responseData.translatedText;
        } else {
            outputDiv.innerText = "Помилка перекладу: " + data.responseDetails;
        }
    } catch (error) {
        console.error("Error:", error);
        outputDiv.innerText = "Сталася помилка при запиті до API.";
    }
}

const button = document.getElementById('translateBtn');

button.addEventListener('click', translateText);






    
});
