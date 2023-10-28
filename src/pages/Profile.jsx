import { Layout } from "../components/Layout"
import elon from '../assets/elon.jpeg';
import { Contents } from "../components/Contents";
import { useEffect, useState } from "react";




export const Profile = () => {
  const initialProfileData = {
    avatar: elon,
    full_name: 'Elon Musk',
    link: 'https://github.com/adilzhapar',
  }
  const [isOpen, setIsOpen] = useState(false);
  const [profileData, setProfileData] = useState(initialProfileData);

  useEffect(() => {
    const storedProfileData = localStorage.getItem('profileData');
    if (storedProfileData) {
      setProfileData(JSON.parse(storedProfileData));
    }
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('profileData', JSON.stringify(profileData));
  };

  return (
    <Layout>
      <div className="flex flex-col w-1/2">
        <div className="flex justify-between items-center p-5">
          <div className="">
            <img src={profileData.avatar} alt="" width={56} height={56} className="rounded-[50%]" />
            <p className="text-2xl font-bold">{profileData.full_name}</p>
            <a href={profileData.link} className="text-[#1D9bf0]">{profileData.link}</a>
          </div>
          <button className="text-lg rounded-[30px] border p-2" onClick={() => setIsOpen(!isOpen)}>Edit profile</button>
        </div>
        {
          isOpen ?
            <div className="p-5">
              <h1 className="text-xl font-bold">Change Profile</h1>
              <form onSubmit={handleSubmit} className="flex flex-col gap-y-3 ">
                <div className="w-full flex justify-between">
                  <label htmlFor="avatar">Avatar URL:</label>
                  <input
                    type="text"
                    id="avatar"
                    name="avatar"
                    value={profileData.avatar}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="w-full flex justify-between">
                  <label htmlFor="full_name">Full Name:</label>
                  <input
                    type="text"
                    id="full_name"
                    name="full_name"
                    value={profileData.full_name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="w-full flex justify-between">
                  <label htmlFor="link">Link:</label>
                  <input
                    type="text"
                    id="link"
                    name="link"
                    value={profileData.link}
                    onChange={handleInputChange}
                  />
                </div>
                <button type="submit" className="my-3 bg-[#1D9bf0] px-8 py-1 rounded-[30px] text-lg font-bold">Update Profile</button>
              </form>
            </div> : null
        }
        <Contents />
      </div>
    </Layout>
  );
}