import ContactForm from '../components/Forms/ContactForm';


import '../style/Contact.css';

function Contact() {
    return (
        

            <div className="ContactDiv">
                <h3>Vous pouvez nous contacter via notre page <a href='https://www.facebook.com/profile.php?id=100050345782564'>Facebook</a> ou sur ce formulaire</h3>
                <ContactForm />
                
            </div>
            
    );
}

export default Contact;