import Home from "@/components/HomePage/Home";

import Newsfeed from "@/components/newsfeed/Newsfeed";
import { useSelector } from "react-redux";

export default function index() {
  const userData = useSelector((state) => state.userData.userData);
  return (
    <div className="min-h-[90dvh]">{userData ? <Newsfeed /> : <Home />}</div>
  );
}
