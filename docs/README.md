* I RUN A TINY COMPUTER WITH 4GB AND A 4 CORE CPU.

* All Apps open, second monitor extended at the right of desktop, with Reason 5 Demo on PlayOnLinux window.
![bild000](https://github.com/doivglser/M1ND3V3NV1R0/blob/master/addjus_one.jpg)

* shi3lD is running, second monitor extended at the right of desktop, with wicd.
![bild011](https://github.com/doivglser/M1ND3V3NV1R0/blob/master/addjus_two.jpg)

* mindevenviro projects
![bild022](https://github.com/doivglser/M1ND3V3NV1R0/blob/master/addjus_three.jpg)

* A Picture, shuted with "take shot" from the "Menu", opened with "mc" in the "Terminator" window and, edited in few seconds with "ImageMagic", and put some things in minutes with "GIMP".
![bild033](https://github.com/doivglser/M1ND3V3NV1R0/blob/master/addjus_four.jpg)

# M1ND3V3NV1R0 (testing)

	Deployment Environment for Web Applications and System Administration, in a minimal Desktop
	with Antivirus, NIDS and a great Multimedia Experience, without systemd. ( for one $USER ) .

- VTWM minimal tweak, Xorg session with xdm.

- Antivirus engine ClamAV and NIDS solution Snort.

- Checks syntax with "python -m pgb", "perl -wc", "shellcheck -e", "php -l" and "tidy -e -q".

- Changes your MAC, to obtain a new IP, "ctrl+C" quit's and revert the connected interface, to vendor's MAC.

- Web surfing with Firefox-ESR and local/web media experience with VLC.

- PlayOnLinux, to install win32 and win64 MS-Windows applications.

- Libreoffice, Geany, Terminator, Transmission, Cheese, Brutalchess, GIMP, WiCD

- Restarts apache2, mysqld, sendmail, snort, clamd.

- Search script and MySQL(MariaDB) maintainers script.

- Volatile $tmpfolder on /dev/shm 

- ScanOnAccess from ClamAV to ~/Downloads

- For programmers and administrators.

# TODO:

* Portability to: Debian, Fedora, CentOS, and MacOS

* Joomla CMS

* set_mysql_passwd:

		To stop "mysqld" and "serv-if-up" while setting up new password.
		
		Issue: 	
			no access for user root with no password, 
			because "mysqld_safe --skip-grant-tables &"
			was never started OR mysqld was never stopped
			correctly.

* I search for the right MySQL syntax to delete id's. (mysql_cp_db)

* sCRYPtUPdater
  
  - Make sure you change more than 1 byte, so if you only change one character, then please add a space.

  - To search for brackets and braces, to split the content of the source code into short code 
  snippets.
  
  - If the workflow interval in minutes is over, refer to the exit handler, if false, 
  reset workflow interval, if true exit.

* "mindevenviro.rules": "alert/drop rules" for /etc/snort/rules/ 

* "iptables psad fwsnort": tcp-wrapper

* ncurses

* GUI's

# PROBLEMS:

* no workaround to install wifi firmware. (I recommend a dd-wrt router as client over ethernet)

* while installing:

	while installing snort: debconf asks for interface eth0 no 
	workaround for "eno[0-9]" interfaces. Take a look in to "ip route show" and 
	"sudo dpkg --configure -a" with the name of your interface.
	
# Requirements:

- A fresh base-install of Debian GNU/Linux 9 Stretch. (soon for Fedora, CentOS and MacOSX)
- Choose netinst CD image, and burn it on a blank CD-R.
- Debian 9 GNU/Linux Stretch: https://www.debian.org/releases/stretch/debian-installer/
- While installing: 

  Choose a root and an user password,
  Guided - use entire disk and set up envrypted LVM,
  Separate /home, /var, and /tmp partitions,
  Don't choose any desktop or servers, 
  but standard system utilities.
  
- Root access, to make an entry for $USER in the /etc/sudoers file
- An Internet connection

# Install

* ivo@x0x:~/mindevenviro$ sudo ./install 

  Installs the "deployment environment" and the "minimal desktop" with "antivirus and NIDS":

		wicd brutalchess libreoffice-writer tidy cheese gimp scrot mupdf terminator playonlinux wine64
		wine64-tools wine64-preloader xul-ext-ublock-origin firefox-esr vlc feh xclip geany transmission
		openvpn xscreensaver vtwm oss-compat alsa-utils xcompmgr x11-apps xdm xorg zip rar openssl 
		clamav-freshclam clamav-milter clamdscan clamav-daemon clamav-base clamav mysql-client 
		mysql-server php7.0 php7.0-cli php7.0-mcrypt php7.0-intl php7.0-mysql php7.0-curl php7.0-gd 
		php7.0-soap php7.0-xml php7.0-zip php7.0-readline php7.0-opcache php7.0-json php7.0-gd dwww 
		apache2 git sendmail python-gtk2-dbg shellcheck libcgi-pm-perl 
		perl fortunes figlet mc mutt eject nano nmon 

* while installing
 
   You can aprove to sign up in to your github.com account, or just hit enter.

# USAGE On VTWM:

* Login to X

  "F10 on active window" * circles windows up
  
  "F12 on active window" * circles windows down
  
  "grenn button left corner on title-bar" * iconize window
  
  "grenn button right corner on title-bar" * resize window

  "Right click on the Desktop" * Change Background
  
  "Right click on a Window-Title-Bar" * Puts Active-window as "last" in the list of open windows. 
  
  "Middle Click on the Desktop" * VTWM Version
  
  "Left click on the Desktop" * Application Menu
 
 		"transparent" * Click with cross on a window or an icon to set transparency.
		"solid color" * Click with cross on a window or an icon to set solid color back.
		"take shot" * Click with Mouse pointer on Desktop or Window to save picture to ~/
		"refresh" * Restarts VTWM on opened $USER session.
		"lock" * Locks the screen. xscreensaver prompt for $USER password.
		"kill" * Click with cross on a window to end process.
		"exit" * Quits VTWM. XDM login screen, returns.
# VTWM Menu:

* music 

  VLC, Listen to your music and/or videos.

* camera

  cheese, Tool to take pictures and videos from your webcam

* network

  wicd, wired and wireless network manager

* the gimp

  GIMP, GNU Image Manipulation Program

* terminator (Multiple GNOME terminals in one window.)

  "ctrl+PageUP" cycles TAB to right
  
  "ctrl+PageDOWN" cycles TAB to left
  
  "ctrl+TAB" swap's between Panned TAB's

* libreoffice

  Libreoffice Writer

* brutalchess

  3D chess game with reflection of the chessmen

* playOnLinux

  PlayOnLinux manage's: win32 and win64 applications, (like Reason 5)

* firefox-ESR

  type: localhost/dwww for dwww. ( dwww collects information from /usr/share/{man,doc} )
  
  type: localhost/testphp for your php stuff.

* transmission

  lightweight BitTorrent client
  
* geany

  fast and lightweight IDE
  
# USAGE in Terminator:

		° OPEN THE FOLLOWING SHELL SCRIPTS IN THE TERMINATOR WINDOW °

* openpdf (shell script)

  Open PDF files with pdf suffix
  
* sCRYPtUPdater (shell script)

  syntax check and copy to path: like /usr/local/bin, /var/www/html, /etc ...

* search (shell script)

  search by path and file suffix, if grep true open file

* mysql_cp_db (shell script)

  	  ° To rename tables in database
	  ° To delete zombie ID's because "lost *.php, *.xml, from CMS template" in mysql database.
	  ° To dump database to *.sql file to ~/
	  ° To restore database from .sql file.
  
* redundanz (shell script)

  Puts serv-if-up daemon up and monitors servers reliability.
  
  Depends on: server-monitor, serv-if-up
  
* nids-antivirus-up (shell script)

  USAGE: "sudo nids-antivirus-up --nIDs" puts snort up for active interface.
  
* shi3lD (shell script)

  USAGE: "sudo shi3lD"
  
  If "sudo redundanz -m" is running, then shi3lD will puff your MAC-Address, so you become a new IP.
  
  Try to connect to your Network, pulling dowm "network" from "Menu", refresh in the wicd GUI and connect.
  
  Keep trying, until shi3lD says "WE HAVE shi3lD".
  
  You will have two files on ~/ : 
  
  		° "[MonthYear].mac_recieves_dhcp_lease"
			A list with MAC-ADDRESSES that works with your hardware
		
		° "[MonthYear].mac_no_dhcp_lease"
			A list with MAC-ADDRESSES that doesn't work with your hardware
			
  Depends on: start_shield, stop_shield, nids-antivirus-up
 
* set_mysql_passwd (shell script)

  To set up the MariaDB root password, please don't enter more then 13 chars.

* install (shell script)

  To install and update mindevenviro.

# SHELL SCRIPTS DOT FILES AND CONTENT

# in /root

  /root/.vendorsmac

# in ~/
   
  .wH0rUNSon
  
  [MonthYear].mac_recieves_dhcp_lease
  
  [MonthYear].mac_no_dhcp_lease
  
  .installed
  
  .twmrc
  
  .config/mc/ini
  
  .config/terminator/config
  
  .Xresources
  
  .xscreensaver
  
  .bashrc
  
# in ~/Pictures

  unziped wallpapers.zip
  
# in /usr/local/bin

° network

	- shi3lD
	- start_shield
	- stop_shield
	- nids-antivirus-up
	
° syntax|search|dump|restore|rename

	- sCRYPtUPdater
	- search
	- mysql_cp_db
	
° backgroud|startup
		
	- feh-bg
	- hi 
	- hi_cheese
	- hi_brutalchess
	- hi_libreoffice
	- hi_geany
	- hi_gimp
	- hi_transmission-gtk
	- hi_firefox-esr
	- hi_playonlinux
	- hi_vlc
	- hi_wicd-client

° monitoring|reliability

	- server-monitor
	- serv-if-up
	- redundanz
	
° install|update|maintenance

	- install
	- set_mysql_passwd
	
# in /var/www/html/

  README.html

# Coming soon:

  An anonym e-mail solution and a volatile secure account on a RAM-Disk. I want to use phyton, because of some C, 
  C++ libraries. I want to build the GUI in GTK+, because GTK+ is portable.

* https://github.com/doivglser/min-dev-enviro/projects

# Thank's

![LPIC-1](https://www.theurbanpenguin.com/wp-content/uploads/2016/08/LPIC-1-Medium.png)
![Bash](https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Gnu-bash-logo.svg/245px-Gnu-bash-logo.svg.png)
![MC](https://midnight-commander.org/chrome/site/MidnightCommander.png)
![vtwm](http://www.xwinman.org/images/vtwm.gif)
![mutt](https://upload.wikimedia.org/wikipedia/commons/e/ef/Mutt.gif)
![Debian](https://www.notebookcheck.net/fileadmin/_processed_/a/4/csm_Debian_logo_81d29e8578.jpg)
![ClamAV](https://www.clamav.net/assets/clamav-trademark.png)
![gnu nano](https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Gnu-nano.svg/256px-Gnu-nano.svg.png)
![Apache](http://www.linuxbrigade.com/wp-content/uploads/2014/06/apache318x260.png)
![playonlinux](http://www.playonlinux.com/images/uploads/196.jpg?w=240)
![github](http://www.toolswatch.org/wp-content/uploads/2014/09/logo_GitHub.jpg)
![VLC](https://nightlies.videolan.org/cone-soppera10.png)
![FIREFOX-ESR](http://lh4.googleusercontent.com/-ES6QFwghMpc/Tz5DbjB7zlI/AAAAAAAAA9o/T13MxP5CUrc/s1600/Firefox-ESR.png)
![stackoverflow](http://devlup.com/wp-content/uploads/2011/06/stackoverflow.png)
![transmission](https://itsfoss.com/wp-content/uploads/2015/08/transmission-logo.png)
![google](http://www.fayerwayer.com/up/2008/02/google-07.png)
![Snort](https://www.snort.org/assets/SnortTM.png)
![geany](https://www.linux.com/var/uploads/Image/articles/139882-2.jpg)
![PHP/MySQL](https://disenowebakus.net/imagenes/articulos/aprender-php-mysql-bases-de-datos-paginas-web-dinamicas.jpg)
![Python](http://www.coderdojo-helmond.nl/wp-content/uploads/2015/10/python-programming-assignment-help.png)
![Perl](https://www.textmagic.com/wp-content/themes/textmagic-genesis/assets/vendor/textmagic/marketing/images/api/prog-lang-logos/perl.png)
![terminator](https://i.ytimg.com/vi/mMak2VzRbmc/maxresdefault.jpg)