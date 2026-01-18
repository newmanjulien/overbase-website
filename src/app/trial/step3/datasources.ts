export interface Datasource {
  value: string;
  label: string;
  logo: string;
}

export const DATASOURCES: Datasource[] = [
  // CRM & Sales
  {
    value: "salesforce",
    label: "Salesforce",
    logo: "https://logo.clearbit.com/salesforce.com",
  },
  {
    value: "hubspot",
    label: "HubSpot",
    logo: "https://logo.clearbit.com/hubspot.com",
  },
  {
    value: "pipedrive",
    label: "Pipedrive",
    logo: "https://logo.clearbit.com/pipedrive.com",
  },
  {
    value: "zoho-crm",
    label: "Zoho CRM",
    logo: "https://logo.clearbit.com/zoho.com",
  },
  {
    value: "close",
    label: "Close",
    logo: "https://logo.clearbit.com/close.com",
  },
  {
    value: "copper",
    label: "Copper",
    logo: "https://logo.clearbit.com/copper.com",
  },
  {
    value: "freshsales",
    label: "Freshsales",
    logo: "https://logo.clearbit.com/freshworks.com",
  },
  {
    value: "insightly",
    label: "Insightly",
    logo: "https://logo.clearbit.com/insightly.com",
  },
  {
    value: "nutshell",
    label: "Nutshell",
    logo: "https://logo.clearbit.com/nutshell.com",
  },
  {
    value: "zendesk-sell",
    label: "Zendesk Sell",
    logo: "https://logo.clearbit.com/zendesk.com",
  },

  // Marketing & Email
  {
    value: "mailchimp",
    label: "Mailchimp",
    logo: "https://logo.clearbit.com/mailchimp.com",
  },
  {
    value: "klaviyo",
    label: "Klaviyo",
    logo: "https://logo.clearbit.com/klaviyo.com",
  },
  {
    value: "sendgrid",
    label: "SendGrid",
    logo: "https://logo.clearbit.com/sendgrid.com",
  },
  {
    value: "mailgun",
    label: "Mailgun",
    logo: "https://logo.clearbit.com/mailgun.com",
  },
  {
    value: "constant-contact",
    label: "Constant Contact",
    logo: "https://logo.clearbit.com/constantcontact.com",
  },
  {
    value: "campaign-monitor",
    label: "Campaign Monitor",
    logo: "https://logo.clearbit.com/campaignmonitor.com",
  },
  {
    value: "activecampaign",
    label: "ActiveCampaign",
    logo: "https://logo.clearbit.com/activecampaign.com",
  },
  { value: "drip", label: "Drip", logo: "https://logo.clearbit.com/drip.com" },
  {
    value: "convertkit",
    label: "ConvertKit",
    logo: "https://logo.clearbit.com/convertkit.com",
  },
  {
    value: "brevo",
    label: "Brevo",
    logo: "https://logo.clearbit.com/brevo.com",
  },

  // Communication
  {
    value: "gmail",
    label: "Gmail",
    logo: "https://logo.clearbit.com/gmail.com",
  },
  {
    value: "outlook",
    label: "Outlook",
    logo: "https://logo.clearbit.com/outlook.com",
  },
  {
    value: "slack",
    label: "Slack",
    logo: "https://logo.clearbit.com/slack.com",
  },
  {
    value: "microsoft-teams",
    label: "Microsoft Teams",
    logo: "https://logo.clearbit.com/microsoft.com",
  },
  { value: "zoom", label: "Zoom", logo: "https://logo.clearbit.com/zoom.us" },
  {
    value: "discord",
    label: "Discord",
    logo: "https://logo.clearbit.com/discord.com",
  },
  {
    value: "intercom",
    label: "Intercom",
    logo: "https://logo.clearbit.com/intercom.com",
  },
  {
    value: "zendesk",
    label: "Zendesk",
    logo: "https://logo.clearbit.com/zendesk.com",
  },
  {
    value: "freshdesk",
    label: "Freshdesk",
    logo: "https://logo.clearbit.com/freshdesk.com",
  },
  {
    value: "crisp",
    label: "Crisp",
    logo: "https://logo.clearbit.com/crisp.chat",
  },

  // Analytics & BI
  {
    value: "google-analytics",
    label: "Google Analytics",
    logo: "https://logo.clearbit.com/analytics.google.com",
  },
  {
    value: "mixpanel",
    label: "Mixpanel",
    logo: "https://logo.clearbit.com/mixpanel.com",
  },
  {
    value: "amplitude",
    label: "Amplitude",
    logo: "https://logo.clearbit.com/amplitude.com",
  },
  {
    value: "segment",
    label: "Segment",
    logo: "https://logo.clearbit.com/segment.com",
  },
  { value: "heap", label: "Heap", logo: "https://logo.clearbit.com/heap.io" },
  {
    value: "posthog",
    label: "PostHog",
    logo: "https://logo.clearbit.com/posthog.com",
  },
  {
    value: "looker",
    label: "Looker",
    logo: "https://logo.clearbit.com/looker.com",
  },
  {
    value: "tableau",
    label: "Tableau",
    logo: "https://logo.clearbit.com/tableau.com",
  },
  {
    value: "power-bi",
    label: "Power BI",
    logo: "https://logo.clearbit.com/powerbi.microsoft.com",
  },
  {
    value: "metabase",
    label: "Metabase",
    logo: "https://logo.clearbit.com/metabase.com",
  },

  // Project Management
  {
    value: "jira",
    label: "Jira",
    logo: "https://logo.clearbit.com/jira.atlassian.com",
  },
  {
    value: "asana",
    label: "Asana",
    logo: "https://logo.clearbit.com/asana.com",
  },
  {
    value: "monday",
    label: "Monday.com",
    logo: "https://logo.clearbit.com/monday.com",
  },
  {
    value: "trello",
    label: "Trello",
    logo: "https://logo.clearbit.com/trello.com",
  },
  {
    value: "notion",
    label: "Notion",
    logo: "https://logo.clearbit.com/notion.so",
  },
  {
    value: "clickup",
    label: "ClickUp",
    logo: "https://logo.clearbit.com/clickup.com",
  },
  {
    value: "basecamp",
    label: "Basecamp",
    logo: "https://logo.clearbit.com/basecamp.com",
  },
  {
    value: "linear",
    label: "Linear",
    logo: "https://logo.clearbit.com/linear.app",
  },
  {
    value: "wrike",
    label: "Wrike",
    logo: "https://logo.clearbit.com/wrike.com",
  },
  {
    value: "teamwork",
    label: "Teamwork",
    logo: "https://logo.clearbit.com/teamwork.com",
  },

  // E-commerce
  {
    value: "shopify",
    label: "Shopify",
    logo: "https://logo.clearbit.com/shopify.com",
  },
  {
    value: "woocommerce",
    label: "WooCommerce",
    logo: "https://logo.clearbit.com/woocommerce.com",
  },
  {
    value: "bigcommerce",
    label: "BigCommerce",
    logo: "https://logo.clearbit.com/bigcommerce.com",
  },
  {
    value: "magento",
    label: "Magento",
    logo: "https://logo.clearbit.com/magento.com",
  },
  {
    value: "stripe",
    label: "Stripe",
    logo: "https://logo.clearbit.com/stripe.com",
  },
  {
    value: "square",
    label: "Square",
    logo: "https://logo.clearbit.com/squareup.com",
  },
  {
    value: "paypal",
    label: "PayPal",
    logo: "https://logo.clearbit.com/paypal.com",
  },
  {
    value: "amazon-seller",
    label: "Amazon Seller",
    logo: "https://logo.clearbit.com/amazon.com",
  },
  { value: "ebay", label: "eBay", logo: "https://logo.clearbit.com/ebay.com" },
  { value: "etsy", label: "Etsy", logo: "https://logo.clearbit.com/etsy.com" },

  // Cloud Storage & Documents
  {
    value: "google-drive",
    label: "Google Drive",
    logo: "https://logo.clearbit.com/drive.google.com",
  },
  {
    value: "dropbox",
    label: "Dropbox",
    logo: "https://logo.clearbit.com/dropbox.com",
  },
  { value: "box", label: "Box", logo: "https://logo.clearbit.com/box.com" },
  {
    value: "onedrive",
    label: "OneDrive",
    logo: "https://logo.clearbit.com/onedrive.live.com",
  },
  {
    value: "sharepoint",
    label: "SharePoint",
    logo: "https://logo.clearbit.com/sharepoint.com",
  },
  {
    value: "google-sheets",
    label: "Google Sheets",
    logo: "https://logo.clearbit.com/sheets.google.com",
  },
  {
    value: "airtable",
    label: "Airtable",
    logo: "https://logo.clearbit.com/airtable.com",
  },
  { value: "coda", label: "Coda", logo: "https://logo.clearbit.com/coda.io" },
  {
    value: "confluence",
    label: "Confluence",
    logo: "https://logo.clearbit.com/atlassian.com",
  },
  {
    value: "evernote",
    label: "Evernote",
    logo: "https://logo.clearbit.com/evernote.com",
  },

  // Databases
  {
    value: "postgresql",
    label: "PostgreSQL",
    logo: "https://logo.clearbit.com/postgresql.org",
  },
  {
    value: "mysql",
    label: "MySQL",
    logo: "https://logo.clearbit.com/mysql.com",
  },
  {
    value: "mongodb",
    label: "MongoDB",
    logo: "https://logo.clearbit.com/mongodb.com",
  },
  {
    value: "redis",
    label: "Redis",
    logo: "https://logo.clearbit.com/redis.io",
  },
  {
    value: "elasticsearch",
    label: "Elasticsearch",
    logo: "https://logo.clearbit.com/elastic.co",
  },
  {
    value: "snowflake",
    label: "Snowflake",
    logo: "https://logo.clearbit.com/snowflake.com",
  },
  {
    value: "bigquery",
    label: "BigQuery",
    logo: "https://logo.clearbit.com/cloud.google.com",
  },
  {
    value: "redshift",
    label: "Redshift",
    logo: "https://logo.clearbit.com/aws.amazon.com",
  },
  {
    value: "databricks",
    label: "Databricks",
    logo: "https://logo.clearbit.com/databricks.com",
  },
  {
    value: "supabase",
    label: "Supabase",
    logo: "https://logo.clearbit.com/supabase.com",
  },

  // Development & DevOps
  {
    value: "github",
    label: "GitHub",
    logo: "https://logo.clearbit.com/github.com",
  },
  {
    value: "gitlab",
    label: "GitLab",
    logo: "https://logo.clearbit.com/gitlab.com",
  },
  {
    value: "bitbucket",
    label: "Bitbucket",
    logo: "https://logo.clearbit.com/bitbucket.org",
  },
  {
    value: "vercel",
    label: "Vercel",
    logo: "https://logo.clearbit.com/vercel.com",
  },
  {
    value: "netlify",
    label: "Netlify",
    logo: "https://logo.clearbit.com/netlify.com",
  },
  {
    value: "aws",
    label: "AWS",
    logo: "https://logo.clearbit.com/aws.amazon.com",
  },
  {
    value: "google-cloud",
    label: "Google Cloud",
    logo: "https://logo.clearbit.com/cloud.google.com",
  },
  {
    value: "azure",
    label: "Azure",
    logo: "https://logo.clearbit.com/azure.microsoft.com",
  },
  {
    value: "heroku",
    label: "Heroku",
    logo: "https://logo.clearbit.com/heroku.com",
  },
  {
    value: "digitalocean",
    label: "DigitalOcean",
    logo: "https://logo.clearbit.com/digitalocean.com",
  },

  // HR & Recruiting
  {
    value: "workday",
    label: "Workday",
    logo: "https://logo.clearbit.com/workday.com",
  },
  {
    value: "bamboohr",
    label: "BambooHR",
    logo: "https://logo.clearbit.com/bamboohr.com",
  },
  {
    value: "greenhouse",
    label: "Greenhouse",
    logo: "https://logo.clearbit.com/greenhouse.io",
  },
  {
    value: "lever",
    label: "Lever",
    logo: "https://logo.clearbit.com/lever.co",
  },
  {
    value: "gusto",
    label: "Gusto",
    logo: "https://logo.clearbit.com/gusto.com",
  },
  {
    value: "rippling",
    label: "Rippling",
    logo: "https://logo.clearbit.com/rippling.com",
  },
  { value: "adp", label: "ADP", logo: "https://logo.clearbit.com/adp.com" },
  {
    value: "paychex",
    label: "Paychex",
    logo: "https://logo.clearbit.com/paychex.com",
  },
  {
    value: "linkedin-recruiter",
    label: "LinkedIn Recruiter",
    logo: "https://logo.clearbit.com/linkedin.com",
  },
  {
    value: "indeed",
    label: "Indeed",
    logo: "https://logo.clearbit.com/indeed.com",
  },

  // Accounting & Finance
  {
    value: "quickbooks",
    label: "QuickBooks",
    logo: "https://logo.clearbit.com/quickbooks.intuit.com",
  },
  { value: "xero", label: "Xero", logo: "https://logo.clearbit.com/xero.com" },
  {
    value: "freshbooks",
    label: "FreshBooks",
    logo: "https://logo.clearbit.com/freshbooks.com",
  },
  {
    value: "wave",
    label: "Wave",
    logo: "https://logo.clearbit.com/waveapps.com",
  },
  { value: "sage", label: "Sage", logo: "https://logo.clearbit.com/sage.com" },
  {
    value: "netsuite",
    label: "NetSuite",
    logo: "https://logo.clearbit.com/netsuite.com",
  },
  { value: "brex", label: "Brex", logo: "https://logo.clearbit.com/brex.com" },
  { value: "ramp", label: "Ramp", logo: "https://logo.clearbit.com/ramp.com" },
  {
    value: "bill",
    label: "Bill.com",
    logo: "https://logo.clearbit.com/bill.com",
  },
  {
    value: "plaid",
    label: "Plaid",
    logo: "https://logo.clearbit.com/plaid.com",
  },

  // Social Media
  {
    value: "facebook",
    label: "Facebook",
    logo: "https://logo.clearbit.com/facebook.com",
  },
  {
    value: "instagram",
    label: "Instagram",
    logo: "https://logo.clearbit.com/instagram.com",
  },
  {
    value: "twitter",
    label: "Twitter/X",
    logo: "https://logo.clearbit.com/x.com",
  },
  {
    value: "linkedin",
    label: "LinkedIn",
    logo: "https://logo.clearbit.com/linkedin.com",
  },
  {
    value: "tiktok",
    label: "TikTok",
    logo: "https://logo.clearbit.com/tiktok.com",
  },
  {
    value: "youtube",
    label: "YouTube",
    logo: "https://logo.clearbit.com/youtube.com",
  },
  {
    value: "pinterest",
    label: "Pinterest",
    logo: "https://logo.clearbit.com/pinterest.com",
  },
  {
    value: "reddit",
    label: "Reddit",
    logo: "https://logo.clearbit.com/reddit.com",
  },
  {
    value: "buffer",
    label: "Buffer",
    logo: "https://logo.clearbit.com/buffer.com",
  },
  {
    value: "hootsuite",
    label: "Hootsuite",
    logo: "https://logo.clearbit.com/hootsuite.com",
  },

  // Ads & Marketing Platforms
  {
    value: "google-ads",
    label: "Google Ads",
    logo: "https://logo.clearbit.com/ads.google.com",
  },
  {
    value: "facebook-ads",
    label: "Facebook Ads",
    logo: "https://logo.clearbit.com/facebook.com",
  },
  {
    value: "linkedin-ads",
    label: "LinkedIn Ads",
    logo: "https://logo.clearbit.com/linkedin.com",
  },
  {
    value: "twitter-ads",
    label: "Twitter Ads",
    logo: "https://logo.clearbit.com/x.com",
  },
  {
    value: "tiktok-ads",
    label: "TikTok Ads",
    logo: "https://logo.clearbit.com/tiktok.com",
  },
  {
    value: "bing-ads",
    label: "Bing Ads",
    logo: "https://logo.clearbit.com/bing.com",
  },
  {
    value: "amazon-ads",
    label: "Amazon Ads",
    logo: "https://logo.clearbit.com/amazon.com",
  },
  {
    value: "criteo",
    label: "Criteo",
    logo: "https://logo.clearbit.com/criteo.com",
  },
  {
    value: "taboola",
    label: "Taboola",
    logo: "https://logo.clearbit.com/taboola.com",
  },
  {
    value: "outbrain",
    label: "Outbrain",
    logo: "https://logo.clearbit.com/outbrain.com",
  },

  // Customer Success & Support
  {
    value: "gainsight",
    label: "Gainsight",
    logo: "https://logo.clearbit.com/gainsight.com",
  },
  {
    value: "churnzero",
    label: "ChurnZero",
    logo: "https://logo.clearbit.com/churnzero.net",
  },
  {
    value: "totango",
    label: "Totango",
    logo: "https://logo.clearbit.com/totango.com",
  },
  {
    value: "helpscout",
    label: "Help Scout",
    logo: "https://logo.clearbit.com/helpscout.com",
  },
  {
    value: "front",
    label: "Front",
    logo: "https://logo.clearbit.com/front.com",
  },
  {
    value: "gladly",
    label: "Gladly",
    logo: "https://logo.clearbit.com/gladly.com",
  },
  {
    value: "gorgias",
    label: "Gorgias",
    logo: "https://logo.clearbit.com/gorgias.com",
  },
  {
    value: "kustomer",
    label: "Kustomer",
    logo: "https://logo.clearbit.com/kustomer.com",
  },
  {
    value: "drift",
    label: "Drift",
    logo: "https://logo.clearbit.com/drift.com",
  },
  {
    value: "qualified",
    label: "Qualified",
    logo: "https://logo.clearbit.com/qualified.com",
  },
];
