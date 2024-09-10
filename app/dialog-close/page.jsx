import dynamic from "next/dynamic";

import Register from "@/components/register";

const UserList = dynamic(() => import("@/components/user-list"), {
  ssr: false,
});

const DialogClosePage = () => {
  return (
    <div className="flex justify-around">
      <Register />
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl font-extrabold mb-3">Registered Users</h2>
        <UserList />
      </div>
    </div>
  );
};

export default DialogClosePage;
