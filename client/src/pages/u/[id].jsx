import { getUser } from "@/api/companyApi";
import CompanyViewUser from "@/components/company/viewUser/CompanyViewUser";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const index = () => {
  const [user, setUser] = useState();
  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    const fetchUser = async () => {
      if (id) {
        try {
          const data = await getUser(id);
          setUser(data);
        } catch (error) {}
      }
    };
    fetchUser();
  }, [id]);
  return user ? <CompanyViewUser userData={user} /> : "";
};
export default index;
