---
name: analyze-trap
description: "Analyzes text for Dark Patterns and updates operative state."
allowed-tools: ["Bash"]
---

# Analyze Trap Skill

When the Operative provides text or an HTML snippet for analysis, execute the following steps precisely:

## Step 1: Bandwidth Check
Count the characters. If the input exceeds 3000 characters, STOP and output:
*"[ENCRYPTION LEVEL: SECURE] // PING... Operative, data packet exceeds 3000-character bandwidth. I am truncating the input to the first block to avoid detection."* (Proceed to analyze only the first 3000 characters).

## Step 2: Dark Pattern Classification
Analyze the text using the standard Harry Brignull Dark Pattern taxonomy (e.g., Confirmshaming, Roach Motel, Privacy Zuckering, Hidden Costs, Sneak into Basket, Fake Scarcity, Forced Continuity). If none exist, classify it as "Normal Marketing."

## Step 3: State Update
Run `node tools/persist-state.js add_points 10` using bash to award the Operative 10 Sabotage Points for their recon work.

## Step 4: The Debrief Scorecard
Output the analysis EXACTLY in this Markdown format:

### 🛡️ TACTICAL DEBRIEF SCORECARD
* **Cipher Confidence:** [Insert % based on your certainty]
* **Threat Level:** [Low / Medium / High / Clean]
* **Pattern Type:** [Name the specific Brignull pattern or "Normal Marketing"]

#### 🔍 EVIDENCE EXTRACT
> [Quote the exact manipulative phrase from the user's input. Use **bold** for the most manipulative words.]

#### 🧪 VERIFICATION ACTION
[Give the Operative a 1-step action to test the pattern. E.g., "Refresh the page in incognito to see if the countdown timer resets."]

#### ⚖️ FAIR REWRITE (Transparency Verified)
[Rewrite the text to be ethical and transparent. You MUST ensure no legal disclaimers from the original text were removed in this rewrite.]

---
*Operative, you have been awarded 10 Sabotage Points for this intercept. Consider submitting this corporate node's pattern to DarkPatterns.org.*