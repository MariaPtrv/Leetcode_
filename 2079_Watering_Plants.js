//2079. Watering Plants
//https://leetcode.com/problems/watering-plants/2079. Watering Plants

/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
var wateringPlants = function(plants, capacity) {
    
    const progress = {
        currentIndex: -1,
        notEnough: 0,
        steps: 0, 
        wateringCan: capacity
    };
    
    const isEnd = () => {
        return progress.notEnough == 0 && progress.currentIndex == plants.length;
    };
    
    const goToRiver = () => {
        const stepsToRiver = progress.currentIndex*2 + 2;
        progress.steps = progress.steps + stepsToRiver;
        progress.wateringCan = capacity;
        console.log("=== goToRiver === " , progress);
        console.log("===================== steps +" ,stepsToRiver);
        
    };
    
    const goFromTo = (toPos) => {
        if (toPos < plants.length) {
            progress.currentIndex = toPos;
            progress.notEnough = plants[progress.currentIndex];
            progress.steps = progress.steps + 1;
            console.log("=== goFromTo === " , progress);
            console.log("===================== steps +" , 1);
            return true;
        }
        return false;
    };
    
    const waterPlant = () => {
          while (!isEnd()) {
              if (progress.notEnough > progress.wateringCan) {
                  progress.notEnough = progress.notEnough - progress.wateringCan;
                  progress.wateringCan = 0;
                  goToRiver(); 
                  console.log("=== waterPlant 1 === " , progress);
              }
              else {
                  progress.wateringCan = progress.wateringCan - progress.notEnough;
                  progress.notEnough=0;
                  goFromTo(progress.currentIndex+1)
                  console.log("=== waterPlant 2 === " , progress);
              }
             
          }
    };
    
      
    while (!isEnd()) {
        console.log("====== " , progress.steps);
        waterPlant();
        console.log("=== progress === " , progress);
    }
    
    return progress.steps;
};
