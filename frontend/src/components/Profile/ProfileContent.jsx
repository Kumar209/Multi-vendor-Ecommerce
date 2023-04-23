import React, { useState } from "react";
import { backend_url } from "../../server";
import { useSelector } from "react-redux";
import { AiOutlineCamera } from "react-icons/ai";
import styles from "../../styles/style";

const ProfileContent = ({ active }) => {
  const {user} = useSelector((state) => state.user);
  const [name, setName] = useState(user && user.name);
  const [email, setEmail] = useState(user && user.email);
  const [phoneNumber, setPhoneNumber] = useState();
  const [zipcode, setZipCode] = useState();
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full">
      {/* Profile page */}
      {active === 1 && (
        <>
        <div className="flex justify-center w-full">
          <div className="relative">
            <img src={`${backend_url}${user?.avatar}`}
              className="w-[150px] h-[150px] rounded-full object-cover border-[3px] border-[#0eae88]" alt=""/>

              <div className="w-[30px] h-[30px] bg-[#E3E9EE] rounded-full flex items-center justify-center cursor-pointer absolute bottom-[5px] right-[5px] ">
                <AiOutlineCamera />
              </div>
          </div>
        </div>

        <br />
        <br />

        <div className="w-full px-5">
            <form onSubmit={handleSubmit} aria-required={true}>
              <div className="w-full flex pb-3">
                <div className="w-[50%]">
                  <label className="block pb-2"> Full Name</label>
                  <input type="text" className={`${styles.input} !w-[95%]`} value={name} onChange={(e) => setName(e.target.value)}/>
                </div>

                <div className="w-[50%]">
                  <label className="block pb-2">Email Address</label>
                  <input type="text" className={`${styles.input} !w-[95%]`} value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
              </div>

              <div className="w-full flex pb-3">
                <div className="w-[50%]">
                  <label className="block pb-2">Phone Number</label>
                  <input type="number" className={`${styles.input} !w-[95%]`} value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
                </div>

                <div className="w-[50%]">
                  <label className="block pb-2">Zip Code</label>
                  <input type="text" className={`${styles.input} !w-[95%]`} value={zipcode} onChange={(e) => setZipCode(e.target.value)}/>
                </div>
              </div>

              <div className="w-full flex pb-3">
                <div className="w-[50%]">
                  <label className="block pb-2">Address 1</label>
                  <input type="address" className={`${styles.input} !w-[95%]`} value={address1} onChange={(e) => setAddress1(e.target.value)}/>
                </div>

                <div className="w-[50%]">
                  <label className="block pb-2">Address 2</label>
                  <input type="text" className={`${styles.input} !w-[95%]`} value={address2} onChange={(e) => setAddress2(e.target.value)}/>
                </div>
              </div>

              <input type="submit" className={`w-[250px] h-[40px] border border-[#3a24db] text-center text-[#3a34db] rounded-[3px] mt-8 cursor-pointer`} value="Update" required/>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default ProfileContent;
