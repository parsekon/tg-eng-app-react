"use client"
const { useState, useEffect } = require("react")

const Window = (props) => {
    const [set, setSet] = useState("Проверка");

    useEffect(() => {
        if(typeof window !== undefined) {
            setSet("ready");
        } else {
            setSet("not ready");
        }
    }, [])

    return (<>
        <h1>{set}</h1>
    </>)
}

export default Window;