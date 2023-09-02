import AddNewContactForm from "../components/AddNewContactForm";

const Contacts = () => {
     return (
          <section className="flex flex-col items-center justify-start gap-20 mt-20">
               <label
                    htmlFor="AddNewContact"
                    className="px-6 py-3 font-semibold text-white bg-blue-400 rounded-lg cursor-pointer lg:text-xl hover:bg-blue-500"
               >
                    Create new Contact
               </label>
               {/* ========== Add new Contact Form ============ */}
               <AddNewContactForm />
               {/* ================ All Contacts =============== */}
               <div></div>
          </section>
     );
};

export default Contacts;
