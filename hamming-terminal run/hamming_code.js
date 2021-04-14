const data = [1,1,0,1,0,0,0,1,0,0,1];//Taking 11-bit data for the transmission
var processed_data = {"0000" : 0 };//initialising object where transmitted data will be stored



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
console.log("values" , values)
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



//Introducing noise in data: 
processed_data["1100"] = 1;
processed_data["1101"] = 1;
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
        console.log("Double Error Detected!!");
    }else{
        console.log("Error has found at position : ", err_bit_pos);
    }
}else{
    console.log("No Error detected");
}
