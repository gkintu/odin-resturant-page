import "./styles.css";
import exampleImage from "./images/example.jpg";
import exampleImage2 from "./images/odin.png";

const imgElement = document.createElement("img");
imgElement.src = exampleImage;
document.body.appendChild(imgElement);

const imgElement2 = document.createElement("img");
imgElement2.src = exampleImage2;
document.body.appendChild(imgElement2);
