import { useState } from "react";
import ScriptsBlock from "../hook/useTelegram";

export default Tele = () => {
    const [tg, setTg] = useState()
    useEffect(() => {
        console.log('useTelegram')
        function initTg() {
        if (typeof window !== 'undefined' && window.Telegram && window.Telegram.WebApp) {
        console.log('Telegram WebApp is set');
        const tgData = window.Telegram.WebApp
        setTg(tgData);
        } else {
        console.log('Telegram WebApp is undefined, retrying…');
        setTimeout(initTg, 500);
        }
        }
        initTg();
      }, []);
    return (
        <>
        <ScriptsBlock />
            {tg.initDataUnsafe?.user.username}
        </>
    )
}