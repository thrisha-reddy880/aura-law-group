// Dom Selectors
const modal = document.getElementById('contactModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const consultationForm = document.getElementById('consultationForm');
const formFeedback = document.getElementById('formFeedback');

// Open Modal Interaction
openModalBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

// Close Modal Interaction
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    consultationForm.reset();
    formFeedback.textContent = '';
});

// Close Modal by Clicking Outside Box
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        consultationForm.reset();
        formFeedback.textContent = '';
    }
});

// Client Input Validation
consultationForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevents page reload
    
    const name = document.getElementById('fullName').value.trim();
    
    if (name.length < 3) {
        formFeedback.style.color = 'red';
        formFeedback.textContent = 'Please enter a valid full name.';
        return;
    }
    
    // Simulate Successful Submission Response
    formFeedback.style.color = 'green';
    formFeedback.textContent = 'Thank you! Your evaluation request has been recorded.';
    
    setTimeout(() => {
        modal.style.display = 'none';
        consultationForm.reset();
        formFeedback.textContent = '';
    }, 2500);
});
// Interactive Services Tab Switcher Logic
function openService(evt, serviceName) {
    // Hide all tab contents
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }

    // Remove the "active" class from all tab buttons
    const tabLinks = document.getElementsByClassName("tab-link");
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    // Show the specific clicked tab content, and add an "active" class to the button
    document.getElementById(serviceName).style.display = "block";
    evt.currentTarget.className += " active";
}
// Tech Startup Legal Risk Calculator Logic
function calculateScore() {
    let totalScore = 0;
    let questionsAnswered = 0;

    // Check Question 1
    const q1Options = document.getElementsByName('q1');
    for (let i = 0; i < q1Options.length; i++) {
        if (q1Options[i].checked) {
            totalScore += parseInt(q1Options[i].value);
            questionsAnswered++;
        }
    }

    // Check Question 2
    const q2Options = document.getElementsByName('q2');
    for (let i = 0; i < q2Options.length; i++) {
        if (q2Options[i].checked) {
            totalScore += parseInt(q2Options[i].value);
            questionsAnswered++;
        }
    }

    // Check Question 3
    const q3Options = document.getElementsByName('q3');
    for (let i = 0; i < q3Options.length; i++) {
        if (q3Options[i].checked) {
            totalScore += parseInt(q3Options[i].value);
            questionsAnswered++;
        }
    }

    // Validation guard: Make sure they answered all options
    if (questionsAnswered < 3) {
        alert("Please answer all 3 questions to evaluate your score.");
        return;
    }

    // Display Results Container
    const resultBox = document.getElementById('calcResult');
    const resultScore = document.getElementById('resultScore');
    const resultStatus = document.getElementById('resultStatus');
    const resultAdvice = document.getElementById('resultAdvice');

    resultBox.style.display = "block";
    resultScore.textContent = `Your Security Score: ${totalScore}/100`;

    // Formulate custom dynamic status advice
    if (totalScore >= 80) {
        resultStatus.style.color = "green";
        resultStatus.textContent = "Excellent: Low Legal Risk";
        resultAdvice.textContent = "Your core configurations are strong, but regular check-ups prevent architectural layout drift as compliance laws adapt.";
    } else if (totalScore >= 45) {
        resultStatus.style.color = "#d9b310";
        resultStatus.textContent = "Warning: Moderate Legal Gaps Detected";
        resultAdvice.textContent = "You have foundational safety mechanisms, but missing explicit code copyright registrations or co-founder contracts leaves you exposed to litigation.";
    } else {
        resultStatus.style.color = "red";
        resultStatus.textContent = "Critical: High Vulnerability Threat Level";
        resultAdvice.textContent = "Your venture operates completely exposed. A competitor could claim your algorithms or a contractor could claim equity ownership.";
    }
    
    // Smooth scroll straight down to the new data card
    resultBox.scrollIntoView({behavior: 'smooth', block: 'nearest'});
}
// 🌗 Dark/Light Mode Theme Switcher Interaction logic
const themeToggleBtn = document.getElementById('themeToggleBtn');
themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'light') {
        document.documentElement.removeAttribute('data-theme');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
});

// 🔄 Interactive Testimonial Carousel Data Store Array
const reviews = [
    {
        text: `"Aura Law Group completely secured our Series A funding documentation. Their understanding of developer equity allocations is unmatched."`,
        author: "— Sarah Jenkins, CEO of CloudPulse Technologies"
    },
    {
        text: `"They protected our proprietary machine learning modeling algorithms from a major international copycat threat. Unbelievably sharp counsel."`,
        author: "— Dr. Aris Thorne, Founder of NeuralKnot Labs"
    },
    {
        text: `"Navigating compliance architectures on a global scale across Europe and Asia seemed impossible until we retained Aura Law Group."`,
        author: "— Elena Rostova, COO of OmniaSaaS Group"
    }
];

let currentReviewIndex = 0;
const reviewText = document.getElementById('reviewText');
const reviewAuthor = document.getElementById('reviewAuthor');

function updateReview() {
    reviewText.style.opacity = 0;
    setTimeout(() => {
        reviewText.textContent = reviews[currentReviewIndex].text;
        reviewAuthor.textContent = reviews[currentReviewIndex].author;
        reviewText.style.opacity = 1;
    }, 200);
}

function nextReview() {
    currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
    updateReview();
}

function prevReview() {
    currentReviewIndex = (currentReviewIndex - 1 + reviews.length) % reviews.length;
    updateReview();
}
// Dropdown Selection Routing Trigger Function
function simulateSelect(tabId) {
    // Finds the corresponding link item element and forces a layout click simulation action
    const targetBtn = document.querySelector(`button[onclick*='${tabId}']`);
    if(targetBtn) {
        targetBtn.click();
    }
}
