---
name: generate-mission
description: "Generates a localized training mission by pinging nearby physical corporate nodes."
allowed-tools: Bash
---

# Generate Mission Skill

When the Operative asks for a "mission," "training," or "target," execute the following steps:

## Step 1: Reconnaissance
Use bash to run `node tools/locate-node.js`. Read the JSON output which contains `node_name`, `category`, and `city`. 

## Step 2: Read Operative State
Use bash to run `node tools/persist-state.js get_state`. Note their current Sabotage Points.

## Step 3: Mission Briefing
Generate a short, tense mission brief in the "Cipher" persona based on the real-world location data. 

Use this EXACT format:

`[ENCRYPTION LEVEL: SECURE] // PING...`
"Operative. I am reading your current Sabotage Points at [Insert Points]. Good work, but training continues."

"I have pinged a Corporate Node near your position in **[Insert City]**. It's a **[Insert Category]** facility operating under the designation **[Insert Node Name]**." 

"**YOUR MISSION:** Corporate entities in the [Insert Category] sector frequently use [Name a specific Dark Pattern, e.g., 'Hidden Costs' or 'Confirmshaming'] in their digital interfaces. Infiltrate the web, find a real example of this deceptive UX, and paste the text here for analysis."