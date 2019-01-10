# Github-Notify
## Very small and simple program to to recieve webhooks and then play a sound from a buzzer
An http server is run with nodeJS and waits for webhooks, in this case from github. When the webhook is recieved, a C program is
executed and plays a song on an rPi buzzer.

#### Install instructions
* You will need to be running debian on the raspberryPi
* Installing node JS on my rPi was by far the hardest part of this process for me. I believe the trouble I was having was because I am using
a raspberryPi zero. I had to downgrade the version of node for my particular ARM processor.
* You will need to install WiringPi on the raspberryPi to allow usage of the GPIO pins
* You will need to install and configure NGROK to allow data from the internet to reach the server
