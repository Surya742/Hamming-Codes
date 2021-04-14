import React from 'react';
import HammingCodesNavbar from './HammingCodesNavbar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
    center: {
        textAlign: "center"
    }
  }));

export default function Simulator(){
    const classes = useStyles();
    const jsonData = {
        logicInput: [
            {
                value: 1,
                posX: 113.19999694824219,
                posY: 289.7999954223633,
                diameter: 25,
                isSpawned: true,
                isMoving: false,
                offsetMouseX: 2,
                offsetMouseY: -3,
                nodeStartID: 3,
                isSaved: true
            }
        ],
        logicOutput: [
            {
                value: false,
                posX: 585.1999969482422,
                posY: 206.79999542236328,
                diameter: 25,
                isSpawned: true,
                isMoving: false,
                offsetMouseX: 0,
                offsetMouseY: 0,
                nodeStartID: 2,
                isSaved: true
            }
        ],
        flipflop: [],
        logicClock: [],
        gate: [
            {
                strType: "NOT",
                type: 1,
                width: 100,
                height: 50,
                posX: 273.1999969482422,
                posY: 104.79999542236328,
                isSpawned: true,
                offsetMouseX: 0,
                offsetMouseY: 0,
                isMoving: false,
                isSaved: true,
                nodeStartID: 0
            }
        ],
        srLatch: [],
        wire: [
            {
                startID: 3,
                endID: 0,
                endX: 139.1999969482422,
                endY: 289.7999954223633,
                width: 8
            },
            {
                startID: 1,
                endID: 2,
                endX: 380.1999969482422,
                endY: 128.79999542236328,
                width: 8
            }
        ]
       };
       
       function download(content, fileName, contentType) {
        const a = document.createElement("a");
        const file = new Blob([content], { type: contentType });
        a.href = URL.createObjectURL(file);
        a.download = fileName;
        a.click();
       }
       
       function onDownload(){
        download(JSON.stringify(jsonData), "json-file-name.json", "text/plain");
       }
    return <div style={{}}>
        <HammingCodesNavbar />
        <div className={classes.center}>
        <h1>Simulator</h1>
        <h3>For the circuit implementation of hamming codes, please download this file and upload it in "Load" option provides below in simulator.</h3>
                <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.button}
                startIcon={<SaveIcon />}
                onClick={onDownload}
            >
                Save
            </Button>
        </div>
        <iframe style={{width: "98%", height: "40em", marginLeft: "1%"}} src="https://surya742.github.io/Logic-Circuit-Simulator/"></iframe>
        <div style={{padding: "5%"}}></div>
        </div>
}