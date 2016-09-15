var main = function () {
    
    $('.ffff').click(function() {           
    var collatz = function(num){
        if (num === 1){
            $('.finalInput').val(final);
            return 1;
        }
        else if (num%2 === 0){
            final += " " + (num/2);
            return collatz(num/2);
            }
        else {
            final += " " + (3 * num + 1);
            return collatz(3 * num + 1);
            }
           
    } 
                     
    var final = "";    
    var resp = $('.respostaCollatz').val(); 
    
    collatz(resp);
    }); 
        
    $('.respostaCollatz').keydown(function(event){
        if(event.which === 32)  {
            
       var collatz = function(num){
        if (num === 1){
            $('.finalInput').val(final);
            return 1;
        }
        else if (num%2 === 0){
            final += " " + (num/2);
            return collatz(num/2);
            }
        else {
            final += " " + (3 * num + 1);
            return collatz(3 * num + 1);
            }
           
    } 
              
       
    var final = "";    
    var resp = $('.respostaCollatz').val();
    
    collatz(resp);   
        }
    });

    
       //FIBONACCI FIBONACCI FIBONACCI FIBONACCI FIBONACCI
    
    
       $('.fibonacciBotao').click(function() {           
           var fibonacci = function(num) {
               if (num === 1)
                   return 0;
               else if (num === 2)
                   return 1;
               else 
                   return fibonacci(num-1) + fibonacci(num-2);
           }
           
                     
    var final = "";   
    var resp = $('.respostaFibonacci').val(); 
                    
        
    for(i = 1; i <= resp; i++)           
    final += " " + fibonacci(i);

    $('.finalFibonacci').val(final);
         
    }); 
    
}
     $(document).ready(main());


























        
