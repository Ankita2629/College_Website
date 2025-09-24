const faqResponses = {
    "hello": "Hi there! How can I help you?",
    "hi": "Hi there! How can I help you?",
    "hii": "Hi there! How can I help you?",
    "admission process": "The admission process involves filling out the online form and submitting the required documents.",
    "how can I apply for admission": "You can apply by visiting our official website, filling out the admission form, and uploading the necessary documents.",
    "what documents are required for admission": "You need to submit a copy of your previous academic certificates, identity proof, passport-size photographs, and any other specific documents mentioned in the application guidelines.",
    "is there an entrance exam for admission": "Some courses may require an entrance exam, while others allow direct admission based on merit. Please check the course-specific requirements.",
    "what is the last date to apply for admission": "The last date for application varies each year. Please check the official website or contact the admission office for exact dates.",
    "can I edit my application after submission": "Yes, you can edit your application before the final submission deadline. Once submitted, changes may not be allowed.",
    "what is the application fee": "The application fee varies for different courses. Please refer to the admission section of our website for details.",
    "is the application fee refundable": "No, the application fee is non-refundable.",
    "do you offer scholarships for new students": "No",
    "how can I check my admission status": "You can log in to the admission portal with your registered credentials to check the status of your application.",
    "when will the merit list be published": "The merit list will be published after the application deadline. You can check the website for updates.",
    "can international students apply for admission": "Yes, international students can apply. They need to submit additional documents like a passport copy, visa details, and English proficiency test scores.",
    "is there a helpline for admission-related queries": "Yes, you can contact our admission helpdesk at [helpline number] or email us at [admission email].",
    "what happens after I get selected": "Once selected, you need to confirm your admission by paying the admission fee and completing the document verification process.",
    "can I apply for multiple courses": "Yes, you can apply for multiple courses, but you need to submit a separate application for each course.",
    "do you provide hostel facilities for new students": "Yes, we offer hostel facilities for both male and female students. You can apply for hostel accommodation after securing admission.",
    "can I apply offline for admission": "No, admissions are only processed online through our official website.",
    "what should I do if I face technical issues while applying": "If you face any technical issues, you can contact our IT support team or admission helpline for assistance.",
    "what is the eligibility criteria for admission": "Eligibility criteria vary by course. Please check the course-specific details on our website.",
    "is there any reservation quota for specific categories": "Yes, we follow government-mandated reservation policies. You can check the detailed policy on our website.",
    "courses offered": "We offer various courses in Computer Science, Business, and Arts.",
    "fees structure": "The fee structure varies by course. Please visit our official website for details.",
    " fees ": "The fee structure varies by course. Please visit our official website for details.",
    "what is fees for btech ?": "The fee structure varies by course. Please visit our official website for details.",
    "contact details": "Please visit 'contact us' page for that",
    "Top placement":"please visit to 'placement record' section present on home page",
    "default": "I'm sorry, I don't understand that. Can you rephrase?"
};


function sendMessage() {
    const userInput = document.getElementById("user-input").value.trim().toLowerCase();
    if (!userInput) return;

    addMessage(userInput, "user-message");

    const botResponse = faqResponses[userInput] || faqResponses["default"];
    setTimeout(() => addMessage(botResponse, "bot-message"), 500);

    document.getElementById("user-input").value = "";
}

function addMessage(text, className) {
    const chatBox = document.getElementById("chat-box");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", className);
    messageDiv.textContent = text;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}