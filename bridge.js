const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require('fs');
const { execSync } = require('child_process');

// 1. Load your Agent Definition
const soul = fs.readFileSync('./SOUL.md', 'utf8');
const rules = fs.readFileSync('./RULES.md', 'utf8');
const agentYaml = fs.readFileSync('./agent.yaml', 'utf8');

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ 
    model: "gemini-2.5-flash",
    systemInstruction: `${soul}\n\n${rules}\n\nManifest Data: ${agentYaml}`
});

async function startCipher() {
    console.log("\x1b[32m%s\x1b[0m", "--- CIPHER PROTOCOL: ONLINE ---");
    console.log("Local tools detected. Ready for intercept.\n");

    const chat = model.startChat();

    // SIMPLE CLI INTERFACE
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const ask = () => {
        readline.question('\x1b[36mOperative > \x1b[0m', async (input) => {
            if (input.toLowerCase() === 'generate mission') {
                const location = execSync('node tools/locate-node.js').toString();
                input = `SYSTEM UPDATE: Local Node found at ${location}. Generate a mission for me based on this location.`;
            }

            try {
                const result = await chat.sendMessage(input);
                const response = await result.response;
                console.log(`\n\x1b[35mCipher >\x1b[0m ${response.text()}\n`);
                
                // If Cipher awards points, save them
                if (response.text().includes("SABOTAGE POINTS")) {
                    execSync('node tools/persist-state.js add_points 10');
                }
            } catch (err) {
                console.error("Intercept failed:", err.message);
            }
            ask();
        });
    };
    ask();
}

startCipher();