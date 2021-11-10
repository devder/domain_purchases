/** @jsx jsx */
import { jsx, Box, Container } from "theme-ui";
import SectionHeading from "components/section-heading";
import Feature from "components/cards/feature";

import icon1 from "assets/images/services/1.png";
import icon2 from "assets/images/services/2.png";
import icon3 from "assets/images/services/3.png";
import icon4 from "assets/images/services/4.png";
import icon5 from "assets/images/services/5.png";
import icon6 from "assets/images/services/6.png";

const data = [
  {
    id: 1,
    icon: icon1,
    title: "ultimate Email  subscription",
    description: `Extremely user-friendly and can be used by those with little experience in website development.`,
  },
  {
    id: 2,
    icon: icon2,
    title: "Bolt Performance",
    description: `A wide variety of tools to satisfy advanced user and website developer needs.`,
  },
  {
    id: 3,
    icon: icon3,
    title: "Secure Transaction",
    description: `Get more speed, better SEO, visitor retention and conversions with our custom-built optimization stack and LiteSpeed cache.`,
  },
  {
    id: 4,
    icon: icon4,
    title: "Multiple Options",
    description: `We do it by offering easy to use, fast and reliable web hosting services.`,
  },
  {
    id: 5,
    icon: icon5,
    title: "5 Star Rating service",
    description: `If you are not happy with our services for whatever reason, we’ll refund your payment. No hassle, no risk.`,
  },
  {
    id: 6,
    icon: icon6,
    title: "Integrated with Shopify",
    description: `Use our sdk to build your shopify application`,
  },
];

const UltimateFeatures = () => {
  return (
    <Box as="section" id="features" sx={styles.section}>
      <Container>
        <SectionHeading sx={styles.heading} slogan="Product features" title="Ultimate features that works" />
        <Box sx={styles.features}>
          {data?.map(item => (
            <Feature className="feature-item" key={item.id} data={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default UltimateFeatures;

const styles = {
  section: {
    backgroundColor: "#F9FAFC",
    pt: [8, null, null, null, 10, 14],
    pb: [8, null, null, null, 15, 16, 19],
    position: "relative",
  },
  heading: {
    marginBottom: [50, 50, 80],
    p: {
      maxWidth: 490,
      margin: ["10px auto 0"],
    },
  },
  features: {
    gap: [35, null, null, 40, "50px 30px", 60],
    display: ["grid", "grid"],
    maxWidth: 1030,
    margin: "0 auto",
    gridTemplateColumns: ["repeat(1, 1fr)", null, null, "repeat(2, 1fr)", "repeat(3, 1fr)"],
    ".feature-item": {
      display: ["block"],
      textAlign: "center",
      maxWidth: [290, 260, null, 280, "none"],
      m: ["0 auto", "0 auto", "0 auto", "0 auto", "0 auto", 0],
      figure: {
        m: ["0 0 20px"],
      },
      h4: {
        mb: ["15px", "15px", "20px"],
      },
      p: {
        fontSize: ["14px", "14px", "16px", "16px", "14px", "16px"],
      },
    },
  },
};
