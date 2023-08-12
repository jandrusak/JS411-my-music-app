import React, { useState, useEffect } from "react";
import MySelect from "./Select";
import MySlider from "./Slider";
import MySwitch from "./Switch";

function Dashboard() {
  // const [setOnline, setVolume, setQuality] = useState(true)
  const [notifications, setNotifications] = useState([])
  const [online, setOnline] = useState(false)
  const [volume, setVolume] = useState(20)
  const [quality, setQuality] = useState(1)

  useEffect(() => {
    const newNotifictions = []; 
    if (!online) {
      newNotifictions.push("Your application is offline. You won't be able to share or stream music to other devices.")
    }

    if (volume > 80) {
      newNotifictions.push("Listening to music at a high volume could cause long-term hearing loss.")
    }

    if (quality ===1) {
      newNotifictions.push("Music quality is degraded. Increase quality if your connection allows it.")
    }
    setNotifications(newNotifictions);
  }, [online, volume, quality]);



  return (
    <div>
      <div>
        <h1>Welcome User!</h1>
        <div style={{display: 'flex'}}>
          <MySwitch online={online} setOnline={setOnline}/>
          <MySlider volume={volume} setVolume={setVolume}/>
          <MySelect quality={quality} setQuality={setQuality}/>
        </div>
        <h3>System Notifications</h3>
        <ul>
          {notifications.map((notifications, index) => (
            <li key={index}>{notifications}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
