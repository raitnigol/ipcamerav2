# ipcamerav2
ipcamerav2 on repositoorium, mis sisaldab lähtekoodi Tartu Ülikooli infotehnoloogia osakonna ip kaamera jälgimiseks.
OS: Raspberry Pi 3B+ [Raspbian Buster with Desktop]

## html, css, js, execute.sh
HTML, CSS ja JS failid on vajalikud, et kaamerapilti kuvada.
Raspberry Pi bootimisel käivitatakse brauser index.html fail ning kaamerapilti on võimalik kaamerast näha.
html, css ja javascripti failid on vajalikud, et kaamerapilti kuvada.

execute.sh käivitab Raspberry Pi bootimisel quartz brauseri, unclutteri, ja keelab screensaveri.

## ipcamerav2
ipcamerav2 installeerimine

cd /home/pi
git clone https://github.com/raitnigol/ipcamerav2.git

## quartz browser
Kuna Raspbian Busteriga on kaasas vaid Chromium brauser ja see võtab liialt palju ressurssi, siis kasutame quartz brauserit.

cd /home/pi
sudo apt install python3 python3-pyqt5 python3-pyqt5.qtwebkit
git clone https://github.com/ksharindam/quartz-browser-qt5.git
cd /quartz-browser-qt5
sudo pip3 install .

## cron job taaskäivituseks
Cron job on tehtud nii pi kui ka root kasutajale. Iga hommik kell 07:00 tehakse Raspberry Pi-le taaskäivitus.

crontab -e
0 7 0 0 0 shutdown -r now

## autostart
~/.config/lxsession/LXDE-pi/autostart failis käivitatakse bootil skript, mis asub asukohas /home/pi/ipcamera/execute.sh
kui asukohas LXDE-pi/ ei asu faili autostart, siis saab selle teisaldada sellest repositooriumist
1. mv /home/pi/ipcamera/autostart ~/.config/lxsession/LXDE-pi/
kui asukohas asub juba antud fail, tuleb üks rida failile lõppu kirjutada
1. @sh /home/pi/ipcamera/execute.sh


## unclutter
Et kursorit poleks brauseris näha, siis kaotatakse kursor peale 5 sekundit, kui seda pole liigutatud.

apt install unclutter
unclutter --idle <timeout_sekundites> (vaikimisi 5 sekundit)
