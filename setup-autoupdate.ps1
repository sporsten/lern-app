# Lern-App: Automatischen Git Push einrichten
# Einfach einmal ausfuehren - danach laeuft alles von selbst!

$appPfad    = "C:\Users\spors\OneDrive\Dokumente\Desktop\Claude\lern-app\app"
$scriptPfad = "$appPfad\git-push-daily.ps1"
$taskName   = "LernApp-GitPush"

$aktion = New-ScheduledTaskAction `
    -Execute "powershell.exe" `
    -Argument "-ExecutionPolicy Bypass -WindowStyle Hidden -File `"$scriptPfad`""

$ausloeser = New-ScheduledTaskTrigger -Daily -At "22:00"

$einstellungen = New-ScheduledTaskSettingsSet `
    -ExecutionTimeLimit (New-TimeSpan -Minutes 5) `
    -StartWhenAvailable `
    -RunOnlyIfNetworkAvailable

Register-ScheduledTask `
    -TaskName $taskName `
    -Action $aktion `
    -Trigger $ausloeser `
    -Settings $einstellungen `
    -Description "Lern-App taeglich um 22:00 Uhr automatisch auf GitHub pushen" `
    -Force | Out-Null

Write-Host ""
Write-Host "Fertig! Ab heute Abend 22:00 Uhr laeuft der Push automatisch." -ForegroundColor Green
Write-Host ""
