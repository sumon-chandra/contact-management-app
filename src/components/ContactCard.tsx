import { Contact } from "../types";
import { FaTrash, FaEdit } from "react-icons/fa";

interface ContactCardProps {
     contact: Contact;
}

const ContactCard = ({ contact }: ContactCardProps) => {
     const { firstName, lastName, status } = contact;
     return (
          <div className="w-full p-4 bg-white rounded-lg shadow-xl shadow-gray-200">
               <p>
                    <span className="font-semibold">First Name : </span> <span>{firstName}</span>
               </p>
               <p>
                    <span className="font-semibold">Last Name : </span> <span>{lastName}</span>
               </p>
               <p>
                    <span className="font-semibold">Status : </span>
                    <span>{status}</span>
               </p>
               <div className="flex items-center justify-end gap-4 mt-6 text-xl">
                    <FaTrash className="text-red-500 cursor-pointer" />
                    <FaEdit className="text-blue-500 cursor-pointer" />
               </div>
          </div>
     );
};

export default ContactCard;
