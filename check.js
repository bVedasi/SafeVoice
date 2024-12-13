function checkWebSpeechAPISupport() {
    const isRecognitionSupported = 'SpeechRecognition' in window || 'webkitSpeechRecognition' in window;
    const isSynthesisSupported = 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;

    if (isRecognitionSupported && isSynthesisSupported) {
        console.log('Web Speech API is supported in this browser.');
        return true;
    } else {
        console.warn('Web Speech API is not fully supported in this browser.');
        alert('Sorry, your browser does not support the Web Speech API. Please try using Google Chrome or another supported browser.');
        return false;
    }
}

// Example usage
if (checkWebSpeechAPISupport()) {
    // Proceed with implementing voice assistance
    console.log('You can enable voice assistant features!');
} else {
    // Fallback or alternative
    console.log('Voice assistant features are disabled.');
}
