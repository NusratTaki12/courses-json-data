const courses = [
    {
        key: 'c1',
        id: '1',
        courseName: 'iOS & Swift - The Complete iOS App Development Bootcamp',
        courseInstructor: 'Dr. Angela Yu',
        courseDetails: 'From Beginner to iOS App Developer with Just One Course! Fully Updated with a Comprehensive Module Dedicated to SwiftUI!',
        courseDescription: 'Welcome to the Complete iOS App Development Bootcamp. With over 39,000 5 star ratings and a 4.8 average my iOS course is the HIGHEST RATED iOS Course in the history of Udemy!At 55+ hours, this iOS 13 course is the most comprehensive iOS development course online!.This Swift 5.1 course is based on our in-person app development bootcamp in London, where we have perfected the curriculum over 4 years of in-person teaching.',
        duration: '25 Hours',
        price: 120,
        enrolledStudent: 45,
        img: 'https://img-c.udemycdn.com/course/240x135/1778502_f4b9_12.jpg'


    },

    {
        key: 'c2',
        id: '2',
        courseName: 'The Complete React Native + Hooks Course',
        courseInstructor: 'Stephen Grider',
        courseDetails: 'Understand React Native with Hooks, Context, and React Navigation.',
        courseDescription: 'If you are tired of spinning your wheels learning Swift or Android, this is the course for you.Authentication? You will learn it.  Hooks? Included.  Navigation? Of course!This course will get you up and running with React Native quickly, and teach you the core knowledge you need to deeply understand and build React components for mobile devices.Both OSX and Windows supported - develop iOS or Android!This course includes content on both v0.62.2 and the legacy v0.30.x, which is widely used in industry.We will start by mastering the fundamentals of React, including JSX, “props", “state", and event handling. Source code is provided for each lecture, so you will always stay up-to-date with the course pacing.  Special attention has been paid to creating reusable components that you will be able to make use of on your own fantastic projects.',
        duration: '60 Hours',
        price: 150,
        enrolledStudent: 35,
        img: 'https://img-c.udemycdn.com/course/240x135/959700_8bd2_11.jpg'

    },

    {
        key: 'c3',
        id: '3',
        courseName: 'Advanced CSS and Sass: Flexbox, Grid, Animations and More!',
        courseInstructor: 'Jonas Schmedtmann',
        courseDetails: 'From Beginner to iOS App Developer with Just One Course! Fully Updated with a Comprehensive Module Dedicated to SwiftUI!',
        courseDescription: 'Welcome to the Complete iOS App Development Bootcamp. With over 39,000 5 star ratings and a 4.8 average my iOS course is the HIGHEST RATED iOS Course in the history of Udemy!At 55+ hours, this iOS 13 course is the most comprehensive iOS development course online!.This Swift 5.1 course is based on our in-person app development bootcamp in London, where we have perfected the curriculum over 4 years of in-person teaching.',
        duration: '25 Hours',
        price: 55,
        enrolledStudent: 20,
        img: 'https://img-c.udemycdn.com/course/240x135/1026604_790b_2.jpg'

    },

    {
        key: 'c4',
        id: '4',
        courseName: 'Learn and Understand NodeJS',
        courseInstructor: 'Anthony Alicia',
        courseDetails: 'The most advanced and modern CSS course on the internet: master flexbox, CSS Grid, responsive design, and so much more.',
        courseDescription: 'NodeJS is a rapidy growing web server technology, and Node developers are among the highest paid in the industry. Knowing NodeJS well will get you a job or improve your current one by enabling you to build high quality, robust web applications.In this course you will gain a deep understanding of Node, learn how NodeJS works under the hood, and how that knowledge helps you avoid common pitfalls and drastically improve your ability to debug problems.',
        duration: '25 Hours',
        price: 45,
        enrolledStudent: 15,
        img: 'https://img-c.udemycdn.com/course/240x135/533682_c10c_4.jpg'

    },

    {
        key: 'c5',
        id: '5',
        courseName: 'Java Programming Masterclass covering Java 11 & Java 17',
        courseInstructor: 'Tim Buchalka',
        courseDetails: 'Learn Java In This Course And Become a Computer Programmer. Obtain valuable Core Java Skills And Java Certification',
        courseDescription: 'You’ve just stumbled upon the most complete, in-depth Java programming course online. With close to 600,000 students enrolled and over one hundred and forty thousand reviews (with tens of thousands of those 5-star) to date, these comprehensive java tutorials cover everything you’ll ever need.',
        duration: '60 Hours',
        price: 145,
        enrolledStudent: 60,
        img: 'https://img-c.udemycdn.com/course/240x135/533682_c10c_4.jpg'

    },

    {
        key: 'c6',
        id: '6',
        courseName: 'The Python Mega Course: Build 10 Real World Applications',
        courseInstructor: 'Josh Tortila',
        courseDetails: 'Go from zero to hero in Python in weeks! Learn Python the easy way by building real-life Python programs!',
        courseDescription: 'The Python Mega Course is the most practical course you will find on the web today. In this course, rather than practicing rote memorization, students are actively problem-solving towards tangible goals. You will learn to build real-life desktop programs with graphical user interfaces,  automate routine tasks, control the computer webcam, develop interactive web applications using Flask and Django, scrape and visualize data, and more. You will become a programmer able to produce real-life Python programs and even create professional .exe or .app executables so that everyone can install and use your programs. There will be ten real-world Python applications that you will learn how to build',
        duration: '42 Hours',
        price: 99,
        enrolledStudent: 71,
        img: 'https://img-c.udemycdn.com/course/240x135/396876_cc92_7.jpg'

    },

    {
        key: 'c7',
        id: '7',
        courseName: 'The Ultimate MySQL Bootcamp: Go from SQL Beginner to Expert',
        courseInstructor: 'Ian Schoonover',
        courseDetails: 'Become an In-demand SQL Master by creating complex databases and building reports through real-world projects',
        courseDescription: 'If you want to learn how to gain insights from data but are too intimidated by databases to know where to start, then this course is for you. This course is a gentle but comprehensive introduction to MySQL, one of the most highly in-demand skills in the business sector today.Whether you work in sales or marketing, you run your own company, or you want to build your own apps, mastering MySQL is crucial to answering complex business problems and questions using insights from data. The Ultimate MySQL Bootcamp introduces you to a solid foundation in databases in a way that’s both informative and engaging. Yes, that’s right, it’s possible to make an engaging course on databases.  ',
        duration: '25 Hours',
        price: 110,
        enrolledStudent: 23,
        img: 'https://img-c.udemycdn.com/course/240x135/1187016_51b3.jpg'

    },

    {
        key: 'c8',
        id: '8',
        courseName: 'Microsoft SQL Server 2012 Certification Training Exam 70-461',
        courseInstructor: 'Anthony schiwmmer',
        courseDetails: 'To Study And Pass The Microsoft 70-461 Exam and Gain Certification For MCSA or MCSE',
        courseDescription: 'This Microsoft SQL Server 70-461 Exam training course by Infinite Skills teaches you everything you need to know to pass the Querying Microsoft SQL Server 2012 exam. It is required that you pass the 70-461 Exam in order to earn your MCSA: SQL Server certification from Microsoft.The course takes you through each of the topics that you will need to master in order to pass the SQL Server 2012 70-461 exam. Throughout this video tutorial, you will learn how to setup the interface, create and alter tables using T-SQL, and understand SQL queries. You will learn about SELECT statements, how to modify data, and use joins and subqueries. This course will teach you about triggers and different trigger types, how to work with XML, and how to optimize queries. Finally, you will run through the exam basics and what you can expect from the exam.',
        duration: '42 Hours',
        price: 81,
        enrolledStudent: 52,
        img: 'https://img-c.udemycdn.com/course/240x135/128550_03ea_10.jpg'

    },

    {
        key: 'c9',
        id: '9',
        courseName: 'Master the Coding Interview: Data Structures + Algorithms',
        courseInstructor: 'Andrew Blake',
        courseDetails: 'Ultimate coding interview bootcamp. Get more job offers, negotiate a raise: Everything you need to get the job you want!',
        courseDescription: 'Updated for 2021 hiring season! Join a live online community of over 400,000+ developers and a course taught by an industry expert that has actually worked both in Silicon Valley and Toronto as a senior developer. Graduates of this course are now working at Google, Tesla, Amazon, Apple, IBM, JP Morgan, Facebook + other top tech companies.Want to land a job at a great tech company like Google, Microsoft, Facebook, Netflix, Amazon, or other companies but you are intimidated by the interview process and the coding questions? Do you find yourself feeling like you get "stuck" every time you get asked a coding question? This course is your answer. Using the strategies, lessons, and exercises in this course, you will learn how to land offers from all sorts of companies.Many developers who are "self taught", feel that one of the main disadvantages they face compared to college educated graduates in computer science is the fact that they do not have knowledge about algorithms, data structures and the notorious Big-O Notation. Get on the same level as someone with computer science degree by learning the fundamental building blocks of computer science which will give you a big boost during interviews.',
        duration: '68 Hours',
        price: 122,
        enrolledStudent: 95,
        img: 'https://img-c.udemycdn.com/course/240x135/1917546_682b_3.jpg'

    },

    {
        key: 'c10',
        id: '10',
        courseName: 'Rest API Testing (Automation) from Scratch-Rest Assured Java',
        courseInstructor: 'Mathew Mclauren',
        courseDetails: '"Top Ranked #1 Rest API Test Automation & postman tutorial with Java from Basics to Framework with Real time examples',
        courseDescription: 'By end of this course,You will get complete knowledge on REST API Automation testing.You will be able to DESIGN and IMPLEMENT structured API AUTOMATION FRAMEWORKS with REST Assured API.Additional knowledge on generating excellent client reports for API Test execution results.',
        duration: '34 Hours',
        price: 25,
        enrolledStudent: 32,
        img: 'https://img-c.udemycdn.com/course/240x135/1917546_682b_3.jpg'

    },


]