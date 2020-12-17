

echo "#" >> README.md

git config --global user.email "seregatttt1@mail.ru"
git config --global user.name "tsa"
git init 
git add README.md 
git commit -m "first commit" 
git branch -M main
git remote add origin https://github.com/tsa-j/chat.git 
git push -u origin main
pause;