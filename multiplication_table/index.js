for(var i = 1; i < 10; i++){
    var result='';
      for(var j=1; j<=i;j++)
  {
      result =  result + (i + '*'+ j + '=' + (i*j)+ ' ');
  }
   console.log(result);
   result = '';
  }