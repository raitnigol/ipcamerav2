> html, css, js, execute.sh
html, css ja javascripti failid on vajalikud, et kaamerapilti kuvada.
Raspberry Pi bootil käivitatakse index.html fail ning kaamera hakkab tööle.
execute.sh skript käivitab bootil index.html faili quartz brauseris --kiosk parameetriga (täisekraan)

> quartz browser
sudo apt install python3 python3-pyqt5 python3-pyqt5.qtwebkit
git clone https://github.com/ksharindam/quartz-browser-qt5.git
sudo pip3 install .

> cron job 
cron job pi ja root kasutajatele, 07:00 hommikuti restart masinale
1. crontab -e
2. 0 7 0 0 0 shutdown -r now

> autostart
~/.config/lxsession/LXDE-pi/autostart failis käivitatakse bootil skript, mis asub asukohas /home/pi/ipcamera/execute.sh
kui asukohas LXDE-pi/ ei asu faili autostart, siis saab selle teisaldada sellest repositooriumist
1. mv /home/pi/ipcamera/autostart ~/.config/lxsession/LXDE-pi/
kui asukohas asub juba antud fail, tuleb üks rida failile lõppu kirjutada
1. @sh /home/pi/ipcamera/execute.sh


> unclutter
Et kursorit poleks käivitamisel näha, siis kaotatakse kursor peale 5 sekundit, kui seda pole liigutatud.
1. apt install unclutter
2. unclutter --idle 5
