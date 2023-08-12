import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";

// function valuetext(value) {
//   return `${value}°C`;
// }

function MySlider({volume, setVolume}) {
  // const [volume, setVolume] = useState(20)
  const handleVolume = (e, num) => {
    console.log("volume changed:", num)
    setVolume(num);
  }
  return (
    <div>
      <Card variant="outlined" sx={{ width: "275px", minHeight: "200px" }}>
        <CardContent>
          <Typography variant="h6" sx={{ fontSize: 18, fontWeight: "bold" }}>
            Master Volume
          </Typography>
          <Typography variant="h6" sx={{ fontSize: 14, marginTop: "40px" }}>
            Overrides all other sound sound settings in this application
          </Typography>
          <Slider
            aria-label="Volume"
            value={volume}
            onChange={handleVolume}
            defaultValue={20}
            // getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            step={10}
            marks
            min={0}
            max={100}
          />
        </CardContent>
      </Card>
    </div>
  );
}

export default MySlider;
