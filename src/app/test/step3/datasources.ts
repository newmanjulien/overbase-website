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
  {
    value: "linkedin-sales",
    label: "LinkedIn Sales Navigator",
    logo: getLogoUrl("linkedin.com"),
  },
  { value: "affinity", label: "Affinity", logo: getLogoUrl("affinity.co") },
  { value: "attio", label: "Attio", logo: getLogoUrl("attio.com") },
  { value: "clari", label: "Clari", logo: getLogoUrl("clari.com") },
  { value: "salesloft", label: "Salesloft", logo: getLogoUrl("salesloft.com") },
  { value: "outreach", label: "Outreach", logo: getLogoUrl("outreach.io") },
  { value: "gong", label: "Gong.io", logo: getLogoUrl("gong.io") },
  { value: "chorus", label: "Chorus.ai", logo: getLogoUrl("chorus.ai") },
  { value: "sugarcrm", label: "SugarCRM", logo: getLogoUrl("sugarcrm.com") },
  { value: "bigin", label: "Bigin by Zoho CRM", logo: getLogoUrl("zoho.com") },
  { value: "revops", label: "RevOps", logo: getLogoUrl("revops.io") },
  { value: "crossbeam", label: "Crossbeam", logo: getLogoUrl("crossbeam.com") },

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
  { value: "braze", label: "Braze", logo: getLogoUrl("braze.com") },
  { value: "iterable", label: "Iterable", logo: getLogoUrl("iterable.com") },
  {
    value: "customerio",
    label: "Customer.io",
    logo: getLogoUrl("customer.io"),
  },
  { value: "marketo", label: "Marketo", logo: getLogoUrl("marketo.com") },
  { value: "pardot", label: "Pardot", logo: getLogoUrl("salesforce.com") },
  { value: "eloqua", label: "Eloqua", logo: getLogoUrl("oracle.com") },
  { value: "sailthru", label: "Sailthru", logo: getLogoUrl("sailthru.com") },
  { value: "ometria", label: "Ometria", logo: getLogoUrl("ometria.com") },
  { value: "ortto", label: "Ortto", logo: getLogoUrl("ortto.com") },
  { value: "attentive", label: "Attentive", logo: getLogoUrl("attentive.com") },
  { value: "postmark", label: "Postmark", logo: getLogoUrl("postmarkapp.com") },
  { value: "mailjet", label: "Mailjet", logo: getLogoUrl("mailjet.com") },
  { value: "sparkpost", label: "SparkPost", logo: getLogoUrl("sparkpost.com") },
  { value: "mandrill", label: "Mandrill", logo: getLogoUrl("mandrillapp.com") },
  { value: "lemlist", label: "Lemlist", logo: getLogoUrl("lemlist.com") },

  // Communication
  { value: "gmail", label: "Gmail", logo: getLogoUrl("gmail.com") },
  {
    value: "outlook",
    label: "Outlook",
    logo: getLogoUrl("azure.microsoft.com"),
  },
  { value: "slack", label: "Slack", logo: getLogoUrl("slack.com") },
  {
    value: "microsoft-teams",
    label: "Microsoft Teams",
    logo: getLogoUrl("azure.microsoft.com"),
  },
  { value: "zoom", label: "Zoom", logo: getLogoUrl("zoom.us") },
  { value: "discord", label: "Discord", logo: getLogoUrl("discord.com") },
  { value: "intercom", label: "Intercom", logo: getLogoUrl("intercom.com") },
  { value: "zendesk", label: "Zendesk", logo: getLogoUrl("zendesk.com") },
  { value: "freshdesk", label: "Freshdesk", logo: getLogoUrl("freshdesk.com") },
  { value: "crisp", label: "Crisp", logo: getLogoUrl("crisp.chat") },
  {
    value: "linkedin",
    label: "LinkedIn",
    logo: getLogoUrl("linkedin.com"),
  },
  { value: "dialpad", label: "Dialpad", logo: getLogoUrl("dialpad.com") },
  { value: "aircall", label: "Aircall", logo: getLogoUrl("aircall.io") },
  {
    value: "ringcentral",
    label: "RingCentral",
    logo: getLogoUrl("ringcentral.com"),
  },
  { value: "twilio", label: "Twilio", logo: getLogoUrl("twilio.com") },
  { value: "talkdesk", label: "Talkdesk", logo: getLogoUrl("talkdesk.com") },
  { value: "genesys", label: "Genesys", logo: getLogoUrl("genesys.com") },
  {
    value: "vonage",
    label: "Vonage Contact Center",
    logo: getLogoUrl("vonage.com"),
  },
  { value: "livechat", label: "Livechat", logo: getLogoUrl("livechat.com") },
  { value: "dixa", label: "Dixa", logo: getLogoUrl("dixa.com") },
  { value: "ada", label: "Ada", logo: getLogoUrl("ada.cx") },
  { value: "callrail", label: "Callrail", logo: getLogoUrl("callrail.com") },
  { value: "justcall", label: "JustCall", logo: getLogoUrl("justcall.io") },
  { value: "ringover", label: "Ringover", logo: getLogoUrl("ringover.com") },
  { value: "cloudtalk", label: "Cloudtalk", logo: getLogoUrl("cloudtalk.io") },
  { value: "missive", label: "Missive", logo: getLogoUrl("missiveapp.com") },
  { value: "discourse", label: "Discourse", logo: getLogoUrl("discourse.org") },

  // Analytics & BI
  {
    value: "google-analytics",
    label: "Google Analytics",
    logo: getLogoUrl("google.com"),
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
    logo: getLogoUrl("azure.microsoft.com"),
  },
  { value: "metabase", label: "Metabase", logo: getLogoUrl("metabase.com") },
  { value: "fullstory", label: "FullStory", logo: getLogoUrl("fullstory.com") },
  { value: "pendo", label: "Pendo", logo: getLogoUrl("pendo.io") },
  { value: "appcues", label: "Appcues", logo: getLogoUrl("appcues.com") },
  {
    value: "kissmetrics",
    label: "Kissmetrics",
    logo: getLogoUrl("kissmetrics.io"),
  },
  {
    value: "adobe-analytics",
    label: "Adobe Analytics",
    logo: getLogoUrl("adobe.com"),
  },
  { value: "mode", label: "Mode Analytics", logo: getLogoUrl("mode.com") },
  {
    value: "sigma",
    label: "Sigma Computing Source",
    logo: getLogoUrl("sigmacomputing.com"),
  },
  { value: "matomo", label: "Matomo", logo: getLogoUrl("matomo.org") },
  { value: "piwik-pro", label: "Piwik Pro", logo: getLogoUrl("piwik.pro") },
  {
    value: "chartmogul",
    label: "ChartMogul",
    logo: getLogoUrl("chartmogul.com"),
  },
  { value: "hex", label: "Hex", logo: getLogoUrl("hex.tech") },
  { value: "datadog", label: "Datadog", logo: getLogoUrl("datadoghq.com") },
  { value: "splunk", label: "Splunk", logo: getLogoUrl("splunk.com") },
  { value: "snowplow", label: "Snowplow", logo: getLogoUrl("snowplow.io") },
  { value: "statsig", label: "Statsig", logo: getLogoUrl("statsig.com") },
  {
    value: "optimizely",
    label: "Optimizely",
    logo: getLogoUrl("optimizely.com"),
  },
  { value: "vwo", label: "VWO", logo: getLogoUrl("vwo.com") },
  {
    value: "launchdarkly",
    label: "LaunchDarkly",
    logo: getLogoUrl("launchdarkly.com"),
  },
  { value: "split", label: "Split.io", logo: getLogoUrl("split.io") },

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
  { value: "shortcut", label: "Shortcut", logo: getLogoUrl("shortcut.com") },
  { value: "height", label: "Height", logo: getLogoUrl("height.app") },
  { value: "podio", label: "Podio", logo: getLogoUrl("podio.com") },
  {
    value: "rocketlane",
    label: "Rocketlane",
    logo: getLogoUrl("rocketlane.com"),
  },
  {
    value: "productboard",
    label: "Productboard",
    logo: getLogoUrl("productboard.com"),
  },
  { value: "aha", label: "Aha", logo: getLogoUrl("aha.io") },
  { value: "tempo", label: "Tempo.io", logo: getLogoUrl("tempo.io") },
  {
    value: "pivotal-tracker",
    label: "Pivotal Tracker",
    logo: getLogoUrl("pivotaltracker.com"),
  },
  { value: "mavenlink", label: "Mavenlink", logo: getLogoUrl("mavenlink.com") },
  {
    value: "productive",
    label: "Productive",
    logo: getLogoUrl("productive.io"),
  },
  { value: "clockify", label: "Clockify", logo: getLogoUrl("clockify.me") },
  { value: "clockodo", label: "Clockodo", logo: getLogoUrl("clockodo.com") },
  { value: "toggl", label: "Toggl", logo: getLogoUrl("toggl.com") },
  { value: "harvest", label: "Harvest", logo: getLogoUrl("getharvest.com") },
  { value: "everhour", label: "Everhour", logo: getLogoUrl("everhour.com") },
  { value: "float", label: "Float", logo: getLogoUrl("float.com") },
  {
    value: "jira-align",
    label: "Atlassian Jira Align",
    logo: getLogoUrl("atlassian.com"),
  },
  {
    value: "opsgenie",
    label: "Atlassian Ops Genie",
    logo: getLogoUrl("atlassian.com"),
  },

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
  { value: "chargebee", label: "Chargebee", logo: getLogoUrl("chargebee.com") },
  { value: "recurly", label: "Recurly", logo: getLogoUrl("recurly.com") },
  {
    value: "recharge",
    label: "ReCharge",
    logo: getLogoUrl("rechargepayments.com"),
  },
  {
    value: "braintree",
    label: "Braintree",
    logo: getLogoUrl("braintreepayments.com"),
  },
  { value: "adyen", label: "Adyen", logo: getLogoUrl("adyen.com") },
  { value: "klarna", label: "Klarna", logo: getLogoUrl("klarna.com") },
  { value: "afterpay", label: "Afterpay", logo: getLogoUrl("afterpay.com") },
  { value: "paddle", label: "Paddle", logo: getLogoUrl("paddle.com") },
  {
    value: "gocardless",
    label: "GoCardless",
    logo: getLogoUrl("gocardless.com"),
  },
  { value: "checkout", label: "Checkout", logo: getLogoUrl("checkout.com") },
  { value: "zuora", label: "Zuora", logo: getLogoUrl("zuora.com") },
  {
    value: "maxio-chargify",
    label: "Maxio Chargify",
    logo: getLogoUrl("maxio.com"),
  },
  {
    value: "maxio-saasoptics",
    label: "Maxio SaaSOptics",
    logo: getLogoUrl("maxio.com"),
  },
  { value: "cin7", label: "Cin7", logo: getLogoUrl("cin7.com") },
  { value: "cin7-core", label: "Cin7 Core", logo: getLogoUrl("cin7.com") },
  {
    value: "brightpearl",
    label: "Brightpearl",
    logo: getLogoUrl("brightpearl.com"),
  },
  {
    value: "commercetools",
    label: "Commercetools",
    logo: getLogoUrl("commercetools.com"),
  },
  {
    value: "adobe-commerce",
    label: "Adobe Commerce",
    logo: getLogoUrl("adobe.com"),
  },
  {
    value: "prestashop",
    label: "PrestaShop",
    logo: getLogoUrl("prestashop.com"),
  },
  {
    value: "spree-commerce",
    label: "Spree Commerce",
    logo: getLogoUrl("spreecommerce.org"),
  },
  {
    value: "squarespace",
    label: "Squarespace",
    logo: getLogoUrl("squarespace.com"),
  },
  { value: "shopware", label: "Shopware", logo: getLogoUrl("shopware.com") },
  {
    value: "lightspeed",
    label: "Lightspeed Retail",
    logo: getLogoUrl("lightspeedhq.com"),
  },
  {
    value: "heartland-pos",
    label: "Heartland Retail POS",
    logo: getLogoUrl("heartland.us"),
  },
  { value: "revel", label: "Revel", logo: getLogoUrl("revelsystems.com") },
  {
    value: "salesforce-commerce",
    label: "Salesforce Commerce Cloud",
    logo: getLogoUrl("salesforce.com"),
  },
  {
    value: "walmart-marketplace",
    label: "Walmart Marketplace",
    logo: getLogoUrl("walmart.com"),
  },
  { value: "yotpo", label: "Yotpo", logo: getLogoUrl("yotpo.com") },
  { value: "okendo", label: "Okendo", logo: getLogoUrl("okendo.io") },
  { value: "reviewsio", label: "REVIEWS.io", logo: getLogoUrl("reviews.io") },
  {
    value: "bazaarvoice",
    label: "Bazaarvoice",
    logo: getLogoUrl("bazaarvoice.com"),
  },
  {
    value: "triple-whale",
    label: "Triple Whale",
    logo: getLogoUrl("triplewhale.com"),
  },
  {
    value: "revenuecat",
    label: "Revenuecat",
    logo: getLogoUrl("revenuecat.com"),
  },
  {
    value: "shipstation",
    label: "ShipStation",
    logo: getLogoUrl("shipstation.com"),
  },

  // Cloud Storage & Documents
  {
    value: "google-drive",
    label: "Google Drive",
    logo: getLogoUrl("google.com"),
  },
  { value: "dropbox", label: "Dropbox", logo: getLogoUrl("dropbox.com") },
  { value: "box", label: "Box", logo: getLogoUrl("box.com") },
  {
    value: "onedrive",
    label: "OneDrive",
    logo: getLogoUrl("azure.microsoft.com"),
  },
  {
    value: "sharepoint",
    label: "SharePoint",
    logo: getLogoUrl("azure.microsoft.com"),
  },
  {
    value: "microsoft-word",
    label: "Microsoft Word",
    logo: getLogoUrl("azure.microsoft.com"),
  },
  {
    value: "microsoft-excel",
    label: "Microsoft Excel",
    logo: getLogoUrl("azure.microsoft.com"),
  },
  {
    value: "microsoft-powerpoint",
    label: "Microsoft PowerPoint",
    logo: getLogoUrl("azure.microsoft.com"),
  },
  {
    value: "microsoft-365",
    label: "Microsoft 365",
    logo: getLogoUrl("azure.microsoft.com"),
  },
  {
    value: "google-sheets",
    label: "Google Sheets",
    logo: getLogoUrl("google.com"),
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
    logo: getLogoUrl("google.com"),
  },
  { value: "redshift", label: "Redshift", logo: getLogoUrl("aws.amazon.com") },
  {
    value: "databricks",
    label: "Databricks",
    logo: getLogoUrl("databricks.com"),
  },
  { value: "supabase", label: "Supabase", logo: getLogoUrl("supabase.com") },
  {
    value: "planetscale",
    label: "PlanetScale",
    logo: getLogoUrl("planetscale.com"),
  },
  { value: "neon", label: "Neon", logo: getLogoUrl("neon.tech") },
  {
    value: "cockroachdb",
    label: "CockroachDB",
    logo: getLogoUrl("cockroachlabs.com"),
  },
  { value: "fauna", label: "Fauna", logo: getLogoUrl("fauna.com") },
  { value: "dynamodb", label: "DynamoDB", logo: getLogoUrl("aws.amazon.com") },
  {
    value: "cassandra",
    label: "Cassandra",
    logo: getLogoUrl("cassandra.apache.org"),
  },
  { value: "influxdb", label: "InfluxDB", logo: getLogoUrl("influxdata.com") },
  { value: "pinecone", label: "Pinecone", logo: getLogoUrl("pinecone.io") },
  { value: "weaviate", label: "Weaviate", logo: getLogoUrl("weaviate.io") },
  { value: "qdrant", label: "Qdrant", logo: getLogoUrl("qdrant.tech") },
  {
    value: "singlestore",
    label: "SingleStore",
    logo: getLogoUrl("singlestore.com"),
  },
  { value: "tidb", label: "TiDB", logo: getLogoUrl("pingcap.com") },
  { value: "timescale", label: "Timescale", logo: getLogoUrl("timescale.com") },
  {
    value: "clickhouse",
    label: "ClickHouse",
    logo: getLogoUrl("clickhouse.com"),
  },
  { value: "dremio", label: "Dremio", logo: getLogoUrl("dremio.com") },

  // BaaS (Backend as a Service)
  {
    value: "firebase",
    label: "Firebase",
    logo: getLogoUrl("firebase.google.com"),
  },
  { value: "appwrite", label: "Appwrite", logo: getLogoUrl("appwrite.io") },
  { value: "parse", label: "Parse", logo: getLogoUrl("parseplatform.org") },
  {
    value: "backendless",
    label: "Backendless",
    logo: getLogoUrl("backendless.com"),
  },
  {
    value: "aws-amplify",
    label: "AWS Amplify",
    logo: getLogoUrl("aws.amazon.com"),
  },
  { value: "convex", label: "Convex", logo: getLogoUrl("convex.dev") },
  {
    value: "pocketbase",
    label: "PocketBase",
    logo: getLogoUrl("pocketbase.io"),
  },
  { value: "nhost", label: "Nhost", logo: getLogoUrl("nhost.io") },

  // Data Integration & ETL
  { value: "fivetran", label: "Fivetran", logo: getLogoUrl("fivetran.com") },
  { value: "airbyte", label: "Airbyte", logo: getLogoUrl("airbyte.com") },
  { value: "stitch", label: "Stitch", logo: getLogoUrl("stitchdata.com") },
  { value: "dbt", label: "dbt", logo: getLogoUrl("getdbt.com") },

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
    logo: getLogoUrl("google.com"),
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
  { value: "ashby", label: "Ashby", logo: getLogoUrl("ashbyhq.com") },
  { value: "lattice", label: "Lattice", logo: getLogoUrl("lattice.com") },
  { value: "15five", label: "15Five", logo: getLogoUrl("15five.com") },
  { value: "hibob", label: "HiBob", logo: getLogoUrl("hibob.com") },
  { value: "personio", label: "Personio", logo: getLogoUrl("personio.com") },
  { value: "namely", label: "Namely", logo: getLogoUrl("namely.com") },
  {
    value: "ceridian",
    label: "Ceridian Dayforce",
    logo: getLogoUrl("ceridian.com"),
  },
  { value: "ukg-pro", label: "UKG Pro", logo: getLogoUrl("ukg.com") },
  { value: "zenefits", label: "Zenefits", logo: getLogoUrl("zenefits.com") },
  { value: "paylocity", label: "Paylocity", logo: getLogoUrl("paylocity.com") },
  {
    value: "smartrecruiters",
    label: "SmartRecruiters",
    logo: getLogoUrl("smartrecruiters.com"),
  },
  { value: "gem", label: "Gem", logo: getLogoUrl("gem.com") },
  {
    value: "cornerstone",
    label: "Cornerstone",
    logo: getLogoUrl("cornerstoneondemand.com"),
  },
  { value: "charthop", label: "Charthop", logo: getLogoUrl("charthop.com") },
  {
    value: "betterworks",
    label: "Betterworks",
    logo: getLogoUrl("betterworks.com"),
  },
  {
    value: "culture-amp",
    label: "Culture Amp",
    logo: getLogoUrl("cultureamp.com"),
  },
  { value: "fountain", label: "Fountain", logo: getLogoUrl("fountain.com") },
  {
    value: "teamtailor",
    label: "Teamtailor",
    logo: getLogoUrl("teamtailor.com"),
  },
  { value: "workable", label: "Workable", logo: getLogoUrl("workable.com") },
  { value: "deputy", label: "Deputy", logo: getLogoUrl("deputy.com") },
  {
    value: "wheniwork",
    label: "When I Work",
    logo: getLogoUrl("wheniwork.com"),
  },
  { value: "7shifts", label: "7shifts", logo: getLogoUrl("7shifts.com") },
  {
    value: "employment-hero",
    label: "Employment Hero",
    logo: getLogoUrl("employmenthero.com"),
  },
  {
    value: "factorial",
    label: "Factorial",
    logo: getLogoUrl("factorialhr.com"),
  },
  { value: "sage-hr", label: "Sage HR", logo: getLogoUrl("sage.com") },
  { value: "checkr", label: "Checkr", logo: getLogoUrl("checkr.com") },
  { value: "jibble", label: "Jibble", logo: getLogoUrl("jibble.io") },

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
  { value: "taboola", label: "Taboola", logo: getLogoUrl("taboola.com") },
  { value: "outbrain", label: "Outbrain", logo: getLogoUrl("outbrain.com") },
  {
    value: "pinterest-ads",
    label: "Pinterest Ads",
    logo: getLogoUrl("pinterest.com"),
  },
  {
    value: "snapchat-ads",
    label: "Snapchat Ads",
    logo: getLogoUrl("snapchat.com"),
  },
  {
    value: "apple-search-ads",
    label: "Apple Search Ads",
    logo: getLogoUrl("apple.com"),
  },
  { value: "adroll", label: "AdRoll", logo: getLogoUrl("adroll.com") },
  { value: "impact", label: "Impact", logo: getLogoUrl("impact.com") },
  { value: "branch", label: "Branch", logo: getLogoUrl("branch.io") },
  { value: "adjust", label: "Adjust", logo: getLogoUrl("adjust.com") },
  { value: "appsflyer", label: "AppsFlyer", logo: getLogoUrl("appsflyer.com") },
  { value: "singular", label: "Singular", logo: getLogoUrl("singular.net") },
  {
    value: "marin",
    label: "Marin Software",
    logo: getLogoUrl("marinsoftware.com"),
  },
  {
    value: "stackadapt",
    label: "StackAdapt",
    logo: getLogoUrl("stackadapt.com"),
  },
  { value: "rtbhouse", label: "RTB House", logo: getLogoUrl("rtbhouse.com") },
  { value: "teads", label: "Teads", logo: getLogoUrl("teads.com") },
  {
    value: "trade-desk",
    label: "The Trade Desk",
    logo: getLogoUrl("thetradedesk.com"),
  },
  { value: "amazon-dsp", label: "Amazon DSP", logo: getLogoUrl("amazon.com") },
  {
    value: "amazon-attribution",
    label: "Amazon Attribution",
    logo: getLogoUrl("amazon.com"),
  },
  {
    value: "google-campaign-manager",
    label: "Google Campaign Manager 360",
    logo: getLogoUrl("google.com"),
  },
  {
    value: "google-dv360",
    label: "Google Display & Video 360",
    logo: getLogoUrl("google.com"),
  },
  {
    value: "google-search-ads-360",
    label: "Google Search Ads 360",
    logo: getLogoUrl("google.com"),
  },
  {
    value: "google-ad-manager",
    label: "Google Ad Manager",
    logo: getLogoUrl("google.com"),
  },
  { value: "quora-ads", label: "Quora Ads", logo: getLogoUrl("quora.com") },
  { value: "line-ads", label: "LINE Ads", logo: getLogoUrl("line.me") },
  {
    value: "spotify-ads",
    label: "Spotify Ads",
    logo: getLogoUrl("spotify.com"),
  },
  { value: "brave-ads", label: "Brave Ads", logo: getLogoUrl("brave.com") },
  { value: "applovin", label: "AppLovin", logo: getLogoUrl("applovin.com") },
  { value: "liftoff", label: "Liftoff", logo: getLogoUrl("liftoff.io") },
  { value: "moloco", label: "Moloco", logo: getLogoUrl("moloco.com") },
  { value: "ironsource", label: "Ironsource", logo: getLogoUrl("is.com") },

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

  // Legal & Contracts
  { value: "docusign", label: "DocuSign", logo: getLogoUrl("docusign.com") },
  { value: "pandadoc", label: "PandaDoc", logo: getLogoUrl("pandadoc.com") },
  { value: "hellosign", label: "HelloSign", logo: getLogoUrl("hellosign.com") },
  {
    value: "adobe-sign",
    label: "Adobe Sign",
    logo: getLogoUrl("acrobat.adobe.com"),
  },

  // Customer Data Platforms & Enrichment
  { value: "clearbit", label: "Clearbit", logo: getLogoUrl("clearbit.com") },
  { value: "zoominfo", label: "ZoomInfo", logo: getLogoUrl("zoominfo.com") },
  { value: "apollo", label: "Apollo", logo: getLogoUrl("apollo.io") },
  { value: "6sense", label: "6sense", logo: getLogoUrl("6sense.com") },

  // ITSM & Service Management
  {
    value: "jira-service",
    label: "Jira Service Management",
    logo: getLogoUrl("atlassian.com"),
  },
  {
    value: "servicenow",
    label: "ServiceNow",
    logo: getLogoUrl("servicenow.com"),
  },
  {
    value: "freshservice",
    label: "Freshservice",
    logo: getLogoUrl("freshservice.com"),
  },

  // Scheduling & Calendaring
  { value: "calendly", label: "Calendly", logo: getLogoUrl("calendly.com") },
  {
    value: "acuity",
    label: "Acuity Scheduling",
    logo: getLogoUrl("acuityscheduling.com"),
  },
  {
    value: "google-calendar",
    label: "Google Calendar",
    logo: getLogoUrl("google.com"),
  },
  { value: "cal", label: "Cal.com", logo: getLogoUrl("cal.com") },

  // Social Media Management
  { value: "hootsuite", label: "Hootsuite", logo: getLogoUrl("hootsuite.com") },
  {
    value: "sprout-social",
    label: "Sprout Social",
    logo: getLogoUrl("sproutsocial.com"),
  },
  { value: "buffer", label: "Buffer", logo: getLogoUrl("buffer.com") },
  { value: "later", label: "Later", logo: getLogoUrl("later.com") },

  // Forms & Surveys
  { value: "typeform", label: "Typeform", logo: getLogoUrl("typeform.com") },
  {
    value: "surveymonkey",
    label: "SurveyMonkey",
    logo: getLogoUrl("surveymonkey.com"),
  },
  {
    value: "google-forms",
    label: "Google Forms",
    logo: getLogoUrl("google.com"),
  },
  { value: "jotform", label: "Jotform", logo: getLogoUrl("jotform.com") },

  // Webinars & Events
  {
    value: "eventbrite",
    label: "Eventbrite",
    logo: getLogoUrl("eventbrite.com"),
  },
  { value: "hopin", label: "Hopin", logo: getLogoUrl("hopin.com") },
  { value: "webflow", label: "Webflow", logo: getLogoUrl("webflow.com") },
  { value: "luma", label: "Luma", logo: getLogoUrl("lu.ma") },

  // Video & Content
  { value: "loom", label: "Loom", logo: getLogoUrl("loom.com") },
  { value: "wistia", label: "Wistia", logo: getLogoUrl("wistia.com") },
  { value: "vimeo", label: "Vimeo", logo: getLogoUrl("vimeo.com") },
  { value: "youtube", label: "YouTube", logo: getLogoUrl("youtube.com") },
  {
    value: "brightcove",
    label: "Brightcove",
    logo: getLogoUrl("brightcove.com"),
  },
  { value: "mux", label: "MUX", logo: getLogoUrl("mux.com") },
  {
    value: "buzzsprout",
    label: "Buzzsprout",
    logo: getLogoUrl("buzzsprout.com"),
  },
  {
    value: "simplecast",
    label: "Simplecast",
    logo: getLogoUrl("simplecast.com"),
  },
  { value: "megaphone", label: "Megaphone", logo: getLogoUrl("megaphone.fm") },
  { value: "bynder", label: "Bynder", logo: getLogoUrl("bynder.com") },

  // Social Media Organic
  {
    value: "facebook-pages",
    label: "Facebook Pages",
    logo: getLogoUrl("facebook.com"),
  },
  {
    value: "instagram-business",
    label: "Instagram Business",
    logo: getLogoUrl("instagram.com"),
  },
  {
    value: "linkedin-pages",
    label: "Linkedin Company Pages",
    logo: getLogoUrl("linkedin.com"),
  },
  {
    value: "twitter-organic",
    label: "Twitter Organic",
    logo: getLogoUrl("x.com"),
  },
  {
    value: "tiktok-organic",
    label: "TikTok Organic",
    logo: getLogoUrl("tiktok.com"),
  },
  {
    value: "pinterest-organic",
    label: "Pinterest Organic",
    logo: getLogoUrl("pinterest.com"),
  },
  {
    value: "google-business",
    label: "Google Business Profile",
    logo: getLogoUrl("google.com"),
  },
  {
    value: "youtube-analytics",
    label: "YouTube Analytics",
    logo: getLogoUrl("youtube.com"),
  },
  {
    value: "google-search-console",
    label: "Google Search Console",
    logo: getLogoUrl("google.com"),
  },
  {
    value: "bing-webmaster",
    label: "Bing Webmaster Tools",
    logo: getLogoUrl("bing.com"),
  },

  // LMS & Education
  {
    value: "360learning",
    label: "360Learning",
    logo: getLogoUrl("360learning.com"),
  },
  {
    value: "absorb-lms",
    label: "Absorb LMS",
    logo: getLogoUrl("absorblms.com"),
  },
  { value: "docebo", label: "Docebo", logo: getLogoUrl("docebo.com") },
  { value: "skilljar", label: "Skilljar", logo: getLogoUrl("skilljar.com") },
  { value: "learnupon", label: "LearnUpon", logo: getLogoUrl("learnupon.com") },
  { value: "lessonly", label: "Lessonly", logo: getLogoUrl("lessonly.com") },
  { value: "thinkific", label: "Thinkific", logo: getLogoUrl("thinkific.com") },
  {
    value: "d2l-brightspace",
    label: "D2L Brightspace",
    logo: getLogoUrl("d2l.com"),
  },
  {
    value: "google-classroom",
    label: "Google Classroom",
    logo: getLogoUrl("google.com"),
  },
  {
    value: "blackboard",
    label: "Blackboard",
    logo: getLogoUrl("blackboard.com"),
  },
  {
    value: "instructure",
    label: "Instructure",
    logo: getLogoUrl("instructure.com"),
  },
  {
    value: "udemy-business",
    label: "Udemy Business",
    logo: getLogoUrl("udemy.com"),
  },
  {
    value: "coassemble",
    label: "Coassemble",
    logo: getLogoUrl("coassemble.com"),
  },
  { value: "learn-amp", label: "Learn Amp", logo: getLogoUrl("learnamp.com") },
  { value: "workramp", label: "Workramp", logo: getLogoUrl("workramp.com") },

  // Security & Compliance
  { value: "okta", label: "Okta", logo: getLogoUrl("okta.com") },
  { value: "auth0", label: "Auth0", logo: getLogoUrl("auth0.com") },
  { value: "drata", label: "Drata", logo: getLogoUrl("drata.com") },
  { value: "sentry", label: "Sentry", logo: getLogoUrl("sentry.io") },
  { value: "snyk", label: "Snyk", logo: getLogoUrl("snyk.com") },
  {
    value: "prisma-cloud",
    label: "Prisma Cloud",
    logo: getLogoUrl("paloaltonetworks.com"),
  },
  { value: "onetrust", label: "OneTrust", logo: getLogoUrl("onetrust.com") },
  { value: "kandji", label: "Kandji", logo: getLogoUrl("kandji.io") },
  { value: "jamf", label: "Jamf", logo: getLogoUrl("jamf.com") },
  {
    value: "contrast-security",
    label: "Contrast Security",
    logo: getLogoUrl("contrastsecurity.com"),
  },
  {
    value: "sonarqube",
    label: "SonarQube",
    logo: getLogoUrl("sonarsource.com"),
  },
  {
    value: "proofpoint",
    label: "Proofpoint Security Awareness",
    logo: getLogoUrl("proofpoint.com"),
  },
  {
    value: "microsoft-entra",
    label: "Microsoft Entra ID",
    logo: getLogoUrl("azure.microsoft.com"),
  },
  { value: "persona", label: "Persona", logo: getLogoUrl("withpersona.com") },

  // ERP & Business Systems
  { value: "sap-erp", label: "SAP ERP", logo: getLogoUrl("sap.com") },
  { value: "sap-hana", label: "SAP HANA", logo: getLogoUrl("sap.com") },
  { value: "sap-concur", label: "SAP Concur", logo: getLogoUrl("concur.com") },
  {
    value: "sap-successfactors",
    label: "SAP SuccessFactors",
    logo: getLogoUrl("sap.com"),
  },
  {
    value: "sap-business-bydesign",
    label: "SAP Business ByDesign",
    logo: getLogoUrl("sap.com"),
  },
  {
    value: "sap-business-one",
    label: "SAP Business One",
    logo: getLogoUrl("sap.com"),
  },
  { value: "oracle", label: "Oracle", logo: getLogoUrl("oracle.com") },
  {
    value: "oracle-fusion",
    label: "Oracle Fusion Cloud Applications",
    logo: getLogoUrl("oracle.com"),
  },
  {
    value: "oracle-ebs",
    label: "Oracle E-Business Suite (EBS)",
    logo: getLogoUrl("oracle.com"),
  },
  {
    value: "oracle-peoplesoft",
    label: "Oracle PeopleSoft",
    logo: getLogoUrl("oracle.com"),
  },
  { value: "acumatica", label: "Acumatica", logo: getLogoUrl("acumatica.com") },
  {
    value: "ms-dynamics-365",
    label: "Microsoft Dynamics 365 CRM",
    logo: getLogoUrl("azure.microsoft.com"),
  },
  {
    value: "ms-dynamics-finance",
    label: "Microsoft Dynamics 365 Finance",
    logo: getLogoUrl("azure.microsoft.com"),
  },
  {
    value: "ms-dynamics-bc",
    label: "Microsoft Dynamics Business Central",
    logo: getLogoUrl("azure.microsoft.com"),
  },
  {
    value: "sage-intacct",
    label: "Sage Intacct",
    logo: getLogoUrl("sageintacct.com"),
  },
  { value: "coupa", label: "Coupa", logo: getLogoUrl("coupa.com") },
  { value: "anaplan", label: "Anaplan", logo: getLogoUrl("anaplan.com") },
  { value: "planful", label: "planful", logo: getLogoUrl("planful.com") },

  // AWS Services
  {
    value: "amazon-s3",
    label: "Amazon S3",
    logo: getLogoUrl("aws.amazon.com"),
  },
  {
    value: "amazon-cloudfront",
    label: "Amazon Cloudfront",
    logo: getLogoUrl("aws.amazon.com"),
  },
  {
    value: "amazon-kinesis",
    label: "Amazon Kinesis Firehose",
    logo: getLogoUrl("aws.amazon.com"),
  },
  {
    value: "aws-cloudtrail",
    label: "AWS CloudTrail",
    logo: getLogoUrl("aws.amazon.com"),
  },
  {
    value: "aws-cost-explorer",
    label: "AWS Cost Explorer",
    logo: getLogoUrl("aws.amazon.com"),
  },
  { value: "aws-msk", label: "AWS MSK", logo: getLogoUrl("aws.amazon.com") },
  {
    value: "apache-kafka",
    label: "Apache Kafka",
    logo: getLogoUrl("kafka.apache.org"),
  },
  {
    value: "heroku-kafka",
    label: "Heroku Kafka",
    logo: getLogoUrl("heroku.com"),
  },
  {
    value: "confluent-cloud",
    label: "Confluent Cloud",
    logo: getLogoUrl("confluent.io"),
  },

  // Azure Services
  {
    value: "azure-blob",
    label: "Azure Blob Storage",
    logo: getLogoUrl("azure.microsoft.com"),
  },
  {
    value: "azure-devops",
    label: "Azure DevOps",
    logo: getLogoUrl("azure.microsoft.com"),
  },
  {
    value: "azure-data-lake",
    label: "Azure Data Lake Storage",
    logo: getLogoUrl("azure.microsoft.com"),
  },
  {
    value: "azure-event-hubs",
    label: "Azure Event Hubs",
    logo: getLogoUrl("azure.microsoft.com"),
  },
  {
    value: "azure-synapse",
    label: "Azure Synapse",
    logo: getLogoUrl("azure.microsoft.com"),
  },
  {
    value: "cosmos-db",
    label: "Cosmos DB",
    logo: getLogoUrl("azure.microsoft.com"),
  },
  {
    value: "microsoft-lists",
    label: "Microsoft Lists",
    logo: getLogoUrl("azure.microsoft.com"),
  },

  // Google Services
  {
    value: "google-play",
    label: "Google Play",
    logo: getLogoUrl("google.com"),
  },
  {
    value: "google-cloud-storage",
    label: "Google Cloud Storage",
    logo: getLogoUrl("google.com"),
  },
  {
    value: "google-tasks",
    label: "Google Tasks",
    logo: getLogoUrl("google.com"),
  },

  // DevOps & Monitoring
  { value: "circleci", label: "CircleCI", logo: getLogoUrl("circleci.com") },
  { value: "buildkite", label: "Buildkite", logo: getLogoUrl("buildkite.com") },
  { value: "codefresh", label: "Codefresh", logo: getLogoUrl("codefresh.io") },
  { value: "pagerduty", label: "Pagerduty", logo: getLogoUrl("pagerduty.com") },
  { value: "pingdom", label: "Pingdom", logo: getLogoUrl("pingdom.com") },
  {
    value: "statuspage",
    label: "Statuspage",
    logo: getLogoUrl("statuspage.io"),
  },
  { value: "rollbar", label: "Rollbar", logo: getLogoUrl("rollbar.com") },
  {
    value: "firehydrant",
    label: "FireHydrant",
    logo: getLogoUrl("firehydrant.io"),
  },
  {
    value: "incidentio",
    label: "Incident.io",
    logo: getLogoUrl("incident.io"),
  },
  { value: "rootly", label: "Rootly", logo: getLogoUrl("rootly.com") },
  { value: "testrail", label: "TestRail", logo: getLogoUrl("testrail.com") },
  { value: "xray", label: "Xray", logo: getLogoUrl("getxray.app") },
  {
    value: "jama",
    label: "Jama Software",
    logo: getLogoUrl("jamasoftware.com"),
  },

  // Expense & Travel
  { value: "navan", label: "Navan", logo: getLogoUrl("navan.com") },
  { value: "expensify", label: "Expensify", logo: getLogoUrl("expensify.com") },
  { value: "expensein", label: "ExpenseIn", logo: getLogoUrl("expensein.com") },
  { value: "invoiced", label: "Invoiced", logo: getLogoUrl("invoiced.com") },

  // Misc Tools
  { value: "openai", label: "OpenAI", logo: getLogoUrl("openai.com") },
  { value: "algolia", label: "Algolia", logo: getLogoUrl("algolia.com") },
  { value: "bitly", label: "Bitly", logo: getLogoUrl("bitly.com") },
  { value: "shortio", label: "Short.io", logo: getLogoUrl("short.io") },
  { value: "canny", label: "Canny", logo: getLogoUrl("canny.io") },
  { value: "chameleon", label: "Chameleon", logo: getLogoUrl("chameleon.io") },
  { value: "guru", label: "Guru", logo: getLogoUrl("getguru.com") },
  { value: "slab", label: "Slab", logo: getLogoUrl("slab.com") },
  { value: "formstack", label: "Formstack", logo: getLogoUrl("formstack.com") },
  { value: "fillout", label: "Fillout", logo: getLogoUrl("fillout.com") },
  { value: "alchemer", label: "Alchemer", logo: getLogoUrl("alchemer.com") },
  { value: "qualtrics", label: "Qualtrics", logo: getLogoUrl("qualtrics.com") },
  { value: "delighted", label: "Delighted", logo: getLogoUrl("delighted.com") },
  { value: "retently", label: "Retently", logo: getLogoUrl("retently.com") },
  {
    value: "zonka",
    label: "Zonka Feedback",
    logo: getLogoUrl("zonkafeedback.com"),
  },
  { value: "survicate", label: "Survicate", logo: getLogoUrl("survicate.com") },
  {
    value: "getfeedback",
    label: "GetFeedback",
    logo: getLogoUrl("getfeedback.com"),
  },
  { value: "g2", label: "G2", logo: getLogoUrl("g2.com") },
  {
    value: "crunchbase",
    label: "Crunchbase",
    logo: getLogoUrl("crunchbase.com"),
  },
  { value: "mention", label: "Mention", logo: getLogoUrl("mention.com") },
  {
    value: "talkwalker",
    label: "Talkwalker",
    logo: getLogoUrl("talkwalker.com"),
  },
  { value: "birdeye", label: "Birdeye", logo: getLogoUrl("birdeye.com") },
  { value: "yext", label: "Yext", logo: getLogoUrl("yext.com") },
  { value: "wordpress", label: "WordPress", logo: getLogoUrl("wordpress.org") },
  {
    value: "apple-app-store",
    label: "Apple App Store",
    logo: getLogoUrl("apple.com"),
  },
  {
    value: "appfigures",
    label: "Appfigures",
    logo: getLogoUrl("appfigures.com"),
  },
  {
    value: "open-exchange-rates",
    label: "Open Exchange Rates",
    logo: getLogoUrl("openexchangerates.org"),
  },
];
