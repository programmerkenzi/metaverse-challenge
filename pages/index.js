import Head from 'next/head'
import Login from '../components/Login'
import { useMoralis } from "react-moralis";
import Header from '../components/Header';
import Messages from '../components/Messages';


export default function Home() {
  const { isAuthenticated, logout, user } = useMoralis();

  if (!isAuthenticated) return <Login />

  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-black to-fuchsia-900 overflow-hidden ">
      <Head>
        <title>Mataverse Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Mataverse Challenge</h1>
      <button onClick={logout}>Logout</button>


      <div className=" max-w-screen-xl mx-auto">
        <Header />
        <Messages />
      </div>


    </div>
  )
}
