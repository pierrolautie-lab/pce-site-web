# Compare l'empreinte d'asset (JS) du dernier build local a celle reellement
# servie par https://pcevar.fr - detecte un ecart de cache ou de dossier
# serveur sans attendre un deploiement de 15 minutes. Voir README, section
# "Deux emplacements possibles sur le serveur", pour le contexte de
# l'incident du 2026-08-11 qui a motive ce script.
#
# Prerequis : avoir lance `npm run build` localement au moins une fois avec
# le code actuel, pour que dist/index.html reflete le dernier build.
#
# Usage : powershell -File scripts/check-cache.ps1
#
# 2026-08-11 : motif elargi a [A-Za-z0-9_-] -- les hachages Rollup peuvent
# contenir "_" et "-" (ex. index-C_o26_XP.js), ce qui faisait echouer la
# detection meme quand le build et le serveur etaient corrects.

$ErrorActionPreference = "Stop"

$indexPath = Join-Path $PSScriptRoot "..\dist\index.html"
if (-not (Test-Path $indexPath)) {
    Write-Host "dist/index.html introuvable -- lance 'npm run build' d'abord." -ForegroundColor Yellow
    exit 1
}

$localContent = Get-Content $indexPath -Raw
if ($localContent -notmatch 'assets/(index-[A-Za-z0-9_-]+)\.js') {
    Write-Host "Empreinte introuvable dans dist/index.html -- le build local est-il correct ?" -ForegroundColor Yellow
    exit 1
}
$expected = $Matches[1]

try {
    $html = (Invoke-WebRequest -Uri "https://pcevar.fr/?nocache=$([guid]::NewGuid())" -UseBasicParsing -Headers @{ "Cache-Control" = "no-cache" }).Content
} catch {
    Write-Host "Impossible de joindre https://pcevar.fr : $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}

if ($html -match $expected) {
    Write-Host "OK -- le serveur sert le dernier build ($expected)" -ForegroundColor Green
    exit 0
}

if ($html -match 'assets/(index-[A-Za-z0-9_-]+)\.') {
    Write-Host "DIFFERENT -- le serveur sert $($Matches[1]), le build local est $expected" -ForegroundColor Red
} else {
    Write-Host "DIFFERENT -- aucune empreinte trouvee dans la reponse du serveur (attendu : $expected)" -ForegroundColor Red
}
exit 1
