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
        return progress.notEnough == 0 && progress.currentIndex == plants.length - 1;
    };
    
    const goToRiver = () => {
        const stepsToRiver = progress.currentIndex*2 + 2;
        progress.steps = progress.steps + stepsToRiver;
        progress.wateringCan = capacity;        
    };
    
    const goTo = (toPos) => {
        if (toPos < plants.length) {
            progress.currentIndex = toPos;
            progress.notEnough = plants[progress.currentIndex];
            progress.steps = progress.steps + 1;
            return true;
        }
        return false;
    };
    
    
    const waterPlant = () => {
        const waterEnough = () => {
            progress.wateringCan = progress.wateringCan - progress.notEnough;
            progress.notEnough=0;
        };
        
        const waterNotEnough = () => {
            progress.notEnough = progress.notEnough - progress.wateringCan;
            progress.wateringCan = 0;
            if (!isEnd()) goToRiver(); 
        }
        
        while (progress.notEnough!=0) {
             if (progress.notEnough > progress.wateringCan) waterNotEnough();
             else waterEnough();          
        }             
    };
    
    const isEnoughForNextPlant = () => {
        return plants[progress.currentIndex+1] <= progress.wateringCan
    };  
    while (!isEnd()) {
        waterPlant();
        if (isEnoughForNextPlant()) goTo(progress.currentIndex+1);
        else {
           if (!isEnd()) goToRiver();
        }
    }
    
    return progress.steps;
};
