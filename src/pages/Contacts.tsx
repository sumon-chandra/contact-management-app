import { useSelector } from "react-redux";
import AddNewContactForm from "../components/AddNewContactForm";
import { RootState } from "../redux/app/store";
import ContactCard from "../components/ContactCard";

const Contacts = () => {
     const contacts = useSelector((state: RootState) => state.contact);

     return (
          <section className="flex-col items-start justify-start min-h-screen gap-10 p-4 mt-8 lg:flex lg:p-10">
               <div className="flex justify-end w-full">
                    <label
                         htmlFor="AddNewContact"
                         className="px-6 py-3 font-semibold text-white bg-blue-400 rounded-lg cursor-pointer lg:text-xl hover:bg-blue-500"
                    >
                         Create new Contact
                    </label>
               </div>
               {/* ========== Add new Contact Form ============ */}
               <AddNewContactForm />
               {/* ================ All Contacts =============== */}
               <div className="grid-cols-4 gap-10 mt-10 space-y-8 lg:grid lg:space-y-0 lg:mt-0">
                    {contacts.map(contact => (
                         <ContactCard contact={contact} key={contact.id} />
                    ))}
               </div>
          </section>
     );
};

export default Contacts;
