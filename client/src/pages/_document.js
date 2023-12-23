import Navbar from "@/components/navbar/Navbar";
import { getUserData } from "@/redux/features/user/userDataSlice";
import { Html, Head, Main, NextScript } from "next/document";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Document() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     dispatch(getUserData());
  //   }
  // }, []);
  return (
    <Html lang="en">
      <Head></Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
