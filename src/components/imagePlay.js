import React, {useState} from 'react';
import HammingCodesNavbar from './HammingCodesNavbar';
import { makeStyles } from '@material-ui/core/styles';
import imgs from "./img.png"

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
    center: {
        textAlign: "center"
    }
  }));

  function imgToBase64(img) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = img.width;
    canvas.height = img.height;
  
    // I think this won't work inside the function from the console
    img.crossOrigin = 'anonymous';
  
    ctx.drawImage(img, 0, 0);
  
    return canvas.toDataURL();
  }

export default function Simulator(){
  var x = document.createElement("img"); 
  x.src = imgs;  
  x.alt="img";
  document.getElementById('root').appendChild(x);
  var y = document.getElementsByTagName("img");
  
  var url = imgToBase64(y[0]);
  console.log("x: ",x)
  console.log("y[0]: ",y[0])
  setTimeout(() => console.log("imgToBase64: ",url) , 1000 ) 

    return <div style={{}}>
        <HammingCodesNavbar />
        {/* <form onSubmit={(e) => onFileSubmit(e)} onChange={(e) => onChange(e)}>
          <input type="file" name="image" id="file" accept=".jpeg, .png, .jprg" />
          <input type="submit" />
        </form> */}
        {/* <img src={img} alt="oo" /> */}
        {/* <img src={imgs} alt="dddd"></img> */}
        <a href={"https://"+url}>click </a>
        </div>
}