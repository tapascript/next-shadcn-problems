"use client";

const UserList = () => {

  const usersFromStore = JSON.parse(localStorage.getItem("users")) || [];
  return (
    <div>
      {usersFromStore.length === 0 ? (
        <p className="bg-gray-200 p-2 text-xl">No registered users found!!!</p>
      ) : (
        <ul>
          {usersFromStore.map((user) => (
            <li className="my-1" key={user.email}>
              {user.name}({user.email})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList
