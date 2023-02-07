manifest.json

```json
{
  "manifest_version": 3,
  "name": "bitrix open doc",
  "version": "1.0",
  "description": "Открытие файла из админки в битриксе",
  "content_scripts": [
    {
      "matches": ["https://*/bitrix/admin/*", "http://*/bitrix/admin/*"],
      "js": ["index.min.js"],
      "css": []
    }
  ]
}
```
