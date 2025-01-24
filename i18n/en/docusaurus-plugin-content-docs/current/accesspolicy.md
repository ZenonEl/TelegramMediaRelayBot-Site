# 🔐 Access Policy

**Access Policy** is a feature that allows you to control how the bot interacts with new users. This is particularly useful if you want to restrict access to the bot and keep it only for your acquaintances.

---

### 🛠 Setting Up Access Policy

To set up the access policy, open the `appsettings.json` file and find the `AccessPolicy` section. Here is an example configuration:

```json
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
```

---

### 🎯 Key Parameters

#### 1. **Enabling/Disabling Access Policy**
- **Enabled**: Enables or disables the access policy. If `false`, all users will have access to the bot.

#### 2. **Policy for New Users**
- **NewUsersPolicy.Enabled**: Enables or disables the policy for new users.
- **AllowNewUsers**: Allows or denies access to new users.
  - If `true`, new users can use the bot.
  - If `false`, access will be restricted to existing users only.

#### 3. **Access Rules**
- **AllowRules.AllowAll**: If `true`, all users gain access to the bot.
- **WhitelistedReferrerIds**: A list of user IDs who can always add new users.
- **BlacklistedReferrerIds**: A list of user IDs who will never be able to add new users.

---

### 🛡️ Usage Examples

1. **Restricting Access for New Users**:
   - Set `"AllowNewUsers": false` to deny access to new users.
   - Only existing users will be able to use the bot.

2. **Whitelist**:
   - Add user IDs to `WhitelistedReferrerIds` so that only they can invite new users.
   - For example:
     ```json
     "WhitelistedReferrerIds": [123456789, 987654321]
     ```

3. **Blacklist**:
   - Add user IDs to `BlacklistedReferrerIds` to prevent them from granting access to the bot.
   - For example:
     ```json
     "BlacklistedReferrerIds": [111111111, 222222222]
     ```

---

### ⚠️ Important Notes

- **User IDs**: Make sure you are using the correct user IDs.
- **Testing**: After changing the settings, test the bot to ensure that the access policy works as expected.

---

### 💡 Tips

- If you want to completely open access to the bot, set `"AllowAll": true`. Or simply set `"AccessPolicy.Enabled: false"`.
- For stricter control, use a Whitelist to allow only trusted users to add new members.
- If you want to temporarily restrict access, set `"AllowNewUsers": false`.