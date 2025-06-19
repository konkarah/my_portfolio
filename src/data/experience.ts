import { type ExperienceShowcaseListItemProps } from "@/components/experience/experience-showcase-list-item";

export const EXPERIENCE: ExperienceShowcaseListItemProps[] = [
  {
    title: "Software Developer",
    organisation: {
      name: "Nathan & Nathan",
      href: "https://nathandigital.com/",
    },
    date: "May 2024 - Present",
    location: "Hybrid ",
    description:
      "Spearheaded the development of an ERP suite leveraging AWS cloud infrastructure, resulting in a 10% increase in clientele, and was commended by the CTO for high standards.",
  },
  {
    title: "Systems Engineer",
    organisation: {
      name: "Direcorate for Social Protection",
      href: "https://socialprotection.go.ke/",
    },
    date: "May 2022 - May 2024",
    location: "Onsite",
    description:
      "Conceptualized and effected a P2P/Blockchain solution for seamless payments to over 1.3 million cash transfer beneficiaries cutting disbursement times by 12 days and transfer levies by 30%.",
  },
  {
    title: "Junior Software Engineer",
    organisation: {
      name: "Dehmans Group",
      href: "https://dehmans.com/",
    },
    date: "Feb 2019 - Nov 2021",
    location: "Remote",
    description:
      "Conceived an unmanned email response system, which reduced response time to 3K email messages by 71%.",
  },
];
