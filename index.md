---
layout: default
title: Jawad Tanana
---
<!DOCTYPE html>
<html>
<style>
#myProgress {
  border-radius: 10px;
  height: 20px;
  background-color: #ddd;
}

#myBar {
  width: 1.5%;
  border-radius: 50px;
  height: 20px;
  background-color: #78aa04;
}
.center {
  text-align: center;
 
}
.center2 {
  margin-left: 20%;
  margin-right: 20%;
 
}
</style>

<body class="center">

    <div class="center2" id="myProgress">
        <div id="myBar" onclick="goToBlog()"></div>
    
    </div>

<br>
<button onclick="move()">Click Me</button> 
<script>

function goToBlog () {
    window.location.href = 'https://www.google.com'
}
    
var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}
</script>

</body>
</html>
# [Coding Curriculum](/projects/coding_curriculum.html)

Highschool based project taught kids to code in scratch.

# [RFID Scanner](/projects/rfid_scanner.html)

Arduino based project creating simple card detection, cloning and dumping code.

# [Traffic Light System](/projects/traffic_light_system.html)

Arduino based project creating traffic light system in 9th grade.

# In Progress:

# [Object Detection](/projects/object_detection.html)

Raspberry Pi Project, using tensorflow and opencv.

# [Quadcopter UAV](/projects/quadcopter.html)

Creating a quadcopter using arduino.

# [Remote Door Lock](/projects/remote_door_lock.html)

3D printed own lock brackets and made it remote controlled.

# Volunteering:

# [Welfare Aid International](/projects/volunteer.html)
