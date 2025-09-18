const apiKeyInput = document.getElementById("api-key");
const saveKeyBtn = document.getElementById("save-key");

let apiKey = "";

// --- Load API key ---
chrome.storage.sync.get("geminiKey", (data) => {
  if (data.geminiKey) {
    apiKey = data.geminiKey;
    apiKeyInput.value = apiKey;
  }
});

// --- Save API key ---
saveKeyBtn.addEventListener("click", () => {
  apiKey = apiKeyInput.value.trim();
  if (apiKey) {
    chrome.storage.sync.set({ geminiKey: apiKey }, () => {
        document.getElementById("save-key").innerText = "Saved!";
        setTimeout(() => {
            document.getElementById("save-key").innerText = "Save Key";
        }, 2000);
    //   alert("API Key Saved!");
    });
  }
});