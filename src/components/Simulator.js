import React from 'react';
import HammingCodesNavbar from './HammingCodesNavbar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import Particles from 'react-particles-js';

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
                posX: 482.76197269226907,
                posY: 309.739196337719,
                diameter: 25,
                isSpawned: true,
                isMoving: false,
                offsetMouseX: 103.23362204544094,
                offsetMouseY: 361.97778185000294,
                nodeStartID: 0,
                isSaved: true
            },
            {
                value: 0,
                posX: 488.75926633232314,
                posY: 459.7214579785172,
                diameter: 25,
                isSpawned: true,
                isMoving: false,
                offsetMouseX: 109.230915685495,
                offsetMouseY: 511.9600434908011,
                nodeStartID: 7,
                isSaved: true
            },
            {
                value: 0,
                posX: 487.7579131523504,
                posY: 542.7199797819169,
                diameter: 25,
                isSpawned: true,
                isMoving: false,
                offsetMouseX: 108.22956250552227,
                offsetMouseY: 594.9585652942008,
                nodeStartID: 8,
                isSaved: true
            },
            {
                value: 1,
                posX: 493.76028121730326,
                posY: 626.7214579785173,
                diameter: 25,
                isSpawned: true,
                isMoving: false,
                offsetMouseX: 114.23193057047513,
                offsetMouseY: 678.9600434908011,
                nodeStartID: 9,
                isSaved: true
            },
            {
                value: 0,
                posX: 984.7721215420662,
                posY: 150.72219707681757,
                diameter: 25,
                isSpawned: true,
                isMoving: false,
                offsetMouseX: 605.2437708952381,
                offsetMouseY: 202.96078258910148,
                nodeStartID: 36,
                isSaved: true
            },
            {
                value: 0,
                posX: 984.7704300670999,
                posY: 229.72441437171756,
                diameter: 25,
                isSpawned: true,
                isMoving: false,
                offsetMouseX: 605.2420794202718,
                offsetMouseY: 281.9629998840015,
                nodeStartID: 37,
                isSaved: true
            },
            {
                value: 0,
                posX: 990.7721215420662,
                posY: 293.72515347001763,
                diameter: 25,
                isSpawned: true,
                isMoving: false,
                offsetMouseX: 611.2437708952381,
                offsetMouseY: 345.96373898230155,
                nodeStartID: 59,
                isSaved: true
            },
            {
                value: 0,
                posX: 993.7629875772483,
                posY: 368.71554519211645,
                diameter: 25,
                isSpawned: true,
                isMoving: false,
                offsetMouseX: 614.2346369304202,
                offsetMouseY: 420.95413070440037,
                nodeStartID: 60,
                isSaved: true
            },
            {
                value: 1,
                posX: 995.7687385921332,
                posY: 444.72145797851726,
                diameter: 25,
                isSpawned: true,
                isMoving: false,
                offsetMouseX: 616.2403879453051,
                offsetMouseY: 496.9600434908012,
                nodeStartID: 61,
                isSaved: true
            },
            {
                value: 0,
                posX: 1002.7694151821198,
                posY: 522.721457978517,
                diameter: 25,
                isSpawned: true,
                isMoving: false,
                offsetMouseX: 623.2410645352917,
                offsetMouseY: 574.9600434908009,
                nodeStartID: 62,
                isSaved: true
            },
            {
                value: 0,
                posX: 1003.7684002971401,
                posY: 609.7103715040159,
                diameter: 25,
                isSpawned: true,
                isMoving: false,
                offsetMouseX: 624.240049650312,
                offsetMouseY: 661.9489570162998,
                nodeStartID: 63,
                isSaved: true
            }
        ],
        logicOutput: [
            {
                value: 1,
                posX: 871.7606195122956,
                posY: 310.73328355131844,
                diameter: 25,
                isSpawned: true,
                isMoving: false,
                offsetMouseX: 492.2322688654675,
                offsetMouseY: 362.97186906360236,
                nodeStartID: 16,
                isSaved: true
            },
            {
                value: 0,
                posX: 870.7592663323229,
                posY: 250.73254445301836,
                diameter: 25,
                isSpawned: true,
                isMoving: false,
                offsetMouseX: 491.2309156854948,
                offsetMouseY: 302.9711299653023,
                nodeStartID: 17,
                isSaved: true
            },
            {
                value: 1,
                posX: 873.7545302024172,
                posY: 384.7281098632177,
                diameter: 25,
                isSpawned: true,
                isMoving: false,
                offsetMouseX: 494.22617955558906,
                offsetMouseY: 436.9666953755016,
                nodeStartID: 26,
                isSaved: true
            },
            {
                value: 0,
                posX: 876.7636641672351,
                posY: 461.7236752734174,
                diameter: 25,
                isSpawned: true,
                isMoving: false,
                offsetMouseX: 497.235313520407,
                offsetMouseY: 513.9622607857013,
                nodeStartID: 27,
                isSaved: true
            },
            {
                value: 0,
                posX: 877.7643407572217,
                posY: 541.721457978517,
                diameter: 25,
                isSpawned: true,
                isMoving: false,
                offsetMouseX: 498.2359901103936,
                offsetMouseY: 593.9600434908009,
                nodeStartID: 28,
                isSaved: true
            },
            {
                value: 1,
                posX: 879.7714449520794,
                posY: 628.7199797819171,
                diameter: 25,
                isSpawned: true,
                isMoving: false,
                offsetMouseX: 500.24309430525125,
                offsetMouseY: 680.958565294201,
                nodeStartID: 29,
                isSaved: true
            },
            {
                value: 0,
                posX: 1247.7677237071534,
                posY: 159.67785117881272,
                diameter: 25,
                isSpawned: true,
                isMoving: false,
                offsetMouseX: 868.2393730603253,
                offsetMouseY: 211.91643669109664,
                nodeStartID: 64,
                isSaved: true
            },
            {
                value: 0,
                posX: 1253.7687385921336,
                posY: 239.72219707681734,
                diameter: 25,
                isSpawned: true,
                isMoving: false,
                offsetMouseX: 874.2403879453054,
                offsetMouseY: 291.96078258910126,
                nodeStartID: 65,
                isSaved: true
            },
            {
                value: 1,
                posX: 1260.7589280373295,
                posY: 304.7088933074158,
                diameter: 25,
                isSpawned: true,
                isMoving: false,
                offsetMouseX: 881.2305773905014,
                offsetMouseY: 356.9474788196997,
                nodeStartID: 66,
                isSaved: true
            },
            {
                value: 1,
                posX: 1264.7704300670994,
                posY: 380.7266316666178,
                diameter: 25,
                isSpawned: true,
                isMoving: false,
                offsetMouseX: 885.2420794202712,
                offsetMouseY: 432.9652171789017,
                nodeStartID: 67,
                isSaved: true
            },
            {
                value: 1,
                posX: 1273.7650173472075,
                posY: 453.72071888021713,
                diameter: 25,
                isSpawned: true,
                isMoving: false,
                offsetMouseX: 894.2366667003794,
                offsetMouseY: 505.95930439250105,
                nodeStartID: 68,
                isSaved: true
            },
            {
                value: 0,
                posX: 1279.7748279020116,
                posY: 532.7140669955163,
                diameter: 25,
                isSpawned: true,
                isMoving: false,
                offsetMouseX: 900.2464772551834,
                offsetMouseY: 584.9526525078002,
                nodeStartID: 69,
                isSaved: true
            },
            {
                value: 1,
                posX: 1287.7832852768424,
                posY: 621.7221970768173,
                diameter: 25,
                isSpawned: true,
                isMoving: false,
                offsetMouseX: 908.2549346300143,
                offsetMouseY: 673.9607825891012,
                nodeStartID: 70,
                isSaved: true
            },
            {
                value: 1,
                posX: 1567.9121756692653,
                posY: 800.3548652216805,
                diameter: 25,
                isSpawned: true,
                isMoving: false,
                offsetMouseX: 1188.3838250224371,
                offsetMouseY: 852.5934507339643,
                nodeStartID: 98,
                isSaved: true
            },
            {
                value: 0,
                posX: 1571.7071689033646,
                posY: 965.7621083850213,
                diameter: 25,
                isSpawned: true,
                isMoving: false,
                offsetMouseX: 1192.1788182565365,
                offsetMouseY: 1018.0006938973052,
                nodeStartID: 99,
                isSaved: true
            },
            {
                value: 1,
                posX: 1562.71291991825,
                posY: 1120.739196337719,
                diameter: 25,
                isSpawned: true,
                isMoving: false,
                offsetMouseX: 1183.1845692714219,
                offsetMouseY: 1172.9777818500029,
                nodeStartID: 100,
                isSaved: true
            },
            {
                value: 0,
                posX: 863.981006407152,
                posY: 170.12859970981867,
                diameter: 25,
                isSpawned: true,
                isMoving: false,
                offsetMouseX: 484.45265576032386,
                offsetMouseY: 222.3671852221026,
                nodeStartID: 167,
                isSaved: true
            },
            {
                value: 1,
                posX: 2138.471534147341,
                posY: 751.0554289781114,
                diameter: 25,
                isSpawned: true,
                isMoving: false,
                offsetMouseX: 1758.943183500513,
                offsetMouseY: 803.2940144903953,
                nodeStartID: 168,
                isSaved: true
            },
            {
                value: 1,
                posX: 2171.4180835384095,
                posY: 1216.4611939448523,
                diameter: 25,
                isSpawned: true,
                isMoving: false,
                offsetMouseX: 1791.8897328915814,
                offsetMouseY: 1268.6997794571362,
                nodeStartID: 169,
                isSaved: true
            },
            {
                value: 0,
                posX: 2153.485404242064,
                posY: 917.179597492524,
                diameter: 25,
                isSpawned: true,
                isMoving: false,
                offsetMouseX: 1773.9570535952357,
                offsetMouseY: 969.4181830048078,
                nodeStartID: 170,
                isSaved: true
            },
            {
                value: 0,
                posX: 2165.4911552569492,
                posY: 1077.3303735457393,
                diameter: 25,
                isSpawned: true,
                isMoving: false,
                offsetMouseX: 1785.962804610121,
                offsetMouseY: 1129.5689590580232,
                nodeStartID: 171,
                isSaved: true
            }
        ],
        flipflop: [],
        logicClock: [],
        gate: [
            {
                strType: "XOR",
                type: 6,
                width: 100,
                height: 50,
                posX: 554.7633258722423,
                posY: 135.72219707681757,
                isSpawned: true,
                offsetMouseX: 175.23497522541413,
                offsetMouseY: 187.96078258910148,
                isMoving: false,
                isSaved: true,
                nodeStartID: 1
            },
            {
                strType: "XOR",
                type: 6,
                width: 100,
                height: 50,
                posX: 686.7575748573569,
                posY: 145.72219707681757,
                isSpawned: true,
                offsetMouseX: 307.22922421052874,
                offsetMouseY: 197.96078258910148,
                isMoving: false,
                isSaved: true,
                nodeStartID: 4
            },
            {
                strType: "XOR",
                type: 6,
                width: 100,
                height: 50,
                posX: 558.7650173472081,
                posY: 214.72145797851726,
                isSpawned: true,
                offsetMouseX: 179.23666670037994,
                offsetMouseY: 266.9600434908012,
                isMoving: false,
                isSaved: true,
                nodeStartID: 10
            },
            {
                strType: "XOR",
                type: 6,
                width: 100,
                height: 50,
                posX: 696.7599429223097,
                posY: 224.72737076491785,
                isSpawned: true,
                offsetMouseX: 317.2315922754816,
                offsetMouseY: 276.96595627720177,
                isMoving: false,
                isSaved: true,
                nodeStartID: 13
            },
            {
                strType: "XOR",
                type: 6,
                width: 100,
                height: 50,
                posX: 557.7525004324585,
                posY: 349.7192406836168,
                isSpawned: true,
                offsetMouseX: 178.2241497856304,
                offsetMouseY: 401.95782619590074,
                isMoving: false,
                isSaved: true,
                nodeStartID: 20
            },
            {
                strType: "XOR",
                type: 6,
                width: 100,
                height: 50,
                posX: 695.7548684974109,
                posY: 359.7273707649176,
                isSpawned: true,
                offsetMouseX: 316.2265178505828,
                offsetMouseY: 411.96595627720154,
                isMoving: false,
                isSaved: true,
                nodeStartID: 23
            },
            {
                strType: "XOR",
                type: 6,
                width: 100,
                height: 50,
                posX: 1051.756559972377,
                posY: 134.7155451921169,
                isSpawned: true,
                offsetMouseX: 672.228209325549,
                offsetMouseY: 186.95413070440082,
                isMoving: false,
                isSaved: true,
                nodeStartID: 33
            },
            {
                strType: "XOR",
                type: 6,
                width: 100,
                height: 50,
                posX: 1055.7589280373295,
                posY: 214.71258879891639,
                isSpawned: true,
                offsetMouseX: 676.2305773905014,
                offsetMouseY: 266.9511743112003,
                isMoving: false,
                isSaved: true,
                nodeStartID: 41
            },
            {
                strType: "XOR",
                type: 6,
                width: 100,
                height: 50,
                posX: 1059.758251447343,
                posY: 278.70519781591565,
                isSpawned: true,
                offsetMouseX: 680.2299008005148,
                offsetMouseY: 330.9437833281996,
                isMoving: false,
                isSaved: true,
                nodeStartID: 44
            },
            {
                strType: "XOR",
                type: 6,
                width: 100,
                height: 50,
                posX: 1058.7538536124307,
                posY: 353.7074151108159,
                isSpawned: true,
                offsetMouseX: 679.2255029656026,
                offsetMouseY: 405.9460006230998,
                isMoving: false,
                isSaved: true,
                nodeStartID: 47
            },
            {
                strType: "XOR",
                type: 6,
                width: 100,
                height: 50,
                posX: 1069.7568982673702,
                posY: 429.72145797851726,
                isSpawned: true,
                offsetMouseX: 690.228547620542,
                offsetMouseY: 481.9600434908012,
                isMoving: false,
                isSaved: true,
                nodeStartID: 50
            },
            {
                strType: "XOR",
                type: 6,
                width: 100,
                height: 50,
                posX: 1071.7687385921336,
                posY: 508.7214579785172,
                isSpawned: true,
                offsetMouseX: 692.2403879453054,
                offsetMouseY: 560.9600434908011,
                isMoving: false,
                isSaved: true,
                nodeStartID: 53
            },
            {
                strType: "XOR",
                type: 6,
                width: 100,
                height: 50,
                posX: 1071.768738592133,
                posY: 595.7214579785173,
                isSpawned: true,
                offsetMouseX: 692.240387945305,
                offsetMouseY: 647.9600434908011,
                isMoving: false,
                isSaved: true,
                nodeStartID: 56
            },
            {
                strType: "XOR",
                type: 6,
                width: 100,
                height: 50,
                posX: 1262.935518023798,
                posY: 738.3363877641787,
                isSpawned: true,
                offsetMouseX: 883.4071673769699,
                offsetMouseY: 790.5749732764625,
                isMoving: false,
                isSaved: true,
                nodeStartID: 71
            },
            {
                strType: "XOR",
                type: 6,
                width: 100,
                height: 50,
                posX: 1263.9351797288045,
                posY: 806.34969153358,
                isSpawned: true,
                offsetMouseX: 884.4068290819764,
                offsetMouseY: 858.5882770458638,
                isMoving: false,
                isSaved: true,
                nodeStartID: 74
            },
            {
                strType: "XOR",
                type: 6,
                width: 100,
                height: 50,
                posX: 1377.9142054392246,
                posY: 775.3459960420796,
                isSpawned: true,
                offsetMouseX: 998.3858547923965,
                offsetMouseY: 827.5845815543635,
                isMoving: false,
                isSaved: true,
                nodeStartID: 77
            },
            {
                strType: "XOR",
                type: 6,
                width: 100,
                height: 50,
                posX: 1262.9341648438249,
                posY: 907.3726035808822,
                isSpawned: true,
                offsetMouseX: 883.4058141969967,
                offsetMouseY: 959.6111890931661,
                isMoving: false,
                isSaved: true,
                nodeStartID: 80
            },
            {
                strType: "XOR",
                type: 6,
                width: 100,
                height: 50,
                posX: 1261.7004030035,
                posY: 972.7606301884211,
                isSpawned: true,
                offsetMouseX: 882.1720523566719,
                offsetMouseY: 1024.999215700705,
                isMoving: false,
                isSaved: true,
                nodeStartID: 83
            },
            {
                strType: "XOR",
                type: 6,
                width: 100,
                height: 50,
                posX: 1264.7058157233919,
                posY: 1061.7554565003206,
                isSpawned: true,
                offsetMouseX: 885.1774650765637,
                offsetMouseY: 1113.9940420126045,
                isMoving: false,
                isSaved: true,
                nodeStartID: 86
            },
            {
                strType: "XOR",
                type: 6,
                width: 100,
                height: 50,
                posX: 1265.7058157233914,
                posY: 1131.7480655173194,
                isSpawned: true,
                offsetMouseX: 886.1774650765633,
                offsetMouseY: 1183.9866510296033,
                isMoving: false,
                isSaved: true,
                nodeStartID: 89
            },
            {
                strType: "XOR",
                type: 6,
                width: 100,
                height: 50,
                posX: 1372.7119050332703,
                posY: 1094.7436309275195,
                isSpawned: true,
                offsetMouseX: 993.1835543864422,
                offsetMouseY: 1146.9822164398033,
                isMoving: false,
                isSaved: true,
                nodeStartID: 92
            },
            {
                strType: "XOR",
                type: 6,
                width: 100,
                height: 50,
                posX: 1383.707168903365,
                posY: 939.7569346969208,
                isSpawned: true,
                offsetMouseX: 1004.1788182565369,
                offsetMouseY: 991.9955202092046,
                isMoving: false,
                isSaved: true,
                nodeStartID: 95
            },
            {
                strType: "XOR",
                type: 6,
                width: 100,
                height: 50,
                posX: 1944.4214664883427,
                posY: 726.0561680764115,
                isSpawned: true,
                offsetMouseX: 1564.8931158415146,
                offsetMouseY: 778.2947535886954,
                isMoving: false,
                isSaved: true,
                nodeStartID: 172
            },
            {
                strType: "XOR",
                type: 6,
                width: 100,
                height: 50,
                posX: 1964.426540913241,
                posY: 892.1832929840243,
                isSpawned: true,
                offsetMouseX: 1584.898190266413,
                offsetMouseY: 944.4218784963082,
                isMoving: false,
                isSaved: true,
                nodeStartID: 175
            },
            {
                strType: "XOR",
                type: 6,
                width: 100,
                height: 50,
                posX: 1971.4265409132402,
                posY: 1053.331851742339,
                isSpawned: true,
                offsetMouseX: 1591.898190266412,
                offsetMouseY: 1105.570437254623,
                isMoving: false,
                isSaved: true,
                nodeStartID: 178
            },
            {
                strType: "XOR",
                type: 6,
                width: 100,
                height: 50,
                posX: 1972.357867029615,
                posY: 1192.458976649952,
                isSpawned: true,
                offsetMouseX: 1592.8295163827868,
                offsetMouseY: 1244.697562162236,
                isMoving: false,
                isSaved: true,
                nodeStartID: 181
            },
            {
                strType: "AND",
                type: 2,
                width: 100,
                height: 50,
                posX: 1799.3649712244721,
                posY: 903.1670328214227,
                isSpawned: true,
                offsetMouseX: 1419.836620577644,
                offsetMouseY: 955.4056183337066,
                isMoving: false,
                isSaved: true,
                nodeStartID: 190
            },
            {
                strType: "AND",
                type: 2,
                width: 100,
                height: 50,
                posX: 1805.368015879412,
                posY: 1061.3251998576388,
                isSpawned: true,
                offsetMouseX: 1425.839665232584,
                offsetMouseY: 1113.5637853699227,
                isMoving: false,
                isSaved: true,
                nodeStartID: 193
            },
            {
                strType: "AND",
                type: 2,
                width: 100,
                height: 50,
                posX: 1807.3088142555955,
                posY: 1250.4404991924503,
                isSpawned: true,
                offsetMouseX: 1427.7804636087674,
                offsetMouseY: 1302.6790847047341,
                isMoving: false,
                isSaved: true,
                nodeStartID: 196
            },
            {
                strType: "AND",
                type: 2,
                width: 100,
                height: 50,
                posX: 1657.310844025556,
                posY: 869.150033560521,
                isSpawned: true,
                offsetMouseX: 1277.7824933787278,
                offsetMouseY: 921.3886190728049,
                isMoving: false,
                isSaved: true,
                nodeStartID: 199
            },
            {
                strType: "AND",
                type: 2,
                width: 100,
                height: 50,
                posX: 1662.298327110805,
                posY: 1028.3096787933368,
                isSpawned: true,
                offsetMouseX: 1282.769976463977,
                offsetMouseY: 1080.5482643056207,
                isMoving: false,
                isSaved: true,
                nodeStartID: 202
            },
            {
                strType: "AND",
                type: 2,
                width: 100,
                height: 50,
                posX: 1807.3057696006565,
                posY: 1172.4264563247489,
                isSpawned: true,
                offsetMouseX: 1427.7774189538284,
                offsetMouseY: 1224.6650418370327,
                isMoving: false,
                isSaved: true,
                nodeStartID: 205
            },
            {
                strType: "AND",
                type: 2,
                width: 100,
                height: 50,
                posX: 1793.3639563394925,
                posY: 735.0339951274093,
                isSpawned: true,
                offsetMouseX: 1413.8356056926643,
                offsetMouseY: 787.2725806396932,
                isMoving: false,
                isSaved: true,
                nodeStartID: 208
            },
            {
                strType: "AND",
                type: 2,
                width: 100,
                height: 50,
                posX: 1653.3108440255555,
                posY: 708.0317778325091,
                isSpawned: true,
                offsetMouseX: 1273.7824933787274,
                offsetMouseY: 760.2703633447929,
                isMoving: false,
                isSaved: true,
                nodeStartID: 211
            },
            {
                strType: "NOT",
                type: 1,
                width: 100,
                height: 50,
                posX: 1657.3121972055278,
                posY: 767.0776019271136,
                isSpawned: true,
                offsetMouseX: 1277.7838465586997,
                offsetMouseY: 819.3161874393975,
                isMoving: false,
                isSaved: true,
                nodeStartID: 214
            },
            {
                strType: "NOT",
                type: 1,
                width: 100,
                height: 50,
                posX: 1659.310505730562,
                posY: 940.1951185568255,
                isSpawned: true,
                offsetMouseX: 1279.7821550837339,
                offsetMouseY: 992.4337040691094,
                isMoving: false,
                isSaved: true,
                nodeStartID: 216
            },
            {
                strType: "NOT",
                type: 1,
                width: 100,
                height: 50,
                posX: 1666.3030632407103,
                posY: 1097.3392427253393,
                isSpawned: true,
                offsetMouseX: 1286.7747125938822,
                offsetMouseY: 1149.5778282376232,
                isMoving: false,
                isSaved: true,
                nodeStartID: 218
            }
        ],
        srLatch: [],
        wire: [
            {
                startID: 0,
                endID: 1,
                endX: 313.33333587646484,
                endY: -34.55555725097656,
                width: 8
            },
            {
                startID: 7,
                endID: 2,
                endX: 313.33333587646484,
                endY: -34.55555725097656,
                width: 8
            },
            {
                startID: 9,
                endID: 5,
                endX: 313.33333587646484,
                endY: -34.55555725097656,
                width: 8
            },
            {
                startID: 3,
                endID: 4,
                endX: 313.33333587646484,
                endY: -34.55555725097656,
                width: 8
            },
            {
                startID: 0,
                endID: 10,
                endX: 313.33333587646484,
                endY: -34.55555725097656,
                width: 8
            },
            {
                startID: 8,
                endID: 11,
                endX: 313.33333587646484,
                endY: -34.55555725097656,
                width: 8
            },
            {
                startID: 12,
                endID: 13,
                endX: 313.33333587646484,
                endY: -34.55555725097656,
                width: 8
            },
            {
                startID: 9,
                endID: 14,
                endX: 313.33333587646484,
                endY: -34.55555725097656,
                width: 8
            },
            {
                startID: 0,
                endID: 16,
                endX: 313.33333587646484,
                endY: -34.55555725097656,
                width: 8
            },
            {
                startID: 15,
                endID: 17,
                endX: 313.33333587646484,
                endY: -34.55555725097656,
                width: 8
            },
            {
                startID: 7,
                endID: 20,
                endX: 313.33333587646484,
                endY: -34.55555725097656,
                width: 8
            },
            {
                startID: 8,
                endID: 21,
                endX: 313.33333587646484,
                endY: -34.55555725097656,
                width: 8
            },
            {
                startID: 22,
                endID: 23,
                endX: 313.33333587646484,
                endY: -34.55555725097656,
                width: 8
            },
            {
                startID: 9,
                endID: 24,
                endX: 313.33333587646484,
                endY: -34.55555725097656,
                width: 8
            },
            {
                startID: 25,
                endID: 26,
                endX: 313.33333587646484,
                endY: -34.55555725097656,
                width: 8
            },
            {
                startID: 7,
                endID: 27,
                endX: 313.33333587646484,
                endY: -34.55555725097656,
                width: 8
            },
            {
                startID: 8,
                endID: 28,
                endX: 313.33333587646484,
                endY: -34.55555725097656,
                width: 8
            },
            {
                startID: 9,
                endID: 29,
                endX: 313.33333587646484,
                endY: -34.55555725097656,
                width: 8
            },
            {
                startID: 6,
                endID: 34,
                endX: 313.33333587646484,
                endY: -34.55555725097656,
                width: 8
            },
            {
                startID: 36,
                endID: 33,
                endX: 313.33333587646484,
                endY: -34.55555725097656,
                width: 8
            },
            {
                startID: 37,
                endID: 41,
                endX: 313.33333587646484,
                endY: -34.55555725097656,
                width: 8
            },
            {
                startID: 59,
                endID: 44,
                endX: 313.33333587646484,
                endY: -34.55555725097656,
                width: 8
            },
            {
                startID: 15,
                endID: 42,
                endX: 313.33333587646484,
                endY: -34.55555725097656,
                width: 8
            },
            {
                startID: 60,
                endID: 47,
                endX: 313.33333587646484,
                endY: -34.55555725097656,
                width: 8
            },
            {
                startID: 0,
                endID: 45,
                endX: 313.33333587646484,
                endY: -34.55555725097656,
                width: 8
            },
            {
                startID: 25,
                endID: 48,
                endX: 313.33333587646484,
                endY: -34.55555725097656,
                width: 8
            },
            {
                startID: 61,
                endID: 50,
                endX: 313.33333587646484,
                endY: -34.55555725097656,
                width: 8
            },
            {
                startID: 7,
                endID: 51,
                endX: 313.33333587646484,
                endY: -34.55555725097656,
                width: 8
            },
            {
                startID: 62,
                endID: 53,
                endX: 313.33333587646484,
                endY: -34.55555725097656,
                width: 8
            },
            {
                startID: 8,
                endID: 54,
                endX: 313.33333587646484,
                endY: -34.55555725097656,
                width: 8
            },
            {
                startID: 63,
                endID: 56,
                endX: 313.33333587646484,
                endY: -34.55555725097656,
                width: 8
            },
            {
                startID: 9,
                endID: 57,
                endX: 313.33333587646484,
                endY: -34.55555725097656,
                width: 8
            },
            {
                startID: 35,
                endID: 64,
                endX: 313.33333587646484,
                endY: -34.55555725097656,
                width: 8
            },
            {
                startID: 43,
                endID: 65,
                endX: 313.33333587646484,
                endY: -34.55555725097656,
                width: 8
            },
            {
                startID: 46,
                endID: 66,
                endX: 313.33333587646484,
                endY: -34.55555725097656,
                width: 8
            },
            {
                startID: 49,
                endID: 67,
                endX: 313.33333587646484,
                endY: -34.55555725097656,
                width: 8
            },
            {
                startID: 52,
                endID: 68,
                endX: 313.33333587646484,
                endY: -34.55555725097656,
                width: 8
            },
            {
                startID: 55,
                endID: 69,
                endX: 313.33333587646484,
                endY: -34.55555725097656,
                width: 8
            },
            {
                startID: 58,
                endID: 70,
                endX: 313.33333587646484,
                endY: -34.55555725097656,
                width: 8
            },
            {
                startID: 73,
                endID: 77,
                endX: 313.33333587646484,
                endY: -34.55555725097656,
                width: 8
            },
            {
                startID: 76,
                endID: 78,
                endX: 313.33333587646484,
                endY: -34.55555725097656,
                width: 8
            },
            {
                startID: 79,
                endID: 98,
                endX: 313.33333587646484,
                endY: -34.55555725097656,
                width: 8
            },
            {
                startID: 82,
                endID: 95,
                endX: 313.33333587646484,
                endY: -34.55555725097656,
                width: 8
            },
            {
                startID: 85,
                endID: 96,
                endX: 313.33333587646484,
                endY: -34.55555725097656,
                width: 8
            },
            {
                startID: 97,
                endID: 99,
                endX: 313.33333587646484,
                endY: -34.55555725097656,
                width: 8
            },
            {
                startID: 88,
                endID: 92,
                endX: 313.33333587646484,
                endY: -34.55555725097656,
                width: 8
            },
            {
                startID: 91,
                endID: 93,
                endX: 313.33333587646484,
                endY: -34.55555725097656,
                width: 8
            },
            {
                startID: 94,
                endID: 100,
                endX: 313.33333587646484,
                endY: -34.55555725097656,
                width: 8
            },
            {
                startID: 35,
                endID: 71,
                endX: 926.7133980081272,
                endY: 282.0082733199408,
                width: 8
            },
            {
                startID: 6,
                endID: 167,
                endX: 611.6068350852585,
                endY: 171.92697250693266,
                width: 8
            },
            {
                startID: 43,
                endID: 80,
                endX: 650.6200285899946,
                endY: 951.5027300826903,
                width: 8
            },
            {
                startID: 49,
                endID: 86,
                endX: 506.5713141109689,
                endY: 1072.5921609769991,
                width: 8
            },
            {
                startID: 46,
                endID: 72,
                endX: 1277.8321395507523,
                endY: 727.3371720634738,
                width: 8
            },
            {
                startID: 52,
                endID: 74,
                endX: 974.7296361678025,
                endY: 576.2255682201626,
                width: 8
            },
            {
                startID: 58,
                endID: 75,
                endX: 936.7167809580595,
                endY: 748.3526931277753,
                width: 8
            },
            {
                startID: 46,
                endID: 81,
                endX: 1461.8943858295074,
                endY: 636.269914118167,
                width: 8
            },
            {
                startID: 55,
                endID: 83,
                endX: 955.723208562931,
                endY: 669.2943043620694,
                width: 8
            },
            {
                startID: 58,
                endID: 84,
                endX: 942.718810728019,
                endY: 746.3512149311752,
                width: 8
            },
            {
                startID: 52,
                endID: 87,
                endX: 934.716104368073,
                endY: 581.229263711663,
                width: 8
            },
            {
                startID: 55,
                endID: 89,
                endX: 946.720163907992,
                endY: 663.289869772269,
                width: 8
            },
            {
                startID: 58,
                endID: 90,
                endX: 941.7184724330257,
                endY: 741.3475194396748,
                width: 8
            },
            {
                startID: 183,
                endID: 169,
                endX: 2668.302369591348,
                endY: 996.5359895061936,
                width: 8
            },
            {
                startID: 180,
                endID: 171,
                endX: 2654.2976334614427,
                endY: 730.339389358374,
                width: 8
            },
            {
                startID: 177,
                endID: 170,
                endX: 2646.294927101497,
                endY: 480.15461478335544,
                width: 8
            },
            {
                startID: 174,
                endID: 168,
                endX: 2635.291205856571,
                endY: 180.93362439163332,
                width: 8
            },
            {
                startID: 210,
                endID: 173,
                endX: 2036.0885671556239,
                endY: 236.97501389643747,
                width: 8
            },
            {
                startID: 192,
                endID: 176,
                endX: 2052.0939798755157,
                endY: 389.0873568380487,
                width: 8
            },
            {
                startID: 195,
                endID: 179,
                endX: 2086.1054819052856,
                endY: 716.329041982173,
                width: 8
            },
            {
                startID: 198,
                endID: 182,
                endX: 2129.1200285899945,
                endY: 920.479818035388,
                width: 8
            },
            {
                startID: 94,
                endID: 214,
                endX: 1365.861909510157,
                endY: 666.2920870671692,
                width: 8
            },
            {
                startID: 97,
                endID: 212,
                endX: 1347.8558202002787,
                endY: 500.1693967493569,
                width: 8
            },
            {
                startID: 79,
                endID: 211,
                endX: 1998.075711945881,
                endY: 79.85897546332586,
                width: 8
            },
            {
                startID: 213,
                endID: 208,
                endX: 2099.109879740198,
                endY: 87.86488824972645,
                width: 8
            },
            {
                startID: 215,
                endID: 209,
                endX: 1873.0334250717267,
                endY: 396.09253052614923,
                width: 8
            },
            {
                startID: 97,
                endID: 216,
                endX: 1358.8595414452043,
                endY: 498.16791855275676,
                width: 8
            },
            {
                startID: 79,
                endID: 199,
                endX: 1334.8514223653667,
                endY: 319.03561995704354,
                width: 8
            },
            {
                startID: 94,
                endID: 200,
                endX: 1365.861909510157,
                endY: 666.2920870671692,
                width: 8
            },
            {
                startID: 201,
                endID: 190,
                endX: 1995.0746970609014,
                endY: 349.05779290604573,
                width: 8
            },
            {
                startID: 217,
                endID: 191,
                endX: 1836.0209081569772,
                endY: 613.2529148572653,
                width: 8
            },
            {
                startID: 79,
                endID: 218,
                endX: 1330.8500691853937,
                endY: 327.0415327434441,
                width: 8
            },
            {
                startID: 97,
                endID: 202,
                endX: 1360.8602180351909,
                endY: 498.16791855275676,
                width: 8
            },
            {
                startID: 94,
                endID: 203,
                endX: 1363.8612329201706,
                endY: 663.289869772269,
                width: 8
            },
            {
                startID: 204,
                endID: 193,
                endX: 1998.075711945881,
                endY: 589.2351764980635,
                width: 8
            },
            {
                startID: 219,
                endID: 194,
                endX: 1868.0317335967604,
                endY: 740.3467803413747,
                width: 8
            },
            {
                startID: 79,
                endID: 205,
                endX: 1330.8500691853937,
                endY: 320.0363590553436,
                width: 8
            },
            {
                startID: 97,
                endID: 206,
                endX: 1852.0263208768688,
                endY: 695.3135209178713,
                width: 8
            },
            {
                startID: 207,
                endID: 196,
                endX: 2375.2032491583304,
                endY: 786.3807788631781,
                width: 8
            },
            {
                startID: 94,
                endID: 197,
                endX: 1368.8629243951368,
                endY: 664.290608870569,
                width: 8
            },
            {
                startID: 46,
                endID: 172,
                endX: 808.6734791989256,
                endY: 457.7999954223633,
                width: 8
            },
            {
                startID: 52,
                endID: 175,
                endX: 1219.812518441145,
                endY: 139.79999542236328,
                width: 8
            },
            {
                startID: 55,
                endID: 178,
                endX: 1202.8067674262597,
                endY: 81.79999542236328,
                width: 8
            },
            {
                startID: 58,
                endID: 181,
                endX: 818.6768621488579,
                endY: 769.7999954223633,
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
        <Particles
                    style={{position: "absolute", zIndex: -1}}
                    params={{
                        "particles": {
                            color: {
                                value: "#046bd9"
                            },
                            line_linked: {
                                color: {
                                    value: "#046bd9"
                                }
                            },
                            "number": {
                                "value": 50
                            },
                            "size": {
                                "value": 3
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "repulse"
                                }
                            }
                        }
                    }} />
        <HammingCodesNavbar />
        <div className={classes.center}>
        <h1>Simulator</h1>
        <h3>For the circuit implementation of hamming codes, please download this file and upload it in "Load" option provides below in simulator.</h3>
        <h3>Then use the "Move" option to see the whole circuit</h3>
                <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.button}
                startIcon={<SaveIcon />}
                onClick={onDownload}
            >
                Download
            </Button>
        </div>
        <iframe style={{width: "98%", height: "88em", marginLeft: "1%"}} src="https://surya742.github.io/Logic-Circuit-Simulator/"></iframe>
        <div style={{padding: "5%"}}></div>
        </div>
}
// https://surya742.github.io/Logic-Circuit-Simulator/
//https://deepanshu-singhaniya.github.io/Hamming-Code-Circuit-Simulator/