"use client"
const { useState, useEffect } = require("react")

const Window = (props) => {
    const [set, setSet] = useState("Проверка");
    const [tg, setTg] = useState({});

    useEffect(() => {
        if(typeof window !== undefined) {
            setSet("ready");
            setTg(window?.Telegram?.WebApp);

        } else {
            setSet("not ready");
        }
    }, [tg])

    return (<>
        <h1>{set} {tg.initDataUnsafe?.user.username}</h1>
    </>)
}

export default Window;