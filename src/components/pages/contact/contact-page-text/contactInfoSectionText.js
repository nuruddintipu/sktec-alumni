import {FaEnvelope, FaMapMarkerAlt, FaPhoneAlt} from "react-icons/fa";

export const contactInformations = [
    {
        title: "Open Hours",
        icon: <FaEnvelope />,
        text: "saa@example.com",
    },
    {
        title: "Phone Number",
        icon: <FaPhoneAlt />,
        text: "+8801234567890, +8809876543210",
    },
    {
        title: "Address",
        icon: <FaMapMarkerAlt />,
        text: "123 University Avenue, Building C (Floor 4), Citytown,ZIP-12345, Bangladesh.",
    },
];


export const contactInfoDefaultText =  {
    headline: "Send Us Message",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
};


export const succesMessage = {
  headerText: "Your message is sent",
    body: "Please wait for our response."
};