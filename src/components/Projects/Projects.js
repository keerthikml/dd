import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Vehicle from "../../Assets/Projects/Vehicle.png";

import Unit from "../../Assets/Projects/Unit.png";
import Tourism from "../../Assets/Projects/Tourism.png";
import Virtual from "../../Assets/Projects/Virtual.jpg";
import Spaceship from "../../Assets/Projects/Spaceship.jpg";
import Drug from "../../Assets/Projects/Drug.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Tourism}
              isBlog={false}
              title="Tourism Management System"
              description="“TOURISM MANAGEMENT” is used to automate all process of the travel and tourism, which deals with creation, booking and confirmation and user details. The project is designed HTML-PHP as front end and Microsoft SQL Server 2008 as backend which works in any browsers. The coding language used HTML and PHP. Travel and tourism management system is used to book a tour from anywhere in the world by a single dynamic website which will help the user to know all about the places and tour details in a single website. The admin can add packages to the website from a certain travel agents and hotels by create a tour page. 
         
              Software Technologies: PHP, MySQL.

              Tools: Vs code, Xampp."
               

              ghLink="https://github.com/keerthikml/Tourism_Management_System_Using_PHP.git"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Spaceship}
              isBlog={false}
              title="SpaceShip Shooting Game"
              description="The game is developed for full time entertainment and enthusiasms. Spaceship shooting game works perfectly. Coding have been done keeping in mind the real world scenario. A function make to kill your opponent. A function for controlling the spaceship. The spaceship shooter is a very attractive game for any age people. The spaceship shoots and destroy its enemy. Function for escaping from opponent shooting using keys. Lastly, the main function, draw function, mouse function and keyboard function to make User Interface better. It teaches the Gamer to be alert at every situation he/she faces, because if the gamer is not fully alert he/she must be hit by lase. we can control the Spaceship by using keyboard. By using keyboard we can attack the opponent spaceship.
              
              Software Technologies: C, OpenGL.

              Tools: Visual Studio 2022."

              ghLink="https://github.com/keerthikml/SpaceShip_Shooting_Game.git"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Unit}
              isBlog={false}
              title="Unit Converter App"
              description="Unit Converter is a quick, easy and powerful tool for converting various measurement units. Unit converter can convert different units of measure viz. Acceleration, Angle, Area, Current/Electric Current, Data or Bits & Bytes, Density, Energy, Force, Fuel consumption, Frequency, Length, Light-Illumination, Light-Luminance, Power, Pressure, Sound, Speed, Temperature, Time, Torque, Volume, Weight/Mass and etc., As you might expect, the phone runs on the Android operating system and has specially designed applications and middleware. The applications are written in Java language and the system can also run applications that are written in other languages, like C language. 
              Software Technologies: java, Android studio.

              Tools: Android studio."

              ghLink="https://github.com/keerthikml/Unit-converter-android-app"
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Vehicle}
              isBlog={false}
              title="Vehicle Care Center"
              description="Vehicle Care Center is a web application built using Django, a high-level Python web framework. It allows users to book appointments for their vehicles' maintenance and repair services online.
              The application provides a user-friendly interface that enables customers to access various services offered by the center, such as oil changes, tire rotations, and brake repairs. The platform also allows users to track their appointments and receive notifications about upcoming services.
              Software Technologies: Python, Django, SQLite Database

              Tools: VS Code"

              ghLink="https://github.com/keerthikml/Vehicle_care_center_using_django"
              //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Virtual}
              isBlog={false}
              title="Virtual Fitting Room"
              description="With the advanced technology growth, online shopping as known as e-shopping has grown exponentially throughout the world nowadays. Advances in e-shopping has driven a shopping revolution where customers are able to purchase items anywhere and anytime. Despite the benefits of e-shopping, the main drawback is the difficulty for online shoppers to try items on especially for clothing. Hence, a virtual fitting room using AR is proposed to be developed as a mobile application to allow shoppers to visualize how clothing looks and fits on their bodies without wearing it actually. This is to improve shoppers’ shopping experience by giving them an ability to virtually try clothing on in order to check for size, fit or style. In this development, AR, human body detection and motion tracking are integrated to fit the model of garment to user’s body in real-time by tracking user’s body movements through the web camera. The body skeleton-joint positions are recognized, detected and tracked using pose estimation model. In addition, the body and garment measurements are also analysed and interpreted to help in seamlessly fitting the virtual garments to the body. 
              Skills: FaFlask, Javascript,  Machine Learning,Python,Cascading Style Sheets(CSS),HTML."
              //hLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              //demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Drug}
              isBlog={false}
              title="Drug Management System Rest API"
              description="I have developed a robust Drug Management System Rest API with Drug and Supplier Controllers. The API enables CRUD operations for drugs, including creation, retrieval, updating, and deletion. It allows seamless management of suppliers, with CRUD operations for adding, retrieving, updating, and deleting supplier details.This API empowers healthcare organizations to efficiency manage drug inventory and simplify supplier management processes.
              Skills: .NET Framework, C#, .ASP.NET Web API , REST APIs, Entity Framework ,Microsoft SQL Server , Microsoft Azure, Git."
              ghLink="https://github.com/keerthikml/DrugManagementSystem_Rest_API.git"
              demoLink="https://drugmsapi.azurewebsites.net/swagger/index.html"     
            />
          </Col>
        </Row>
      </Container>
    </Container>
     



  );

  
}

export default Projects;
