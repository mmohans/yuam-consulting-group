export default function robots() {
    return {
      rules: [
        {
          userAgent: "*",
          allow: "/",
          disallow: "/meet",
        },
      ],
      sitemap: "https://yuamconsultinggroup.in/sitemap.xml",
    };
  }
  