// Ensure the browser supports the Web Speech API
if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.continuous = false; // Stops listening after one command
    recognition.lang = 'en-US'; // Set language
    recognition.interimResults = false; // Do not return partial results

    const synth = window.speechSynthesis;

    // Start recognition when the button is clicked
    document.getElementById('voice-btn').addEventListener('click', () => {
        recognition.start();
        speak('Voice assistant activated. How can I assist you?');
    });

    // Listen for speech input
    recognition.onresult = (event) => {
        const command = event.results[0][0].transcript.toLowerCase();
        console.log(`Heard: ${command}`);
        handleCommand(command);
    };

    // Handle commands
    function handleCommand(command) {
        if (command.includes('go to profile')) {
            window.location.href = 'profile.html';
        } else if (command.includes('go to home')) {
            window.location.href = 'home.html';
        } else if (command.includes('read this page')) {
            readPageContent();
        } else if (command.includes('help')) {
            speak('Here are some commands you can say: "Go to Profile", "Go to Home", "Read this page".');
        } else {
            speak('Sorry, I did not understand that. Please try again.');
        }
    }

    // Text-to-Speech function
    function speak(text) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 1; // Adjust speed
        utterance.pitch = 1; // Adjust pitch
        synth.speak(utterance);
    }

    // Read all text content on the page
    function readPageContent() {
        const content = document.body.innerText;
        speak(content);
    }
} else {
    alert('Sorry, your browser does not support the Web Speech API.');
}
