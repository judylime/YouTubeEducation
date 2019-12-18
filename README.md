# YouTube-Education-Panel
- An extensional feature of YouTube existing functionality for education services

## Authors

* **Sulong Zhou** - *Backend* - [MoonSulong](https://github.com/MoonSulong)
* **Xi Luo** - *Frontend* - [sissilx5](https://github.com/sissilx5)
 
## Table of contents
* [1. Project Description](#1-project-descriptions)
* [2. Infrastructure Design](#2-infrastructure-design)
* [3. Java Servlet Design](#3-java-servlet-design)
* [4. Database Implementation](#4-database-implementation)

## 1. Project Description 
Designed and maintained an education panel web application for clients to search and save video from YouTube.
 
- Frontend: an interactive web page implemented with `HTML/CSS/JS/React/Redux`
	* Manage data transfer with `Redux` on top of `React`
	* Search educational Video in YouTube
	* Save favorite videos to local Video Manager Panel
	* Create and manage tags for favorite videos
	* Support adding and revising note when watching video for study

- Backend:
	* Utilize relational databases(`MySQL`) to store video information from `YouTube API` and clients information
	* Apply `Spring Boot/MVC` to support video search and listing (dependency injection, inversion of control, etc.) 
	* Optimize with `Hibernate` to maintain persistent database and accelerate crucial operations (database connection and query execution).
	* Implement timestamp function in the notebook of a video (TBD) 
	* Deploy server to cloud server (TBD)  


## 2. Infrastructure Design
- 3-tier architecture
   * Presentation tier: HTML, CSS, JavaScript, React
   * Data tier: MySQL
   * Logic tier: Java

![local environment](https://raw.githubusercontent.com/MoonSulong/YouTubeEducation/master/img/local.png)
> Local development environment

## 3. Java Servlet Design
   * Registration
   * Login
   * Logout
   * Search
      * search local video
      * YouTube API
   * Favorite
   * Tag
   * TBD...

## 4. Database Implementation
- MySQL
