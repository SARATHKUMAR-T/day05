//1.anonymous function for odd number:
var odd=function (arr){
    var x=[];
    for(i=0;i<arr.length;i++){
      if(arr[i]%2===0){
            x.push(arr[i]);
            
        }
    }
  return x.join(" ");

};
console.log(odd([2,4,5,6,8,11]));

//1.iife for odd number:
(function (arr){
    var x=[];
  for(var i=0;i<arr.length;i++){
       if(arr[i]%2===0){
           x.push(arr[i]);
            
        }
    }
    console.log(x.join(" "));

})([2,4,5,6,8,11]);

//arrow function for odd number:
var odd= (arr)=>{
    var x=[];
    for(i=0;i<arr.length;i++){
      if(arr[i]%2===0){
            x.push(arr[i]);
            
        }
    }
  return x.join(" ");

};
console.log(odd([2,4,5,6,8,11]));




//2.titlcase of an array:

var titlecase=function (str) {
	str = str.split(' ');
	for (var i = 0; i < str.length; i++) {
		str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
	}
	return str.join(' ');
	};
	console.log(titlecase("guvi geek"));

//titlecase IIFE

    (function (str) {
        str = str.split(' ');
        for (var i = 0; i < str.length; i++) {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        }
        console.log (str.join(' '));
        }) ("guvi geek");
//titlecase arrow
var titlecase=(str)=> {
	str = str.split(' ');
	for (var i = 0; i < str.length; i++) {
		str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
	}
	return str.join(' ');
	};
	console.log(titlecase("guvi geek"));

//Sum of all numbers in an array;
//anonymous function
var sum=function (arr){
    var sum=0;
    for(var i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
    
};
console.log(sum([1,2,4,6,8]));

//IIFE function;
(function (arr){
    var sum=0;
    for(var i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    console.log (sum);
    
})([1,2,4,6,8]);
//arrow function:
var sum=(arr)=>{
    var sum=0;
    for(var i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
    
};
console.log(sum([1,2,4,6,8]));


//Return all the prime numbers in an array
//anonymous function

var prime=function (arr){
    var x=[];
    for(var i=0;i<num.length;i++){
        var count=0;
        for(var j=1;j<=num[i];j++){
            if(num[i]%j===0){
                count++;
            }
        }
        if(count==2){
            x.push(num[i]);
        }
    }
    return x;
    };
    console.log(prime([2,4,7,9]));

//IIFE;

(function (arr){
    var x=[];
    for(var i=0;i<num.length;i++){
        var count=0;
        for(var j=1;j<=num[i];j++){
            if(num[i]%j===0){
                count++;
            }
        }
        if(count==2){
            x.push(num[i]);
        }
    }
    return x;
    })([2,4,7,9]);
    //arrow function:

    var prime=(arr)=>{
        var x=[];
        for(var i=0;i<num.length;i++){
            var count=0;
            for(var j=1;j<=num[i];j++){
                if(num[i]%j===0){
                    count++;
                }
            }
            if(count==2){
                x.push(num[i]);
            }
        }
        return x;
        };
        console.log(prime([2,4,7,9]));

  
//palindrome function:
//anonymous:

var palindrome=function(arr){
    var k=arr.join(" ").split(" ");
    var y=[];
    for(var i=0;i<k.length;i++){
     var z=k[i].split("").reverse().join("");
     if(z==arr[i]){
         y.push(arr[i]);
     }
    }
    return y;
    };
    
    console.log(palindrome([121,131,154]));

    //IIFE:
  (function(arr){
        var k=arr.join(" ").split(" ");
        var y=[];
        for(var i=0;i<k.length;i++){
         var z=k[i].split("").reverse().join("");
         if(z==arr[i]){
             y.push(arr[i]);
         }
        }
        return y;
        })([121,131,154]);


//arrow for palindrome:
var palindrome=(arr)=>{
    var k=arr.join(" ").split(" ");
    var y=[];
    for(var i=0;i<k.length;i++){
     var z=k[i].split("").reverse().join("");
     if(z==arr[i]){
         y.push(arr[i]);
     }
    }
    return y;
    };
    
    console.log(palindrome([121,131,154]));

    //dublicate number deletion from array:
    //anonymous function:
    var dul=function(arr){
        var x=[];
     for(var i=0;i<arr.length;i++){
         var count=0;
         for(var j=i;j<arr.length;j++){
             if(arr[i]==arr[j]){
                 count++;
             }
         }
         if(count==1){
             x.push(arr[i]);
         }
     }
          return x;
  };
  console.log(dul([2,2,4,4,5,6,8,11]));

  //IIFE:

  (function (arr){
    var x=[];
 for(var i=0;i<arr.length;i++){
     var count=0;
     for(var j=i;j<arr.length;j++){
         if(arr[i]==arr[j]){
             count++;
         }
     }
     if(count==1){
         x.push(arr[i]);
     }
 }
      return x;
})([2,2,4,4,5,6,8,11]);

//arrow:
var dul= (arr)=>{
    var x=[];
 for(var i=0;i<arr.length;i++){
     var count=0;
     for(var j=i;j<arr.length;j++){
         if(arr[i]==arr[j]){
             count++;
         }
     }
     if(count==1){
         x.push(arr[i]);
     }
 }
      return x;
};
console.log(dul([2,2,4,4,5,6,8,11]));






        
        



      
