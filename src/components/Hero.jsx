import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="hero-background-image-container">
                <div className="hero-overlay"></div>
                <img
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                    alt="Digital Technology Background"
                    className="hero-bg-img"
                    fetchPriority="high"
                />
            </div>
            <div className="container hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Elevate Your Business with <br />
                        <span className="gradient-text">Jainshree DIGITAL</span>
                    </h1>
                    <p className="hero-subtitle">
                        Premium Web Design, Development, and Digital Marketing solutions tailored for your success.
                    </p>
                    <div className="hero-actions">
                        <a href="#contact" className="btn btn-primary">Get Started</a>
                        <a href="#services" className="btn btn-outline">Our Services</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
