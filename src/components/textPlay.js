import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import HammingCodesNavbar from './HammingCodesNavbar';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '60%',
      },
    },
    body: {
        marginLeft: "20%",
    }
  }));



export default function TextPlay() {
    const classes = useStyles();
    const[data, setData] = useState("");
    const [binary, setBinary] = useState("")
    const convertStringToBinary = (str) => str.split("").map(l => "0"+l.charCodeAt(0).toString(2)).join(" ");

    const fillText = (e) => {
        setData(e.target.value)
        console.log(data)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setBinary(convertStringToBinary(data));
    }
return ( 
    <div>
    <HammingCodesNavbar />
    <form onSubmit={(e) => handleSubmit(e)} className={classes.root} noValidate autoComplete="off">
      <TextField onChange={(e) => fillText(e)} className={classes.body} id="filled-basic" label="Enter Text" variant="filled" />
      <Button style={{width: "18ch", display: "block", marginLeft: "auto", marginRight: "auto"}} variant="contained" color="primary" type="submit"> Encode </Button>
      <TextField value={binary} className={classes.body} id="outlined-basic" label="Binary Data" variant="outlined" />
    </form>
</div>
)
}
