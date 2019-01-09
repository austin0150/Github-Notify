#include <softTone.h>
#include <stdio.h>

#define BuzzPin 0

#define B1 200
#define B2 450
#define B3 650
#define B4 850
#define B5 650
#define B6 850

int song_1[] = {B1,B2,B3,B4,B5,B6};

int beat_1[] = {1,1,1,1,2,1};

int main(void)
{
int i;

if(wiringPiSetup() == -1){
printf("WiringPi initialization failed\n");
return 1;
}

if(softToneCreate(BuzzPin) == -1){
printf("Software Tone Failed\n");
return 1;
}

printf("Sound Playing\n");

for(i=0;i<sizeof(song_1)/4;i++){
softToneWrite(BuzzPin, song_1[i]);
delay(beat_1[i] * 500);
}

return 0;
}
