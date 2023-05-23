import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserProfile } from "../service/api";
import Louding from "./Louding";

function UserProfile() {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [louding, SetLouding] = useState(true);

  useEffect(() => {
    getUserProfile(username)
      .then((data) => {
        SetLouding(false);
        setUser(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [username]);

  return (
    <div className="flex justify-center items-center">
      {louding ? (
        <Louding />
      ) : (
        <div className="mt-10">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-80 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
          />
          <h3 className="mt-10 flex items-center justify-center text-xl font-semibold">
            User Profile
          </h3>
          <p className="flex items-center justify-center text-4xl font-semibold">
            {user.login}
          </p>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
