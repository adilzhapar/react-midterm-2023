import Elon from '../assets/elon.jpeg';

const contents = [
  {
    author: 'Elon Musk',
    avatar: Elon,
    content: 'I’m so tired of hearing backend devs complain that front end devs aren’t real devs. Like what do you even do these days just manage the passwords for third party services and wear light jeans or?'
  },
  {
    author: 'Elon Musk',
    avatar: Elon,
    content: 'I’m so tired of hearing backend devs complain that front end devs aren’t real devs. Like what do you even do these days just manage the passwords for third party services and wear light jeans or?'
  },
  {
    author: 'Elon Musk',
    avatar: Elon,
    content: 'I’m so tired of hearing backend devs complain that front end devs aren’t real devs. Like what do you even do these days just manage the passwords for third party services and wear light jeans or?'
  },
  {
    author: 'Elon Musk',
    avatar: Elon,
    content: 'I’m so tired of hearing backend devs complain that front end devs aren’t real devs. Like what do you even do these days just manage the passwords for third party services and wear light jeans or?'
  },
  {
    author: 'Elon Musk',
    avatar: Elon,
    content: 'I’m so tired of hearing backend devs complain that front end devs aren’t real devs. Like what do you even do these days just manage the passwords for third party services and wear light jeans or?'
  },
]

export const Contents = () => {
  return (
    <div className="flex flex-col gap-y-3">
        {
          contents.map((obj, index) => {
            return (
              <div className="flex gap-x-5 items-start p-3" key={index}>
                <img src={obj.avatar} alt="" className='rounded-[50%]' width={56} height={56}/>
                <div className="">
                  <p className='font-bold text-xl'>{obj.author}</p>
                  <p>{obj.content}</p>
                </div>
              </div>
            )
          })
        }
      </div>
  )
}