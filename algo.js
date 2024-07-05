// 486. Predict the Winner



// You are given an integer array nums. Two players are playing a game with this array: player 1 and player 2.

// Player 1 and player 2 take turns, with player 1 starting first. Both players start the game with a score of 0. At each turn, the player takes one of the numbers from either end of the array (i.e., nums[0] or nums[nums.length - 1]) which reduces the size of the array by 1. The player adds the chosen number to their score. The game ends when there are no more elements in the array.

// Return true if Player 1 can win the game. If the scores of both players are equal, then player 1 is still the winner, and you should also return true. You may assume that both players are playing optimally.





/**
 * @param {number[]} nums
 * @return {boolean}
 */
var predictTheWinner = function(nums) {
    const helper = (left, right) => {
        // Base case: if there's only one number, the player takes it
        if (left === right) {
            return nums[left];
        }
        
        // Choose the leftmost number and the opponent plays optimally
        const chooseLeft = nums[left] - helper(left + 1, right);
        // Choose the rightmost number and the opponent plays optimally
        const chooseRight = nums[right] - helper(left, right - 1);
        
        // Return the maximum score difference the current player can achieve
        return Math.max(chooseLeft, chooseRight);
    };

    // The first player starts playing from the full range of the array
    return helper(0, nums.length - 1) >= 0;
};