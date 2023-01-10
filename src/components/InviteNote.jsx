import React from "react";
import "../styles/InviteNote.css";

function InviteNote() {
    return (
        <section id="invite-note">
            <div className="from">
                <h5>An Invitation from:</h5>
                <h2>Mrs. Shaikh Mehboob Fakruddin and</h2>
                <h2>M.K. Family</h2>

                <h5 className="address mb-3">
                    Residence: #459, Nadi Naka, Amina Baagh,
                    <br /> Near Parkash Hotel,
                    <br /> Nazeer Compound,
                    <br /> Bhiwandi, Thane Dist.,
                    <br /> Maharastra - 421 302.
                </h5>
                <p className="address">
                    Contact: <br />
                    +91 98905 19643, <br />
                    +91 97306 55220, <br />
                    +91 83808 26932.
                </p>
            </div>
        </section>
    );
}

export default InviteNote;
