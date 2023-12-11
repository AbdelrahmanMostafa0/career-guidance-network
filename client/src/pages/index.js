import Home from "@/components/HomePage/Home";

import Newsfeed from "@/components/newsfeed/Newsfeed";

export default function index() {
  return <div className="min-h-[90dvh]">{false ? <Newsfeed /> : <Home />}</div>;
}
