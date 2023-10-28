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

    // Save updated content to localStorage
    localStorage.setItem('content', JSON.stringify(updatedContents));

    // Reset the form fields
    setNewPost({ author: '', avatar: '', content: '' });
  };

  return (
    <Layout>
      <div>
      <h1>Post Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={newPost.author}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="avatar">Avatar URL:</label>
          <input
            type="text"
            id="avatar"
            name="avatar"
            value={newPost.avatar}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            name="content"
            value={newPost.content}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Add Post</button>
      </form>
    </div>
    </Layout>
  )
}