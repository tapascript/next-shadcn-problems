"use client";

const UserList = () => {

  const usersFromStore = JSON.parse(localStorage.getItem("users")) || [];
  return (
    <div>
      {usersFromStore.length === 0 ? (
        <p className="bg-slate-200 text-gray-700 p-2 text-xl rounded">No registered users found!!!</p>
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
