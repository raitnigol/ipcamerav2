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


> unclutter
Et kursorit poleks käivitamisel näha, siis kaotatakse kursor peale 5 sekundit, kui seda pole liigutatud.
1. apt install unclutter
2. unclutter --idle 5
