function check()
{
    var score=0;
    var q1=document.quiz.q1.value;
    var q2=document.quiz.q2.value;
    var q3=document.quiz.q3.value;
    var q4=document.quiz.q4.value;
    var q5=document.quiz.q5.value;
    var q7=document.quiz.q7.value;
    var q8=document.quiz.q8.value;
    var q9=document.quiz.q9.value;
    

    
    
    if(q1=="A"){score++;}
    if(q2=="B"){score++;}
    if(q3=="C"){score++;}
    if(q4=="C"){score++;}
    if(q5=="A"){score++;}
    if(document.quiz.q61.checked  && document.quiz.q62.checked && document.quiz.q63.checked){
        score++;
    }
    if(q7=="C"){score++;}
    if(q8=="B"){score++;}
    if(q9=="D"){score++;}

    if(document.quiz.q102.checked  && document.quiz.q104.checked && document.quiz.q106.checked){
        score++;
    }
    
    
    var percent= (score/10)*100;
  
 document.getElementById('result').innerHTML= "Your Score is : " + parseInt(percent)+"%";
}