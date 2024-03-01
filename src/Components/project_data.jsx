import onlineBookStoreImage from '/onlinebookstore.png';
import youtubeCloneImage from '/youtubeclone.png';
import momentsImage from '/socialmedia.png';
import amazonScraperImage from '/amazonscrapperapi.png'


const projects = [
    {
      title: 'Online Book Store',
      description:
        'This is a full-stack web application for an online book store. It is built using React.js, Node.js, Express.js, and MongoDB. It has a user-friendly interface and allows users to add books to their cart and purchase them.',
      tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      image: onlineBookStoreImage, 
      url: 'https://rambookstore.netlify.app/',
      github_url: 'https://github.com/rammohanpatel/Online-Book-Store'
    },

    {
        title: 'Youtube Clone',
        description:
          'Custom categories, searchable video library, video player & many more',
        tags: ['React.js', 'Rapid API', 'Material UI'],
        image: youtubeCloneImage, 
        url: 'https://youtubeclonebyram.netlify.app/',
        github_url: 'https://github.com/rammohanpatel/Youtube_Clone'
      },

      {
        title: 'Moments-A Social Media Platform',
        description:
          'Modern UI/UX, CRUD operations and many more',
        tags: ['MERN-Stack', 'Redux', 'Material UI'],
        image: momentsImage, 
        url: 'https://social-media-by-ram.netlify.app/',
        github_url: 'https://github.com/rammohanpatel/Moments_Frontend'
      },

      {
        title: 'Amazon-Scraper API',
        description:
          'Allows to extract product details, search results, & offers from Amazon.com',
        tags: ['Express.js'],
        image: amazonScraperImage, 
        url: 'https://github.com/rammohanpatel/Amazon-Scrapper-API',
        github_url: 'https://github.com/rammohanpatel/Amazon-Scrapper-API'
      },
    
  ];

  export default projects;