# 🛠 Установка и настройка

## 📋 Системные требования

### Основные компоненты
| Компонент       | Версия       | Примечание                                  |
|-----------------|--------------|---------------------------------------------|
| .NET Runtime    | 8.0+         | Обязательно для запуска                    |
| MySQL Server    | 8.0+         | Требуется для хранения данных              |
| yt-dlp          | 2024.04.09+  | Должен быть в PATH или рядом с исполняемым файлом |

### Поддерживаемые ОС
- **Linux** (x64): Для разработки и использования я использовал Linux Mint. Поэтому похожие дистрибутивы должны также работать, главное наличие основных компонентов в вашей системе
- **Windows** 10/11 (x64) - требуется ручная сборка а также дополнительная проверка
- **macOS** (x64/ARM) - не проверялась

## 🚀 Быстрый старт для Linux

### 1. Установка зависимостей
```bash
# Для Ubuntu/Debian
sudo apt update && sudo apt install -y \
    git \
    mysql-server \
    python3-pip \
    libicu-dev

pip3 install yt-dlp

# Установка .NET 8
wget https://packages.microsoft.com/config/ubuntu/22.04/packages-microsoft-prod.deb
sudo dpkg -i packages-microsoft-prod.deb
sudo apt update && sudo apt install -y dotnet-sdk-8.0
```
### 2. Настройка MySQL

```SQL
CREATE DATABASE telegram_media;
CREATE USER 'media_bot'@'localhost' IDENTIFIED BY 'StrongPassword123!';
GRANT ALL PRIVILEGES ON telegram_media.* TO 'media_bot'@'localhost';
FLUSH PRIVILEGES;
```

### 3. Сборка проекта

```bash
git clone https://github.com/ZenonEl/TelegramMediaRelayBot.git
cd TelegramMediaRelayBot

# Сборка standalone-версии
dotnet publish -c Release -r linux-x64 --self-contained true -p:PublishSingleFile=true
```

4. Конфигурация
```bash


cp bin/Release/net8.0/linux-x64/publish/appsettings.json.example \
   bin/Release/net8.0/linux-x64/publish/appsettings.json

# Редактируем конфиг
nano bin/Release/net8.0/linux-x64/publish/appsettings.json
```
Пример конфигурации:
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

### 5. Запуск системы
```bash
# Запуск как служба
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