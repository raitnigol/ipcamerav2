#!/bin/sh
# käivita quartz brauser ja index.html fail
sudo /usr/local/bin/quartz --kiosk /home/pi/ipcamerav2/index.html &
# kaota kursor peale 5 sekundit
unclutter --idle 5 &
# keela screensaver
xset s 0 &
xset -dpms &

exit 0
