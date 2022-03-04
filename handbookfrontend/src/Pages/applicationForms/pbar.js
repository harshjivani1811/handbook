// $(document).on('click', '.progress-next', function() {
//     //1. get current step-?
    
//     var cl = $(".progress-bar").attr("class").split(/\s/).filter(function( cn ) {
//           return cn.indexOf('step') === 0;
//       });
//     //console.log(cl)
    
//     //2. incriment current step + 1
//     var step = parseInt(cl[0].split('-')[1]) + 1;
//     //console.log(step)
    
//     //3. remove current step-? from .progress-bar (once i know how to handle getting the classes i have this part :) 
//     var newclass = "step-" + step;
//     //console.log(newclass)
    
//     //4. add new incremented class to .progress-bar (once i know how to handle getting the classes i have this part :) 
//     $(".progress-bar").removeClass(cl[0]).addClass(newclass)
    
//   }) z