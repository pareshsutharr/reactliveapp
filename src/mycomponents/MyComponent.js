import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import {MdVerified} from "react-icons/md"

function MyComponent() {
  const [chatData, setChatData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get('https://qa.corider.in/assignment/chat?page=0');
      setChatData(response.data.chats);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };
 
  return (
    <div className='chat_box'>
      {chatData.map(item => {
        if (!item.sender.self) {
          return  <div key={item.id} className='text-container'>
          <img src={item.sender.image}/>
            {item.sender.is_kyc_verified ? <MdVerified className='verified-icon'/> : null}
          <div className='text-box'>
            {item.message}
          </div>
        </div>;
        } else {
          return<div key={item.id} className='text-container self-side-text'>
          <div className='text-box self-side-box'>
            {item.message}
          </div>
        </div>;
        }
      })}
    </div>
  );
}
export default MyComponent;