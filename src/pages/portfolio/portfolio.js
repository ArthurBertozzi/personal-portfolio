import {
  inventoryImage,
  crmImage,
  documentImage,
  webAutomationImage,
  codingImage,
} from "../../assets/portfolio";

export const dataportfolio = [
  {
    img: inventoryImage,
    description:
      "An inventory management system developed using Python & Kivy.",
    details: {
      title: "Inventory Management System",
      description: `
        This project aims to create an inventory management system to streamline the control of product stock for a small company.
        When a product is added or withdrawn, the Firebase database is updated accordingly.
        Additionally, when a product is withdrawn from stock, the system generates a DOCX document to manage the physical inventory.
      `,
      impact: `
        The system has helped the company to manage its inventory more efficiently.
        Reducing the time spent on manual inventory management tasks has allowed the company to focus on other areas of the business.
        `,
      stack: ["Python", "Kivy", "Firebase", "Microsoft Word"],
    },
  },
  {
    img: crmImage,
    description:
      "A transactional WhatsApp/CRM system created using GCP, Python, Twilio, and WhatsApp.",
    details: {
      title: "WhatsApp Transactional System",
      description: `
        This project involves creating a system that enables the company to send transactional messages to customers via WhatsApp.
        The system utilizes Twilio for message delivery and Google Cloud Platform for hosting the application.
        Triggers for the messages are events occurring in various applications such as an e-commerce store, ERP, and TMS systems.
      `,
      impact: `
        The system has helped the company to improve customer engagement by sending personalized messages to customers.
        The customer contact rate to know where the product is has decreased, letting the customer experience team focus on other tasks.
        `,
      stack: [
        "Python",
        "Twilio",
        "WhatsApp",
        "Shopify",
        "Intelipost",
        "GCP Cloud Functions",
        "GCP Cloud Tasks",
        "Chain of Responsibility Pattern",
      ],
    },
  },
  {
    img: documentImage,
    description: "A Microsoft Word document generator developed using Python.",
    details: {
      title: "Document Automation System",
      description: `
        This project aims to create a system that allows the company to generate documents in Microsoft Word.
        The system uses a DOCX template and replaces variables within the document with data provided by the user.
        It is utilized for generating contracts, reports, and other documents.
      `,
      impact: `
        The system has helped the company to automate the process of generating documents, decreasing the time spent on manual tasks.
      `,
      stack: ["Python", "Kivy", "Microsoft Word"],
    },
  },
  {
    img: webAutomationImage,
    description: "A web automation system developed using Python.",
    details: {
      title: "Web Automation Systems",
      description: `
        This project focuses on creating a system that enables the company to automate the process of extracting data from websites.
        Additionally, the system automates various tasks to improve efficiency.
      `,
      impact: `
        The system has helped the company to automate repetitive tasks, reducing the time spent on manual work.
      `,
      stack: ["Python", "Selenium", "Playwright"],
    },
  },
  {
    img: codingImage,
    description: "Middleware integration system developed using Node.js",
    details: {
      title: "Middleware Integration System",
      description: `
        This project aims to create a system that integrates various applications within the company.
        The system acts as a middleware layer that enables applications to communicate with each other.
        It is utilized for integrating applications such as ERP, CRM, WMS, TMS and e-commerce systems.
      `,
      impact: `
        The system has helped the company to streamline the process of integrating applications, improving data flow and communication between systems.
      `,
      stack: [
        "Node.js",
        "Typescript",
        "GCP Pub/Sub",
        "GCP Cloud Functions",
        "GCP Firestore",
        "GCP Cloud Scheduler",
      ],
    },
  },
];
