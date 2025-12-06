import { useState, useEffect } from "react";
import '../css/CancerAwareness.css'


const quoteList = [
    {
        text: "Cancer may have started the fight, but you will finish it.",
        author: "Unknown",
    },
    {
        text: "You never know how strong you are until being strong is the only choice.",
        author: "Bob Marley",
    },
    {
        text: "Let your faith be bigger than your fear.",
        author: "Unknown",
    },
    {
        text: "Yesterday is gone. Tomorrow has not yet come. We have only today.",
        author: "Mother Teresa",
    },
    {
        text: "Hope is stronger than fear.",
        author: "Barack Obama",
    },
    {
        text: "You are braver than you believe, stronger than you seem, and smarter than you think.",
        author: "A.A. Milne",
    },
    {
        text: "Cancer is a word, not a sentence.",
        author: "John Diamond",
    },
    {
        text: "The human spirit is stronger than anything that can happen to it.",
        author: "C.C. Scott",
    },
    {
        text: "Believe in miracles, because they happen every day.",
        author: "Unknown",
    },
    {
        text: "Unity is strength. Together we fight cancer.",
        author: "Unknown",
    },
    {
        text: "Being positive doesn’t mean you don’t have struggles. It means you choose strength over fear.",
        author: "Unknown",
    },
    {
        text: "Hope is the heartbeat of the soul.",
        author: "Michelle Horst",
    },
    {
        text: "Small steps every day lead to big victories.",
        author: "Unknown",
    },
    {
        text: "Where there is love, there is life.",
        author: "Mahatma Gandhi",
    },
    {
        text: "Never give up. Great things take time.",
        author: "Unknown",
    }
];


function CancerAwareness() {
    const [quote, setQuote] = useState(quoteList[0]);
    const [loadingQuote, setLoadingQuote] = useState(false);
    const [quoteError, setQuoteError] = useState("");

    const fetchQuote = () => {
        const randomIndex = Math.floor(Math.random() * quoteList.length);
        setQuote(quoteList[randomIndex]);
    };


    useEffect(() => {
        fetchQuote();
    }, []);

    const handleContactSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for reaching out. We will get back to you soon!");
        e.target.reset();
    };

    return (
        <div className="app">
            {/* Navbar */}
            <header className="navbar">
                <div className="container nav-content">
                    <div className="logo">
                        🎀 <span>CancerCare</span>
                    </div>
                    <nav className="nav-links">
                        <a href="#about">About</a>
                        <a href="#support">Support</a>
                        <a href="#quotes">Stories & Quotes</a>
                        <a href="#contact" className="nav-cta">
                            Contact
                        </a>
                    </nav>
                </div>
            </header>

            <section className="hero" id="home">
                <div className="container hero-grid">
                    <div className="hero-text">
                        <p className="hero-tag">Cancer Awareness & Support</p>
                        <h1>
                            No one should fight{" "}
                            <span className="highlight">cancer alone.</span>
                        </h1>
                        <p className="hero-subtitle">
                            Together we create a circle of hope — raising awareness, sharing
                            strength, and supporting patients, survivors, and families.
                        </p>
                        <div className="hero-actions">
                            <a href="#support" className="btn primary">
                                Get Support
                            </a>
                            <a href="#contact" className="btn ghost">
                                Join as Volunteer
                            </a>
                        </div>
                    </div>

                    {/* Banner Image */}
                    <div className="hero-image-card">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGqUFGgk3QDGytYSL93n0eTRZBeRTWEXMRiQ&s"
                            alt="Cancer awareness support"
                            className="hero-image"
                        />
                        <div className="hero-stats">
                            <div>
                                <p className="stat-number">1 in 3</p>
                                <p className="stat-label">lives touched</p>
                            </div>
                            <div>
                                <p className="stat-number">24/7</p>
                                <p className="stat-label">emotional support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="about">
                <div className="container">
                    <div className="section-header">
                        <h2>Why Cancer Awareness Matters</h2>
                        <p>
                            Early detection, timely treatment, and emotional support can save
                            lives. Awareness empowers people to notice early signs, seek help,
                            and stand with those in need.
                        </p>
                    </div>

                    <div className="cards-grid">
                        <div className="card">
                            <h3>Recognize Early Signs</h3>
                            <p>
                                Unusual lumps, unexplained weight loss, fatigue, or persistent
                                pain should never be ignored. Early screening significantly
                                improves outcomes.
                            </p>
                        </div>
                        <div className="card">
                            <h3>Break the Stigma</h3>
                            <p>
                                Talking about cancer openly helps reduce fear and shame. A
                                supportive environment encourages people to seek help sooner.
                            </p>
                        </div>
                        <div className="card">
                            <h3>Support the Journey</h3>
                            <p>
                                A kind message, a ride to the hospital, or just listening —
                                small acts of care make a huge difference for patients and
                                caregivers.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Support Section */}
            <section className="section section-alt" id="support">
                <div className="container support-grid">
                    <div>
                        <h2>How We Support Patients & Families</h2>
                        <p className="section-subtitle">
                            Our initiative connects people with emotional, informational, and
                            community support during and after treatment.
                        </p>
                        <ul className="list">
                            <li>🎧 One-on-one listening circles for patients & caregivers</li>
                            <li>📚 Verified resources on treatment, nutrition & recovery</li>
                            <li>🤝 Peer support groups for survivors and families</li>
                            <li>📞 Guidance to connect with local hospitals & NGOs</li>
                        </ul>
                    </div>
                    <div className="highlight-box">
                        <h3>Need someone to talk to?</h3>
                        <p>
                            Share your story, your fears, or your questions. We may not have
                            all the answers, but you will never be unheard.
                        </p>
                        <a href="#contact" className="btn full">
                            Reach Out to Us
                        </a>
                    </div>
                </div>
            </section>

            <section className="section" id="quotes">
                <div className="container">
                    <div className="section-header">
                        <h2>Real-Time Inspiration</h2>
                        <p>
                            Every journey is different, but hope is universal. Here’s a quote
                            to uplift you — fetched live from a public API.
                        </p>
                    </div>

                    <div className="quote-card">
                        {loadingQuote && <p>Loading quote...</p>}

                        {!loadingQuote && quote && (
                            <>
                                <p className="quote-text">“{quote.text}”</p>
                                <p className="quote-author">— {quote.author}</p>
                            </>
                        )}

                        {quoteError && <p className="quote-error">{quoteError}</p>}

                        <button
                            onClick={fetchQuote}
                            className="btn secondary quote-button"
                            disabled={loadingQuote}
                        >
                            {loadingQuote ? "Fetching..." : "New Quote"}
                        </button>
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section className="section section-alt" id="contact">
                <div className="container contact-grid">
                    <div>
                        <h2>Contact Us</h2>
                        <p className="section-subtitle">
                            Whether you are a patient, caregiver, volunteer, or healthcare
                            professional — we’d love to hear from you.
                        </p>
                        <ul className="list">
                            <li>📩 Share your concerns or questions</li>
                            <li>💗 Join as a volunteer or partner organization</li>
                            <li>📣 Collaborate for awareness sessions & events</li>
                        </ul>
                    </div>

                    <form className="contact-form" onSubmit={handleContactSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name*</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Enter your full name"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email*</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Enter your email address"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message*</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                placeholder="Share how we can support you..."
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="btn primary full">
                            Send Message
                        </button>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container footer-content">
                    <p>© {new Date().getFullYear()} CancerCare Initiative. All rights reserved.</p>
                    <p className="footer-small">
                        This is a demo project built for an internship assignment — design &
                        content for awareness purposes only.
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default CancerAwareness;
