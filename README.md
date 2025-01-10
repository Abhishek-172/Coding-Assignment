# Coding Solutions Documentation

This repository contains solutions for three different programming challenges:
1. Two Sum Problem (JavaScript)
2. MongoDB Sales Aggregation
3. React Todo Application

## 1. Two Sum Problem (twosum.js)

### Description
A JavaScript function that finds two numbers in an array that add up to a target sum.

### Features
- O(n) time complexity using HashMap approach
- Comprehensive error handling

### Usage
```javascript
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target); // returns [0, 1]
```

### Test Cases
```javascript
// Basic case
twoSum([2, 7, 11, 15], 9)  // [0, 1]

// Different order
twoSum([3, 2, 4], 6)       // [1, 2]

// Negative numbers
twoSum([-1, -2, -3, -4, -5], -8)  // [2, 4]
```

### Running Tests
1. Copy the code to your JavaScript environment
2. Execute the code
3. Check console output for test results

## 2. MongoDB Sales Aggregation

### Description
MongoDB aggregation pipeline for analyzing store sales data.

### Features
- Monthly revenue calculation
- Average price computation
- Store-wise grouping
- Date formatting
- Result sorting

### Pipeline Stages
1. Unwind items array
2. Project and calculate revenues
3. Group by store and month
4. Format output
5. Sort results

### Sample Data Structure
```javascript
{
    "date": ISODate("2024-06-15T00:00:00Z"),
    "store": "Store A",
    "items": [
        {
            "name": "item1",
            "quantity": 5,
            "price": 10.0
        }
    ]
}
```

### Usage
```javascript
// Run aggregation
db.sales.aggregate([
    { $unwind: "$items" },
    // ... rest of the pipeline
]);
```

### Testing Steps
1. Clear existing data: `db.sales.drop()`
2. Insert test data
3. Run aggregation pipeline
4. Verify results

## 3. React Todo Application

### Description
A dynamic Todo List application built with React and integration with dummyJSON API.

### Features
- Add new tasks
- Mark tasks as complete/incomplete
- Delete tasks
- Filter tasks (All/Completed/Pending)
- Local storage persistence
- API integration

### Prerequisites
- Node.js and npm installed
- React environment setup
- Internet connection for API calls

### Installation
```bash
# Clone repository
git clone 

# Install dependencies
npm install

# Start development server
npm start
```

### Usage
```javascript
// Import component
import TodoApp from './components/TodoApp';

// Use in your React application
function App() {
  return (
    
      
    
  );
}
```

### API Integration
The app uses dummyJSON API:
- GET `/todos` - Fetch todos
- POST `/todos/add` - Add new todo

### Local Storage
- Todos are persisted in browser's localStorage
- Data survives page refreshes
- Automatically syncs with API data

### Testing
1. Basic Operations
   - Add new todos
   - Toggle completion
   - Delete todos

2. Filter Testing
   - Test "All" filter
   - Test "Completed" filter
   - Test "Pending" filter

3. Persistence Testing
   - Add todos
   - Refresh page
   - Verify data persistence

### Error Handling
- API connection errors
- Invalid input validation
- Loading states
- Empty state handling

## Contribution
Written and Maintained by - Abhishek Pandey
MIT License - feel free to use this code for your own projects.
