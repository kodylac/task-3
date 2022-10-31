





let time = 5
let time2 = 10
const count = document.querySelector('.time')
const count2 = document.querySelector('.time2')
let interval;
let interval2;
    
               
               document.querySelector('.start').addEventListener('click',()=>{
                    clearInterval(interval)
                    interval = setInterval(myTimer, 1000)
                })
               
               document.querySelector('.stop').addEventListener('click',()=>{
                    clearInterval(interval)
                })
               
                function myTimer(){
                    const minutes = Math.floor(time / 60)
                    let seconds = time % 60
                    seconds = seconds < 10 ? '0' + seconds:seconds
                    count.innerHTML = `${minutes}:${seconds}`
                    time--
                if (time === 0){
                    alert('rest')
                    clearInterval(interval)
                    interval2 = setInterval(myTimer2, 1000)
                    return time2 = 10
                }
                }
                function myTimer2(){
                    const minutes2 = Math.floor(time2 / 60)
                    let seconds2 = time2 % 60
                    seconds2 = seconds2 < 10 ? '0' + seconds2:seconds2
                    count2.innerHTML = `${minutes2}:${seconds2}`
                    time2--
                if(time2 ===0){
                    alert('work')
                    clearInterval(interval2)
                    return time = 5
                }
                }
               
                
        

    

    
    
      
        
    
   
    



