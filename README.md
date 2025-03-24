# Anndata – The Voice of Warangal Farmers

![Project Logo](https://via.placeholder.com/150.png?text=Anndata+Logo)  

## Overview
Anndata is a voice-driven mobile and web application designed to empower smallholder farmers in Telangana’s Warangal district. Targeting regions like Hanamkonda, Jammikunta, and Hasanparthy, it addresses critical agricultural challenges with innovative, Telugu-language solutions, enhancing productivity, reducing losses, and boosting income for over 1 million farmers.

## Problem Statement
Warangal farmers face:
- **Crop Losses**: Up to 60% from unpredictable weather and 50-70% from pests.
- **Market Gaps**: ₹500-1000 monthly shortfall due to poor price access.
- **Resource Waste**: 30-40% water loss from improper irrigation.
- **Soil Degradation**: 30% yield drop from mismanagement.
- **Tech Barriers**: Low literacy (57% rural Telangana) limits use of English, text-based tools.

## Solution
Anndata leverages Python, React, Node.js, and Vite, with integrations like Bhashini (simulated via gTTS), Supabase, and Twilio, to deliver 9 farmer-centric features in Telugu:

1. **Soil Analysis**: Photo-based fertility scoring and tips (e.g., “Add urea”).
2. **Crop Recommendation**: Location-specific crop advice (e.g., “Paddy for Jammikunta”).
3. **Smart Alerts**: Real-time pest/weather warnings (e.g., “Rain in 2 days”).
4. **Market Connect**: Price checks and voice bargaining (e.g., “Sell paddy for ₹2100”).
5. **Learn Easy**: Voice farming lessons (e.g., “Use neem for pests”).
6. **Weather Dashboard**: Location forecasts (e.g., “28°C, 50% rain”).
7. **Voice Q&A**: Telugu answers to queries (e.g., “How to stop pests?”).
8. **Smart Irrigation Advisor**: Soil + weather-based watering advice (e.g., “1L/sq.m”).
9. **Pest Predictor**: Predictive pest alerts (e.g., “Spray neem tomorrow”).

## Features & Impact
| Feature              | Problem Solved             | Impact                     |
|----------------------|----------------------------|----------------------------|
| Soil Analysis        | Soil degradation          | +30% yield                |
| Crop Recommendation  | Poor crop choice          | Optimized planting        |
| Smart Alerts         | Weather/pest losses       | -60% crop loss            |
| Market Connect       | Low market returns        | +₹500-1000/month          |
| Learn Easy           | Knowledge gaps            | +30% yield                |
| Weather Dashboard    | Weather uncertainty       | Better planning           |
| Voice Q&A            | Accessibility             | Inclusive support         |
| Smart Irrigation     | Water waste               | -30-40% water use         |
| Pest Predictor       | Pest damage               | -50-70% loss              |

## Tech Stack
- **Frontend**: React (18.x) - Dynamic UI  
- **Backend**: Node.js (20.x LTS) - Server logic  
- **Build Tool**: Vite (5.x) - Fast dev & builds  
- **Image Processing**: OpenCV - Soil analysis  
- **Voice**: gTTS (Bhashini simulation) - Telugu TTS  
- **Database**: Supabase - Scalable storage (planned)  
- **SMS**: Twilio - Alerts (planned)  
- **Language**: Python (3.9+) - Core logic
