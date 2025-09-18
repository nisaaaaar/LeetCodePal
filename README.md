# LeetCodePal 🔥 – Chrome Extension

LeetCodePal is a **floating AI chat widget** for LeetCode that helps you solve coding problems step by step.
It integrates with **Google Gemini API** to provide conversational hints, targeted feedback, and full solutions when needed—all inside the LeetCode interface. 🚀

## ✨ Features

* 🧑‍🏫 **Interactive Chat Widget** – A floating assistant directly on LeetCode pages.
* 🔑 **API Key Integration** – Securely stores your Gemini API key.
* 💬 **Context-Aware Help** – Reads the current problem statement and your code attempt.
* ⏳ **Recent Conversation Memory** – Maintains last 5 messages for better context.
* 📜 **Solution Reveal** – "Show Solution" button to get the complete solution when you’re ready.
* 📝 **Markdown & Code Support** – Proper formatting for hints, snippets, and full solutions.
* 🌙 **Minimize Widget** – Collapse into an icon when not in use.

## 📂 Project Structure

```
.
├── content.js   # Core logic – injects widget, handles chat, communicates with Gemini API
├── popup.js     # Extension popup – lets you save your Gemini API key
├── popup.html     # Extension popup – lets you save your Gemini API key
├── icons/       # Extension icons (robo-sleep.png, robo-active.png)
├── manifest.json # Chrome extension config
├── backgroud.js 
├── styles.css 
```

## 🔧 Installation

1. Clone this repo:

   ```bash
   git clone https://github.com/your-username/leetcodepal.git
   cd leetcodepal
   ```
2. Open **Chrome** and go to:
   `chrome://extensions/`
3. Enable **Developer Mode** (top-right).
4. Click **Load unpacked** and select the project folder.
5. Pin the extension to your Chrome toolbar.

## 🔑 Setup API Key

1. Get a Gemini API key from [Google AI Studio](https://aistudio.google.com/).
2. Click the extension icon → Paste your API key → Click **Save Key**.

## 🖥️ Usage

1. Open any **LeetCode problem**.
2. The **LeetCodePal 🔥 widget** will appear at the bottom-right.
3. Type your question (e.g., *“Is my add function correct?”*).
4. Get step-by-step guidance.
5. If needed, click **Show Solution** to reveal the full code.

## 📸 Screenshot

<img width="1911" height="857" alt="Screenshot 2025-09-18 220914" src="https://github.com/user-attachments/assets/f34a1e16-a5c1-4fb2-b483-f2907200b5ee" />
<img width="1133" height="804" alt="Screenshot 2025-09-18 220927" src="https://github.com/user-attachments/assets/178e98bd-dabf-4f0f-a1f3-7912380366ee" />
<img width="510" height="160" alt="Screenshot 2025-09-18 221159" src="https://github.com/user-attachments/assets/e164caf0-809d-4e7c-ab0a-cf224cdfec06" />

## 📝 License

MIT License © 2025 \ Nisar Ahmad
