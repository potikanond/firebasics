# firebasics - Google Firebase made simple
เว็บโปรเจคง่ายๆ ที่แสดงตัวอย่างการใช้งาน Google Firebase 

อ้างอิง: Firebase - Ultimate Beginner's Guide (Angular Firebase) .  
https://www.youtube.com/watch?v=9kRgVxULbag

## Prerequisite: 
1. ดาวน์โหลดและติดตั้ง Node.js 
ดาวน์โหลดได้จาก https://nodejs.org/en/) โดยเลือก x.y.z LTS เวอร์ชัน

2. ติดตั้ง firebase-tools แบบ global โดยใช้คำสั่ง **npm** ในรูปแบบต่อไปนี้
```
# npm install -g firebase-tools
```
ในกรณีที่ใช้ Mac หรือ Linux ต้องใช้สิทธิ์ root ในการติดตั้ง โดยใช้คำสั่ง
```
# sudo npm install -g firebase-tools
```

# Firebase setup step-by-step:
1. สร้าง Firebase project ขึ้นใหม่
  - เปิดเว็บไปที่ **https://console.firebase.google.com/** แล้วเพิ่มโปรเจคใหม่ (Add project)
  - กำหนดชื่อโปรเจค (Project name) แล้วกดปุ่มสร้าง (Create project) เมื่อโปรเจคสร้างเสร็จให้คลิกเข้าสู่โปรเจค

2. กำหนดค่า Authentication
  - เข้าไปที่ **Authentication > Sign-in method (tab)**
  - คลิกเลือกแก้ไข **Google Sign-in provider** แล้วเลือก **Enable** สวิทที่มุมขวาบนของหน้าต่าง ป้อน email แล้วบันทึกค่า (Save)

3. สร้างและกำหนด Security policy ให้กับ Cloud Firestore (Database) เพื่อใช้เก็บข้อมูล
  - ในโปรเจคนี้เราจะได้ **Cloud Firestore** ในการเก็บข้อมูล (ไม่ได้ใช้ Realtime database)
  - เข้าไปที่ **Database** จากเมนูด้านซ้าย ในส่วนของ **Cloud Firestore** เลือกสร้างฐานข้อมูล (Create database)
  - ให้เลือก Security rules แบบ **test mode** ซึ่งจะอนุญาตให้เราสามารถอ่าน (read) และเขียนข้อมูล (write) ได้โดยไม่ต้อง authen แล้วกดปุ่ม **Enable**
  
4. สร้างข้อมูลตัวอย่างใน Firestore
  - เพิ่มกลุ่มเอกสาร (Collection) โดยกดปุ่ม **Add collection** ที่อยู่ในคอลัมภ์ซ้ายสุด แล้วกำหนด Collection ID ให้เป็น **posts**
  - เพิ่มเอกสาร (Document) โดยใช้หน้าต่างที่ปรากฎขึ้นมาเมื่อจบขั้นตอนการสร้าง collection โดยกำหนด Document ID ให้เป็น **firstpost**
  - เพิ่มข้อมูล (Field) ชื่อ **createdAt** โดยกำหนด Type เป็น **timestamp** แล้วระบุวัน เวลา ตามต้องการ
  - เพิ่มข้อมูล (Field) ชื่อ **title** โดยกำหนด Type เป็น **string** แล้วกำหนดข้อความตามต้องการ
  - เพิ่มกลุ่มเอกสาร (Collection) ชื่อ **products**
  - เพิ่มเอกสาร (Document) ภายใต้ **products** จำนวน 4-6 รายการ โดยแต่ละรายการไม่ต้องระบุ Document ID (ให้ระบบ generate ให้)
    - ในเอกสารแต่ละตัวที่สร้าง ให้เพิ่มข้อมูล (Field) ชื่อ name (string) และชื่อ price (number) แล้วกำหนดค่าตามต้องการ

5. กำหนดค่า Security policy ให้กับ Storage เพื่อใช้เก็บไฟล์
  - เข้าไปที่ **Storage** จากเมนูด้านซ้าย แล้วคลิกปุ่ม **Get Started**
  - ใช้ค่า default ของ security policy ซึ่งอนุญาตให้อ่านและเขียนไฟล์ได้โดยไม่ต้อง authen

# Setup Web Project step-by-step
1. ทำการโคลนเว็บโปรเจคนี้ด้วย **git** โดยใช้คำสั่งต่อไปนี้
```
# git clone https://github.com/potikanond/firebasics.git
```
หมายเหตุ: หากต้องการเปลี่ยนชื่อ directory ที่ได้จากการโคลนก็สามารถทำได้ตามต้องการ

2. เข้าไปในเว็บโปรเจค directory ที่ได้จากการทำ **git clone** แล้วทำการเชื่อมโยงเข้ากับ Firebase project ที่ได้สร้างรอไว้แล้วโดยใช้คำสั่ง
```
<project-directory># firebase use --add
```
  - เมื่อใช้คำสั่งนี้แล้วจะปรากฎรายการของ Firebase project ที่เราได้สร้างไว้แล้วทั้งหมด ให้ใช้ arrow key ในการเลื่อนขึ้นลงเพื่อเลือก project ที่เราได้สร้างไว้ในขั้นตอน **Firebase setup** แล้วจึงกดปุ่ม **Enter**
  - กำหนดค่า **alias** ให้กับเว็บโปรเจคตามต้องการ เช่น staging
  - ขั้นตอนนี้จะเป็นการนำค่า settings ต่างๆที่จำเป็นจาก Firebase project ที่เราได้เลือก เข้ามาเพิ่มในเว็บโปรเจคนี้

3. ทดสอบการทำงานของเว็บโปรเจคบนเครื่องคอมพิวเตอร์ของเราเอง
ทดสอบการทำงานโดยใช้คำสั่งต่อไปนี้
```
<project-directory># firebase serve
```
  - เราสามารถเข้าทดสอบเว็บโปรเจคที่สร้างขึ้นทาง **http://localhost:5000**
  - หากต้องการดูค่า settings ต่างที่ได้นำเข้ามาจากขึ้นตอนก่อนหน้า สามารถเข้าไปดูได้ที่ **http://localhost:5000/__/firebase/init.js** ซึ่งค่าต่างๆ
  จะเหมือนกับที่ระบุใน **Project settings > Add Firebase to your web app**

4. ทำการติดตั้งเว็บโปรเจคให้ทำงานบนระบบของ Firebase Hosting
สั่งงานให้ติดตั้งได้ด้วยคำสั่งต่อไปนี้
```
<project-directory># firebase deploy
```
เมื่อเสร็จสิ้นการติดตั้ง เราจะสามารถเข้าถึงเว็บของเราได้จากลิงค์ที่สคริปต์ได้แจ้งไว้ในตอนท้าย ซึ่งอยู่ในรูปแบบต่อไปนี้
```
https://firebasics-cac98.firebaseapp.com
```
ข้อสังเกตุ: จะเห็นว่า URL ที่ได้มาจะมีการใช้งาน HTTPS ซึ่งได้รับ SSL Certificate ที่ถูกต้องด้วย ดังนั้นการเชื่อมไปยังเว็บนี้จะถูกเข้ารหัสไว้ด้วย

5. ตรวจสอบการทำงานของเว็บด้วย **Javascript console**
หากต้องการตรวจสอบการทำงาน เช่น ดูค่าที่จะถูก log ไว้ด้วยโค้ดในไฟล์ **public/app.js** ให้เปิด **Developer tools** แล้วเปิดไปยัง console (tab)
หากใช้ Chrome ให้คลิกขวาบนหน้าเว็บแล้วเลือก **Inspect** บนหน้าต้างที่เปิดขึ้นมาใหม่ ให้เลือก console (tab) แล้วทดลอง reload และใช้งานเว็บ

--- ขอให้สนุก และได้ความรู้ครับ ---
