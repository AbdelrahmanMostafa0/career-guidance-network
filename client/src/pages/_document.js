import { Html, Head, Main, NextScript } from "next/document";

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
      <body className="relative">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
