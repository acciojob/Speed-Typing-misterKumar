//your JS code here. If required.
    function fetchRandomQuote() {
      fetch('http://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
          
          const quoteDisplay = document.querySelector('.quote-display');
          quoteDisplay.textContent = data.content;
        })
        .catch(error => {
          console.log('Error fetching quote:', error);
        });
    }

    
    function clearInputAndResetTimer() {
      const quoteInput = document.getElementById('quoteInput');
      quoteInput.value = '';
      startTimer();
    }

    function checkTypingAccuracy() {
      const quoteInput = document.getElementById('quoteInput');
      const quoteDisplay = document.querySelector('.quote-display');
      const typedText = quoteInput.value;
      const quoteText = quoteDisplay.textContent;

      for (let i = 0; i < typedText.length; i++) {
        if (typedText[i] === quoteText[i]) {
          quoteInput.classList.add('correct');
          quoteInput.classList.remove('incorrect');
        } else {
          quoteInput.classList.add('incorrect');
          quoteInput.classList.remove('correct');
          return;
        }
      }

      if (typedText.length === quoteText.length) {
    
        quoteInput.classList.add('correct');
        quoteInput.classList.remove('incorrect');
        stopTimer();
        setTimeout(clearInputAndResetTimer, 3000);
        fetchRandomQuote();
      }
    }

    let startTime;
    let timerInterval;

    
    function startTimer() {
      startTime = Date.now();
      timerInterval = setInterval(updateTimer, 1000);
    }

    
    function stopTimer() {
      clearInterval(timerInterval);
    }
function updateTimer() {
  const timer = document.querySelector('.timer');
  const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
  timer.textContent = elapsedTime;
}


    
    const quoteInput = document.getElementById('quoteInput');
    quoteInput.addEventListener('input', checkTypingAccuracy);

    
    fetchRandomQuote();
    startTimer();