import Settings from "@/components/settings/Settings";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const index = () => {
  const userData = useSelector((state) => state.userData.userData);
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/");
    }
  }, []);
  return userData ? <Settings /> : <div className="min-h-[90dvh]"></div>;
};
export default index;
