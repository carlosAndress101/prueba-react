/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { getUsers } from "../service/api";
import Loading from "./Louding";
import UserFollowersChart from "./Graphic";


function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("q");

  useEffect(() => {
    if (searchTerm) {
      getUsers(searchTerm)
        .then((data) => {
          setLoading(false);
          setUsers(data.items.slice(0, 10));
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [searchTerm]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className='min-h-screen min-w-screen flex flex-col items-center justify-center'>
        <div className="h-full flex flex-col justify-center">
          <h2 className="text-2xl pl-10">User List</h2>
          <ul className="pt-5 ml-2 max-w-md divide-y divide-gray-200">
            {users.map((user) => (
              <li
                key={user.id}
                className="pb-3 sm:pb-4 flex items-center space-x-4 text-lg mt-5"
              >
                <Link to={`/users/${user.login}`}>{user.login}</Link>
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  className="w-8 h-8 rounded-full"
                />
              </li>
            ))}
          </ul>
        </div>
        <div className='w-1/2 h-full flex flex-col justify-start '>
          <UserFollowersChart users={users} />
        </div>
    </div>
  );
}

export default UserList;
