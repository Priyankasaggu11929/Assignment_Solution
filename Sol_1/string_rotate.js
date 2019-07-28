// Please run this code using nodejs. (Not using vanilla js)

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               
});

process.stdin.on("end", function () {
   main(stdin_input);
});

function main(input) {
    var data=input.split(' '); 
    var a=data[0];
    var b=data[1];
    var k=parseInt(data[2],10);
    if(a.length!=b.length)
    {
        process.stdout.write("false");
    }
    else
    {
        var clock="";
        var anti="";
        var len=b.length;
        anti=b.substring(len-(k%len),len)+b.substring(0,len-(k%len));
        clock=clock+b.substring(k%len)+b.substring(0,k%len);
        if(a===anti || a===clock)
        {
            //process.stdout.write("true");
		console.log("true");
        }
	else
		{
			//process.stdout.write("false");
			console.log("false");
		}
    }
}  
