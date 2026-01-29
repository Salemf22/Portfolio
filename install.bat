@echo off
set PATH=C:\Program Files\nodejs;%PATH%
cd /d "C:\Users\sinqu\CascadeProjects\portfolio-website"
echo Installing dependencies...
npm install --legacy-peer-deps
echo Installation complete!
pause
