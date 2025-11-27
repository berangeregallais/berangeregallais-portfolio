---
title: "MapMyAI"
description: "Free tool that analyzes 500+ generative AI use cases and recommends the 3 most relevant AI agents for your business. Automatically generates detailed project plans. Exports the complete report in PDF format."
client: "Recommendation Agent - AI Consulting"
industry: "AI / Consulting"
projectDate: 2025-11-25
challenge: "Companies don't know where to start with generative AI. They waste time exploring use cases that don't fit their context."
solution: "An intelligent tool that recommends the 3 best AI use cases in a few minutes, based on industry, function, size, and company objectives. Automatic generation of detailed project plans."
deliverables: [
  "Intelligent recommendation system",
  "Automatic generation of detailed project plans",
  "Modern web interface with progress bar",
  "Export reports in Markdown and PDF",
  "Cost optimization with caching system",
  "Session saving for later retrieval"
]
technologies: ["Python", "FastAPI", "LangGraph", "Next.js", "Qdrant", "Claude"]
results: "Production-ready tool that generates qualified leads for AI consulting. Response time 30-40 seconds, calibrated recommendation system, comprehensive tests. Only free tool with detailed project plans."
image: "/portfolio/questionnaire-short.png"
demoUrl: "/en/portfolio/mapmyai"
category: ["ai-agent"]
tags: ["LangGraph", "RAG", "Recommendation Agent", "FastAPI", "Next.js"]
language: "en"
featured: true
---

## MapMyAI - AI Consulting Assistant

## 🎯 Context

**Problem identified:** Companies don't know where to start with generative AI. They waste time exploring use cases that don't fit their context.

**Solution:** An intelligent recommendation agent that recommends the 3 best AI use cases in 2 minutes, based on industry, function, size, and company objectives.

## 🚀 Features

### Personalized Recommendations

- **Intelligent matching:** The system analyzes your profile considering industry (40%), objectives (30%), size (20%), and prerequisites (10%)
- **Search in 500+ use cases:** Complete database of real use cases to find the best matches
- **Top 3 selection:** Automatic sorting and deduplication to offer only the most relevant options

### Project Plan Generation

- **Detailed plans:** Each recommendation includes steps, estimated duration, success criteria, risks, and benefits
- **Cost optimization:** Caching system to avoid regenerating the same plans and reduce costs
- **Simultaneous generation:** The 3 plans are generated in parallel for fast results

### Professional Export

- **Markdown format:** Structured downloadable report for internal documentation
- **PDF format:** PDF version ready to share with your team
- **Session saving:** You can retrieve your results later thanks to a unique identifier

### User Experience

- **Interactive progress bar:** Track progress in real-time with 8 visual steps
- **Multilingual EN/FR:** Automatic language detection and result translation
- **Dark mode:** Modern interface with light/dark theme

## 🏗️ How It Works

### 8-Step Process

The system follows an automated 8-step process:

1. **Profile validation:** Verification of provided information
2. **Database search:** Analysis of 500+ use cases to find the 20 most relevant
3. **Top 3 selection:** Sorting and ranking to identify the 3 best options
4. **Enrichment:** Addition of titles and summaries for each recommendation
5. **Plan generation:** Automatic creation of project plans (with cache for optimization)
6. **Translation:** Adaptation in French or English according to detected language
7. **Compilation:** Formatting of the final report
8. **Saving:** Storage for later retrieval

### Security and Performance

- **Abuse protection:** Limitation of the number of requests per user
- **Data validation:** Strict verification of all inputs
- **Cost optimization:** Caching system to avoid unnecessary regenerations
- **Traceability:** Tracking of all operations for debugging

### User Interface

- **Simple questionnaire:** 4 questions to understand your need
- **Progress bar:** Visual tracking of progress in real-time
- **Results display:** Clear presentation of recommendations and plans
- **Error handling:** Clear messages in case of problems

## 📊 Results

### Performance

- **Response time:** 30-40 seconds to generate the 3 complete recommendations with plans
- **Accuracy:** Recommendation system calibrated and tested on many use cases
- **Reliability:** Comprehensive tests to guarantee service quality
- **Coverage:** All aspects are tested (API, recommendations, generation, export)

### Business Impact

- **Qualified lead generation:** Companies using the tool are already interested in AI
- **Differentiation:** Only free tool that generates detailed project plans
- **Conversion:** Exportable reports encourage users to make contact to go further

## 🛠️ Challenges Resolved

### 1. Process Orchestration

**Challenge:** Coordinating 8 different steps that must follow correctly

**Solution:** Use of a workflow system that ensures each step runs in the correct order

### 2. Cost Optimization

**Challenge:** Reduce costs related to plan generation by AI

**Solution:** Intelligent caching system that avoids regenerating the same plans for similar profiles

### 3. Error Management

**Challenge:** Manage potential errors at each step of the process

**Solution:** Robust error management system with clear messages for the user, in French and English

### 4. User Experience During Wait

**Challenge:** 30-40 seconds of waiting can seem long without feedback

**Solution:** Interactive progress bar that shows progress in real-time with explanatory messages at each step

## 🔧 Technologies Used

**Backend:**

- Python for business logic
- FastAPI for the API
- LangGraph to orchestrate the workflow
- Claude Sonnet 4 for plan generation
- Qdrant for searching the use case database
- SQLite to save sessions

**Frontend:**

- Next.js for the web interface
- React with TypeScript for robustness
- Tailwind CSS for design
- Comprehensive tests to guarantee quality

**Infrastructure:**

- Database for sessions and cache
- Configuration adapted according to environment (development, staging, production)

## 💡 Learnings

### What Worked Well

- **Structured workflow:** Organization in clear steps facilitates development and debugging
- **Caching system:** Significant cost reduction by avoiding unnecessary regenerations
- **Progress bar:** User experience improved thanks to real-time visual feedback
- **Data validation:** Enhanced security and clearer code

### Future Improvements

- **Scalability:** Improvement to support more simultaneous users
- **Enhanced security:** Addition of additional security headers
- **Analytics:** Tracking of recommendation patterns to improve the algorithm
- **Continuous optimization:** A/B testing to refine the recommendation system

## 🔗 Links

- **Live demo:** [mapmyai.app](https://mapmyai.app)
- **Documentation:** Complete documentation available
- **Tests:** Comprehensive tests to guarantee quality

---

**Project duration:** 2 weeks  
**Role:** Complete development (backend + frontend + deployment)  
**Result:** Production-ready recommendation agent with AI POC plan generation
