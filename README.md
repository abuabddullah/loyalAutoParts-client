# Welcome to **Thirsty Drinks**

Project Repo Link(Frontend): [https://github.com/ProgrammingHeroWC4/warehouse-management-client-side-abuabddullah](https://github.com/ProgrammingHeroWC4/warehouse-management-client-side-abuabddullah) \
Live Site link(Frontend): [https://thirstydrinks-11.web.app/](https://thirstydrinks-11.web.app/) 

Project Repo Link(Backend): [https://github.com/ProgrammingHeroWC4/warehouse-management-server-side-abuabddullah](https://github.com/ProgrammingHeroWC4/warehouse-management-server-side-abuabddullah) \
Live Site link(Backend): [https://still-citadel-40412.herokuapp.com/](https://still-citadel-40412.herokuapp.com/) 

Stack over-flow link : [https://stackoverflow.com/questions/72079374/how-to-get-star-rating-review-from-user-to-mogodb-and-again-get-it-in-ui-by-reac](https://stackoverflow.com/questions/72079374/how-to-get-star-rating-review-from-user-to-mogodb-and-again-get-it-in-ui-by-reac)  



## What to Submit for the assignment:
* **লাইভ ওয়েবসাইট এর লিংক of "firebase frontend deploy" and "heroku backend deploy"**
* **ক্লায়েন্ট সাইড এর কোড এর গিটহাব লিংক of "frontend deploy"**
* **সার্ভার সাইড এর কোড এর গিটহাব লিংক of "backend deploy"**
* **স্ট্যাকওভারফ্লো ওয়েবসাইট এর প্রশ্ন/উত্তর এর লিংক বা গিটহাব ইস্যু এর লিঙ্ক**


## Website's different features and functionality (Projects summary):
* **To know about application of fullStack web development in a project.**
* **To know about NodeJS, ExpressJS, MongoDB atlas**
* **To know about the CRUD operation for posting,getting,editing,deleting data from database**
* **To know about JWT i.e. Json Web Token**
* **To know about how JWT is used for generating token which  could be used for CRUD operation**



## Technologies I Used:
* React js
* React Router
* React fontawesome
* React bootstrap
* React Firebase
* React Firebase hook
* React icons
* React toastify
* React AOS
* React Leaflet
* React count-up
* React Hook Form
* cors
* dotenv
* JWT
* mongodb
* nodemon



## Projects requirements

### [#] compulsory requirements:
**_1) একটা inventory management বাঁ warehose এর stock management related হতে হবে। যেমনঃ soft-drink-dealer_** \
[ DONE ] \
**_2) Design টা professional হতে হবে যাতে final resume তে দেয়া যায় এবং course এর কোন project এর সাথে মিল থাকা যাবে না_** \
[ DONE ] \
**_3) Home page এ কয়েকটা part বাঁ section থাকতে হবে_** \ [navigation-menubar,banner or carousel slider, inventory items(maximum ৬টা items(softdriks,juice,mineral waters,energy drinks,ruhafza,botanicjuice) দিচ্ছে তার name,price,image,short-description,quantity,supplier Name,an update button থাকবে ), footer \
[ DONE ] \
**_5) Home page এ website এর সাথে reasonable 2টা extra section থাকতে হবে_** \ 
[ DONE ] \
**_6) Home page এর Stock Items section এর update button এ click করলে আমাকে "/inventory/:id" page এ নিয়ে যাবে কিন্তু কিন্তু এই page টা থাকবে protected-route হিসেবে অর্থাৎ user login করা না থাকলে তাকে এই page এ ঢুকতে দিবে না_** \
[ DONE ] \
**_7) "/inventory/:id" page এ কিছু সেই id এর aginst এ তাঁর name,price,image,short-description,quantity,supplier Name থাকবেই পাশাপাশি সেখানে একটা "delivered/Sold" button থাকবে সেই button এ click করতে থাকলে তাঁর quantity এক-এক করে কমতে থাকবে_** \ 
[ DONE ] \
**_8) "/inventory/:id" page এ একটা inputfield থাকুবে যেখানে click value বসিয়ে click করলে সেই কয়টা items সেই product এর quantity হিসেবে যোগ হয়ে যাবে_** \ 
[ DONE ] \
**_9) "/inventory/:id" page এ "Manage inventory" নামক button or route থাকবে যেখানে click করলে অন্য একটা page নিয়ে যাবে (ManageAllItems page) যেখানে যত্তগুলা items আছে সব গুলা দেখাবে [table আকারে or card আকারে] অর্থাৎ HomePage এ দেখাব মাত্র ৬টা আর এই page এ দেখাব সব. আর এইখানে প্রতিটা item এর সাথে একটা করে "delete" button থাকবে যেটা তে click করলে একটা popup আসবে confirm করলে তা stock থেকে delete করে দেবে_** \ 
[ DONE ] \
**_10) "Manage inventory" page এ একটা "Add New Item" route থাকবে যেটাতে click করলে "AddNewItem" page এ নিয়ে যাবে সেখানে গিয়ে form এর সাহায্যে নতুন একটা item add করা যাবে এবং picture টা imgbb এর link হতে হবে পাশাপাশি useremail,name,price,image,short-description,quantity,supplier Name_** \ 
[ DONE ] \
**_11) Email-password based authentication + যেকোন একটা social login system থাকবে (google login)_**  : \
[ DONE ] \
**_12) User login করা থাকলে সে navbar এ logout,Manage Items, Add Items,My Items, logo etc routes গুলা দেখতে পারবে [এগুলা সব conditional rendering দিয়ে করতে হবে]_**  : \
[ DONE ] \
**_13) User login করা থাকলে সে My Items page এ গেলে সে তাঁর email দিয়ে যেই যেই items add করছে তা দেখতে পারবে আর এইখানে প্রতিটা item এর সাথে একটা করে "delete" button থাকবে যেটা তে click করলে একটা popup আসবে confirm করলে তা stock থেকে delete করে দেবে_**  : \
[ DONE ] \
**_14) কোন fake data use করা যাবে না সব data mongodb তে থাকতে হবে_**  : \
[ DONE ] \
**_15) Blogs নামে একটা openRoute থাকবে যেখানে 3 out of 4 প্রশ্নের উত্তর দিতে হবে_**  : \
[ DONE ] \

        => Difference between javascript and nodejs?
        => When should you use nodejs and when should you use mongodb?
        => Differences between sql and nosql databases?    
        => What is the purpose of jwt and how does it work?    

**_16) একটা meaningfull 404NotFound componetnt থাকতে হবে_** \
[ DONE ] \




### [#] bonous requirements:
**_1) Login SignUp related error message গুলা UI তে দেখাতে হবে_** \
[ DONE ] \
**_2) Email verification mail পাঠাতে হবে হবে_** \
[ DONE ] \
**_3) ResetPassword mail পাঠাতে হবে হবে_** \
[ DONE ] \
**_4) Client side এর জন্য Minimum 12 টা meaning full commit থাকতে হবে_** \
[ DONE ] \
**_5) README.MD file টা meaningfull হতে হবে + সবগুলা live website and git repo link থাকবে +  আর ৫টা bullet point দিয়ে project features summary লিখতে হবে + যেই যেই library or framework(react,react-router,react-firebase,react-firebase-hook,react-bootstrap,react-fontawesome, toastify etc) use করা হয়েছে এই project তা লিখে দিতে হবে_** \
[ DONE ] \
**_6) Full Website টা কে responsive করেতে হবে_** \
[ DONE ] \
**_7) fileName,componentName,variableName,code everything meaningfull and organized হতে হবে_** \
[ DONE ] \
**_8) Loading Spinner use হতে হবে_** \
[ DONE ] \
**_9) Frontend and Backend দু জায়গায়ি environment variable use করতে হবে_** \
[ DONE ] \
**_10) অন্তত পক্ষে login এর সময় JWT emplement করতে হবে আর সেই অনুযায়ি My Items page এ server থেকে get করার system থাকতে হবে (registration এ করা টা optional)_** \
[ DONE ] \
**_11) StackOverflow website এ একটা questioin করতে হবে আর সেই প্রশ্নের link submit করতে হবে অথবা অন্য কারো question এ আমারর answer এর link তাও না হলে বার approve না হলে github এর কোন একটা repository তে (react-firebase-hook) issues তৈরি করতে হবে_** \
[ DONE ] \



### [#] Optional but "highly recommended" requirements:
**_1) My Items page এ enter করার সময় যেJ WT পাঠানোর হয় তা যদি token invalid হয় তাহলে user কে logout করিয়ে login page এ নিয়ে যাবে + 403,401 http status code implement করতে হবে"_** \
[ NOT DONE ] \
**_2) Confirm popup কে default না দিয়ে modal দিয়ে করা_** \
[ DONE ] \
**_3) Mange Invetory page এ pagination implement করা_** \
[ DONE ] \
**_3) Home page এ আরো extra কিছু component or প্রজেক্ট এ extra আরো কিছু route add করা implement করা_** \
[ DONE ] \



### [#] Optional requirements:
**_1) animation add করা_** \
[ DONE ] \
**_2) icon,google font use করা_** \
[ DONE ] \
**_3) Make the footer a little more realistic_** \
[ DONE ] \
**_4) Optimize your images_** \
[ DONE ] \
**_5) Also, if you want, you can use mongoose._** \
[ NOT DONE ] \
**_6) If possible, replace the default react favicon and give an icon for your website._** \
[ DONE ] \
**_7) If possible give swr or react-query a try. This will be helpful in the future._** \
[ NOT DONE ] \
**_8) Local storage implementation._** \
[ DONE ] \



### [#] All image links:
https://i.ibb.co/hm1Rv5x/Cars-Auxiliaries.jpg
https://i.ibb.co/2KtPvWW/Cars-Axile.jpg
https://i.ibb.co/ZXSrNQh/CarsBody.jpg
https://i.ibb.co/cxyL5vZ/Cars-Bracking.jpg
https://i.ibb.co/j6mhxKs/Cars-Chassis.jpg
https://i.ibb.co/DgnbHdP/Cars-Clutch.jpg
https://i.ibb.co/CVpKnL1/Cars-Differential.jpg
https://i.ibb.co/jyb0mYR/Cars-Engine.jpg
https://i.ibb.co/3cXTsC3/Cars-Gearings.jpg
https://i.ibb.co/F7XhRYp/Cars-Steering.jpg