#!/bin/bash

echo "🚀 Starte Galdora Landing Page..."
echo "📦 Installiere Abhängigkeiten falls nötig..."

# Installiere dependencies falls nötig
if [ ! -d "node_modules" ]; then
    echo "⬇️ Installiere npm packages..."
    npm install
fi

echo "🌟 Starte Development Server..."
echo "🔗 Öffne http://localhost:3000 in deinem Browser"

# Starte den Development Server
npm run dev 