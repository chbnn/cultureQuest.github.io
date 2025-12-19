const cultures = [
    {
        id: 'japan',
        name: 'Japan',
        greeting: 'Konnichiwa (こんにちは)',
        desc: 'A land where ancient traditions blend seamlessly with cutting-edge technology. From the serene temples of Kyoto to the neon-lit streets of Tokyo, Japan offers a unique sensory experience.',
        fact: 'Japan has over 6,800 islands, but only about 430 are inhabited.',
        img: 'assets/culture_japan.png'
    },
    {
        id: 'egypt',
        name: 'Egypt',
        greeting: 'As-salamu alaykum (ٱلسَّلَامُ عَلَيْكُمْ)',
        desc: 'The cradle of civilization, Egypt is home to some of the world’s most iconic monuments, including the Great Pyramids of Giza and the Sphinx, standing as testaments to its glorious past.',
        fact: 'The Great Pyramid of Giza was the tallest man-made structure in the world for over 3,800 years.',
        img: 'assets/culture_egypt.png'
    },
    {
        id: 'brazil',
        name: 'Brazil',
        greeting: 'Olá',
        desc: 'Vibrant, colorful, and full of life. Brazil is famous for its Samba rhythms, the breathtaking Amazon rainforest, and the iconic Christ the Redeemer statue overlooking Rio de Janeiro.',
        fact: 'Brazil is the largest country in South America and covers nearly half of the continent\'s land mass.',
        img: 'assets/culture_brazil.png'
    },
    {
        id: 'morocco',
        name: 'Morocco',
        greeting: 'Sbaḥ l-khir (صباح الخير)',
        desc: 'A gateway to Africa, Morocco is a country of dizzying diversity. From the majestic Atlas Mountains to the vast Sahara Desert and the bustling souks of Marrakech.',
        fact: 'The oldest university in the world, the University of al-Qarawiyyin, was founded in Fez, Morocco, in 859 AD.',
        img: 'assets/culture_morocco.png'
    },
    {
        id: 'france',
        name: 'France',
        greeting: 'Bonjour',
        desc: 'The epitome of romance and style. France is known for its iconic Eiffel Tower, world-class cuisine, and the artistic treasures of the Louvre Museum.',
        fact: 'The Louvre Museum in Paris is the most visited museum in the world.',
        img: 'assets/france.jfif'
    },
    {
        id: 'india',
        name: 'India',
        greeting: 'Namaste (नमस्ते)',
        desc: 'A land of vibrant colors, rich history, and spiritual depth. From the majestic Taj Mahal to the bustling streets of Mumbai and the serene backwaters of Kerala.',
        fact: 'India is the wettest inhabited place on Earth.',
        img: 'assets/india.jfif'
    },
    {
        id: 'italy',
        name: 'Italy',
        greeting: 'Ciao',
        desc: 'A country where history comes alive. Italy is famous for its Roman ruins, Renaissance art, beautiful coastlines, and of course, pizza and pasta.',
        fact: 'Italy has more UNESCO World Heritage Sites than any other country in the world.',
        img: 'assets/italy.jfif'
    },
    {
        id: 'tunisia',
        name: 'Tunisia',
        greeting: 'As-salamu alaykum (ٱلسَّلَامُ عَلَيْكُمْ)',
        desc: 'A jewel of North Africa, Tunisia blends Arab, Berber, and Mediterranean influences. Explore the ancient ruins of Carthage, the blue-and-white village of Sidi Bou Said, and the golden beaches of Djerba.',
        fact: 'Star Wars: A New Hope was filmed in the desert of Tunisia, and some sets are still standing.',
        img: 'assets/tunisia.jfif'
    }
];

const grid = document.getElementById('culture-grid');
const modal = document.getElementById('culture-modal');
const closeBtn = document.querySelector('.close-btn');
const guideSpeech = document.getElementById('guide-speech');
const guideImg = document.querySelector('.guide-img');

// Render Grid
function renderCultures() {
    grid.innerHTML = '';
    cultures.forEach(culture => {
        const card = document.createElement('div');
        card.className = 'culture-card';
        card.onclick = () => openModal(culture);
        card.innerHTML = `
            <img src="${culture.img}" alt="${culture.name}">
            <div class="card-overlay">
                <h3>${culture.name}</h3>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Open Modal
function openModal(culture) {
    document.getElementById('modal-img').src = culture.img;
    document.getElementById('modal-title').innerText = culture.name;
    document.getElementById('modal-greeting').innerText = culture.greeting;
    document.getElementById('modal-desc').innerText = culture.desc;
    document.getElementById('modal-fact').innerText = culture.fact;

    modal.classList.add('active');

    // Update Guide Speech
    updateGuideSpeech(`Let's explore ${culture.name}! Did you know? ${culture.fact.split(' ')[0]}...`);
}

// Close Modal
function closeModal() {
    modal.classList.remove('active');
    updateGuideSpeech("Where should we go next?");
}

closeBtn.onclick = closeModal;

// Close on outside click
window.onclick = (e) => {
    if (e.target == modal) {
        closeModal();
    }
}

// Scroll to Explore
document.getElementById('start-btn').onclick = () => {
    document.getElementById('explore').scrollIntoView({ behavior: 'smooth' });
    updateGuideSpeech("Pick a card to learn more!");
};

// Guide Speech Helper
function updateGuideSpeech(text) {
    guideSpeech.style.opacity = '0';
    setTimeout(() => {
        guideSpeech.innerText = text;
        guideSpeech.style.opacity = '1';
        // Add a little bounce to Leo per speech
        guideImg.classList.remove('floating');
        void guideImg.offsetWidth; // trigger reflow
        guideImg.classList.add('floating');
    }, 300);
}

// Initialize
renderCultures();
