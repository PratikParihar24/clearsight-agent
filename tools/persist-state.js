#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// This acts as our zero-dependency database file
const STATE_FILE = path.join(__dirname, '..', 'operative_state.json');

// Initialize state if it doesn't exist
if (!fs.existsSync(STATE_FILE)) {
  fs.writeFileSync(STATE_FILE, JSON.stringify({ sabotagePoints: 0 }));
}

const state = JSON.parse(fs.readFileSync(STATE_FILE, 'utf8'));
const action = process.argv[2]; // e.g., 'add_points' or 'get_state'
const payload = process.argv[3]; // the amount of points

if (action === 'add_points') {
  state.sabotagePoints += parseInt(payload || 10);
  fs.writeFileSync(STATE_FILE, JSON.stringify(state));
  console.log(`[STATE UPDATED] Operative awarded points. Total Sabotage Points: ${state.sabotagePoints}`);
} else if (action === 'get_state') {
  console.log(JSON.stringify(state));
} else {
  console.log("Usage: node persist-state.js [add_points|get_state] [value]");
}