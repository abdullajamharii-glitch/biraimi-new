$gitPath = "C:\Program Files\Git\bin\git.exe"
$interval = 300 # Time in seconds (5 minutes)

Write-Host "Auto-sync started. Press Ctrl+C to stop." -ForegroundColor Cyan

while($true) {
    # Check if there are any changes
    $status = & $gitPath status --porcelain
    if ($status) {
        Write-Host "Changes detected. Syncing..." -ForegroundColor Yellow
        & $gitPath add .
        & $gitPath commit -m "Auto-update: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
        & $gitPath push
        Write-Host "Sync complete!" -ForegroundColor Green
    } else {
        Write-Host "No changes detected. Waiting..." -ForegroundColor Gray
    }
    Start-Sleep -Seconds $interval
}
