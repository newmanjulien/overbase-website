export interface Datasource {
  value: string;
  label: string;
  logo: string;
}

// Helper function to generate LogoKit URLs
const getLogoUrl = (domain: string) =>
  `https://img.logokit.com/${domain}?token=${process.env.NEXT_PUBLIC_LOGOKIT_TOKEN}`;

export const DATASOURCES: Datasource[] = [
  // CRM & Sales
  {
    value: "salesforce",
    label: "Salesforce",
    logo: getLogoUrl("salesforce.com"),
  },
  { value: "hubspot", label: "HubSpot", logo: getLogoUrl("hubspot.com") },
  { value: "pipedrive", label: "Pipedrive", logo: getLogoUrl("pipedrive.com") },
  { value: "zoho-crm", label: "Zoho CRM", logo: getLogoUrl("zoho.com") },
  { value: "close", label: "Close", logo: getLogoUrl("close.com") },
  { value: "copper", label: "Copper", logo: getLogoUrl("copper.com") },
  {
    value: "freshsales",
    label: "Freshsales",
    logo: getLogoUrl("freshworks.com"),
  },
  { value: "insightly", label: "Insightly", logo: getLogoUrl("insightly.com") },
  { value: "nutshell", label: "Nutshell", logo: getLogoUrl("nutshell.com") },
  {
    value: "zendesk-sell",
    label: "Zendesk Sell",
    logo: getLogoUrl("zendesk.com"),
  },

  // Marketing & Email
  { value: "mailchimp", label: "Mailchimp", logo: getLogoUrl("mailchimp.com") },
  { value: "klaviyo", label: "Klaviyo", logo: getLogoUrl("klaviyo.com") },
  { value: "sendgrid", label: "SendGrid", logo: getLogoUrl("sendgrid.com") },
  { value: "mailgun", label: "Mailgun", logo: getLogoUrl("mailgun.com") },
  {
    value: "constant-contact",
    label: "Constant Contact",
    logo: getLogoUrl("constantcontact.com"),
  },
  {
    value: "campaign-monitor",
    label: "Campaign Monitor",
    logo: getLogoUrl("campaignmonitor.com"),
  },
  {
    value: "activecampaign",
    label: "ActiveCampaign",
    logo: getLogoUrl("activecampaign.com"),
  },
  { value: "drip", label: "Drip", logo: getLogoUrl("drip.com") },
  {
    value: "convertkit",
    label: "ConvertKit",
    logo: getLogoUrl("convertkit.com"),
  },
  { value: "brevo", label: "Brevo", logo: getLogoUrl("brevo.com") },

  // Communication
  { value: "gmail", label: "Gmail", logo: getLogoUrl("gmail.com") },
  { value: "outlook", label: "Outlook", logo: getLogoUrl("outlook.com") },
  { value: "slack", label: "Slack", logo: getLogoUrl("slack.com") },
  {
    value: "microsoft-teams",
    label: "Microsoft Teams",
    logo: getLogoUrl("microsoft.com"),
  },
  { value: "zoom", label: "Zoom", logo: getLogoUrl("zoom.us") },
  { value: "discord", label: "Discord", logo: getLogoUrl("discord.com") },
  { value: "intercom", label: "Intercom", logo: getLogoUrl("intercom.com") },
  { value: "zendesk", label: "Zendesk", logo: getLogoUrl("zendesk.com") },
  { value: "freshdesk", label: "Freshdesk", logo: getLogoUrl("freshdesk.com") },
  { value: "crisp", label: "Crisp", logo: getLogoUrl("crisp.chat") },

  // Analytics & BI
  {
    value: "google-analytics",
    label: "Google Analytics",
    logo: getLogoUrl("analytics.google.com"),
  },
  { value: "mixpanel", label: "Mixpanel", logo: getLogoUrl("mixpanel.com") },
  { value: "amplitude", label: "Amplitude", logo: getLogoUrl("amplitude.com") },
  { value: "segment", label: "Segment", logo: getLogoUrl("segment.com") },
  { value: "heap", label: "Heap", logo: getLogoUrl("heap.io") },
  { value: "posthog", label: "PostHog", logo: getLogoUrl("posthog.com") },
  { value: "looker", label: "Looker", logo: getLogoUrl("looker.com") },
  { value: "tableau", label: "Tableau", logo: getLogoUrl("tableau.com") },
  {
    value: "power-bi",
    label: "Power BI",
    logo: getLogoUrl("powerbi.microsoft.com"),
  },
  { value: "metabase", label: "Metabase", logo: getLogoUrl("metabase.com") },

  // Project Management
  { value: "jira", label: "Jira", logo: getLogoUrl("jira.atlassian.com") },
  { value: "asana", label: "Asana", logo: getLogoUrl("asana.com") },
  { value: "monday", label: "Monday.com", logo: getLogoUrl("monday.com") },
  { value: "trello", label: "Trello", logo: getLogoUrl("trello.com") },
  { value: "notion", label: "Notion", logo: getLogoUrl("notion.so") },
  { value: "clickup", label: "ClickUp", logo: getLogoUrl("clickup.com") },
  { value: "basecamp", label: "Basecamp", logo: getLogoUrl("basecamp.com") },
  { value: "linear", label: "Linear", logo: getLogoUrl("linear.app") },
  { value: "wrike", label: "Wrike", logo: getLogoUrl("wrike.com") },
  { value: "teamwork", label: "Teamwork", logo: getLogoUrl("teamwork.com") },

  // E-commerce
  { value: "shopify", label: "Shopify", logo: getLogoUrl("shopify.com") },
  {
    value: "woocommerce",
    label: "WooCommerce",
    logo: getLogoUrl("woocommerce.com"),
  },
  {
    value: "bigcommerce",
    label: "BigCommerce",
    logo: getLogoUrl("bigcommerce.com"),
  },
  { value: "magento", label: "Magento", logo: getLogoUrl("magento.com") },
  { value: "stripe", label: "Stripe", logo: getLogoUrl("stripe.com") },
  { value: "square", label: "Square", logo: getLogoUrl("squareup.com") },
  { value: "paypal", label: "PayPal", logo: getLogoUrl("paypal.com") },
  {
    value: "amazon-seller",
    label: "Amazon Seller",
    logo: getLogoUrl("amazon.com"),
  },
  { value: "ebay", label: "eBay", logo: getLogoUrl("ebay.com") },
  { value: "etsy", label: "Etsy", logo: getLogoUrl("etsy.com") },

  // Cloud Storage & Documents
  {
    value: "google-drive",
    label: "Google Drive",
    logo: getLogoUrl("drive.google.com"),
  },
  { value: "dropbox", label: "Dropbox", logo: getLogoUrl("dropbox.com") },
  { value: "box", label: "Box", logo: getLogoUrl("box.com") },
  {
    value: "onedrive",
    label: "OneDrive",
    logo: getLogoUrl("onedrive.live.com"),
  },
  {
    value: "sharepoint",
    label: "SharePoint",
    logo: getLogoUrl("sharepoint.com"),
  },
  {
    value: "google-sheets",
    label: "Google Sheets",
    logo: getLogoUrl("sheets.google.com"),
  },
  { value: "airtable", label: "Airtable", logo: getLogoUrl("airtable.com") },
  { value: "coda", label: "Coda", logo: getLogoUrl("coda.io") },
  {
    value: "confluence",
    label: "Confluence",
    logo: getLogoUrl("atlassian.com"),
  },
  { value: "evernote", label: "Evernote", logo: getLogoUrl("evernote.com") },

  // Databases
  {
    value: "postgresql",
    label: "PostgreSQL",
    logo: getLogoUrl("postgresql.org"),
  },
  { value: "mysql", label: "MySQL", logo: getLogoUrl("mysql.com") },
  { value: "mongodb", label: "MongoDB", logo: getLogoUrl("mongodb.com") },
  { value: "redis", label: "Redis", logo: getLogoUrl("redis.io") },
  {
    value: "elasticsearch",
    label: "Elasticsearch",
    logo: getLogoUrl("elastic.co"),
  },
  { value: "snowflake", label: "Snowflake", logo: getLogoUrl("snowflake.com") },
  {
    value: "bigquery",
    label: "BigQuery",
    logo: getLogoUrl("cloud.google.com"),
  },
  { value: "redshift", label: "Redshift", logo: getLogoUrl("aws.amazon.com") },
  {
    value: "databricks",
    label: "Databricks",
    logo: getLogoUrl("databricks.com"),
  },
  { value: "supabase", label: "Supabase", logo: getLogoUrl("supabase.com") },

  // Development & DevOps
  { value: "github", label: "GitHub", logo: getLogoUrl("github.com") },
  { value: "gitlab", label: "GitLab", logo: getLogoUrl("gitlab.com") },
  { value: "bitbucket", label: "Bitbucket", logo: getLogoUrl("bitbucket.org") },
  { value: "vercel", label: "Vercel", logo: getLogoUrl("vercel.com") },
  { value: "netlify", label: "Netlify", logo: getLogoUrl("netlify.com") },
  { value: "aws", label: "AWS", logo: getLogoUrl("aws.amazon.com") },
  {
    value: "google-cloud",
    label: "Google Cloud",
    logo: getLogoUrl("cloud.google.com"),
  },
  { value: "azure", label: "Azure", logo: getLogoUrl("azure.microsoft.com") },
  { value: "heroku", label: "Heroku", logo: getLogoUrl("heroku.com") },
  {
    value: "digitalocean",
    label: "DigitalOcean",
    logo: getLogoUrl("digitalocean.com"),
  },

  // HR & Recruiting
  { value: "workday", label: "Workday", logo: getLogoUrl("workday.com") },
  { value: "bamboohr", label: "BambooHR", logo: getLogoUrl("bamboohr.com") },
  {
    value: "greenhouse",
    label: "Greenhouse",
    logo: getLogoUrl("greenhouse.io"),
  },
  { value: "lever", label: "Lever", logo: getLogoUrl("lever.co") },
  { value: "gusto", label: "Gusto", logo: getLogoUrl("gusto.com") },
  { value: "rippling", label: "Rippling", logo: getLogoUrl("rippling.com") },
  { value: "adp", label: "ADP", logo: getLogoUrl("adp.com") },
  { value: "paychex", label: "Paychex", logo: getLogoUrl("paychex.com") },
  {
    value: "linkedin-recruiter",
    label: "LinkedIn Recruiter",
    logo: getLogoUrl("linkedin.com"),
  },
  { value: "indeed", label: "Indeed", logo: getLogoUrl("indeed.com") },

  // Accounting & Finance
  {
    value: "quickbooks",
    label: "QuickBooks",
    logo: getLogoUrl("quickbooks.intuit.com"),
  },
  { value: "xero", label: "Xero", logo: getLogoUrl("xero.com") },
  {
    value: "freshbooks",
    label: "FreshBooks",
    logo: getLogoUrl("freshbooks.com"),
  },
  { value: "wave", label: "Wave", logo: getLogoUrl("waveapps.com") },
  { value: "sage", label: "Sage", logo: getLogoUrl("sage.com") },
  { value: "netsuite", label: "NetSuite", logo: getLogoUrl("netsuite.com") },
  { value: "brex", label: "Brex", logo: getLogoUrl("brex.com") },
  { value: "ramp", label: "Ramp", logo: getLogoUrl("ramp.com") },
  { value: "bill", label: "Bill.com", logo: getLogoUrl("bill.com") },
  { value: "plaid", label: "Plaid", logo: getLogoUrl("plaid.com") },

  // Social Media
  { value: "facebook", label: "Facebook", logo: getLogoUrl("facebook.com") },
  { value: "instagram", label: "Instagram", logo: getLogoUrl("instagram.com") },
  { value: "twitter", label: "Twitter/X", logo: getLogoUrl("x.com") },
  { value: "linkedin", label: "LinkedIn", logo: getLogoUrl("linkedin.com") },
  { value: "tiktok", label: "TikTok", logo: getLogoUrl("tiktok.com") },
  { value: "youtube", label: "YouTube", logo: getLogoUrl("youtube.com") },
  { value: "pinterest", label: "Pinterest", logo: getLogoUrl("pinterest.com") },
  { value: "reddit", label: "Reddit", logo: getLogoUrl("reddit.com") },
  { value: "buffer", label: "Buffer", logo: getLogoUrl("buffer.com") },
  { value: "hootsuite", label: "Hootsuite", logo: getLogoUrl("hootsuite.com") },

  // Ads & Marketing Platforms
  {
    value: "google-ads",
    label: "Google Ads",
    logo: getLogoUrl("ads.google.com"),
  },
  {
    value: "facebook-ads",
    label: "Facebook Ads",
    logo: getLogoUrl("facebook.com"),
  },
  {
    value: "linkedin-ads",
    label: "LinkedIn Ads",
    logo: getLogoUrl("linkedin.com"),
  },
  { value: "twitter-ads", label: "Twitter Ads", logo: getLogoUrl("x.com") },
  { value: "tiktok-ads", label: "TikTok Ads", logo: getLogoUrl("tiktok.com") },
  { value: "bing-ads", label: "Bing Ads", logo: getLogoUrl("bing.com") },
  { value: "amazon-ads", label: "Amazon Ads", logo: getLogoUrl("amazon.com") },
  { value: "criteo", label: "Criteo", logo: getLogoUrl("criteo.com") },
  { value: "taboola", label: "Taboola", logo: getLogoUrl("taboola.com") },
  { value: "outbrain", label: "Outbrain", logo: getLogoUrl("outbrain.com") },

  // Customer Success & Support
  { value: "gainsight", label: "Gainsight", logo: getLogoUrl("gainsight.com") },
  { value: "churnzero", label: "ChurnZero", logo: getLogoUrl("churnzero.net") },
  { value: "totango", label: "Totango", logo: getLogoUrl("totango.com") },
  {
    value: "helpscout",
    label: "Help Scout",
    logo: getLogoUrl("helpscout.com"),
  },
  { value: "front", label: "Front", logo: getLogoUrl("front.com") },
  { value: "gladly", label: "Gladly", logo: getLogoUrl("gladly.com") },
  { value: "gorgias", label: "Gorgias", logo: getLogoUrl("gorgias.com") },
  { value: "kustomer", label: "Kustomer", logo: getLogoUrl("kustomer.com") },
  { value: "drift", label: "Drift", logo: getLogoUrl("drift.com") },
  { value: "qualified", label: "Qualified", logo: getLogoUrl("qualified.com") },
];
