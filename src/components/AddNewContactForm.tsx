import { ChangeEvent, SyntheticEvent, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { addNewContact } from "../redux/features/contact/contactSlice";
interface FormTarget {
     firstName: { value: string };
     lastName: { value: string };
     status: { value: string };
}

const AddNewContactForm = () => {
     const dispatch = useDispatch();
     const [status, setStatus] = useState("Active");
     const handleStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
          setStatus(e.target.value);
     };

     const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
          e.preventDefault();
          const target = e.target as typeof e.target & FormTarget;
          const firstName = target.firstName.value;
          const lastName = target.lastName.value;
          const contact = {
               firstName,
               lastName,
               status,
          };
          dispatch(addNewContact(contact));
     };

     return (
          <>
               <input type="checkbox" id="AddNewContact" className="modal-toggle" />
               <div className="modal">
                    <div className="relative modal-box">
                         <form action="" onSubmit={handleSubmit} className="flex flex-col justify-center gap-5 my-14">
                              <div className="flex items-center justify-start gap-10">
                                   <p className="w-3/12">First Name</p>
                                   <input className="px-3 py-2 border border-black" type="text" name="firstName" placeholder="First name" />
                              </div>
                              <div className="flex items-center justify-start gap-10">
                                   <p className="w-3/12">Last Name</p>
                                   <input className="px-3 py-2 border border-black" type="text" name="lastName" placeholder="Last name" />
                              </div>
                              <div className="flex items-center justify-start gap-10">
                                   <p className="w-3/12">Status</p>
                                   <div className="flex items-center justify-start gap-8">
                                        <div className="space-x-2">
                                             <input
                                                  type="radio"
                                                  name="active"
                                                  checked={status === "Active"}
                                                  onChange={handleStatusChange}
                                                  id="active"
                                                  value="Active"
                                             />
                                             <label htmlFor="active">Active</label>
                                        </div>
                                        <div className="space-x-2">
                                             <input
                                                  type="radio"
                                                  name="inactive"
                                                  checked={status === "Inactive"}
                                                  onChange={handleStatusChange}
                                                  id="inactive"
                                                  value="Inactive"
                                             />
                                             <label htmlFor="inactive">Inactive</label>
                                        </div>
                                   </div>
                              </div>
                              <input
                                   type="submit"
                                   className="px-6 py-1 mx-auto text-lg font-semibold text-white bg-blue-400 rounded-lg cursor-pointer lg:w-3/12 hover:bg-blue-500"
                                   value="Create"
                              />
                         </form>
                         <div className="absolute top-0 modal-action right-2">
                              <label htmlFor="AddNewContact" className="p-1 text-2xl text-white bg-blue-400 rounded-full shadow-xl cursor-pointer">
                                   <RxCross2 />
                              </label>
                         </div>
                    </div>
               </div>
          </>
     );
};

export default AddNewContactForm;
