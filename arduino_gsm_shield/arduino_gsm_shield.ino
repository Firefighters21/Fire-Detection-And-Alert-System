#include <GSM.h>
#include <LiquidCrystal.h>
LiquidCrystal lcd(12, 11, 16, 17, 18, 19);
#define PINNUMBER ""

//INITIALIZE THE LIBRARY INSTANCE
GSM gsmAccess; //include a 'true' parameter for debug enabled
GSM_SMS sms;
char remoteNumber[20] = "0245453642";
char remoteNumber2[20] = "0501656945";
int ledPin = 6;
int power = 7;
int buzzer = 13;
int sensorPin = A0; //select the input pin for the potentiometer
int sensorValue = 0;

void setup()
{
  //initialize serial communications
  Serial.begin(9600);

  Serial.println("SMS Messages Sender");

  //connection state
  //Serial.println("We are here");

  boolean notConnected = true;

  while(notConnected)
  {
    if(gsmAccess.begin(PINNUMBER) == GSM_READY)
      notConnected = false;
    else
    {
      serial.println("NOT CONNECTED");
      delay(1000);
    }

 serial.println("GSM INITIALIZED");
  pinMode(ledPin, OUTPUT);
  pinMode(buzzer, OUTPUT);
  pinMode(power, OUTPUT);
  digitalWrite(power, HIGH);
  digitalWrite(buzzer, LOW);
  digitalWrite(ledPin, LOW);
lcd.begin(16, 2);
lcd.setCursor(1, 0);
lcd.print("  WELCOME");
lcd.setCursor(0, 1);
lcd.print("NO FIRE DETECTED");
  //sendSMS();
  }

 void loop()
 {
   sensorValue = analogRead(sensorPin);
   serial.println(serialValue);
    if(sensorValue > 600)
     {
       digitalWrite(ledPin,HIGH);
       digitalWrite(buzzer,HIGH);
       digitalWrite(power,LOW);
       lcd.clear();
       lcd.setCursor(0, 0);
       lcd.print("****WARNING****");
       lcd.setCursor(0, 1);
       lcd.print("*FIRE DETECTED*");
       sendSMS();
       sendSMSsecond();
       delay(5000);
       delay(5000);
       digitalWrite(ledPin,LOW);
       digitalWrite(buzzer,LOW);
       digitalWrite(power,HIGH);
     }
    else if(sensorValue < 599)
     {
      digitalWrite(ledPin,LOW);
      digitalWrite(buzzer,LOW);
      digitalWrite(power,HIGH);
      delay(5000);
      lcd.clear();
      lcd.setCursor(1, 0);
      lcd.print("   WELCOME");
      lcd.setCursor(0, 1);
      lcd.print("NO FIRE DETECTED");
     }
 }

 void sendSMS()
  {
    Serial.print("Message to Mobile Number:");
    Serial.println(remoteNumber);

    //sms text
     Serial.println("SENDING");
     Serial.println();
     Serial.println("Message:");
     Serial.println("ALERT POSSIBLE FIRE DETECTED IN THE HOUSE");

     //send the message
     sms.beginSMS(remoteNumber);
     sms.print("ALERT POSSIBLE FIRE DETECTED IN THE HOUSE");
     sms.endSMS();
     Serial.println("\nCOMPLETE!\n");
  }

 void sendSMSsecond()
  {
    Serial.print("Message to Mobile Number:");
    Serial.println(remoteNumber2);

    //sms text
     Serial.println("SENDING");
     Serial.println();
     Serial.println("Message:");
     Serial.println("ALERT POSSIBLE FIRE DETECTED IN THE HOUSE");

     //send the message
     sms.beginSMS(remoteNumber2);
     sms.print("ALERT POSSIBLE FIRE DETECTED IN THE HOUSE");
     sms.endSMS();
     Serial.println("\nCOMPLETE!\n");
  }
 }
