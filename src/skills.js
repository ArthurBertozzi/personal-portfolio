import {
  FaPython,
  FaNode,
  FaCode,
  FaShopify,
  FaTrello,
  FaSlack,
} from "react-icons/fa";
import {
  SiFlask,
  SiJavascript,
  SiReact,
  SiPandas,
  SiNextdotjs,
  SiGooglecloud,
  SiSelenium,
  SiExpress,
  SiApacheairflow,
  SiGooglebigquery,
  SiLooker,
  SiTwilio,
  SiFirebase,
} from "react-icons/si";
import { PiFileSqlDuotone } from "react-icons/pi";

import { CiDatabase as DataIcon } from "react-icons/ci";

import { ReactComponent as CloudFunctionIcon } from "./assets/gcp/cloud_functions.svg";
import { ReactComponent as AppEngineIcon } from "./assets/gcp/app_engine.svg";
import { ReactComponent as CloudStorageIcon } from "./assets/gcp/cloud_storage.svg";
import { ReactComponent as ComputeEngineIcon } from "./assets/gcp/compute_engine.svg";
import { ReactComponent as FirestoreIcon } from "./assets/gcp/firestore.svg";
import { ReactComponent as CloudTasks } from "./assets/gcp/cloudtasks.svg";
import { ReactComponent as IamIcon } from "./assets/gcp/identity_and_access_management.svg";
import { ReactComponent as PubSubIcon } from "./assets/gcp/pubsub.svg";
import { ReactComponent as TkinterIcon } from "./assets/python/tkinter.svg";
import { ReactComponent as KivyIcon } from "./assets/python/kivy.svg";
import { ReactComponent as PlaywrightIcon } from "./assets/js/playwright.svg";

export const skills = [
  {
    name: "Python",
    icon: FaPython,
    subs: [
      { name: "Flask", icon: SiFlask },
      { name: "Pandas", icon: SiPandas },
      { name: "Selenium", icon: SiSelenium },
      { name: "Tkinter", icon: TkinterIcon },
      { name: "Kivy", icon: KivyIcon },
    ],
  },
  {
    name: "Javascript",
    icon: SiJavascript,
    subs: [
      { name: "React.js", icon: SiReact },
      { name: "Node.js", icon: FaNode },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "Playwright", icon: PlaywrightIcon },
    ],
  },
  {
    name: "Google Cloud Platform",
    icon: SiGooglecloud,
    subs: [
      { name: "Cloud Functions", icon: CloudFunctionIcon },
      { name: "App Engine", icon: AppEngineIcon },
      { name: "Compute Engine", icon: ComputeEngineIcon },
      { name: "Firestore", icon: FirestoreIcon },
      { name: "Pub Sub", icon: PubSubIcon },
      { name: "Identity and Access Management", icon: IamIcon },
      { name: "Cloud Tasks", icon: CloudTasks },
      { name: "Cloud Storage", icon: CloudStorageIcon },
    ],
  },
  {
    name: "Data Analysis",
    icon: DataIcon,
    subs: [
      { name: "SQL", icon: PiFileSqlDuotone },
      { name: "Airflow", icon: SiApacheairflow },
      { name: "Google BigQuery", icon: SiGooglebigquery },
      { name: "Looker", icon: SiLooker },
    ],
  },
  {
    name: "Other Tools",
    icon: FaCode,
    subs: [
      { name: "Shopify", icon: FaShopify },
      { name: "Twilio", icon: SiTwilio },
      { name: "Firebase", icon: SiFirebase },
      { name: "Trello", icon: FaTrello },
      { name: "Slack", icon: FaSlack },
    ],
  },
];
