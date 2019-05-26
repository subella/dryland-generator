function generateWorkout(){
  var framework = [["warmup_lo", "warmup_up"],
                   ["warmup_lo", "warmup_up"],
                   ["main_lo", "main_up"],
                   ["main_lo", "main_up"],
                   ["main_lo", "main_up"],
                   ["rest"]
                 ] 
  var work_out = framework.slice();
  var loc = document.querySelector('input[name="loc"]:checked').value
  var day = document.querySelector('input[name="day"]:checked').value
  var selected_workout;
  for (var i = 0; i < framework.length; i++){
    for (var j = 0; j < framework[i].length; j++){
      var filtered_workouts = UpperBody.workouts.filter(function(el){
        return el.loca.includes(loc) &&
               el.day.includes(day) &&
               el.type == framework[i][j] &&
               !work_out.some(set => (set.name === el.name));
                  
      }); 
    selected_workout = filtered_workouts[Math.floor(Math.random()*filtered_workouts.length)];
    work_out[i][j] = selected_workout;
    } 
  }
  console.log(work_out.flat());
  printWorkout(work_out);
}

function printWorkout(work_out){
  var set = ""; 
  for (var i = 0; i < work_out.length; i++){
    set += "<br>" + work_out[i][0].rnds + "x<br>";;
    for(var j = 0; j < work_out[i].length; j++){
      set += work_out[i][j].reps + " " +  work_out[i][j].name + "<br>";
    }
  }
    document.getElementById("set").innerHTML = set; 
}

