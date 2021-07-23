import { FaLaravel } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";

const constants = {
  tags: [
    {
      text_name: "Vue",
      class_name: "vue",
      component: <FaVuejs />,
    },
    {
      text_name: "React",
      class_name: "react",
      component: <FaReact />,
    },
    {
      text_name: "Php",
      class_name: "php",
      component: <FaPhp />,
    },
    {
      text_name: "Laravel",
      class_name: "laravel",
      component: <FaLaravel />,
    },
    {
      text_name: "Java",
      class_name: "java",
      component: <FaJava />,
    },
    {
      text_name: "Javascript",
      class_name: "javas",
      component: <FaJsSquare />,
    },
    {
      text_name: "Css",
      class_name: "css",
      component: <FaCss3Alt />,
    },
    {
      text_name: "Bootstrap",
      class_name: "btp",
      component: <FaBootstrap />,
    },
    {
      text_name: "WorPress",
      class_name: "wp",
      component: <FaWordpress />,
    },
    {
      text_name: "Base de dato",
      class_name: "bd",
      component: <FaDatabase />,
    },
  ],
};

export { constants as default };
