/* eslint-disable react/prop-types */
import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
  } from "recharts";
  import { useEffect, useState } from "react";


async function getUserFollowers(username) {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_USER}${username}`);
      const user = await response.json();
      return user.followers;
    } catch (error) {
      console.error(error);
      return 0;
    }
  }
  
function UserFollowersChart({ users }) {
    const [chartData, setChartData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const data = [];
        for (const user of users) {
          const followers = await getUserFollowers(user.login);
          data.push({ name: user.login, followers });
        }
        setChartData(data);
      };
  
      fetchData();
    }, [users]);
  
    return (
      <div>
        <h3 className="text-2xl pl-10 mt-8">Followers Chart</h3>
        <ResponsiveContainer width="120%" aspect={2}>
          <BarChart 
          data={chartData}
          width={500}
            height={300}
            margin={{
                top:5,
                right:30,
                left:20,
                bottom:5
            }}
          >
            <CartesianGrid strokeDasharray="4 1 2" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="followers" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }

export default UserFollowersChart