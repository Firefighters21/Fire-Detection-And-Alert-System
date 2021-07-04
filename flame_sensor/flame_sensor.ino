#include <gps_code.h>

int timesToSend = 1;
int count = 0;
char phone_no[] = "0245453642";
int sensorPin = A0; //select the input pin for the potentiometer
int ledPin = 13;   //select the pin for the LED
int sensorValue = 0;

void setup() {
  pinMode(ledPin, OUTPUT);
  Serial.begin(9600);
  delay(2000);
  Serial.write("AT+CMGF=1");
  Serial.println(" ");
  delay(1000);
}


void loop() {
  sensorValue = analogRead(sensorPin);
  if(sensorValue > 400)
  {
   digitalWrite(ledPin, HIGH);
  while(count < timesToSend)
  {
   delay(1500);
   getGPSlocation();
   Serial.write("AT+CMGF=1");
   //Serial.println(" \");1
   Serial.write(phone_no);
   Serial.println(" \ ");
   delay(2000);
   while(Serial.read() == '>');
   Serial.write("POSSIBLE FIRE DETECTED IN THE HOUSE");
   delay(1000);
   Serial.write(26);
   Serial.write(13);
   Serial.write(10);
   delay(5000);
    delay(5000);
   digitalWrite(ledPin, LOW);
   count++
  }
  }

  else if(sensorValue < 399)
  {
   digitalWrite(ledPin, LOW);
  }

}
