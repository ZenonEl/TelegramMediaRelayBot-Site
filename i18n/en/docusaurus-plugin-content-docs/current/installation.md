# 🛠 Installation and Configuration

## 📋 System Requirements

### Core Components
| Component       | Version       | Notes                                      |
|-----------------|--------------|---------------------------------------------|
| .NET Runtime    | 8.0+         | Required for running the bot               |
| MySQL Server    | 8.0+         | Required for data storage                 |
| yt-dlp          | 2024.04.09+  | Must be in PATH or next to the executable  |

### Supported OS
- **Linux** (x64): I used Linux Mint for development and usage. Similar distributions should work as long as the core components are present.
- **Windows** 10/11 (x64) - Requires manual build and additional checks.
- **macOS** (x64/ARM) - Not tested.

## 🚀 Quick Start for Linux

### 1. Installing Dependencies
```bash
# For Ubuntu/Debian
sudo apt update && sudo apt install -y \
    git \
    mysql-server \
    python3-pip \
    libicu-dev

pip3 install yt-dlp

# Install .NET 8
wget https://packages.microsoft.com/config/ubuntu/22.04/packages-microsoft-prod.deb
sudo dpkg -i packages-microsoft-prod.deb
sudo apt update && sudo apt install -y dotnet-sdk-8.0
```

### 2. MySQL Setup

```SQL
CREATE DATABASE telegram_media;
CREATE USER 'media_bot'@'localhost' IDENTIFIED BY 'StrongPassword123!';
GRANT ALL PRIVILEGES ON telegram_media.* TO 'media_bot'@'localhost';
FLUSH PRIVILEGES;
```

### 3. Building the Project

```bash
git clone https://github.com/ZenonEl/TelegramMediaRelayBot.git
cd TelegramMediaRelayBot

# Build standalone version
dotnet publish -c Release -r linux-x64 --self-contained true -p:PublishSingleFile=true
```

4. Configuration
```bash
cp bin/Release/net8.0/linux-x64/publish/appsettings.json.example \
   bin/Release/net8.0/linux-x64/publish/appsettings.json

# Edit the config
nano bin/Release/net8.0/linux-x64/publish/appsettings.json
```
Example configuration:
```json
{
    "AppSettings": {
        "TelegramBotToken": "1234:abcd",
        "SqlConnectionString": "Server=IPAddress;Database=DatabaseName;User ID=UserName;Password=UserPassword;",
        "DatabaseName": "TelegramMediaRelayBot",
        "Language": "en-US",
        "Proxy": "socks5://127.0.0.1:9050",
        "UserUnMuteCheckInterval": 20
    },
    "Tor": {
        "Enabled": true,
        "TorControlPassword": "Password",
        "TorSocksHost": "127.0.0.1",
        "TorSocksPort": 9050,
        "TorControlPort": 9051,
        "TorChangingChainInterval": 5
    },
    "MessageDelaySettings": {
        "VideoGetDelay": 1000,
        "ContactSendDelay": 1000
    },
    "ConsoleOutputSettings": {
        "LogLevel": "Information",
        "ShowVideoDownloadProgress": false,
        "ShowVideoUploadProgress": false
    }
    "AccessPolicy": {
        "Enabled": true,

        "NewUsersPolicy": {
            "Enabled": true,

            "AllowNewUsers": true,
            "AllowRules": {
                "AllowAll": false,
                "WhitelistedReferrerIds": [],
                "BlacklistedReferrerIds": []
            }
        }
    }
}
```

### 5. Starting the System
```bash
# Run as a service
sudo cp bin/Release/net8.0/linux-x64/publish/TelegramMediaRelayBot /usr/local/bin/
sudo tee /etc/systemd/system/media-bot.service > /dev/null <<EOL
[Unit]
Description=Telegram Media Relay Bot
After=network.target mysql.service

[Service]
ExecStart=/usr/local/bin/TelegramMediaRelayBot
WorkingDirectory=/usr/local/bin/
Restart=always
User=media-bot

[Install]
WantedBy=multi-user.target
EOL

sudo systemctl daemon-reload
sudo systemctl enable --now media-bot
```