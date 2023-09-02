import { ChangeEvent, SyntheticEvent, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { addNewContact } from "../redux/features/contact/contactSlice";
import { useNavigate } from "react-router-dom";
interface FormTarget {
     firstName: { value: string };
     lastName: { value: string };
     status: { value: string };
}

const CreateContact = () => {
     const navigate = useNavigate();
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
          navigate("/");
     };

     return (
          <>
               <form
                    action=""
                    onSubmit={handleSubmit}
                    className="lg:w-[30em] bg-white lg:p-10 p-6 rounded-xl mx-4 lg:mx-auto flex flex-col justify-center gap-5 mt-32 "
               >
                    <div className="flex items-center justify-start gap-10">
                         <p className="w-3/12">First Name</p>
                         <input required className="px-3 py-2 border border-black" type="text" name="firstName" placeholder="First name" />
                    </div>
                    <div className="flex items-center justify-start gap-10">
                         <p className="w-3/12">Last Name</p>
                         <input required className="px-3 py-2 border border-black" type="text" name="lastName" placeholder="Last name" />
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
          </>
     );
};

export default CreateContact;
