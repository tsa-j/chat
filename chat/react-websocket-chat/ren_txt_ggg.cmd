
for /d /r "%~dp0" %%d in (*) do (
  pushd "%%d"
    for /f "tokens=1-5* delims=_." %%a in ('dir /a-d/b "*.txt"') do ren "%%a.%%b" "%%a.ggg"   
    popd
)

pause;
