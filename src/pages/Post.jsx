import { Layout } from "../components/Layout"
import { useEffect, useState } from "react";
import Elon from '../assets/elon.jpeg';

export const Post = () => {
  const initialContent = [
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
  const [contents, setContents] = useState(initialContent);


  useEffect(() => {
    const storedContent = localStorage.getItem('content');
    if (storedContent) {
      setContents(JSON.parse(storedContent));
    }
  }, [])

  const [newPost, setNewPost] = useState({
    author: '',
    avatar: '',
    content: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedContents = [...contents, newPost];
    setContents(updatedContents);

    localStorage.setItem('content', JSON.stringify(updatedContents));

    setNewPost({ author: '', avatar: '', content: '' });
  };

  return (
    <Layout>
      <div className="p-5 w-1/2">
      <h1 className="text-xl font-bold">Post Form</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-3">
        <div className="w-full flex justify-between">
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={newPost.author}
            onChange={handleInputChange}
          />
        </div>
        <div className="w-full flex justify-between">
          <label htmlFor="avatar">Avatar URL:</label>
          <input
            type="text"
            id="avatar"
            name="avatar"
            value={newPost.avatar}
            onChange={handleInputChange}
          />
        </div>
        <div className="w-full flex justify-between">
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            name="content"
            value={newPost.content}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="my-3 bg-[#1D9bf0] px-8 py-1 rounded-[30px] text-lg font-bold">Add Post</button>
      </form>
    </div>
    </Layout>
  )
}