#! /bin/bash

alternate() {
  echo "<xhtml:link
      rel=\"alternate\"
      hreflang=\"ca\"
      href=\"https://suilans.com/ca/${1}\"
    />
    <xhtml:link
      rel=\"alternate\"
      hreflang=\"en\"
      href=\"https://suilans.com/en/${1}\"
    />
    <xhtml:link
      rel=\"alternate\"
      hreflang=\"es\"
      href=\"https://suilans.com/es/${1}\"
    />"
}

canonical() {
  echo "<xhtml:link
      rel=\"canonical\"
      href=\"https://suilans.com/ca/${1}\"
    />"
}

sitemap() {
  echo "  <url>
    <loc>https://suilabs.com/ca/${1}</loc>
    $(alternate $1)
  </url>
  <url>
    <loc>https://suilabs.com/en/${1}</loc>
    $(canonical $1)
    $(alternate $1)
  </url>
  <url>
    <loc>https://suilabs.com/es/${1}</loc>
    <xhtml:link
      rel=\"canonical\"
      href=\"https://suilans.com/ca/${1}\"
    />
    $(canonical $1)
    $(alternate $1)
  </url>"
}

header() {
  echo "<?xml version=\"1.0\" encoding=\"UTF-8\"?>
<urlset
  xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\"
  xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"
  xsi:schemaLocation=\"http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd\"
  xmlns:xhtml=\"http://www.w3.org/1999/xhtml\"
>"
}

closing() {
  echo "</urlset>";
}

header
sitemap
for e in $@; do
  sitemap $e
done
closing