---
title: "Part 2 | API connection"
description: "Connection to API and data processing"
id: task2
---


Build a fully functional integration with an external API and handle real-world scenarios including errors, loading states, and data transformation - if applicable.   
 
**Focus on technical implementation. Visual design will be addressed in a future session.**

## Required deliverables

### 1. API integration

Implement API calls that:
- Send requests to your chosen API
- Include proper authentication headers (if your API requires a key)
- Use async/await or promises for asynchronous operations
- Handle response data correctly based on the API's structure


### 2. Data processing

Process the API response data by:
- Parsing the JSON response structure
- Extracting relevant information for display
- Transforming data into a format suitable for your UI components
- Handling edge cases (empty responses, unexpected data structures, missing fields)

Example scenarios to handle:
- API returns 100 results but you only want to display 10
- Dates or numbers need formatting for user readability

### 3. Error handling

Implement error handling for:
- Network failures (no internet connection, timeout)
- API errors (404, 500, rate limiting)
- Authentication failures (invalid or expired API key)

For each error type, provide:
- Clear user-facing error messages (no technical jargon)
- Console logging for debugging purposes

### 4. Git workflow

Push your complete work to a git repository with:
- Meaningful commit messages that describe what changed and why
- Logical commit organization - don't commit everything in one giant commit

Minimum commit structure:
1. Initial project setup
2. Basic UI components
3. API integration
4. Error handling implementation
5. Final refinements and documentation

## Technical requirements

Your implementation must include:
- A loading indicator visible during API requests
- Results display area that updates with API data
- Error message display that appears when requests fail


## Submission

Push your completed work to your git repository and share the repository URL. Ensure the repository is accessible and includes all necessary files to run the project.
