
for /d /r "%~dp0" %%d in (*) do (
  pushd "%%d"
    for /f "tokens=1-5* delims=_." %%a in ('dir /a-d/b "*.ggg"') do ren "%%a.%%b" "%%a.txt"   
    popd
)

pause;
