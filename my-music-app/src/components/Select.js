import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
// import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function MySelect({quality, setQuality}) {
  // const [quality, setQuality] = useState(1);

  const handleQuality = (e) => {
    setQuality(e.target.value);
  };

  return (
    <div>
      <Card variant="outlined" sx={{ width: "275px", minHeight: "200px" }}>
        <CardContent>
          <Typography variant="h6" sx={{ fontSize: 18, fontWeight: "bold" }}>
            Sound Quality
          </Typography>
          <Typography variant="h6" sx={{ fontSize: 14, marginTop: "40px" }}>
            Manually control the music quality in event of poor connection
          </Typography>
          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-label" id="demo-simple-select" value=
              {quality} onChange={handleQuality}
              >
              <MenuItem value={1}>Low</MenuItem>
              <MenuItem value={2}>Normal</MenuItem>
              <MenuItem value={3}>High</MenuItem>
             
            </Select>
          </FormControl>
        </CardContent>
      </Card>
    </div>
  );
}

export default MySelect;
