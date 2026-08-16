import { SiteConfig } from "@/config/siteConfig";

export default async function sitemap(){
  const baseUrl = SiteConfig?.url || "https://www.onfixcarrepairdubai.com";
  const currentDate = new Date().toISOString();

  // ১. স্ট্যাটিক মেইন পেজসমূহ
  const staticPages = [
    "", // Home page
    "/services",
    "/area-we-serve",
    "/about",
    "/contact",
    "/gallery",
    "/blog",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  // ২. ডায়নামিক সার্ভিস পেজসমূহ (SiteConfig.services থেকে নেওয়া)
  const servicePages = (SiteConfig?.services || []).map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // ৩. ডায়নামিক সার্ভিস এরিয়া পেজসমূহ (SiteConfig.serviceAreas থেকে নেওয়া)
  const areaPages = (SiteConfig?.serviceAreas || []).map((area) => {
    const slug = area.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

    return {
      url: `${baseUrl}/area-we-serve/${slug}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    };
  });



  // সব ইউআরএল একসাথে মার্চ (Combine) করা
  return [...staticPages, ...servicePages, ...areaPages];
}