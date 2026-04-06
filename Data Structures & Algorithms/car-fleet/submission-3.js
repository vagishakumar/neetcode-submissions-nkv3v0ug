class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const carsReach = []

         const cars = [];
        
        // Create pairs and sort by position (descending)
        for (let i = 0; i < position.length; i++) {
            cars.push([position[i], speed[i]]);
        }

         cars.sort((a, b) => b[0] - a[0]);

        for(let i = 0; i < position.length; i+=1){
             const time = (target - cars[i][0]) / cars[i][1];
             const lastFleetTime = carsReach[carsReach.length - 1];
             
             if (carsReach.length === 0 || time > lastFleetTime) {
                carsReach.push(time);
            }
        }

        return carsReach.length;
    }
}