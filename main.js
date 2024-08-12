import { createApp } from 'vue'; // or any other framework/library you are using
import App from './App.vue'; // your main app component


createApp(App).mount('#app');

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="navbar">
            <a href="mailto:rc3599@columbia.edu">Email</a>
            <a href="https://github.com/renatadaou">Github</a>
            <a href="https://www.linkedin.com/in/renata-carlos-daou/">LinkedIn</a>
        </div>
        <div class="container">
            <div class="header">
                <img src="Pics/me.png" alt="Renata Carlos Daou" class="rounded-circle" style="width: 150px;"/>
                <h1>Renata Carlos Daou</h1>
                <p>Data Journalist and Polyglot</p>
            </div>
            <div class="about section">
                <h2>About Me</h2>
                <p class="body-text">
                    I am a journalist currently pursuing a Master of Science degree in data journalism at the Columbia Graduate School of Journalism. On this website, you will discover a collection of my most recent data stories and projects. Feel free to explore my Github for more details on each project. Your suggestions and tips are always welcome!
                </p>
                <p class="body-text">
                    My hobbies include watching children’s movies, learning new languages, exploring exotic dishes, and traveling extensively—I’ve visited over 20 countries!
                </p>
            </div>
            <div class="section">
                <h2 class="section-title">Coding Projects</h2>
                <p class="body-text">
                    Below are some of my recent projects. Each one includes a brief description and a link to see the code on Github.
                </p>
                <div class="project-entry">
                    <img src="Pics/pali.png" alt="Journalists Covering Gaza"/>
                    <div class="text-container">
                        <h3><a href="https://renatadaou.github.io/journalists-covering-Gaza/">How Are Journalists Covering Stories in Gaza?</a></h3>
                        <p>Since October 7, the conflicts in the Gaza Strip have consistently made headlines. Journalists have employed various methods to report on the conflict, including on-the-ground coverage, exploration of related themes, and utilization of open-source intelligence techniques. In this project, I used CSS and HTML to create a scrollytelling interactive story. I interviewed three journalists, Haley Willis, a reporter for The New York Times, and Adam Rayes and Briana Rice, journalists for Michigan Public Radio, about their techniques covering the conflict, without being on the ground.</p>
                        <a href="https://github.com/renatadaou/journalists-covering-Gaza" class="button is-info" target="_blank">See code</a>
                    </div>
                </div>
                <!-- Repeat for other project entries -->
            </div>
        </div>
        <footer>
            <p>&copy; 2024 Renata Carlos Daou. All rights reserved.</p>
        </footer>
    `;
});
