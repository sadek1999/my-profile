import { useState } from "react";


const Mail = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [query, setQuery] = useState('');

    const sendEmail = async () => {
        // Replace these values with your Email.js template and user ID
        const serviceId = 'your_emailjs_service_id';
        const templateId = 'your_emailjs_template_id';
        const userId = 'your_emailjs_user_id';

        try {
            const templateParams = {
                to_email: email,
                user_name: name,
                user_query: query,
            };

            const response = await emailjs.send(serviceId, templateId, templateParams, userId);
            console.log('Email sent successfully:', response);
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };



    return (
        <div>
            <div>
                <h1>Contact Me</h1>
                <p>Feel free to reach out to me using the form below:</p>
                <form>
                    <label>
                        Name:
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        Email:
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        Query:
                        <textarea value={query} onChange={(e) => setQuery(e.target.value)} />
                    </label>
                    <br />
                    {/* Contact button */}
                    <button type="button" onClick={sendEmail}>
                        Send Email
                    </button>
                </form>
            </div>


        </div>
    );
};

export default Mail;