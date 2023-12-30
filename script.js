// Helper functions
function round(number, digits) {
  const factor = 10 ** digits;
  return Math.round(number * factor) / factor;
}
function addPercentileEnding(number) {
  const mod10 = number % 10;
  const mod100 = number % 100;

  if (mod10 === 1 && mod100 !== 11) {
    return 'st';
  } else if (mod10 === 2 && mod100 !== 12) {
    return 'nd';
  } else if (mod10 === 3 && mod100 !== 13) {
    return 'rd';
  } else {
    return 'th';
  }
}

// Model Functions
function model23(GPA) {
  const bMarks = [75, 76, 81, 86, 91, 96, 97.723, 98.447, 99.162, 100.007, 100.872, 102.59, 102.82];
  const coefficients = [0.0006375729636987522, -5.724587470723463e-17, -0.010637572963698704, 1.0, -0.0002735496153151375, 0.0019127188910961987, -0.008724854072602562, 0.99, 0.0001226605201372083, -0.0021905253386308634, -0.010113886310275886, 0.96, -0.00021709246523369586, -0.00035061753657274273, -0.022819600686293896, 0.87, -0.0001342906592024229, -0.00360700451507818, -0.042607710944548516, 0.72, 0.0038325183874478377, -0.005621364403114522, -0.08874955553551203, 0.4, -0.010198677555034164, 0.014188923141603315, -0.07398765182909582, 0.25, 0.010255737554732466, -0.007962604507931023, -0.06947979713831706, 0.2, -0.008255487195717162, 0.014035952546970196, -0.06513735329040403, 0.15, 0.009700725042810464, -0.006891707494172735, -0.059100466220790224, 0.1, -0.002827505973973938, 0.01828167399192032, -0.04924814520023866, 0.05, -0.005374939423273562, 0.0037087082020586075, -0.011468668590982781, 0.005013];
  var result = null;
  
  if (GPA >= bMarks[0] && GPA <= bMarks[1]) {
    var base = GPA - bMarks[0]
    result = (coefficients[0] * Math.pow(base, 3)) + (coefficients[1] * Math.pow(base, 2)) + (coefficients[2] * (base)) + coefficients[3]
  }
  else if (GPA > bMarks[1] && GPA <= bMarks[2]) {
    var base = GPA - bMarks[1];
    result = (coefficients[4] * Math.pow(base, 3)) + (coefficients[5] * Math.pow(base, 2)) + (coefficients[6] * (base)) + coefficients[7]
  }
  else if (GPA > bMarks[2] && GPA <= bMarks[3]) {
    var base = GPA - bMarks[2];
    result = (coefficients[8] * Math.pow(base, 3)) + (coefficients[9] * Math.pow(base, 2)) + (coefficients[10] * (base)) + coefficients[11]
  }
  else if (GPA > bMarks[3] && GPA <= bMarks[4]) {
    var base = GPA - bMarks[3];
    result = (coefficients[12] * Math.pow(base, 3)) + (coefficients[13] * Math.pow(base, 2)) + (coefficients[14] * (base)) + coefficients[15]
  }
  else if (GPA > bMarks[4] && GPA <= bMarks[5]) {
    var base = GPA - bMarks[4];
    result = (coefficients[16] * Math.pow(base, 3)) + (coefficients[17] * Math.pow(base, 2)) + (coefficients[18] * (base)) + coefficients[19]
  }
  else if (GPA > bMarks[5] && GPA <= bMarks[6]) {
    var base = GPA - bMarks[5];
    result = (coefficients[20] * Math.pow(base, 3)) + (coefficients[21] * Math.pow(base, 2)) + (coefficients[22] * (base)) + coefficients[23]
  }
  else if (GPA > bMarks[6] && GPA <= bMarks[7]) {
    var base = GPA - bMarks[6];
    result = (coefficients[24] * Math.pow(base, 3)) + (coefficients[25] * Math.pow(base, 2)) + (coefficients[26] * (base)) + coefficients[27]
  }
  else if (GPA > bMarks[7] && GPA <= bMarks[8]) {
    var base = GPA - bMarks[7];
    result = (coefficients[28] * Math.pow(base, 3)) + (coefficients[29] * Math.pow(base, 2)) + (coefficients[30] * (base)) + coefficients[31]
  }
  else if (GPA > bMarks[8] && GPA <= bMarks[9]) {
    var base = GPA - bMarks[8];
    result = (coefficients[32] * Math.pow(base, 3)) + (coefficients[33] * Math.pow(base, 2)) + (coefficients[34] * (base)) + coefficients[35]
  }
  else if (GPA > bMarks[9] && GPA <= bMarks[10]) {
    var base = GPA - bMarks[9];
    result = (coefficients[36] * Math.pow(base, 3)) + (coefficients[37] * Math.pow(base, 2)) + (coefficients[38] * (base)) + coefficients[39]
  }
  else if (GPA > bMarks[10] && GPA <= bMarks[11]) {
    var base = GPA - bMarks[10];
    result = (coefficients[40] * Math.pow(base, 3)) + (coefficients[41] * Math.pow(base, 2)) + (coefficients[42] * (base)) + coefficients[43]
  }
  else if (GPA > bMarks[11] && GPA <= bMarks[12]) {
    var base = GPA - bMarks[11];
    result = (coefficients[44] * Math.pow(base, 3)) + (coefficients[45] * Math.pow(base, 2)) + (coefficients[46] * (base)) + coefficients[47]
  }
  else if (GPA > bMarks[12] && GPA <= 105) {
    result = 0.001
  }
  return result;
}
function model22(GPA) {
  const bMarks = [75, 81, 86, 91, 96, 96.882, 97.65, 98.021, 98.881, 100.234, 102.15, 102.64];
  const coefficients = [-0.00010209216954100093, -2.168404344971009e-19, -0.004658015229857306, 1.0, 0.0001148905919590193, -0.0018376590517380144, -0.01568396954028541, 0.95, -0.0002393893390998908, -0.00011430017235272293, -0.025443765660739102, 0.84, -0.0002773332355594593, -0.003705140258851076, -0.04454096781675814, 0.68, 0.023943814101611453, -0.007865138792242952, -0.10239236307222836, 0.33, -0.08025032918074772, 0.05549019332062137, -0.06038706497819841, 0.25, 0.22081926666076007, -0.12940656511182147, -0.11715483851384019, 0.2, -0.04897311894327534, 0.11636527868160153, -0.12199315577945181, 0.15, 0.0038575801378572866, -0.009985368192048736, -0.030506432758436494, 0.1, 0.0005747159770177001, 0.00567254958751395, -0.03634167633037206, 0.05, -0.006106134029531851, 0.008976017023411725, -0.008275022703838331, 0.005236];
  var result = null;
  
  if (GPA >= bMarks[0] && GPA <= bMarks[1]) {
    var base = GPA - bMarks[0]
    result = (coefficients[0] * Math.pow(base, 3)) + (coefficients[1] * Math.pow(base, 2)) + (coefficients[2] * (base)) + coefficients[3]
  }
  else if (GPA > bMarks[1] && GPA <= bMarks[2]) {
    var base = GPA - bMarks[1];
    result = (coefficients[4] * Math.pow(base, 3)) + (coefficients[5] * Math.pow(base, 2)) + (coefficients[6] * (base)) + coefficients[7]
  }
  else if (GPA > bMarks[2] && GPA <= bMarks[3]) {
    var base = GPA - bMarks[2];
    result = (coefficients[8] * Math.pow(base, 3)) + (coefficients[9] * Math.pow(base, 2)) + (coefficients[10] * (base)) + coefficients[11]
  }
  else if (GPA > bMarks[3] && GPA <= bMarks[4]) {
    var base = GPA - bMarks[3];
    result = (coefficients[12] * Math.pow(base, 3)) + (coefficients[13] * Math.pow(base, 2)) + (coefficients[14] * (base)) + coefficients[15]
  }
  else if (GPA > bMarks[4] && GPA <= bMarks[5]) {
    var base = GPA - bMarks[4];
    result = (coefficients[16] * Math.pow(base, 3)) + (coefficients[17] * Math.pow(base, 2)) + (coefficients[18] * (base)) + coefficients[19]
  }
  else if (GPA > bMarks[5] && GPA <= bMarks[6]) {
    var base = GPA - bMarks[5];
    result = (coefficients[20] * Math.pow(base, 3)) + (coefficients[21] * Math.pow(base, 2)) + (coefficients[22] * (base)) + coefficients[23]
  }
  else if (GPA > bMarks[6] && GPA <= bMarks[7]) {
    var base = GPA - bMarks[6];
    result = (coefficients[24] * Math.pow(base, 3)) + (coefficients[25] * Math.pow(base, 2)) + (coefficients[26] * (base)) + coefficients[27]
  }
  else if (GPA > bMarks[7] && GPA <= bMarks[8]) {
    var base = GPA - bMarks[7];
    result = (coefficients[28] * Math.pow(base, 3)) + (coefficients[29] * Math.pow(base, 2)) + (coefficients[30] * (base)) + coefficients[31]
  }
  else if (GPA > bMarks[8] && GPA <= bMarks[9]) {
    var base = GPA - bMarks[8];
    result = (coefficients[32] * Math.pow(base, 3)) + (coefficients[33] * Math.pow(base, 2)) + (coefficients[34] * (base)) + coefficients[35]
  }
  else if (GPA > bMarks[9] && GPA <= bMarks[10]) {
    var base = GPA - bMarks[9];
    result = (coefficients[36] * Math.pow(base, 3)) + (coefficients[37] * Math.pow(base, 2)) + (coefficients[38] * (base)) + coefficients[39]
  } 
  else if (GPA > bMarks[10] && GPA <= bMarks[11]) {
    var base = GPA - bMarks[10];
    result = (coefficients[40] * Math.pow(base, 3)) + (coefficients[41] * Math.pow(base, 2)) + (coefficients[42] * (base)) + coefficients[43]
  } 
  else if (GPA > bMarks[11] && GPA <= 105) {
    result = 0.001
  }
  return result;
}
function chooseAppropriateModel(GPA) {
  let model2023 = document.getElementById("btn23").checked;
  if (model2023) {
    return model23(GPA);
  } else {
    return model22(GPA);
  } 
}

// Site functions
function updateWarningText() {
  let model2023 = document.getElementById("btn23").checked;
  let warningText = document.getElementById("warningText");
  if (model2023) {
    document.getElementById("warningContainer").style.display = "none";
    warningText.innerHTML = '<span class="warningIconContainer"><img id="warningIcon" src="warning-icon-saturated.png"></span> Note that the accuracy of the 2023 model significantly declines for GPAs below 94.';
  } else {
    document.getElementById("warningContainer").style.display = "initial";
    warningText.innerHTML = '<span class="warningIconContainer"><img id="warningIcon" src="warning-icon-saturated.png"></span> Note that the 2022 model is far less realistic than the 2023 model for high GPAs (95+).';
  }
}
function calculateRanks() {
  let ranksContainer = document.getElementById("ranksContainer");
  let pRank = document.getElementById("percentileRank");
  let cRank = document.getElementById("classRank");
  let tRank = document.getElementById("topRank");
  let enteredGrade = document.getElementById("enteredGrade");
  if (enteredGrade.checkValidity() && enteredGrade.value !== "") {
    let result1 = Math.round((1-(chooseAppropriateModel(enteredGrade.value)))*100)
    let result2 = Math.ceil(chooseAppropriateModel(enteredGrade.value)*400)
    if(result2 === 0) {result2 = 1;} if(result1 === 100) {result1 = 99;} 
    pRank.innerHTML = result1 + "<sup>"+addPercentileEnding(result1)+"</sup>";
    cRank.innerHTML = result2 + "<sup>"+addPercentileEnding(result2)+"</sup>";
    tRank.innerHTML = "top " + "<span style='padding: 6px; border: 1px solid #C3C3C3; border-radius: 6px; font-weight: bold;'>"+round((chooseAppropriateModel(enteredGrade.value)*100),2)+"%</span> of students."
    ranksContainer.style.display = "initial";
  } else {
    enteredGrade.reportValidity();
  }
}
function styleRankings() {
  return 0;
}
