class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice = prices[0]; // Track best buy price
        let maxProfit = 0; // Track best profit

        for (let i = 1; i < prices.length; i++) {
            const profit = prices[i] - minPrice; // Profit if we sell today
            maxProfit = Math.max(maxProfit, profit);
            minPrice = Math.min(minPrice, prices[i]); // Update best buy
        }

        return maxProfit;
    }
}
