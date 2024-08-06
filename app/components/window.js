import React from "react";
import { useEffect, useState } from "react";
import ScriptsBlock from "../hook/useTelegram";

const Tele = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    console.log("useTelegram");
    function initTg() {
      if (
        typeof window !== "undefined" &&
        window.Telegram &&
        window.Telegram.WebApp
      ) {
        console.log("Telegram WebApp is set");
        const tgData = window.Telegram.WebApp;
        console.log(tgData);
        setUser(tgData.initDataUnsafe?.user?.username);
      } else {
        console.log("Telegram WebApp is undefined, retrying…");
        setTimeout(initTg, 500);
      }
    }
    initTg();
    console.log(user);
  }, []);
  return (
    <>
      <ScriptsBlock />
      <h1>ГОТОВО</h1>
    </>
  );
};

export default Tele;
