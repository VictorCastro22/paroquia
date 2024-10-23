import React from 'react';
import '../styles/testimonials.css';

function Testimonials() {
    return (
        <section id="testimonials">
            <h2 className="section-subtitle">Eventos</h2>
            <div id="testimonials_content">
                <div id="feedbacks">
                    <div className="feedback">
                        <img src="path/to/avatar.jpg" className="feedback-avatar" alt="Customer" />
                        <div className="feedback-content">
                            <p>
                                "Dia de Finados!" <span>- 02/11/2024</span>
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
