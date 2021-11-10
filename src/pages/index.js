import dynamic from "next/dynamic";
import { ThemeProvider } from "theme-ui";
import theme from "theme";
const Layout = dynamic(() => import("components/layout"));
const SEO = dynamic(() => import("components/seo"));
const Banner = dynamic(() => import("sections/banner"));
const Services = dynamic(() => import("sections/services"));
const PremiumFeature = dynamic(() => import("sections/premium-feature"));
const UltimateFeatures = dynamic(() => import("sections/ultimate-feature"));
const CustomerSupport = dynamic(() => import("sections/customer-support"));
const Pricing = dynamic(() => import("sections/pricing"));
const Testimonials = dynamic(() => import("sections/testimonials"));
const Blog = dynamic(() => import("sections/blog"));
const Faq = dynamic(() => import("sections/faq"));
const Support = dynamic(() => import("sections/support"));

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Hosting Provider" description="Affordable and scalable hosting services" />
        <Banner />
        <Services />
        <PremiumFeature />
        <UltimateFeatures />
        <CustomerSupport />
        <Pricing />
        <Testimonials />
        <Blog />
        <Faq />
        <Support />
      </Layout>
    </ThemeProvider>
  );
}
