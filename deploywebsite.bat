@echo off
echo Starting website deployment...

REM Define the source directory and target directory
set SOURCE_DIR=%~dp0
set TARGET_DIR=C:\path\to\web\server\directory

echo Copying files from %SOURCE_DIR% to %TARGET_DIR%...
xcopy /E /I /Y "%SOURCE_DIR%\*" "%TARGET_DIR%"

REM Check if xcopy was successful
if %errorlevel% neq 0 (
    echo Error copying files
    exit /b %errorlevel%
)

echo Files copied successfully.

REM Restart the web server (example using IIS)
echo Restarting IIS...
iisreset

REM Check if iisreset was successful
if %errorlevel% neq 0 (
    echo Error restarting IIS
    exit /b %errorlevel%
)

echo IIS restarted successfully.
echo Deployment completed.
exit /b 0
