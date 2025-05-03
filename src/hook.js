
const meta = {
    title: "Mia",
    description: "I’m Mia _ Front-End devloper,currently studying in Re:Coded Bootcamp",
};

const introdata = {
    title: "I’m Mia",
    animated: {
        first: "Software Engineer",
        second: "Full-Stack Developer",
        third: "Front-End Developer",
    },
    description: "I am Software Engineer with 3 years working experience as Front-End Developer. I have experience with back NodeJS and front end JavaScript/React development.",
};

const dataabout = {
    title: "Mia",
    phone: "Phone: included in CV PDF",
    email: "Email: included in CV PDF",
    location: "Location: On-Site, Remote, Hybrid"
};
const worktimeline = [{
    jobtitle: "Software Engineer/Front-End Developer",
    responsibility1: "Built responsive, interactive interfaces using HTML, CSS, JavaScript, and framework React. Created user-friendly UX-UI design. Ensured fast load times and smooth interactions",
    responsibility2: "Followed best practices for code quality, documentation, and version control. Identified and fix front-end issues.",
    responsibility3: "Kept up with new technologies and trends to improve development. Wrote unit tests and ensure code quality with Jest",
    where: "ImedGroups",
    date: "2021-2023",
},
{
    jobtitle: "International Marketing Manager",
    responsibility1: "Planning and executing marketing strategies across European Market (UK and Italy).",
    responsibility2: "Adapting brand messaging, managing digital marketing efforts, and building relationships with international patients",
    responsibility3: "Strong communication in 4 languages, analytical skills, and an understanding of cultural differences",
    where: "Memorial Hospital",
    date: "2017-2018",
},
];

const education = [{
    education: "Master's Degree in International Relations",
    university: "NK University",
    duration: "2018-2020",
},
{
    education: "Bachelor's Degree in International Relations",
    university: "University Degli di Firenze",
    duration: "2015-2017",
},
];

const skills = [{
    name: "Html/CSS",
    additional: " Responsive CSS, Web accessibility, FlexBox, Grid, Selectors, CSS Animations, Preprocessors (Sass)",
    value: 100,
},
{
    name: "Javascript",
    additional: "ES6+, DOM Manipulation, OOP, DSA,  Asynchronous Programming",
    value: 90,
},
{
    name: "React",
    additional: "Redux, React-Bootstrap, React Router, Hooks, Context API, State Management, Functional Components",
    value: 90,
},
{
    name: "NodeJS & Backend",
    additional: "Express.js, Passport.js, JWT, Multer, EJS, RESTful API, WebSockets, Server-Side Rendering (SSR)",
    value: 90,
},
{
    name: "Database Management",
    additional: "SQL, PostgreSQL, Prisma ORM, Data Modeling",
    value: 80,
},
{
    name: "Testing & QA",
    additional: "Jest, ViTest, SuperTest, Mocha, Test-Driven Development (TDD)",
    value: 80,
},
{
    name: "Version Control & Package Management",
    additional: "Git, GitHub, Prisma ORM, NPM, CLI, Yarn",
    value: 90,
},
{
    name: "UI/UX Design",
    additional: "Material UI, Styled-components, TailWind, Figma",
    value: 100,
},
{
    name: "Development Tools",
    additional: "Postman, FireBase, VSCode,  WebPack, ESLint, Prettier",
    value: 100,
},
{
    name: "Deployment & Hosting",
    additional: "Netlify, Render, FireBase, Heroku",
    value: 100,
},
{
    name: "Cloud Services",
    additional: "Cloudinary, FireBase",
    value: 90,
},
];


const dataportfolio = [
    {
        img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D",
        description: "Office Tools Collection",
        description1: "Explore 5 Front-End websites",
        description2: "fully created in JavaScript,",
        description3: "Advanced HTML & Responsive CSS",
        description4: "deployed in render.com",
        link: "/officeTools",
    },
    {
        img: "https://images.unsplash.com/photo-1531525645387-7f14be1bdbbd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FtZXN8ZW58MHwyfDB8fHwy",
        description: "Games Collection",
        description1: "In Games Collection you can find",
        description2: "4 Front-End websites, created",
        description3: "in Javascript,  Responsive CSS",
        description4: "and Advanced HTML with deployment in render.com",
        link: "/games",
    },
    {
        img: "https://images.unsplash.com/photo-1713929644020-1cdf48ca0d12?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG9ubGluZSUyMHNob3BwaW5nfGVufDB8MnwwfHx8Mg%3D%3D",
        description: "Shopping App",
        description1: "FRONTEND: JavaScript, React JS, Responsive CSS, Advanced HTML",
        description2: "FRAMEWORK: Bootstrap",
        description3: "DEPLOYMENT: Render",
        description4: "TEST & QA: Jest, ViTest",
        website: "https://shopping-cart-0duu.onrender.com/",
        github: "https://github.com/mimisha25/Shopping-Cart-TOP"
    },
    {
        img: "https://images.unsplash.com/photo-1589807464345-498cf8186b42?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJsb2dnaW5nfGVufDB8MnwwfHx8Mg%3D%3D",
        description: "Blog Post App",
        description1: "FRONTEND: Vite, Vite, REACT JS, Responsive CSS, Advanced HTML",
        description2: "BACKEND: NODJS, Express.js, JWT, Multer, Prisma ORM, PostgreSQL, CORS, cookie parser, BcryptJS, MVC",
        description3: "FRAMEWORK: Tailwind, Bootstrap, ReactQuill, Yup, Formik, Axios",
        description4: "DEPLOYMENT: Render, Cloudinary, Render Database",
        description5: `TEST: username: john, password: 123`,
        website: "https://blog-user.onrender.com/",
        github: "https://github.com/mimisha25/Blog-Readers-Front-End-TOP"
    },
    {
        img: "https://images.unsplash.com/photo-1586187543706-b43086b30978?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlsZSUyMHVwbG9hZGVyfGVufDB8MnwwfHx8Mg%3D%3D",
        description: "File Uploader",
        description1: "FRONTEND: EJS, JavaScript, HTML&CSS",
        description2: "BACKEND:NodeJS, Express.js, Multer, PassportJS, Prisma ORM, PostgreSQL, BcryptJS, Express Session, MVC",
        description3: "FRAMEWORK: Bootstrap, Bootstrap Icons",
        description4: "DEPLOYMENT: Render, Cloudinary, Neon Database",
        description5: `TEST: username: john, password: 123`,
        website: "https://folder-management.onrender.com",
        github: "https://github.com/mimisha25/folder-management-top"
    },
    {
        img: "https://images.unsplash.com/photo-1698006150156-3779d5c2306c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGlzY3Vzc2lvbnxlbnwwfDJ8MHx8fDI%3D",
        description: "Car Discussion",
        description1: "FRONTEND: JavaScript,Responsive CSS, Advanced HTML",
        description2: "BACKEND: NodeJS, Express.js, PostgreSQL, Express Session, PassportLocal, BscryptJS, PG, MVC",
        description3: "FRAMEWORK: EJS, Bootstrap, Bootstrap Validation",
        description4: "DEPLOYMENT: Render, Neon DataBase",
        description5: `TEST: email: john@c.com, password: 123`,
        website: "https://members-only-car.onrender.com/",
        github: "https://github.com/mimisha25/Inventory-App-TOP"
    }];

const officeTools = [
    {
        img: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FsY3VsYXRvcnxlbnwwfDJ8MHx8fDI%3D",
        description: "Calculator",
        description1: "JAVASCRIPT: Vanilla JS",
        description3: "HTML&CSS: Responsive CSS, Advanced HTML",
        description4: "DEPLOYMENT: Render",
        website: "https://calculator-top.onrender.com",
        github: "https://github.com/mimisha25/Calculator-TOP"
    },
    {
        img: "https://images.unsplash.com/photo-1692158961713-73690ef06e6e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGxhbm5pbmd8ZW58MHwyfDB8fHwy",
        description: "To do List",
        description1: "JAVASCRIPT: Vanilla JS",
        description2: "WEBPACK tool",
        description3: "HTML&CSS: Responsive CSS, Advanced HTML",
        description4: "DEPLOYMENT: Render",
        website: "https://to-do-list-yphm.onrender.com",
        github: "https://github.com/mimisha25/To-do-list-TOP"
    },
    {
        img: "https://images.unsplash.com/photo-1649151139875-ae8ea07082e2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8am9iJTIwaW50ZXJ2aWV3fGVufDB8MnwwfHx8Mg%3D%3D",
        description: "CV creator",
        description1: "JAVASCRIPT: Vite, ReactJS",
        description4: "CLI: Eslint",
        description3: "HTML&CSS: Responsive CSS, Advanced HTML",
        description4: "DEPLOYMENT: Render",
        website: "https://cv-application-top.onrender.com/",
        github: "https://github.com/mimisha25/CV-Application-TOP"
    },
    {
        img: "https://images.unsplash.com/photo-1516888693095-f0e05366ddc6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlicmFyeXxlbnwwfDJ8MHx8fDI%3D",
        description: "Library",
        description1: "JAVASCRIPT: Vanilla JS",
        description3: "HTML&CSS: Responsive CSS, Advanced HTML",
        description4: "DEPLOYMENT: Render",
        website: "https://library-h5tp.onrender.com",
        github: "https://github.com/mimisha25/Library-TOP"
    },
    {
        img: "https://images.unsplash.com/photo-1663530761401-15eefb544889?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfDJ8MHx8fDI%3D",
        description: "Restaurant Page",
        description1: "JAVASCRIPT: React JS",
        description2: "WEBPACK tool",
        description3: "HTML&CSS: Responsive, Advanced HTML, SaSS",
        description4: "DEPLOYMENT: Render",
        website: "https://restaurant-page-snvl.onrender.com/",
        github: "https://github.com/mimisha25/Restaurant-Page-TOP"
    },
    {
        img: "https://images.unsplash.com/photo-1562155618-e1a8bc2eb04f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2VhdGhlcnxlbnwwfDB8MHx8fDA%3D",
        description: "Weather API",
        description1: "JAVASCRIPT: Vanilla JS",
        description2: "WEBPACK tool",
        description3: "HTML&CSS: Responsive, Advanced HTML",
        description4: "DEPLOYMENT: Render",
        website: "https://weather-api-3em4.onrender.com",
        github: "https://github.com/mimisha25/Weather-API-TOP"
    }]


const games = [{
    img: "https://images.unsplash.com/photo-1668901382969-8c73e450a1f5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGljJTIwdGFjJTIwdG9lfGVufDB8MnwwfHx8Mg%3D%3D",
    description: "Tic Tac Toe",
    description1: "JAVASCRIPT: Vanilla JS",
    description3: "HTML&CSS: Responsive CSS, Advanced HTML",
    description4: "DEPLOYMENT: Render",
    website: "https://tic-tac-toe-eatn.onrender.com",
    github: "https://github.com/mimisha25/Tic-Tac-Toe-TOP"
},
{
    img: "https://images.unsplash.com/photo-1574858818846-886b8380713b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJvY2slMjBwYXBlciUyMHNjaXNzb3JzfGVufDB8MnwwfHx8Mg%3D%3D",
    description: "Rock Paper Scissor",
    description1: "JAVASCRIPT: Vanilla JS",
    description3: "HTML&CSS: Responsive CSS, Advanced HTML",
    description4: "DEPLOYMENT: Render",
    website: "https://rock-paper-scissors-top.onrender.com",
    github: "https://github.com/mimisha25/Rock-Paper-Scissors-TOP"
},
{
    img: "https://images.unsplash.com/photo-1668605048045-a5f36b3e1739?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1lbW9yeSUyMGdhbWV8ZW58MHwyfDB8fHwy",
    description: "Memory Card",
    description1: "JAVASCRIPT: Vite, ReactJS, ",
    description3: "HTML&CSS: Responsive CSS, Advanced HTML",
    description4: "DEPLOYMENT: Render",
    website: "https://memory-card-r7vz.onrender.com",
    github: "https://github.com/mimisha25/Memory-Card-TOP"
},
{
    img: "https://images.unsplash.com/photo-1637761566180-9dbde4fdab77?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZXRjaCUyMGElMjBza2V0Y2h8ZW58MHwyfDB8fHwy",
    description: "Etch a Scratch",
    description1: "JAVASCRIPT: Vanilla JS",
    description3: "HTML&CSS: Responsive CSS, Advanced HTML",
    description4: "DEPLOYMENT: Render",
    website: "https://etch-a-scretch-top.onrender.com",
    github: "https://github.com/mimisha25/Etch-a-Scretch-TOP"
},
{
    img: "https://images.unsplash.com/photo-1592080464412-acce590eead0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmF0dGxlc2hpcHxlbnwwfDB8MHx8fDI%3D",
    description: "BattleShip",
    description1: "JAVASCRIPT: Vanilla JS",
    description2: "TEST: JEST, WEBPACK tool",
    description3: "HTML&CSS: Responsive CSS, Advanced HTML",
    description4: "DEPLOYMENT: Render",
    website: "https://battleship-vcu5.onrender.com",
    github: "https://github.com/mimisha25/Battleship-TOP"
}]

const contactConfig = {
    YOUR_EMAIL: "included in CV PDF",
    YOUR_FONE: "included in CV PDF",
    description: "Note: Please, contact me through phone or email directly mentioned in CV PDF",
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/mimisha25",
    linkedin: "",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    education,
    skills,
    introdata,
    contactConfig,
    socialprofils,
    officeTools,
    games
};