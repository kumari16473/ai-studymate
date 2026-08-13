const topicInput = document.getElementById("topic");
const languageInput = document.getElementById("language");
const actionInput = document.getElementById("action");
const responseBox = document.getElementById("response");
const generateBtn = document.getElementById("generateBtn");

function generateAnswer() {

    const topic = topicInput.value.trim();
    const language = languageInput.value;
    const action = actionInput.value;

    if (topic === "") {
        alert("Please enter a topic or notes.");
        return;
    }

    responseBox.innerHTML = `
        <div class="loading">
            <div class="spinner">🤖</div>
            <p>AI is thinking...</p>
        </div>
    `;

    generateBtn.disabled = true;
    generateBtn.textContent = "Generating...";

    setTimeout(() => {

        let answer = "";

        if (action === "summary") {
            answer = createSummary(topic, language);
        }

        else if (action === "explain") {
            answer = explainTopic(topic, language);
        }

        else if (action === "quiz") {
            answer = createQuiz(topic, language);
        }

        else if (action === "points") {
            answer = createKeyPoints(topic, language);
        }

        responseBox.innerHTML = answer;

        generateBtn.disabled = false;
        generateBtn.textContent = "✨ Generate";

    }, 1000);
}


function createSummary(topic, language) {

    if (language === "Tamil") {

        return `
            <h3 class="answer-title">📚 சுருக்கம்</h3>

            <p>
                நீங்கள் கொடுத்த தலைப்பு:
                <strong>${escapeHTML(topic)}</strong>
            </p>

            <br>

            <p>
                இந்த தலைப்பின் முக்கிய கருத்துகளை புரிந்துகொள்ள,
                அதன் வரையறை, முக்கிய அம்சங்கள் மற்றும் பயன்பாடுகளை
                முதலில் படிக்கவும்.
            </p>

            <br>

            <p>
                💡 தேர்வுக்கு முக்கியமான பகுதிகளை தனியாக
                குறிப்பெடுத்து படிப்பது நல்லது.
            </p>
        `;

    }

    return `
        <h3 class="answer-title">📚 Summary</h3>

        <p>
            <strong>Topic:</strong>
            ${escapeHTML(topic)}
        </p>

        <br>

        <p>
            This topic should be understood by focusing on its
            definition, important concepts, key features and
            practical applications.
        </p>

        <br>

        <p>
            💡 <strong>Study Tip:</strong>
            Write down the important concepts separately
            for quick revision.
        </p>
    `;
}


function explainTopic(topic, language) {

    if (language === "Tamil") {

        return `
            <h3 class="answer-title">🧠 எளிய விளக்கம்</h3>

            <p>
                <strong>${escapeHTML(topic)}</strong>
                என்ற தலைப்பை எளிமையாக புரிந்துகொள்ள,
                முதலில் அதன் அடிப்படை கருத்தை அறிந்துகொள்ள வேண்டும்.
            </p>

            <br>

            <p>
                📌 <strong>Step 1:</strong>
                தலைப்பின் வரையறையை புரிந்துகொள்ளவும்.
            </p>

            <p>
                📌 <strong>Step 2:</strong>
                அதன் முக்கிய அம்சங்களை படிக்கவும்.
            </p>

            <p>
                📌 <strong>Step 3:</strong>
                ஒரு practical example மூலம் புரிந்துகொள்ளவும்.
            </p>

            <br>

            <p>
                🎯 இதை 2 அல்லது 3 முறை revision செய்தால்
                தேர்வில் எளிதாக நினைவில் வைத்துக்கொள்ளலாம்.
            </p>
        `;

    }

    return `
        <h3 class="answer-title">🧠 Simple Explanation</h3>

        <p>
            <strong>${escapeHTML(topic)}</strong>
            can be understood easily by starting with the
            basic concept.
        </p>

        <br>

        <p>📌 <strong>Step 1:</strong> Understand the definition.</p>

        <p>📌 <strong>Step 2:</strong> Learn the important features.</p>

        <p>📌 <strong>Step 3:</strong> Understand it with a practical example.</p>

        <br>

        <p>
            🎯 Revise these concepts 2–3 times to remember
            them better for your exam.
        </p>
    `;
}


function createQuiz(topic, language) {

    if (language === "Tamil") {

        return `
            <h3 class="answer-title">❓ Quiz</h3>

            <div class="quiz-question">
                <strong>1. ${escapeHTML(topic)} என்றால் என்ன?</strong>
                <p>A) அடிப்படை கருத்து</p>
                <p>B) ஒரு programming language</p>
                <p>C) ஒரு database</p>
                <p>D) ஒரு operating system</p>
            </div>

            <div class="quiz-question">
                <strong>2. இந்த தலைப்பை படிப்பதன் முக்கிய நோக்கம் என்ன?</strong>
                <p>A) புரிந்துகொள்வது</p>
                <p>B) Computer shutdown செய்வது</p>
                <p>C) File delete செய்வது</p>
                <p>D) Password மாற்றுவது</p>
            </div>

            <div class="quiz-question">
                <strong>3. தேர்வுக்கு எப்படி தயாராக வேண்டும்?</strong>
                <p>A) முக்கிய points-ஐ revision செய்ய வேண்டும்</p>
                <p>B) படிக்க வேண்டாம்</p>
                <p>C) Random answers எழுத வேண்டும்</p>
                <p>D) Notes delete செய்ய வேண்டும்</p>
            </div>
        `;

    }

    return `
        <h3 class="answer-title">❓ Quiz</h3>

        <div class="quiz-question">
            <strong>1. What should you understand first about ${escapeHTML(topic)}?</strong>
            <p>A) Basic concept</p>
            <p>B) Computer shutdown</p>
            <p>C) File deletion</p>
            <p>D) Password creation</p>
        </div>

        <div class="quiz-question">
            <strong>2. What is the main purpose of studying this topic?</strong>
            <p>A) Understanding the concept</p>
            <p>B) Deleting files</p>
            <p>C) Changing passwords</p>
            <p>D) Closing applications</p>
        </div>

        <div class="quiz-question">
            <strong>3. What is useful for exam preparation?</strong>
            <p>A) Revision</p>
            <p>B) Ignoring notes</p>
            <p>C) Random answers</p>
            <p>D) Deleting notes</p>
        </div>
    `;
}


function createKeyPoints(topic, language) {

    if (language === "Tamil") {

        return `
            <h3 class="answer-title">📌 முக்கிய குறிப்புகள்</h3>

            <ul>
                <li>தலைப்பின் அடிப்படை வரையறையை படிக்கவும்.</li>
                <li>முக்கிய concepts-ஐ note செய்யவும்.</li>
                <li>Practical examples-ஐ புரிந்துகொள்ளவும்.</li>
                <li>Exam-க்கு முக்கியமான points-ஐ revision செய்யவும்.</li>
            </ul>

            <br>

            <p>
                📖 <strong>Topic:</strong>
                ${escapeHTML(topic)}
            </p>
        `;

    }

    return `
        <h3 class="answer-title">📌 Key Points</h3>

        <ul>
            <li>Learn the basic definition.</li>
            <li>Understand the important concepts.</li>
            <li>Study practical examples.</li>
            <li>Revise important exam points.</li>
        </ul>

        <br>

        <p>
            📖 <strong>Topic:</strong>
            ${escapeHTML(topic)}
        </p>
    `;
}


function clearResponse() {

    responseBox.innerHTML = `
        <div class="welcome">
            <span>🤖</span>
            <h3>Your AI answer will appear here</h3>
            <p>
                Enter a topic and select what you want to learn.
            </p>
        </div>
    `;

    topicInput.value = "";
}


function escapeHTML(text) {

    const div = document.createElement("div");
    div.textContent = text;

    return div.innerHTML;
}