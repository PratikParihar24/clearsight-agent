
# 🕵️ Project CLEARSIGHT: Cipher Operative
**A GitAgent-spec AI Operative for Neutralizing Digital Dark Patterns.**

Project CLEARSIGHT is a specialized AI agent built for the Lyzr GitAgent Hackathon. It is designed to intercept psychological manipulation (dark patterns) in user interfaces and "neutralize" them into ethical, transparent alternatives.

---

## 🚀 Technical Architecture

CLEARSIGHT is built strictly according to the **GitAgent Specification**, featuring:

- **`agent.yaml`**  
  The manifest defining the 2026 Gemini 2.5 Flash flagship model.

- **`SOUL.md`**  
  A tense, cyberpunk operative persona named **Cipher**.

- **`RULES.md`**  
  Strict ethical constraints and probabilistic operational boundaries.

- **`skills/`**  
  Atomic capabilities for pattern analysis and mission generation.

- **`tools/`**  
  Native Node.js integrations for Geolocation and State Persistence.

---

## 🛠️ Custom Bridge Runtime

While fully compatible with the `gitagent` format, this repository includes a custom **`bridge.js`** runtime. This was developed to:

1. **Ensure Stability**  
   Bypasses environment-specific CLI bugs in beta SDKs.

2. **Model Resilience**  
   Uses the latest `@google/generative-ai` SDK to interface with **Gemini 2.5 Flash**, handling 2026 model deprecation standards.

3. **Local Tool Integration**  
   Seamlessly maps terminal commands to native JavaScript tool executions.

---

## 🏃 Quick Start

### 1. Prerequisites

- **Node.js v22+**
- A **Google AI Studio API Key (Gemini)**

---

### 2. Installation

```bash
# Clone the repository
git clone <your-repo-link>
cd clearsight-agent

# Install dependencies
npm install @google/generative-ai
````

---

### 3. Launch the Operative

Use the following command to wake up Cipher (Windows PowerShell):

```powershell
$env:GOOGLE_API_KEY="your_api_key_here"; node bridge.js
```

---

## 🎮 Operative Commands

Once online, you can interact with Cipher using natural language or system triggers:

* **`generate mission`**
  Triggers the `locate-node.js` tool to find a Corporate Node near your current coordinates (Ahmedabad).

* **Intercept Data**
  Paste any suspicious UI text (e.g., confirmshaming patterns) to receive a **Debrief Scorecard**.

---

## 📊 Project Structure

```text
clearsight-agent/
├── agent.yaml           # Agent Manifest
├── SOUL.md              # Identity & Persona
├── RULES.md             # Operational Constraints
├── bridge.js            # Custom GitAgent Runtime
├── operative_state.json # Persistent Progress Tracker
├── skills/              # Instructions for Analysis
└── tools/               # Node.js Reconnaissance Tools
```

---

## 👨‍💻 Developer

**Pratik Parihar**
📍 Ahmedabad Node — 23.0225° N, 72.5714° E

**Status:** Ghosting.
