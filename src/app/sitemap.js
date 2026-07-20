export default function sitemap() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const now = new Date();

  const routes = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/explore", priority: 0.9, changeFrequency: "daily" },
    { path: "/about", priority: 0.6, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.5, changeFrequency: "yearly" },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/login", priority: 0.4, changeFrequency: "yearly" },
    { path: "/register", priority: 0.5, changeFrequency: "yearly" },
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
