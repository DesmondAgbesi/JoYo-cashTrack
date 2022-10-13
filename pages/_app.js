import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const { pathname } = useRouter();
  // const showNavbar = router.pathname === '/login' ? false : true ||  router.pathname === '/register' ? false : true;

  return (
    <SessionProvider session={session}>
      {pathname.includes("/login") || pathname.includes("/register") ? (
        <Component {...pageProps} />
      ) : (
       <Layout>
          <Component {...pageProps} />
       </Layout>
     
      )}
    </SessionProvider>
  );
}

export default MyApp;
