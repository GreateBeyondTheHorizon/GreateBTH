Invoke-WebRequest "https://nightly.link/packwiz/packwiz/workflows/go/main/Windows%2064-bit.zip" -OutFile "packwiz.zip"
Expand-Archive -Path "packwiz.zip" -DestinationPath "."
Remove-Item -Path "packwiz.zip"
