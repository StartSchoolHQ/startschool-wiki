---
title: "Part 1 | Concept"
description: "Collaborative coding and project planning"
id: task1
---

# Session 1: Project planning & setup
---

## Session Goals

By the end of this session, your team will have:
1. Chosen a web application concept
2. Selected an appropriate external API
3. Created a GitHub repository with initial structure
4. Documented your project concept 
5. Planned what data from the API will be displayed on the frontend

---

## Timeline

### Part 1: ideation & API selection 

- Brainstorm 3-5 project ideas
- Research APIs for each idea
- Check API documentation quality
- Verify no authentication issues or strict rate limits
- Choose ONE project concept
- Finalize API selection
- Define core features (MVP - Minimum Viable Product)

### Part 2: Concept Documentation

- What problem does your app solve?
- What data will you retrieve from the API?
- List 3-5 core features

**GitHub Setup**
- Create repository
- Add team members as collaborators
- Set up initial project structure
- Create README with project concept

---

## Mandatory Deliverables

### 1. Project Concept Document

Create a `CONCEPT.md` file in your repository with:

```markdown
# [Your Project Name]

## Team Members
- Member 1 - [Name]
- Member 2 - [Name]
- Member 3 - [Name]

## Project Description
[2-3 sentences describing what your app does]

## Problem Statement
[What problem are you solving? Who is this for?]

## API Selection
**API Name:** [e.g., TMDB API]  
**API Documentation:** [URL]  
**Why this API?** [1-2 sentences]

### 2. GitHub Repository

**Required structure for now:**

project-name/
└── README.md

**README.md should include:**
- Project title
- Brief description
- Team members
- API being used
```

---

## Finding Your API

**Primary Resource:**
Browse the comprehensive list of public **[APIs](https://github.com/public-apis/public-apis)**

This repository contains hundreds of free APIs organized by category.

### What to Look For:

**API Requirements Checklist:**
- [ ] **HTTPS** - Must support HTTPS
- [ ] **Auth** - Preferably "No" or "apiKey" (avoid OAuth for simplicity)
- [ ] **CORS** - Check if "Yes" 
- [ ] **Documentation** - Must have clear, accessible documentation
- [ ] **Rate Limits** - Check if free tier is sufficient
- [ ] **Data Quality** - Returns useful, structured data

### Testing APIs from the List:

1. Find an API in the GitHub list
2. Click on the API documentation link
3. Read the documentation
4. Test an endpoint in your browser or [Postman](https://www.postman.com/)/[Bruno](https://www.usebruno.com/)
5. Verify it returns the data you need

---

## Project Ideas Examples

### 1. Movie Discovery App
**API:** TMDB  
**Features:** Search movies, view details, filter by genre, see trailers  
**Data shown:** Title, poster, rating, release date, overview, cast

### 2. Recipe Finder
**API:** Spoonacular or TheMealDB  
**Features:** Search recipes, filter by ingredients, view instructions  
**Data shown:** Recipe name, image, ingredients, steps, nutrition

### 3. Crypto Tracker
**API:** CoinGecko  
**Features:** Search cryptocurrencies, view prices, see price charts  
**Data shown:** Name, symbol, price, 24h change, market cap, chart

### 4. Game Library
**API:** RAWG  
**Features:** Search games, filter by platform, view details  
**Data shown:** Game title, cover art, rating, platforms, release date

### 5. Book Search
**API:** Google Books or Open Library  
**Features:** Search books, view details, see previews  
**Data shown:** Title, author, cover, description, publication date

### 6. Weather Dashboard
**API:** OpenWeather  
**Features:** Search cities, view current weather, 5-day forecast  
**Data shown:** Temperature, conditions, humidity, wind speed, forecast

---

## API Testing Guide

### Using Browser (Simple GET requests)

```
https://api.example.com/endpoint?param=value
```

Example:
```
https://pokeapi.co/api/v2/pokemon/pikachu
```

### Using curl (Command Line)

```bash
curl "https://api.example.com/endpoint?param=value"
```

With API key:
```bash
curl "https://api.example.com/endpoint?api_key=YOUR_KEY"
```

### Using Postman or Bruno (Recommended)

1. Open [Postman](https://www.postman.com/) or [Bruno](https://www.usebruno.com/) (free)
2. Create new GET request
3. Enter API URL
4. Add parameters or headers
5. Send request
6. View and save response

---

## Quality Checklist

Before ending Session 1, verify:

- [ ] GitHub repository created
- [ ] All team members added as collaborators
- [ ] CONCEPT.md file completed with all sections
- [ ] README.md with project basics
- [ ] API tested and working

---

## Tips for Success

**Choose an API with good documentation** - You'll thank yourself later  
**Test the API thoroughly** - Make sure it returns the data you need  
**Keep it simple** - MVP first, fancy features later  
**Think about the user** - What would make this useful or fun?  
**Document everything** - Your future self will appreciate it  

---

## Important Notes

### API Keys & Security
- **Never commit API keys to GitHub**
- Create a `.env.example` file (without real keys)
- Add `.env` to `.gitignore`
- Document where team members should get keys

### Rate Limits
- Check API rate limits before choosing
- Free tiers usually sufficient for development
- Plan your API calls efficiently


---

## Next Session Preview

**Frontend Development**

You will build:
1. Fully working search bar functionality
2. API integration with proper error handling
3. Display of results in a clean UI
4. Loading states and user feedback
5. Responsive design (mobile & desktop)

**Come prepared with:**
- Your CONCEPT.md document
- API key (if required)
- Development environment ready (Node.js, VS Code)


---

## Questions to Consider

Before ending the session, discuss:

1. What makes your app unique or useful?
2. What will users search for?
3. What information is most important to display?
4. How will users interact with the results?

---
