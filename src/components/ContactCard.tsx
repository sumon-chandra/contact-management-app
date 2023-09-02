import { useDispatch } from "react-redux";
import { deleteContact } from "../redux/features/contact/contactSlice";
import { Contact } from "../types";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface ContactCardProps {
     contact: Contact;
}

const ContactCard = ({ contact }: ContactCardProps) => {
     const navigate = useNavigate();
     const dispatch = useDispatch();
     const { firstName, lastName, status, id } = contact;

     const handleDelete = () => {
          dispatch(deleteContact(id!));
     };
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
                    <FaTrash onClick={handleDelete} className="text-red-500 cursor-pointer" />
                    <FaEdit onClick={() => navigate(`/update-contact/${id}`)} className="text-blue-500 cursor-pointer" />
               </div>
          </div>
     );
};

export default ContactCard;
