import React from "react";
import { useEffect, useState } from "react";
import ScriptsBlock from "../hook/useTelegram";

const Tele = () => {
  const [tg, setTg] = useState();
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
        setTg(tgData);
      } else {
        console.log("Telegram WebApp is undefined, retrying…");
        setTimeout(initTg, 500);
      }
    }
    initTg();
    console.log("user>>>", typeof user);
  }, []);

  const closeBot = () => {
    tg.close()
  }
  return (
    <>
      <ScriptsBlock />
      <button onClick={closeBot}>close</button>
      <h1>ГОТОВО</h1>
    </>
  );
};

export default Tele;
