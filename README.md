
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/francobrevis/easyproject">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">The Redis Queue API Docker</h3>

  <p align="center">
    An awesome Redis Queue API wrote in node js, and deploy with docker-compose!

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#usage">Usage</a></li>
      </ul>
    </li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

The Redis Queue API it's a demo of some functionalities that Redis has, with this API wrote in node js you will learn 3 of them:
  
* [LPUSH](https://redis.io/commands/lpush)
* [LPOP](https://redis.io/commands/lpop)
* [LRANGE](https://redis.io/commands/LRANGE)


### Built With

The main tools that I use to build this are.
* [Docker Compose](https://docs.docker.com/compose/)
* [Node js](https://nodejs.org/es/)
* [Redis](https://redis.io)



<!-- GETTING STARTED -->
## Getting Started

To deploy this REST API with Redis Server you can do it by using the docker compose command, to bringing up all the modules and frameworks that I used.

### Prerequisites

The only prerequisites is having installed docker compose.
* [MAC OSX installation](https://docs.docker.com/desktop/mac/)
* [Ubuntu installation](https://docs.docker.com/engine/install/ubuntu/)
* [Other system installation](https://docs.docker.com/get-docker/)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/francobrevis/easyproject
   ```
2. Enter into the folder
   ```sh
   cd easyproject/
   ```
3. Start the instances with docker compose
   ```sh
   sudo docker-compose up
   ```
  
<!-- USAGE EXAMPLES -->
## Usage

To make this REST API useful you have to follow this examples of how to hit hit the REST API in order to push, pop o count in a queue saved in Redis.

1. Create a petition to push
   ```sh
   curl --location --request POST '127.0.0.1:4040/api/queue/push' \ --header 'Content-Type: application/x-www-form-urlencoded' \ --data-urlencode 'msg=This is my first job :)'
   ```
2. Create a petition to pop
   ```sh
   curl --location --request POST '127.0.0.1:4040/api/queue/pop'
   ```
3. Finally, create a petition to count
   ```sh
   curl --location --request GET '35.239.234.188:4040/api/queue/count'
   ```
 
<!-- CONTACT -->
## Contact

Your Name - [@FranckyBrevis](https://twitter.com/FranckyBrevis) - franc.brevis@gmail.com



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Img Shields](https://shields.io)
* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Pages](https://pages.github.com)
* [Animate.css](https://daneden.github.io/animate.css)
* [Loaders.css](https://connoratherton.com/loaders)
* [Slick Carousel](https://kenwheeler.github.io/slick)
* [Smooth Scroll](https://github.com/cferdinandi/smooth-scroll)
* [Sticky Kit](http://leafo.net/sticky-kit)
* [JVectorMap](http://jvectormap.com)
* [Font Awesome](https://fontawesome.com)





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/francobrevis/easyproject/pulse
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/francobrevis/easyproject/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/francobrevis/easyproject/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/francobrevis/easyproject/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/franco-brevis-a1768916b/
[product-screenshot]: images/screenshot.png
