import React from "react";
import blog3 from "@/assets/blog3.jpg";
import { Button } from "./ui/button";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { MdLogin } from "react-icons/md";
import SearchBox from "./SearchBox";
import { RouteBlogAdd, RouteIndex, RouteProfile, RouteSignIn } from "@/helpers/RouteName";
import { useDispatch, useSelector } from "react-redux";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import user1 from "@/assets/image/user1.png";
import { FaRegUser } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { IoLogOutOutline } from "react-icons/io5";
import { removeUser } from "@/redux/user/user.slice";
import { showToast } from "@/helpers/showToast";
import { getEnv } from "@/helpers/getEnv";

const Topbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const handleLogout = async () => {
    try {
      const response = await fetch(
        `${getEnv("VITE_API_BASE_URL")}/auth/logout`,
        {
          method: "get",
          credentials: "include",
        }
      );
      const data = await response.json();
      if (!response.ok) {
        return showToast("error", data.message);
      }
      dispatch(removeUser());
      navigate(RouteIndex);
      showToast("success", data.message);
    } catch (error) {
      showToast("error", error.message);
    }
  };
  return (
    <div className="flex justify-between items-center h-16 fixed w-full z-20 bg-gray-600 px-5 border-b">
      <div>
        <img src={blog3} width={150} className="h-15 hover:border-black" />
      </div>
      <div className="w-[500px]">
        <SearchBox />
      </div>
      <div>
        {!user.isLoggedIn ? (
          <Button
            asChild
            className="rounded-full  bg-black hover:bg-white hover:text-black hover:border-black border-2"
          >
            <Link to={RouteSignIn} className="rounded-full">
              <MdLogin />
              Sign In
            </Link>
          </Button>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src={user?.user?.avatar || user1} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-gray-600 text-white">
              <DropdownMenuLabel>
                <p>{user?.user?.name}</p>
                <p className="text-sm">{user?.user?.email}</p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild className="cursor-pointer">
                <Link to={RouteProfile}>
                  <FaRegUser className="text-white"/>
                  profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="cursor-pointer">
                <Link to={RouteBlogAdd}>
                  <FaPlus className="text-white" />
                  Create Blog
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />

              <DropdownMenuItem
                onClick={handleLogout}
                className="cursor-pointer"
              >
                <IoLogOutOutline color="red" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </div>
  );
};

export default Topbar;
