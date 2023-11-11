'use client'
import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, Tooltip } from 'recharts';
import axios from 'axios';

const AnalyticsPage = () => {
  const [chartData, setChartData] = useState([]);

  const botId = '5d7a71d0-8c0a-4544-84b8-fff1969c069e';
  const token = 'bp_pat_MHD5dH9nCSNrBXvPO7KqbSkCHqQHPIB4duFU';
  const headers = {
    'x-bot-id': botId,
    'Authorization': `Bearer ${token}`
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [usersResponse, conversationsResponse, messagesResponse] = await Promise.all([
          axios.get('https://api.botpress.cloud/v1/chat/users', { headers }),
          axios.get('https://api.botpress.cloud/v1/chat/conversations', { headers }),
          axios.get('https://api.botpress.cloud/v1/chat/messages', { headers })
        ]);

        const usersData = usersResponse.data;
        const conversationsData = conversationsResponse.data;
        const messagesData = messagesResponse.data;

      
        const totalUsers = usersData.users.length;
        const totalConversations = conversationsData.conversations.length;
        const totalMessages = messagesData.messages.length ;
           console.log(totalConversations)
       
           const createdAtData = conversationsData.conversations.map(conversation => conversation.createdAt);
                       
        setChartData([
          {
            name: 'Total',
            users: totalUsers,
            conversations: totalConversations,
            messages: totalMessages,
            created_at: createdAtData
          }
        ]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Chatbot Analytics</h1>
      <BarChart width={800} height={400} data={chartData}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='created_at' />
        <YAxis />
        <Legend />
        <Tooltip contentStyle={{ backgroundColor: '#f5f5f5', border: '1px solid #dcdcdc' }} />
        <Bar dataKey='users' fill='#8884d8' name='Users' />
        <Bar dataKey='conversations' fill='#82ca9d' name='Conversations' />
        <Bar dataKey='messages' fill='#ffc658' name='Messages' />
      </BarChart>
    </div>
  );
};

export default AnalyticsPage;


