import {useState} from "react";

const Clock = () => {
    let time = new Date().toLocaleTimeString();
    const [currentTime, setCurrentTime] = useState(time);

    const updateTime = () => {
        let time = new Date().toLocaleTimeString();
        setCurrentTime(time);
    }

    setInterval(updateTime, 1000);
     return(
        <div className="clock">
            <h3>{currentTime}</h3>
        </div>
     )

}

export default Clock;
