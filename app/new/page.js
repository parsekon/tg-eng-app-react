
"use client"
import { useTelegram } from "../hook/useTelegram";

const New = () => {
    const {user, tg } = useTelegram();

    useEffect(() => {
      tg.ready();
    }, []);

    return (
        <>
            <h1>{user?.username}</h1>
        </>
    )
}

export default New 