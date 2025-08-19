@echo off
setlocal ENABLEEXTENSIONS
:: Enable virtual terminal for colors (Windows 10+)
for /f "tokens=2 delims=:" %%i in ('"prompt $H & for %%b in (1) do rem"') do set "BS=%%i"
echo. 
:: Define color escape sequences
set "ESC="
for /f %%a in ('echo prompt $E^| cmd') do set "ESC=%%a"
set "CYAN=%ESC%[36m"
set "GREEN=%ESC%[32m"
set "YELLOW=%ESC%[33m"
set "RESET=%ESC%[0m"

:: Prompt for project name
echo %YELLOW%Enter your project name:%RESET%
set /p projectName=

echo.   
:: Create Vite React+TS project
echo %CYAN%Creating Vite project %projectName%...%RESET%
call npm create vite@latest %projectName%

cd %projectName%

echo.
:: Install dependencies
echo %CYAN%Installing dependencies...%RESET%
call npm install

echo.
:: Install Tailwind CSS v4.0 with Vite plugin
echo %CYAN%Installing Tailwind v4.0 and vite plugin...%RESET%
call npm install tailwindcss @tailwindcss/vite
call npm i @iconify/json @iconify/tailwind4 -D

echo.
:: Add @import to index.css
echo %CYAN%Writing to src\index.css...%RESET%
(
echo @import 'tailwindcss';
) > src\index.css
(
echo @plugin "@iconify/tailwind4";
) >> src\index.css

echo.
echo %CYAN%Installing React Router ...%RESET%
call npm install react-router-dom

echo.
echo %CYAN%Installing mirage Sever package ...%RESET%
call npm install --save-dev miragejs

echo.
echo %CYAN%Installing Toasting notification package ...%RESET%
call npm install --save react-toastify

echo.
echo %CYAN%Installing react Chart package ... %RESET%
call npm install recharts

echo.
:: Delete App.css
echo %CYAN%Removing App.css...%RESET%
del src\App.css >nul 2>&1

echo.
:: Create components folder
echo %CYAN%Creating src\components folder...%RESET%
mkdir src\components

echo.
:: Create Header.tsx component
echo %CYAN%Creating Header.tsx in src\components...%RESET%

break > src\components\header.tsx

>> src\components\header.tsx echo.
>> src\components\header.tsx echo function Header() {
>> src\components\header.tsx echo   return (
>> src\components\header.tsx echo     ^<header className="bg-gray-100 py-4 text-center text-lg font-semibold text-gray-800"^>
>> src\components\header.tsx echo       Welcome to %projectName%!
>> src\components\header.tsx echo     ^</header^>
>> src\components\header.tsx echo   );
>> src\components\header.tsx echo }
>> src\components\header.tsx echo.
>> src\components\header.tsx echo export default Header;

echo.
:: Replace App.tsx safely
echo %CYAN%Creating clean App.tsx...%RESET%

:: Clear the file first
break > src\App.tsx

:: Append line-by-line safely
>> src\App.tsx echo import Header from ^'^./components/header^';
>> src\App.tsx echo.
>> src\App.tsx echo function App() {
>> src\App.tsx echo   return (
>> src\App.tsx echo     ^<^>
>> src\App.tsx echo         ^<Header/^>
>> src\App.tsx echo         ^<div className="text-center mt-20 text-3xl font-bold text-blue-600"^>
>> src\App.tsx echo             Tailwind 4 + Vite
>> src\App.tsx echo         ^</div^>
>> src\App.tsx echo     ^</^>
>> src\App.tsx echo   );
>> src\App.tsx echo }
>> src\App.tsx echo.
>> src\App.tsx echo export default App;


echo.
:: Update vite.config.ts
echo %CYAN%Configuring vite.config.ts with Tailwind Vite plugin...%RESET%
> vite.config.ts echo import { defineConfig } from ^'^vite^';
>> vite.config.ts echo import react from ^'^@vitejs/plugin-react^';
>> vite.config.ts echo import tailwindcss from ^'^@tailwindcss/vite^';
>> vite.config.ts echo.
>> vite.config.ts echo // https://vite.dev/config/
>> vite.config.ts echo export default defineConfig(^{
>> vite.config.ts echo   plugins: [react(), tailwindcss()],
>> vite.config.ts echo ^});

:: Done
echo.
echo %GREEN% Project "%projectName%" is ready with React.%RESET%
echo %CYAN% cd %projectName%%RESET%
echo %CYAN% Run: npm run dev%RESET%

echo.
:: Runn the Project created
echo Starting the %projectName% ...
cd %projectName%
call npm run dev

endlocal
pause
