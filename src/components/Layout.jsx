import { useNavigate } from 'react-router-dom';
import logo from '../assets/twitter.png';

// eslint-disable-next-line react/prop-types
export const Layout = ({ children }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen overflow-hidden flex p-0 m-0">
      <div className="h-screen border-r border-[#6d6a6a] w-1/3 flex flex-col items-end">
        <div className="w-1/2 py-3 flex flex-col items-start gap-y-3">
          <img src={logo} alt="" width={46} className='bg-white' />
          <button onClick={() => navigate('/')} className='text-2xl font-bold '>Home</button>
          <button onClick={() => navigate('/profile')} className='text-2xl font-bold '>Profile</button>
          <button onClick={() => navigate('/post')} className='w-[180px] bg-[#1D9bf0] px-8 py-3 rounded-[30px] text-2xl font-bold'>post</button>
        </div>
      </div>
      <div className="w-2/3">{children}</div>
    </div>
  )
}