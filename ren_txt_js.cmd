
for /d /r "%~dp0" %%d in (*) do (
  pushd "%%d"
    for /f "tokens=1-5* delims=_." %%a in ('dir /a-d/b "*.tttxxxt"') do ren "%%a.%%b" "%%a.js"   
    popd
)

pause;
