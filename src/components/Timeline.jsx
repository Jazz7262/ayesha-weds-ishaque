import React from "react";
import "../styles/Timeline.css";

function Timeline() {
    return (
        <section id="timeline">
            <h1 className="inshaallaah">Inshaallaah ...</h1>

            <div className="wrapper" data-aos="fade-up" data-aos-delay="100">
                <div className="content">
                    <h1>Nikaah</h1>
                    <p>
                        On Friday, 3<sup>rd</sup> February, 2023,
                        <br />
                        11<sup>th</sup> Rajab-ul-Murajjab, 1444 Hijri,
                        <br />
                        Time: 07:30 PM.
                    </p>
                    <h2>Venue:</h2>
                    <p>
                        Farhan Khan Hall,
                        <br /> Millat Nagar,
                        <br /> Bhiwandi.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Timeline;
