// S.N.A.P. - Surveilling Nutritional Analysis Platform
// The Worst AI Product Ever Made

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
    window.scrollTo(0, 0);

    // Reset suggestion flow when entering suggestions screen
    if (screenId === 'screen-suggestions') {
        resetSuggestionFlow();
    }
}

function resetSuggestionFlow() {
    document.getElementById('analysis-step').classList.add('active');
    document.getElementById('result-step').classList.remove('active');
    const altResult = document.getElementById('alt-result');
    altResult.classList.remove('visible');
    altResult.innerHTML = '';
}

function showSuggestionResult() {
    document.getElementById('analysis-step').classList.remove('active');
    document.getElementById('result-step').classList.add('active');
}

const alternativeResponses = {
    alt1: {
        title: "Alternative Suggestion Generated!",
        body: "After re-running our algorithm with different parameters (we changed the font), our AI has produced a fresh, unique recommendation:",
        suggestion: "Eat Tacos.",
        footnote: "Note: This is mathematically identical to the previous suggestion. The science is settled."
    },
    alt2: {
        title: "Exploring Different Cuisines...",
        body: "We searched through 4,200 global cuisines and ran a comprehensive analysis. After careful consideration of Italian, Japanese, Indian, Ethiopian, French, and Thai cuisines, our AI has concluded:",
        suggestion: "All roads lead to tacos.",
        footnote: "Fun fact: A taco is technically an international food. It has lettuce (salad), meat (steak), cheese (French), and a tortilla (innovation)."
    },
    alt3: {
        title: "Vegetarian Mode Activated!",
        body: "We hear you! Our AI has carefully curated a plant-based recommendation just for you:",
        suggestion: "Vegetarian Tacos.",
        footnote: "Bean tacos, veggie tacos, mushroom tacos, sweet potato tacos — the taco ecosystem is vast and inclusive. The taco welcomes all."
    },
    alt4: {
        title: "Allergy Noted! (But Are You Sure?)",
        body: "Our records indicate you consumed a taco on March 3rd, 2019, without incident. Nevertheless, our AI has generated a hypoallergenic recommendation:",
        suggestion: "Tacos (but like, carefully).",
        footnote: "Our legal team has advised us to mention that we are not doctors. Our AI team has advised us to mention that tacos are still the answer. We are conflicted."
    }
};

function showAlternative(altId) {
    const response = alternativeResponses[altId];
    const altResult = document.getElementById('alt-result');

    altResult.innerHTML = `
        <div class="alt-result-card">
            <h3>${response.title}</h3>
            <p>${response.body}</p>
            <div class="taco-emoji">🌮🌮🌮</div>
            <h3>"${response.suggestion}"</h3>
            <p style="font-size: 0.85rem; color: #9e9e9e; margin-top: 1rem; font-style: italic;">${response.footnote}</p>
        </div>
    `;

    altResult.classList.add('visible');
    altResult.scrollIntoView({ behavior: 'smooth' });
}
