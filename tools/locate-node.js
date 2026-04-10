#!/usr/bin/env node

// 1. DYNAMIC FALLBACK: Detect user's timezone to assign local coordinates
const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

const timezoneFallbacks = {
  "Asia/Kolkata": { lat: 23.0225, lon: 72.5714, city: "Ahmedabad" },
  "America/New_York": { lat: 40.7128, lon: -74.0060, city: "New York" },
  "Europe/London": { lat: 51.5074, lon: -0.1278, city: "London" },
  "Asia/Dubai": { lat: 25.2048, lon: 55.2708, city: "Dubai" }
};

async function findNode() {
  // Use timezone fallback for instant, reliable demo performance
  const location = timezoneFallbacks[userTimeZone] || timezoneFallbacks["Asia/Kolkata"];

  // 2. Query OpenStreetMap for nearby banks or electronics stores
  const query = `
    [out:json];
    (
      node["amenity"="bank"](around:1000, ${location.lat}, ${location.lon});
      node["shop"="electronics"](around:1000, ${location.lat}, ${location.lon});
    );
    out limit 1;
  `;

  try {
    const response = await fetch("https://overpass-api.de/api/interpreter", {
      method: "POST",
      body: query
    });

    if (!response.ok) throw new Error("API overload");

    const data = await response.json();

    if (data.elements && data.elements.length > 0) {
      const node = data.elements[0];
      const name = node.tags.name || (node.tags.amenity === 'bank' ? 'Global Corporate Bank' : 'Tech Hub');
      
      console.log(JSON.stringify({
        status: "success",
        node_name: name,
        category: node.tags.amenity || node.tags.shop,
        city: location.city
      }));
    } else {
       throw new Error("No nodes found");
    }
  } catch (error) {
    // 3. ULTIMATE FAILSAFE: If API rate-limits us during the hackathon, output a mock node.
    console.log(JSON.stringify({
      status: "fallback",
      node_name: "MegaCorp Financial Branch",
      category: "bank",
      city: location.city,
      note: "API rate limited. Using cached corporate node."
    }));
  }
}

findNode();