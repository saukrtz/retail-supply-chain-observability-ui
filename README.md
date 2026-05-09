# SupplyChain360 | Retail Monitoring Dashboard
A premium, production-grade React monitoring UI designed for real-time retail supply chain observability.

## 🌟 Features
- **Real-Time KPI Tracking:** Monitor Inventory, Shipments, and Delivery SLAs at a glance.
- **AI-Driven Observability:** Integrated patterns for alert management and pipeline health.
- **Premium UI/UX:** Built with Tailwind CSS, featuring glassmorphism, responsive grids, and sleek dark mode.
- **Modular Architecture:** React components designed for scalability and reusability.

## 🏗 Architectural Blueprint
### Data Engineering Context
This dashboard is designed to sit atop a **Medallion Architecture** data pipeline:
- **Ingestion:** Kafka / AWS Kinesis for real-time telemetry.
- **Processing:** Spark / Snowflake for Silver (Curated) and Gold (Aggregate) layer processing.
- **Serving:** GraphQL or REST API (FastAPI) backed by a low-latency cache (Redis).

### Technology Decisions
- **React 18:** Modern UI library for declarative component design.
- **Vite:** Next-generation frontend tooling for optimized developer experience.
- **Recharts:** High-performance charting library for complex data visualization.
- **Lucide React:** Consistent, lightweight iconography.

## 🚀 Getting Started
Since the environment has terminal restrictions, follow these steps to run the dashboard locally:

1. **Clone the project** (or navigate to the `lab5` folder).
2. **Install Dependencies:**
   ```bash
   npm install
   ```
3. **Run Development Server:**
   ```bash
   npm run dev
   ```
4. **Build for Production:**
   ```bash
   npm run build
   ```

## 🌐 Deployment
To deploy to Vercel:
1. Connect your GitHub repository to Vercel.
2. Set the root directory to `gen_ai/day10/lab5`.
3. Use the default Vite build settings.

## 🛠 Project Archive
Comprehensive engineering logs and architectural decisions are documented in `archive/archive.md`.

---
**Repository Suggestion:** `retail-supply-chain-observability-ui`
**Author:** Antigravity AI (Gen AI Data Engineering Suite)
