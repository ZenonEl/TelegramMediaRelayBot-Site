# 🧅 Tor Control Management

**Tor Control** is a feature that allows you to use the Tor network to ensure anonymity and bypass restrictions when downloading media files. The bot supports Tor integration, which is particularly useful if you want to maintain privacy or bypass blocks on certain platforms.

---

### 🛠 Setting Up Tor

To enable and configure Tor, follow these steps:

1. **Install Tor**:
   - Ensure Tor is installed on your server. For Linux (Ubuntu/Debian), run:
     ```bash
     sudo apt update
     sudo apt install tor
     ```

2. **Configure Tor**:
   - Open the Tor configuration file:
     ```bash
     sudo nano /etc/tor/torrc
     ```
   - Add the following lines to enable Tor control:
     ```
     ControlPort 9051
     HashedControlPassword <your_hashed_password>
     CookieAuthentication 1
     ```
   - Save the file and restart Tor:
     ```bash
     sudo systemctl restart tor
     ```

3. **Configure the Bot**:
   - In the `appsettings.json` file, add or modify the `Tor` section:
     ```json
     "Tor": {
       "Enabled": true,
       "TorControlPassword": "your_password",
       "TorSocksHost": "127.0.0.1",
       "TorSocksPort": 9050,
       "TorControlPort": 9051,
       "TorChangingChainInterval": 5
     }
     ```

---

### 🔄 IP Address Rotation

The bot supports automatic IP address rotation via Tor. This is useful if you want to avoid blocks or maintain anonymity.

- **TorChangingChainInterval**: Specifies the interval (in minutes) at which the bot will change its IP address. For example, a value of `5` means the IP will change every 5 minutes.

---

### 🛡️ Example of Tor Control Usage

1. **Enabling Tor Control**:
   - Set `"Enabled": true` in the bot's configuration.
   - Ensure Tor is running on your server or PC.

2. **Testing the Setup**:
   - Send the bot a link to a video. If Tor is configured correctly, the bot will download the content through the Tor network.

3. **IP Rotation**:
   - If you want the bot to change IP addresses every 5 minutes, set `"TorChangingChainInterval": 5`.

---

### ⚠️ Important Notes

- **Performance**: Using Tor may slow down content downloading due to the nature of the network.
- **Security**: Ensure your Tor Control password is strong and stored securely.
- **Limitations**: Some platforms may block requests coming through Tor. In such cases, you can temporarily disable Tor.

---

### 💡 Tips

- If you do not want to use Tor Control, set `"Enabled": false` in the bot's configuration. You can still use Tor as a proxy through the "Proxy" parameter.
- You can also test Tor functionality using the `curl` command through Tor:
  ```bash
  torsocks curl https://check.torproject.org
  ```