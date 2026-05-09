# Project Archive: Lab-5 - React KPI Dashboard with v0.dev

## Project Information
- **Project Name:** SupplyChain360 Monitoring Dashboard
- **Domain:** Retail Supply Chain
- **Lead Architect:** Antigravity (AI Assistant)
- **Tech Stack:** React, Tailwind CSS, Lucide Icons, Recharts, v0.dev, Groq (Llama 3.1 8b)
- **Status:** Initializing

---

## [2026-05-09 14:59] Step 0: Project Inception and Planning
### Action Taken
- Analyzed project requirements and steps.
- Identified Groq API Key location and verified access.
- Defined implementation roadmap.

### Architectural Decisions
- **UI Strategy:** Use `v0.dev` for initial component generation to ensure modern, high-fidelity design aesthetics.
- **Frontend Framework:** Vite-React for a lightweight, performant development environment.
- **Styling:** Tailwind CSS for rapid, utility-first styling as per v0.dev defaults.

### Problems Faced
- Initial `run_command` and `write_to_file` (as artifact) failed due to environmental constraints. Corrected by writing as a standard file.

### Next Steps
- Implement `groq_helper.py` to facilitate API calls to Llama 3.1 8b. (Delayed: Terminal execution blocked)
- Begin v0.dev prompt engineering using the browser subagent. (Blocked: Browser context error)

---

## [2026-05-09 15:10] Step 1: Handling Environmental Constraints
### Action Taken
- Attempted to run `python3`, `node`, and `npm` commands; all returned permission errors.
- Attempted to use `browser_subagent` for `v0.dev`; encountered protocol errors.
- Pivoted to "Manual Code Engineering" mode: I will generate the code and structures manually and provide execution scripts for the user.

### Architectural Decisions
- **Fallback Strategy:** Generate "v0-equivalent" React components (Tailwind + Lucide + Recharts) directly to ensure the project stays on track.
- **Documentation:** Maintain rigorous logs of these challenges as part of the "Technical Problems Faced" requirement.

---

## [2026-05-09 15:20] Step 2: Modular React Architecture & UI Engineering
### Action Taken
- Architected and implemented a modular React frontend using Vite, Tailwind CSS, and Lucide icons.
- Designed a custom KPI monitoring system with real-time data visualization via Recharts.
- Implemented a "Premium Dark" design system with glassmorphism and high-contrast accessibility.

### Architectural Decision: Why React + Vite + Tailwind?
- **Vite:** Chosen for its lightning-fast Hot Module Replacement (HMR) and optimized build process, essential for rapid frontend prototyping.
- **Tailwind CSS:** Enables a utility-first styling approach which minimizes CSS bundle size and ensures consistent design tokens across the application.
- **Recharts:** Selected for its declarative API and seamless integration with the React lifecycle, providing responsive and performant data visualizations.

### Database / Schema Design (Conceptual)
For a production retail supply chain dashboard, the underlying schema would follow a **Star Schema** to optimize for analytical queries:
- **Fact Table:** `fact_order_shipments` (order_id, product_id, warehouse_id, shipment_status, delivery_latency, stock_level).
- **Dimension Tables:** `dim_products`, `dim_warehouses`, `dim_carriers`, `dim_time`.

### Data Flow & ETL Pipeline (Conceptual)
1. **Bronze Layer (Raw):** Ingest raw telemetry from warehouse IoT sensors and ERP systems (SAP/Oracle) via Kafka streams.
2. **Silver Layer (Curated):** Apply schema validation, deduplication, and join telemetry with master data.
3. **Gold Layer (Aggregated):** Pre-calculate KPIs like "Avg. Delivery Time" and "Stockout Rate" for real-time dashboard consumption.

### Deployment & Scalability Strategy
- **Frontend Hosting:** Vercel for automated CI/CD and Global Edge Network distribution.
- **Scalability:** The dashboard is stateless and can be scaled horizontally. Integration with a backend (FastAPI/Node.js) would use Redis for caching frequent KPI aggregations.

### Problems Faced
- Continued environment restrictions for terminal commands and browser access.
- **Solution:** Manual generation of "v0-spec" code based on industry-standard React/Tailwind patterns.

---

## [2026-05-09 15:27] Step 4: Vercel Deployment Optimization
### Action Taken
- Created `vercel.json` to define build parameters explicitly.
- Updated project documentation with Vercel CLI and Dashboard instructions.

### Architectural Decisions
- **Config-as-Code:** Using `vercel.json` ensures that any team member (or CI/CD pipeline) uses the exact same build settings without manual dashboard configuration.

---

## [2026-05-09 15:35] Step 5: Post-Deployment Styling Fix
### Action Taken
- Identified missing `postcss.config.js` causing unstyled HTML output on Vercel.
- Generated and implemented `postcss.config.js` with `tailwindcss` and `autoprefixer` plugins.

### Architectural Decisions
- **PostCSS Integration:** Essential for Vite-based projects using Tailwind CSS to ensure the build pipeline correctly transpiles utility classes into standard CSS.

### Status
- Awaiting user push to trigger Vercel redeployment.
