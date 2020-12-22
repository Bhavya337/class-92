player1_name = localStorage.getItem("player1");
player2_name = localStorage.getItem("player2");

player1_score = 0;
player2_score = 0;

document.getElementById("Player1_name").innerHTML=player1_name+ ":";
document.getElementById("Player2_name").innerHTML=player2_name+ ":";

document.getElementById("score_payer1").innerHTML=player1_score;
document.getElementById("score_payer2").innerHTML=player2_score;

document.getElementById("player_question").innerHTML=" Question turn - " + player1_name ; 
document.getElementById("player_answer").innerHTML=" Answer  turn - " + player2_name ; 
 
function send(){

   get_word=document.getElementById("word").value;
   word=get_word.toLowerCase();
    console.log(word);

    Charat1=word.charAt(1);
    console.log(Charat1);

    lenght_divide_2 = Math.floor(word.length/2);
    charat2 = word.charAt(lenght_divide_2);
    console.log(charat2);

    length_minus_1=word.length-1;


    Charat3=word.charAt(length_minus_1) ;
    console.log(Charat3);
    remove_Charat1=word.replace(Charat1,"_");
    remove_Charat2=remove_Charat1.replace(charat2,"_");   
     remove_Charat3=remove_Charat2.replace(Charat3,"_");
     console.log(remove_Charat3);

     question_word = "<h4 id='word_display'> Q. "+remove_Charat3+"</h4>";
      input_box = "<br>Answer : <input type='text' id='input_check_box'>"; 
     check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
      row = question_word + input_box + check_button ;
     document.getElementById("output").innerHTML = row;
       document.getElementById("word").value="";
}
      Question_turn="player1_value";
      Answer_turn="player2_value";

      function check() 
      {
    get_answer=document.getElementById("input_check_box").value;
    answer=get_answer.toLowerCase();
    console.log(answer);

    if (answer==word)
    
    { 
      if( Answer_turn=="player1_value")
     { player1_score=player1_score+1;
      document.getElementById("score_payer1").innerHTML=player1_score;
console.log("player1score"+  player1_score);
     }
     else{ 
       player2_score=player2_score+1;
      document.getElementById("score_payer2").innerHTML=player2_score;
console.log("player2score"+ player2_score);
    }
    }

  
    if( Question_turn=="player1_value")
     { Question_turn="player2_value";
     document.getElementById("player_question").innerHTML=" Question turn - " + player2_name ; 

     }
     else{ 
      Question_turn="player1_value";
      document.getElementById("player_question").innerHTML=" Question turn - " + player1_name ; 
    }

    
  
    if( Answer_turn=="player1_value")
     {Answer_turn="player2_value";
     document.getElementById("player_answer").innerHTML=" Answer turn  - " + player2_name ; 

     }
     else{ 
      Answer_turn="player1_value";
      document.getElementById("player_answer").innerHTML="Answer turn   - " + player1_name ; }

document.getElementById("output").innerHTML="";

}














