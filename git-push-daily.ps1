# Lern-App: Automatischer täglicher Git Push
$appPfad = "C:\Users\spors\OneDrive\Dokumente\Desktop\Claude\lern-app\app"
$logDatei = "C:\Users\spors\OneDrive\Dokumente\Desktop\Claude\lern-app\git-push-log.txt"

Set-Location $appPfad

$datum = Get-Date -Format "dd.MM.yyyy HH:mm"
$status = git status --porcelain

if ($status) {
    # Es gibt ungespeicherte Änderungen → committen und pushen
    git add .
    git commit -m "Auto-Commit: Neue Lerninhalte vom $datum"
    git push origin main
    Add-Content $logDatei "[$datum] ✅ Commit + Push erfolgreich"
} else {
    # Keine Änderungen, trotzdem pushen (falls vorheriger Push fehlschlug)
    git push origin main
    Add-Content $logDatei "[$datum] 🔄 Kein neuer Inhalt – Push trotzdem ausgeführt"
}
