import { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    return (
        <section id="contact" className="section contact">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="section-subtitle">Ready to start your project? Contact us today.</p>
                </div>
                <div className="contact-wrapper">
                    {isSubmitted ? (
                        <div className="contact-form success-message" style={{ textAlign: 'center', padding: '3rem' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#fff' }}>Thank you!</h3>
                            <p style={{ color: 'var(--color-text-muted)' }}>We will contact you soon.</p>
                            <button
                                onClick={() => setIsSubmitted(false)}
                                className="btn btn-primary"
                                style={{ marginTop: '1.5rem' }}
                            >
                                Send Another
                            </button>
                        </div>
                    ) : (
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" placeholder="John Doe" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" placeholder="john@example.com" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" rows="5" placeholder="Tell us about your project..." required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Send Message</button>
                        </form>
                    )}

                    <div className="contact-info">
                        <div className="info-item">
                            <h3>Call Us</h3>
                            <p>+91 9617438100</p>
                        </div>
                        <div className="info-item">
                            <h3>Email Us</h3>
                            <p>contact@jainshreedigital.com</p>
                        </div>
                        <div className="info-item">
                            <h3>Visit Us</h3>
                            <p>123 Digital Park, Tech City, India</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
