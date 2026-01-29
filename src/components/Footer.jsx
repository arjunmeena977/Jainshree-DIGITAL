import { useState } from 'react';
import Modal from './Modal';
import './Footer.css';

const Footer = () => {
    const [activeModal, setActiveModal] = useState(null);

    const openModal = (type) => (e) => {
        e.preventDefault();
        setActiveModal(type);
    };

    const closeModal = () => setActiveModal(null);

    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-logo">
                    Jainshree <span className="logo-accent">DIGITAL</span>
                </div>
                <div className="footer-links">
                    <a href="#" onClick={openModal('privacy')}>Privacy Policy</a>
                    <a href="#" onClick={openModal('terms')}>Terms of Service</a>
                </div>
                <div className="footer-copy">
                    &copy; {new Date().getFullYear()} Jainshree DIGITAL. All rights reserved.
                </div>
            </div>

            <Modal isOpen={activeModal === 'privacy'} onClose={closeModal} title="Privacy Policy">
                <h3>1. Information Collection</h3>
                <p>We collect information you provide directly to us through our contact forms, including name, email, and project details.</p>
                <h3>2. Use of Information</h3>
                <p>We use the information to respond to your inquiries and provide the requested services. We do not sell your personal data.</p>
                <h3>3. Cookies</h3>
                <p>This website uses cookies to enhance user experience. By using our site, you consent to our use of cookies.</p>
            </Modal>

            <Modal isOpen={activeModal === 'terms'} onClose={closeModal} title="Terms of Service">
                <h3>1. Acceptance of Terms</h3>
                <p>By accessing this website, you agree to be bound by these Terms of Service and all applicable laws.</p>
                <h3>2. Services</h3>
                <p>Jainshree DIGITAL provides web design and development services. Specific terms will be outlined in client contracts.</p>
                <h3>3. Intellectual Property</h3>
                <p>All content on this website is the property of Jainshree DIGITAL unless otherwise identified.</p>
            </Modal>
        </footer>
    );
};

export default Footer;
