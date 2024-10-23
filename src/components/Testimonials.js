import React from 'react';
import '../styles/testimonials.css';

function Testimonials() {
    return (
        <section id="testimonials">
            <h2 className="section-subtitle">What Our Customers Say</h2>
            <div id="testimonials_content">
                <div id="feedbacks">
                    <div className="feedback">
                        <img src="path/to/avatar.jpg" className="feedback-avatar" alt="Customer" />
                        <div className="feedback-content">
                            <p>
                                "Amazing food and great service!" <span>- John Doe</span>
                            </p>
                        </div>
                    </div>
                    {}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
