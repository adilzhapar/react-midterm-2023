import { Layout } from "../components/Layout"
import elon from '../assets/elon.jpeg';
import { Contents } from "../components/Contents";

const profileData = {
  avatar: elon,
  full_name: 'Elon Musk',
  link: 'https://github.com/adilzhapar',
}


export const Profile = () => {
  return (
    <Layout>
      <div className="flex flex-col w-1/2">
        <div className="flex justify-between items-center p-5">
          <div className="">
            <img src={profileData.avatar} alt="" width={56} height={56} className="rounded-[50%]"/>
            <p className="text-2xl font-bold">{profileData.full_name}</p>
            <a href={profileData.link} className="text-[#1D9bf0]">{profileData.link}</a>
          </div>  
          <button className="text-lg rounded-[30px] border p-2">Edit profile</button>
        </div>
        <Contents />
      </div>
    </Layout>
  );
}