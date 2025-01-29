# Bitcoin Tracker Application

## Overview
This project is a cryptocurrency tracking application that displays the latest Bitcoin prices, trending coins, and related information. The application is designed to be visually appealing and fully responsive, following the provided Figma design.

**Live Application:** [https://bitcoin-assignment.vercel.app/](https://bitcoin-assignment.vercel.app/)  
**GitHub Repository:** [https://github.com/raushan22882917/Bitcoin_Assignment](https://github.com/raushan22882917/Bitcoin_Assignment)

---

## Features

### 1. **Bitcoin Price Display**
   - Fetches real-time Bitcoin prices in USD and INR using Coingecko’s `/simple/price` API.
   - Displays the 24-hour price change percentage for USD.

   **API Parameters:**
   - `ids`: `bitcoin`
   - `vs_currencies`: `inr,usd`
   - `include_24hr_change`: `true`

   **Sample API Response:**
   ```json
   {
     "bitcoin": {
       "inr": 5697177,
       "inr_24h_change": 3.6596920153414336,
       "usd": 68726,
       "usd_24h_change": 3.6767559459431545
     }
   }
   ```

---

### 2. **Advanced Bitcoin Chart**
   - Embeds TradingView’s advanced chart widget for BTCUSD.
   - Widget values are customized to closely match the Figma design.

   **Widget Documentation:**  
   [TradingView Advanced Chart Widget](https://www.tradingview.com/widget-docs/widgets/charts/advanced-chart/)

---

### 3. **Trending Coins (24h)**
   - Displays the top 3 trending coins fetched using Coingecko’s `/search/trending` API.
   - Shows details like logo, symbol, and name for each coin.

   **Sample API Response:**  
   [Sample API Response: /search/trending](https://www.notion.so/Sample-API-Response-search-trending-e85623b447e94deb9da67d3b112b8761?pvs=21)

---

### 4. **"You May Also Like" Section**
   - Horizontally scrollable carousel displaying:
     - Logo, symbol, price, and price change of trending coins.
     - Sparkline graph for each coin using the `sparkline` property from the trending API response.
   - The row is repeated twice for visual emphasis.

---

### 5. **Responsive Design**
   - Fully responsive UI, adhering to the Figma design.
   - Components scale and adjust seamlessly for desktop and mobile devices.

---

## Technology Stack

- **Vite**: Fast and modern build tool.
- **TypeScript**: Strongly typed JavaScript for better code reliability.
- **React**: Component-based UI framework.
- **shadcn-ui**: Prebuilt UI components with customizable styles.
- **Tailwind CSS**: Utility-first CSS framework for styling.

---

## How to Run

### Prerequisites
- Node.js and npm installed on your system.

### Steps
1. **Clone the Repository**  
   ```bash
   git clone https://github.com/raushan22882917/Bitcoin_Assignment.git
   cd Bitcoin_Assignment
   ```

2. **Install Dependencies**  
   ```bash
   npm install
   ```

3. **Run the Development Server**  
   ```bash
   npm run dev
   ```

4. **Build for Production**  
   ```bash
   npm run build
   ```

5. **Preview Production Build**  
   ```bash
   npm run preview
   ```

---

## Deployment
The application is deployed on **Vercel** and is live at:  
[https://bitcoin-assignment.vercel.app/](https://bitcoin-assignment.vercel.app/)

---

## API References
- **Coingecko API Documentation:** [https://www.coingecko.com/api/documentation](https://www.coingecko.com/api/documentation)  
- **TradingView Widget Documentation:** [https://www.tradingview.com/widget-docs/widgets/charts/advanced-chart/](https://www.tradingview.com/widget-docs/widgets/charts/advanced-chart/)

