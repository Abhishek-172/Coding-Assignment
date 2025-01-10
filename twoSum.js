function twoSum(nums, target) {
    //Checking the input values
    if (!Array.isArray(nums)) {
        throw new Error('Input should be an array');
    }
    
    if (nums.length < 2) {
        throw new Error('Array must contain at least 2 numbers');
    }
    
    if (typeof target !== 'number') {
        throw new Error('Target must be a number');
    }
    
    if (nums.some(num => typeof num !== 'number')) {
        throw new Error('All array elements must be numbers');
    }

    //Using a Hash Map
    const numMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        // Check if the complement exists in the map
        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }
        
        // Store current number and the index values
        numMap.set(nums[i], i);
    }
    
    throw new Error('Nothing exists');
}