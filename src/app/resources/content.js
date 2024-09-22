import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Sorea',
    lastName:  'Asmai',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Design Engineer',
    avatar:    '/images/avatar.jpg',
    location:  'America/Los_Angeles',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['Java', 'Python', 'SQL', 'C', 'Bash', 'JavaScript', 'HTML', 'CSS', 'SASS', 'x86 Assembly' ]  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/sorea-asmai/',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/sorea-asmai/',
    },
    {
        name: 'Resume',
        icon: 'link',
        link: 'https://tinyurl.com/resume-asmai',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:soreaasmai@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Aspiring Design Engineer</>,
    subline: <>I'm Sorea Asmai, a software engineer at <InlineCode>HP Inc.</InlineCode>, committed <br />to devising elegant solutions to complex software challenges. <br />In my spare time, I engage in personal projects that ignite my <br />passion for innovation and creativity.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Sorea is a software engineer with a passion for transforming complex challenges into elegant digital solutions. Her work spans front-end development, interactive experiences, and the convergence of design and technology.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'HP Inc.',
                timeframe: 'February 2023 - Present',
                role: 'Software Engineer, Corvallis, OR',
                achievements: [
                    <>Developed & implemented a comprehensive project plan utilizing Bash scripting to automate vision system deployment, leading to a substantial reduction in manual setup time and overall improvement in efficiency.</>,
                    <>Redefined the installation process, achieving a setup time of under 15 minutes & enhancing team productivity.</>,
                    <>Optimized system integration by designing & refining Bash scripts for automated configuration and deployment, facilitating smoother rollouts and minimizing manual intervention.</>
                ],
                images: []
            },
            {
                company: 'HP Inc.',
                timeframe: 'May 2023 - August 2023',
                role: 'Writing Systems Engineer Intern, San Diego, CA',
                achievements: [
                    <>Automated TCL scripts to optimize control circuits, streamline processes & enhance overall efficiency.</>,
                    <>Conducted extensive experiments using thermal logging to investigate the influence of different power levels on print ink uniformity & identify effective strategies for reducing area-fill non-uniformity.</>,
                    <>Collaborated closely with PageWide Web Press (PWP), Firmware, and Research & Development (R&D) engineers to test large-scale industrial press, improving ink uniformity during printing.</>
                ],
                images: []
            },
            {
                company: 'McDonald’s Corporation',
                timeframe: 'June 2022 - August 2022',
                role: 'Product Engineer Intern, Chicago, IL',
                achievements: [
                    <>Utilized Python, TensorFlow, Keras, & Scikit-learn to detect 70,000+ payment electronic devices (PEDs) within 14,000 locations nationwide.</>,
                    <>Extracted data through trained image classification models and identified specific traits for functional status.</>,
                    <>Deciphered & evaluated existing algorithms using machine learning and statistical modeling techniques to increase performance, quality, data management, and accuracy.</>
                ],
                images: []
            },
            {
                company: 'Kaiser Permanente',
                timeframe: 'June 2021 - August 2021',
                role: 'Information Technology Intern, Sacramento, CA',
                achievements: [
                    <>Audited & labeled 100+ wireless PC workstations for all nursing units to aid in easily identifying print routing of important medical documents for patient care.</>,
                    <>Collaborated with Wireless Infrastructure team to improve and reformat the team’s website for easier user navigation.</>,
                    <>Deployed iPhones on an urgent timeline to upgrade & configure iPhones for all physicians in Sacramento Kaiser facilities.</>
                ],
                images: []
            },
            {
                company: 'CSU Sacramento',
                timeframe: 'January 2021 – December 2023',
                role: 'Information Technology & Office Assistant, Sacramento, CA',
                achievements: [
                    <>Performed step-by-step troubleshooting assistance (reimaging BIOS, replacing SDDs & HDDs, repairing equipment, etc.) for staff & faculty members.</>,
                    <>Managed inventory paperwork and processed data in Excel for 60+ Option 4 Kits & 200+ eWaste items.</>,
                    <>Customized visually appealing PowerPoints (Canva) & facilitated Zoom Webinar events with 100+ audience members.</>
                ],
                images: []
            },
            {
                company: 'Square Root Academy',
                timeframe: 'November 2020 - December 2020',
                role: 'Intern, Sacramento, CA',
                achievements: [
                    <>Designed and built front-end prototype applications (temperature converter, multi-color light display, calculator) using Swift in Xcode, within a team of five.</>,
                    <>Conducted thorough code reviews and collaborative testing, significantly enhancing the quality and functionality of the applications.</>,
                    <>Contributed to team success by improving workflows and applying best practices in iOS app development.</>
                ],
                images: []
            },
            {
                company: 'PowerSchool',
                timeframe: 'June 2018 – July 2018',
                role: 'Intern, Folsom, CA',
                achievements: [
                    <>Collaborated with Software Development and UI/UX teams to design and prototype mock projects, gaining hands-on experience in product development.</>,
                    <>Delivered a TED Talk on the career field in Computer Science, showcasing a deep understanding of the field to a broad audience.</>,
                    <>Participated in weekly Toastmaster meetings, improving communication and public speaking skills, while contributing ideas to collaborative discussions.</>
                ],
                images: []
            }
        ]
    },

    studies: {
        display: true, // set to false to hide this section
        title: 'Education',
        institutions: [
            {
                name: 'CSU Sacramento',
               description: (
            <>
                Bachelor of Science in Computer Science<br />
                Minor in Mathematics<br />
                Certification in Software Engineering
            </>
        ),
            }
        ]
    },
    technical: {
        display: false, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Figma',
                description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-02.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/cover-03.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Next.js',
                description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-04.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };