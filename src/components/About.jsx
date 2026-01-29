import './About.css';

const About = () => {
    return (
        <section id="about" className="section about">
            <div className="container about-container">
                <div className="about-image">
                    {/* Using a placeholder from unsplash or just a color block if needed, but generated image is better. Using a placeholder for now. */}
                    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" alt="Team working" className="about-img" />
                </div>
                <div className="about-content">
                    <h2 className="section-title">About Jainshree DIGITAL</h2>
                    <p className="about-text">
                        We are a forward-thinking digital agency dedicated to transforming businesses through innovation and design.
                        At Jainshree DIGITAL, we believe in the power of technology to bridge the gap between businesses and their customers.
                    </p>
                    <p className="about-text">
                        Our team of expert designers and developers work tirelessly to deliver products that are not only visually stunning
                        but also highly functional and performant.
                    </p>
                    <div className="about-stats">
                        <div className="stat-item">
                            <span className="stat-number">50+</span>
                            <span className="stat-label">Projects</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">20+</span>
                            <span className="stat-label">Clients</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">5</span>
                            <span className="stat-label">Years Exp.</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
