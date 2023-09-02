import { Contact } from "../types";

interface ContactCardProps {
     contact: Contact;
}

const ContactCard = ({}: ContactCardProps) => {
     return (
          <div>
               <h3>Contact List</h3>
          </div>
     );
};

export default ContactCard;
