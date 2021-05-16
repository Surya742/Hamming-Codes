import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuAppBar from './HammingCodesNavbar';
import AppBar from '@material-ui/core/AppBar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import PropTypes from 'prop-types';
import ColorInfo from './ColorInfo';
import Particles from 'react-particles-js';



const useStyles = makeStyles((theme) => ({
  top: {
    // backgroundColor: "black",
  },
  bodyy: {
    textAlign: "center",
    // marginTop: "20%",
  },
  bodyy2: {
    textAlign: "center",
    backgroundColor: "#e8eaed",
    padding: "3rem 0",
    position: "relative",
    top: "3rem",

  },
  root: {
    '& > *': {
      // margin: theme.spacing(1),
      width: '10ch',
      borderLeft: "1px solid black",
    },
  },
  heading: {
    marginTop: "2rem",
    marginBottom: "2rem"
  },
  heading2: {
    marginTop: "2rem",
    marginBottom: "5rem"
  },
  mainInput: {
    width: "50%",
    marginBottom: "2%",
  },
  submitBtn: {
    width: "12rem",
    marginBottom: "5%",
  }
}));

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

var data= [];
var processed_data = {"0000" : 0 };//initialising object where transmitted data will be stored

export default function HammingCodes(props) {
  const classes = useStyles();

  const [inputData, setInputData] = useState("");

  const [block0000, setblock0000] = useState("");
  const [block0001, setblock0001] = useState("");
  const [block0010, setblock0010] = useState("");
  const [block0011, setblock0011] = useState("");
  const [block0100, setblock0100] = useState("");
  const [block0101, setblock0101] = useState("");
  const [block0110, setblock0110] = useState("");
  const [block0111, setblock0111] = useState("");
  const [block1000, setblock1000] = useState("");
  const [block1001, setblock1001] = useState("");
  const [block1010, setblock1010] = useState("");
  const [block1011, setblock1011] = useState("");
  const [block1100, setblock1100] = useState("");
  const [block1101, setblock1101] = useState("");
  const [block1110, setblock1110] = useState("");
  const [block1111, setblock1111] = useState("");

  const [result, setResult] = useState("");

  const [backColor0000, setBackColor0000] = useState("");
  const [backColor0001, setBackColor0001] = useState("");
  const [backColor0010, setBackColor0010] = useState("");
  const [backColor0011, setBackColor0011] = useState("");
  const [backColor0100, setBackColor0100] = useState("");
  const [backColor0101, setBackColor0101] = useState("");
  const [backColor0110, setBackColor0110] = useState("");
  const [backColor0111, setBackColor0111] = useState("");
  const [backColor1000, setBackColor1000] = useState("");
  const [backColor1001, setBackColor1001] = useState("");
  const [backColor1010, setBackColor1010] = useState("");
  const [backColor1011, setBackColor1011] = useState("");
  const [backColor1100, setBackColor1100] = useState("");
  const [backColor1101, setBackColor1101] = useState("");
  const [backColor1110, setBackColor1110] = useState("");
  const [backColor1111, setBackColor1111] = useState("");

  const [visiblity1, setVisiblity1] = useState("none");
  const [visiblity2, setVisiblity2] = useState("none");
  const[textdata, setTextData] = useState("");//FOR TEXT TO BINARY
  const [binary, setBinary] = useState("")


  function fillText(e){
    setTextData(e.target.value);
    console.log("data: ", textdata)
  }

const convertStringToBinary = (str) => str.split("").map(l => "0"+l.charCodeAt(0).toString(2)).join("");

function emptyState(){
  setblock0000("");
  setblock0001("");
  setblock0010("");
  setblock0011("");
  setblock0100("");
  setblock0101("");
  setblock0110("");
  setblock0111("");
  setblock1000("");
  setblock1001("");
  setblock1010("");
  setblock1011("");
  setblock1100("");
  setblock1101("");
  setblock1110("");
  setblock1111("");

  setBackColor0000("");
  setBackColor0001("");
  setBackColor0010("");
  setBackColor0011("");
  setBackColor0100("");
  setBackColor0101("");
  setBackColor0110("");
  setBackColor0111("");
  setBackColor1000("");
  setBackColor1001("");
  setBackColor1010("");
  setBackColor1011("");
  setBackColor1100("");
  setBackColor1101("");
  setBackColor1110("");
  setBackColor1111("");
  setResult("");
}

function onSubmit(e){
    e.preventDefault();
    data = inputData.split(""); //spliting 11 bit data to push in array_data
    data.map((item, i) => {
      data[i] = parseInt(item);// converting input of data array into integers
    })




var addBinary = function (a,b){
    var dec = Number(parseInt(a,2)) + Number(parseInt(b,2));
    return dec.toString(2);
}



var index = "0";
for (var i = 0; i < 15 ; i++){
    index = addBinary(parseInt(index),1);
    while(index.length < 4){
        index = "0" + index;
    }
    processed_data[index] = 0;
}
// console.log(Object.entries(processed_data));



index = "0";
var data_count = 0;
for (var i = 0; i < 15 ; i++){
    index = addBinary(parseInt(index),1);
    while(index.length < 4){
        index = "0" + index;
    }
    if(index === "0001" || index === "0010" || index === "0100" || index === "1000"){
        continue;
    }else{
        processed_data[index] = data[data_count++];
    }
}
// console.log("Without parity",Object.entries(processed_data));


//  FOR 1ST PARITY PRIDICTION
var parity_one_count = 0;
Object.keys(processed_data).map(key => {
    if(key[3] == 1){
        if(processed_data[key] == 1){
            parity_one_count++;
        }
    }
});
processed_data["0001"] = parity_one_count%2 == 0 ? 0 : 1;




//  FOR 2ND PARITY PRIDICTION
var parity_two_count = 0;
Object.keys(processed_data).map(key => {
    if(key[2] == 1){
        if(processed_data[key] == 1){
            parity_two_count++;
        }
    }
});
processed_data["0010"] = parity_two_count%2 == 0 ? 0 : 1;



//  FOR 3RD PARITY PRIDICTION
var parity_third_count = 0;
Object.keys(processed_data).map(key => {
    if(key[1] == 1){
        if(processed_data[key] == 1){
            parity_third_count++;
        }
    }
});
processed_data["0100"] = parity_third_count%2 == 0 ? 0 : 1;




//  FOR 4TH PARITY PRIDICTION
var parity_fourth_count = 0;
Object.keys(processed_data).map(key => {
    if(key[0] == 1){
        if(processed_data[key] == 1){
            parity_fourth_count++;
        }
    }
});
processed_data["1000"] = parity_fourth_count%2 == 0 ? 0 : 1;



//FOR 0th PARITY PRIDICTION
var total_one = 0; 
Object.values(processed_data).map(bit => {
    if(bit == 1){
        total_one++;
    }
});
// console.log(total_one)
processed_data["0000"] = total_one%2 == 0 ? 0 : 1;

console.log("First Result",Object.entries(processed_data));//RESULT
    
Object.entries(processed_data).map(i => {
  console.log("i", i);
  switch (i[0]){
    case "0000":
      setblock0000(i[1]);
      break;
    case "0001":
      setblock0001(i[1]);
      break;
    case "0010":
      setblock0010(i[1]);
      break;
    case "0011":
      setblock0011(i[1]);
      break;
    case "0100":
      setblock0100(i[1]);
      break;
    case "0101":
      setblock0101(i[1]);
      break;
    case "0110":
      setblock0110(i[1]);
      break;
    case "0111":
      setblock0111(i[1]);
      break;
    case "1000":
      setblock1000(i[1]);
      break;
    case "1001":
      setblock1001(i[1]);
      break;
    case "1010":
      setblock1010(i[1]);
      break;
    case "1011":
      setblock1011(i[1]);
      break;
    case "1100":
      setblock1100(i[1]);
      break;
    case "1101":
      setblock1101(i[1]);
      break;
    case "1110":
      setblock1110(i[1]);
      break;
    case "1111":
      setblock1111(i[1]);
      break;
    default:
      console.log("Error ",i[0]);
      
  }
  setInputData("");
})
console.log("data1",data)


  }

  function onErrorSubmit(e){
    console.log("data2",data)
    e.preventDefault();
    //ERROR DETECTION
      var temp_no_error = false;
      var num_of_ones = 0;
      Object.values(processed_data).map(value => {
          if(value == 1){
              num_of_ones++;
          }
      });

      temp_no_error = num_of_ones%2 == 0 ? true : false;

      var err_bit_pos = "0000";
      Object.keys(processed_data).map(key => {
          if(processed_data[key] == 1){
              var arra = ['0','0','0','0'];
              //Implementing XOR funtion
              arra[3] = (key[3] == err_bit_pos[3] ? '0' : '1');
              arra[2] = (key[2] == err_bit_pos[2] ? '0' : '1');
              arra[1] = (key[1] == err_bit_pos[1] ? '0' : '1');
              arra[0] = (key[0] == err_bit_pos[0] ? '0' : '1');
              err_bit_pos = arra[0]+arra[1]+arra[2]+arra[3];
          }
      });
      console.log(processed_data)
      if(err_bit_pos !== "0000"){
          if(temp_no_error){
              setResult("DOUBLE ERROR DETECTED!!");
              setBackColor0000("");
              setBackColor0001("");
              setBackColor0010("");
              setBackColor0011("");
              setBackColor0100("");
              setBackColor0101("");
              setBackColor0110("");
              setBackColor0111("");
              setBackColor1000("");
              setBackColor1001("");
              setBackColor1010("");
              setBackColor1011("");
              setBackColor1100("");
              setBackColor1101("");
              setBackColor1110("");
              setBackColor1111("");
          }else{
              setResult(`ERROR HAS FOUND AT POSITION : ${err_bit_pos}`);
              switch (err_bit_pos){
                case "0000":
                  setBackColor0000("#fc033d");
                  break;
                case "0001":
                  setBackColor0001("#fc033d");
                  break;
                case "0010":
                  setBackColor0010("#fc033d");
                  break;
                case "0011":
                  setBackColor0011("#fc033d");
                  break;
                case "0100":
                  setBackColor0100("#fc033d");
                  break;
                case "0101":
                  setBackColor0101("#fc033d");
                  break;
                case "0110":
                  setBackColor0110("#fc033d");
                  break;
                case "0111":
                  setBackColor0111("#fc033d");
                  break;
                case "1000":
                  setBackColor1000("#fc033d");
                  break;
                case "1001":
                  setBackColor1001("#fc033d");
                  break;
                case "1010":
                  setBackColor1010("#fc033d");
                  break;
                case "1011":
                  setBackColor1011("#fc033d");
                  break;
                case "1100":
                  setBackColor1100("#fc033d");
                  break;
                case "1101":
                  setBackColor1101("#fc033d");
                  break;
                case "1110":
                  setBackColor1110("#fc033d");
                  break;
                case "1111":
                  setBackColor1111("#fc033d");
                  break;
                default:
                  console.log("Error in setting color: ",err_bit_pos);
                  
              }
          }
      }else{
          setResult("NO ERROR DETECTED!!");
          setBackColor0000("");
          setBackColor0001("");
          setBackColor0010("");
          setBackColor0011("");
          setBackColor0100("");
          setBackColor0101("");
          setBackColor0110("");
          setBackColor0111("");
          setBackColor1000("");
          setBackColor1001("");
          setBackColor1010("");
          setBackColor1011("");
          setBackColor1100("");
          setBackColor1101("");
          setBackColor1110("");
          setBackColor1111("");
      }
  }

  function onChange(e){
    setInputData(e.target.value);
    console.log("Value set : ", inputData)
  }

  function onDataChange(e){
    var value = e.target.value;
    console.log(e.target.name);
    switch (e.target.name){
      case "0000":
        setblock0000(value);
        break;
      case "0001":
        setblock0001(value);
        break;
      case "0010":
        setblock0010(value);
        break;
      case "0011":
        setblock0011(value);
        break;
      case "0100":
        setblock0100(value);
        break;
      case "0101":
        setblock0101(value);
        break;
      case "0110":
        setblock0110(value);
        break;
      case "0111":
        setblock0111(value);
        break;
      case "1000":
        setblock1000(value);
        break;
      case "1001":
        setblock1001(value);
        break;
      case "1010":
        setblock1010(value);
        break;
      case "1011":
        setblock1011(value);
        break;
      case "1100":
        setblock1100(value);
        break;
      case "1101":
        setblock1101(value);
        break;
      case "1110":
        setblock1110(value);
        break;
      case "1111":
        setblock1111(value);
        break;
      default:
        console.log("Error ",value);
        
    }
    
    processed_data[e.target.name] = value;
  }

  return (
    <div className={classes.top}>
      
      <ElevationScroll {...props}>
        <MenuAppBar style={{position: "sticky"}} />
      </ElevationScroll>
      {/* <Particles
    style={{ position: "absolute",top: -150, zIndex: -2}}
    params={{
	    "fps_limit": 600,
	    "particles": {
            color: {
                    value: "#000000"
                    },
	        "collisions": {
	            "enable": false
	        },
	        "number": {
	            "value": 115,
	            "density": {
	                "enable": false
	            }
	        },
	        "line_linked": {
	            "enable": true,
	            "distance": 30,
	            "opacity": 0.4,
                "color": "#000000",
	        },
	        "move": {
	            "speed": 1
	        },
	        "opacity": {
	            "anim": {
	                "enable": true,
	                "opacity_min": 0.05,
	                "speed": 1,
	                "sync": false
	            },
	            "value": 0.4
	        }
	    },
	    "polygon": {
	        "enable": true,
	        "scale": 0.3,
	        "type": "inline",
	        "move": {
	            "radius": 10
	        },
	        "url": "http://127.0.0.1:5500/src/components/eg.svg",
	        "inline": {
	            "arrangement": "equidistant"
	        },
	        "draw": {
	            "enable": true,
	            "stroke": {
	                "color": "rgba(0,0,0,.1)"
	            }
	        }
	    },
	    "retina_detect": false,
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "bubble"
	            }
	        },
	        "modes": {
	            "bubble": {
	                "size": 6,
	                "distance": 40
	            }
	        }
	    }
	}} /> */}

<Particles
style={{ position: "absolute"}}
    params={{
	    "particles": {
        color: {
          value: "#037bfc"
      },
	        "number": {
	            "value": 160,
	            "density": {
	                "enable": false
	            }
	        },
	        "size": {
	            "value": 3,
	            "random": true,
	            "anim": {
	                "speed": 4,
	                "size_min": 0.3
	            }
	        },
	        "line_linked": {
	            "enable": false,
              color: {
                value: "#000000"
            }
	        },
	        "move": {
	            "random": true,
	            "speed": 1,
	            "direction": "top",
	            "out_mode": "out"
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "bubble"
	            },
	            "onclick": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        },
	        "modes": {
	            "bubble": {
	                "distance": 250,
	                "duration": 2,
	                "size": 0,
	                "opacity": 0
	            },
	            "repulse": {
	                "distance": 400,
	                "duration": 4
	            }
	        }
	    }
	}} />
    <div className={classes.bodyy}>
      <h1 className={classes.heading}>ENTER DATA</h1>
      <Button style={{margin: "2ch"}} onClick={() => {setVisiblity2("none");setVisiblity1("");emptyState()}} variant="contained" color="primary"> ENTER RAW DATA </Button>
      <Button variant="contained" onClick={() => {setVisiblity1("none");setVisiblity2("");emptyState()}} color="primary"> ENTER TEXT  </Button>

      {/* form 1 */}
      <form style={{display: `${visiblity1}`}} onSubmit={onSubmit} noValidate autoComplete="off">
      <TextField
          className={classes.mainInput}
          id="outlined-number"
          label="11-Bit Data"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          name="mainInput"
          onChange={onChange}
          value={inputData}
        />
      <br></br>
      <Button className={classes.submitBtn} variant="outlined" type="submit" color="primary">
        PROCESS DATA
      </Button>
      </form>

      {/* form 2 */}
      <form style={{display: `${visiblity2}`}} onSubmit={onSubmit} noValidate autoComplete="off">
      <TextField
          className={classes.mainInput}
          id="filled-basic" 
          label="Enter Text" 
          variant="filled"
          // name="mainInput"
          onChange={fillText}
          value={textdata}
        />
        <Button onClick={() => {setInputData(convertStringToBinary(textdata)); setTextData("")}} style={{width: "18ch", display: "block", marginLeft: "auto", marginRight: "auto", marginBottom: "2ch"}} variant="outlined" color="primary">
        ENCODE
        </Button>
      <TextField
          className={classes.mainInput}
          id="outlined-number"
          label="Binary Equivalent"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          name="mainInput"
          onChange={onChange}
          value={inputData}
        />
      <br></br>
      <Button className={classes.submitBtn} variant="outlined" type="submit" color="primary">
        PROCESS DATA
      </Button>
      </form>
      <ColorInfo />
      <h1>PROCESSED DATA</h1>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField style={{backgroundColor: backColor0000 ? "#fc033d" : "#03adfc"}} id="filled-basic" label="0000" variant="filled" value={block0000} />
        <TextField style={{backgroundColor: backColor0001 ? "#fc033d" : "#03fca5"}} id="filled-basic" label="0001" variant="filled" value={block0001}/>
        <TextField style={{backgroundColor: backColor0010 ? "#fc033d" : "#03fca5"}} id="filled-basic" label="0010" variant="filled" value={block0010}/>
        <TextField style={{backgroundColor: `${backColor0011}`}} id="filled-basic" label="0011" variant="filled" value={block0011}/>
        <br></br>
        <TextField style={{backgroundColor: backColor0100 ? "#fc033d" : "#03fca5"}} id="filled-basic" label="0100" variant="filled" value={block0100} />
        <TextField style={{backgroundColor: `${backColor0101}`}} id="filled-basic" label="0101" variant="filled" value={block0101}/>
        <TextField style={{backgroundColor: `${backColor0110}`}} id="filled-basic" label="0110" variant="filled" value={block0110}/>
        <TextField style={{backgroundColor: `${backColor0111}`}} id="filled-basic" label="0111" variant="filled" value={block0111}/>
        <br></br>
        <TextField style={{backgroundColor: backColor1000 ? "#fc033d" : "#03fca5"}} id="filled-basic" label="1000" variant="filled" value={block1000} />
        <TextField style={{backgroundColor: `${backColor1001}`}} id="filled-basic" label="1001" variant="filled" value={block1001}/>
        <TextField style={{backgroundColor: `${backColor1010}`}} id="filled-basic" label="1010" variant="filled" value={block1010}/>
        <TextField style={{backgroundColor: `${backColor1011}`}} id="filled-basic" label="1011" variant="filled" value={block1011}/>
        <br></br>
        <TextField style={{backgroundColor: `${backColor1100}`}} id="filled-basic" label="1100" variant="filled" value={block1100} />
        <TextField style={{backgroundColor: `${backColor1101}`}} id="filled-basic" label="1101" variant="filled" value={block1101}/>
        <TextField style={{backgroundColor: `${backColor1110}`}} id="filled-basic" label="1110" variant="filled" value={block1110}/>
        <TextField style={{backgroundColor: `${backColor1111}`}} id="filled-basic" label="1111" variant="filled" value={block1111}/>
      </form>
      
    </div>

    {/* 2nd Part */}
    <div className={classes.bodyy2}>
      
      <h1 className={classes.heading}>ERROR DETECTION</h1>
      <h3 className={classes.heading2}>ALTERABLE DATA</h3>
      
      <form onSubmit={onErrorSubmit} className={classes.root} noValidate autoComplete="off">
        <TextField style={{backgroundColor: backColor0000 ? "#fc033d" : "#03adfc"}} onChange={onDataChange} name="0000" id="filled-basic" label="0000" variant="filled" value={block0000} />
        <TextField style={{backgroundColor: backColor0001 ? "#fc033d" : "#03fca5"}} onChange={onDataChange} name="0001" id="filled-basic" label="0001" variant="filled" value={block0001}/>
        <TextField style={{backgroundColor: backColor0010 ? "#fc033d" : "#03fca5"}} onChange={onDataChange} name="0010" id="filled-basic" label="0010" variant="filled" value={block0010}/>
        <TextField style={{backgroundColor: `${backColor0011}`}} onChange={onDataChange} name="0011" id="filled-basic" label="0011" variant="filled" value={block0011}/>
        <br></br>
        <TextField style={{backgroundColor: backColor0100 ? "#fc033d" : "#03fca5"}} onChange={onDataChange} name="0100" id="filled-basic" label="0100" variant="filled" value={block0100} />
        <TextField style={{backgroundColor: `${backColor0101}`}} onChange={onDataChange} name="0101" id="filled-basic" label="0101" variant="filled" value={block0101}/>
        <TextField style={{backgroundColor: `${backColor0110}`}} onChange={onDataChange} name="0110" id="filled-basic" label="0110" variant="filled" value={block0110}/>
        <TextField style={{backgroundColor: `${backColor0111}`}} onChange={onDataChange} name="0111" id="filled-basic" label="0111" variant="filled" value={block0111}/>
        <br></br>
        <TextField style={{backgroundColor: backColor1000 ? "#fc033d" : "#03fca5"}} onChange={onDataChange} name="1000" id="filled-basic" label="1000" variant="filled" value={block1000} />
        <TextField style={{backgroundColor: `${backColor1001}`}} onChange={onDataChange} name="1001" id="filled-basic" label="1001" variant="filled" value={block1001}/>
        <TextField style={{backgroundColor: `${backColor1010}`}} onChange={onDataChange} name="1010" id="filled-basic" label="1010" variant="filled" value={block1010}/>
        <TextField style={{backgroundColor: `${backColor1011}`}} onChange={onDataChange} name="1011" id="filled-basic" label="1011" variant="filled" value={block1011}/>
        <br></br>
        <TextField style={{backgroundColor: `${backColor1100}`}} onChange={onDataChange} name="1100" id="filled-basic" label="1100" variant="filled" value={block1100} />
        <TextField style={{backgroundColor: `${backColor1101}`}} onChange={onDataChange} name="1101" id="filled-basic" label="1101" variant="filled" value={block1101}/>
        <TextField style={{backgroundColor: `${backColor1110}`}} onChange={onDataChange} name="1110" id="filled-basic" label="1110" variant="filled" value={block1110}/>
        <TextField style={{backgroundColor: `${backColor1111}`}} onChange={onDataChange} name="1111" id="filled-basic" label="1111" variant="filled" value={block1111}/>
        <br></br>
        <br></br>
        {/* <ColorInfo /> */}
      <Button className={classes.submitBtn} variant="outlined" type="submit" color="primary">
        DETECT
      </Button>
      </form>
      <p>{result}</p>
    </div>
    {/* </Particles> */}
    <AppBar style={{position: "absolute", top: "200%"}} />
    </div>
  );
}
