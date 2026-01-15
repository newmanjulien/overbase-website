/**
 * Terms of Service content
 * This file contains all legal content for the Terms of Service page.
 * Edit the sections array to update the terms.
 */

import type {
  LegalSection,
  LegalPageMetadata,
} from "../../../components/layouts/LegalPageLayout";

export const termsMetadata: LegalPageMetadata = {
  title: "Terms of Service",
  lastUpdated: "January 13, 2026",
  introduction:
    "Welcome to Overbase. These Terms of Service govern your use of our website and services. By accessing or using our services, you agree to be bound by these terms. Please read them carefully before using our platform.",
};

export const termsSections: LegalSection[] = [
  {
    id: "our-services",
    title: "Our services",
    content: [
      "The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.",
      "The Services are not tailored to comply with industry-specific regulations (Health Insurance Portability and Accountability Act (HIPAA), Federal Information Security Management Act (FISMA), etc.), so if your interactions would be subjected to such laws, you may not use the Services. You may not use the Services in a way that would violate the Gramm-Leach-Bliley Act (GLBA).",
    ],
  },
  {
    id: "intellectual-property-rights",
    title: "Intellectual property rights",
    content: [],
    subsections: [
      {
        title: "Our intellectual property",
        content: [
          'We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the "Content"), as well as the trademarks, service marks, and logos contained therein (the "Marks").',
          'Our Content and Marks are protected by copyright and trademark laws (and various other intellectual property rights and unfair competition laws) and treaties in the United States and around the world. The Content and Marks are provided in or through the Services "AS IS" for your personal, non-commercial use or internal business purpose only.',
        ],
      },
    ],
  },
  {
    id: "user-representations",
    title: "User representations",
    content: [
      "By using the Services, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Legal Terms; (4) you are not a minor in the jurisdiction in which you reside; (5) you will not access the Services through automated or non-human means, whether through a bot, script or otherwise; (6) you will not use the Services for any illegal or unauthorized purpose; and (7) your use of the Services will not violate any applicable law or regulation.",
      "If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Services (or any portion thereof).",
    ],
  },
  {
    id: "user-registration",
    title: "User registration",
    content: [
      "You may be required to register to use the Services. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.",
      "You are responsible for maintaining the confidentiality of your account credentials and for restricting access to your computer or device. You agree to accept responsibility for all activities that occur under your account or password.",
    ],
  },
  {
    id: "purchases-and-payment",
    title: "Purchases and payment",
    content: [
      "We accept the following forms of payment: Visa, Mastercard, American Express, Discover, and PayPal. You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Services. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed.",
      "Sales tax will be added to the price of purchases as deemed required by us. We may change prices at any time. All payments shall be in U.S. dollars. You agree to pay all charges at the prices then in effect for your purchases and any applicable shipping fees, and you authorize us to charge your chosen payment provider for any such amounts upon placing your order.",
    ],
  },
  {
    id: "subscriptions",
    title: "Subscriptions",
    content: [
      "Your subscription will continue and automatically renew unless cancelled. You consent to our charging your payment method on a recurring basis without requiring your prior approval for each recurring charge, until such time as you cancel the applicable order. The length of your billing cycle will depend on the type of subscription plan you choose when you signed up for the subscription.",
      "You can cancel your subscription at any time by logging into your account or contacting us using the contact information provided below. Your cancellation will take effect at the end of the current paid term. If you have any questions or are unsatisfied with our Services, please email us at support@overbase.com.",
    ],
  },
  {
    id: "software",
    title: "Software",
    content: [
      'We may include software for use in connection with our Services. If such software is accompanied by an end user license agreement ("EULA"), the terms of the EULA will govern your use of the software. If such software is not accompanied by a EULA, then we grant to you a non-exclusive, revocable, personal, and non-transferable license to use such software solely in connection with our Services and in accordance with these Legal Terms.',
      'Any Software and any related documentation is provided "as is" without warranty of any kind, either express or implied, including, without limitation, the implied warranties of merchantability, fitness for a particular purpose, or non-infringement. You accept any and all risk arising out of use or performance of any Software.',
    ],
  },
  {
    id: "prohibited-activities",
    title: "Prohibited activities",
    content: [
      "You may not access or use the Services for any purpose other than that for which we make the Services available. The Services may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.",
      "As a user of the Services, you agree not to:",
    ],
    bulletPoints: [
      "Systematically retrieve data or other content from the Services to create or compile a collection, compilation, database, or directory without written permission from us.",
      "Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.",
      "Circumvent, disable, or otherwise interfere with security-related features of the Services.",
      "Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.",
      "Use any information obtained from the Services in order to harass, abuse, or harm another person.",
      "Make improper use of our support services or submit false reports of abuse or misconduct.",
      "Use the Services in a manner inconsistent with any applicable laws or regulations.",
      "Engage in unauthorized framing of or linking to the Services.",
    ],
  },
  {
    id: "user-generated-contributions",
    title: "User generated contributions",
    content: [
      'The Services may invite you to chat, contribute to, or participate in blogs, message boards, online forums, and other functionality, and may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Services, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, "Contributions").',
      "Contributions may be viewable by other users of the Services and through third-party websites. As such, any Contributions you transmit may be treated as non-confidential and non-proprietary. When you create or make available any Contributions, you thereby represent and warrant that your contributions comply with our guidelines.",
    ],
  },
  {
    id: "contribution-license",
    title: "Contribution license",
    content: [
      "By posting your Contributions to any part of the Services, you automatically grant, and you represent and warrant that you have the right to grant, to us an unrestricted, unlimited, irrevocable, perpetual, non-exclusive, transferable, royalty-free, fully-paid, worldwide right, and license to host, use, copy, reproduce, disclose, sell, resell, publish, broadcast, retitle, archive, store, cache, publicly perform, publicly display, reformat, translate, transmit, excerpt (in whole or in part), and distribute such Contributions.",
      "This license will apply to any form, media, or technology now known or hereafter developed, and includes our use of your name, company name, and franchise name, as applicable, and any of the trademarks, service marks, trade names, logos, and personal and commercial images you provide.",
    ],
  },
  {
    id: "social-media",
    title: "Social media",
    content: [
      'As part of the functionality of the Services, you may link your account with online accounts you have with third-party service providers (each such account, a "Third-Party Account") by either: (1) providing your Third-Party Account login information through the Services; or (2) allowing us to access your Third-Party Account, as is permitted under the applicable terms and conditions that govern your use of each Third-Party Account.',
      "You represent and warrant that you are entitled to disclose your Third-Party Account login information to us and/or grant us access to your Third-Party Account, without breach by you of any of the terms and conditions that govern your use of the applicable Third-Party Account.",
    ],
  },
  {
    id: "third-party-websites-and-content",
    title: "Third-party websites and content",
    content: [
      'The Services may contain (or you may be sent via the Services) links to other websites ("Third-Party Websites") as well as articles, photographs, text, graphics, pictures, designs, music, sound, video, information, applications, software, and other content or items belonging to or originating from third parties ("Third-Party Content").',
      "Such Third-Party Websites and Third-Party Content are not investigated, monitored, or checked for accuracy, appropriateness, or completeness by us, and we are not responsible for any Third-Party Websites accessed through the Services or any Third-Party Content posted on, available through, or installed from the Services.",
    ],
  },
  {
    id: "services-management",
    title: "Services management",
    content: [
      "We reserve the right, but not the obligation, to: (1) monitor the Services for violations of these Legal Terms; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Legal Terms, including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof.",
      "We also reserve the right to: (4) in our sole discretion and without limitation, notice, or liability, to remove from the Services or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Services in a manner designed to protect our rights and property and to facilitate the proper functioning of the Services.",
    ],
  },
  {
    id: "privacy-policy",
    title: "Privacy policy",
    content: [
      "We care about data privacy and security. Please review our Privacy Policy. By using the Services, you agree to be bound by our Privacy Policy, which is incorporated into these Legal Terms. Please be advised the Services are hosted in the United States. If you access the Services from any other region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable laws in the United States, then through your continued use of the Services, you are transferring your data to the United States.",
      "You expressly consent to have your data transferred to and processed in the United States. Further, we do not knowingly accept, request, or solicit information from children or knowingly market to children.",
    ],
  },
  {
    id: "copyright-infringements",
    title: "Copyright infringements",
    content: [
      'We respect the intellectual property rights of others. If you believe that any material available on or through the Services infringes upon any copyright you own or control, please immediately notify us using the contact information provided below (a "Notification"). A copy of your Notification will be sent to the person who posted or stored the material addressed in the Notification.',
      "Please be advised that pursuant to applicable law you may be held liable for damages if you make material misrepresentations in a Notification. Thus, if you are not sure that material located on or linked to by the Services infringes your copyright, you should consider first contacting an attorney.",
    ],
  },
  {
    id: "term-and-termination",
    title: "Term and termination",
    content: [
      "These Legal Terms shall remain in full force and effect while you use the Services. Without limiting any other provision of these Legal Terms, we reserve the right to, in our sole discretion and without notice or liability, deny access to and use of the Services (including blocking certain IP addresses), to any person for any reason or for no reason, including without limitation for breach of any representation, warranty, or covenant contained in these Legal Terms or of any applicable law or regulation.",
      "We may terminate your use or participation in the Services or delete your account and any content or information that you posted at any time, without warning, in our sole discretion. If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party.",
    ],
  },
  {
    id: "modifications-and-interruptions",
    title: "Modifications and interruptions",
    content: [
      "We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Services. We also reserve the right to modify or discontinue all or part of the Services without notice at any time.",
      "We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Services. We cannot guarantee the Services will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Services, resulting in interruptions, delays, or errors.",
    ],
  },
  {
    id: "governing-law",
    title: "Governing law",
    content: [
      "These Legal Terms shall be governed by and defined following the laws of the State of California. Overbase, Inc. and yourself irrevocably consent that the courts of California shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these Legal Terms.",
      "The application of the United Nations Convention on Contracts for the International Sale of Goods and the Uniform Computer Information Transaction Act (UCITA) are expressly excluded from these Legal Terms.",
    ],
  },
  {
    id: "dispute-resolution",
    title: "Dispute resolution",
    content: [
      'Any legal action of whatever nature brought by either you or us (collectively, the "Parties" and individually, a "Party") shall be commenced or prosecuted in the state and federal courts located in San Francisco County, California, and the Parties hereby consent to, and waive all defenses of lack of personal jurisdiction and forum non conveniens with respect to venue and jurisdiction in such state and federal courts.',
      "In no event shall any claim, action, or proceeding brought by either Party related in any way to the Services be commenced more than one (1) year after the cause of action arose.",
    ],
  },
  {
    id: "corrections",
    title: "Corrections",
    content: [
      "There may be information on the Services that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Services at any time, without prior notice.",
      "We do not undertake any obligation to update, amend, or clarify information in the Services, including without limitation, pricing information, except as required by law. No specified update or refresh date applied in the Services should be taken to indicate that all information in the Services has been modified or updated.",
    ],
  },
  {
    id: "disclaimer",
    title: "Disclaimer",
    content: [
      "THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.",
      "WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SERVICES' CONTENT OR THE CONTENT OF ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE SERVICES AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS.",
    ],
  },
  {
    id: "limitations-of-liability",
    title: "Limitations of liability",
    content: [
      "IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.",
      "NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO US DURING THE SIX (6) MONTH PERIOD PRIOR TO ANY CAUSE OF ACTION ARISING.",
    ],
  },
  {
    id: "indemnification",
    title: "Indemnification",
    content: [
      "You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys' fees and expenses, made by any third party due to or arising out of: (1) your Contributions; (2) use of the Services; (3) breach of these Legal Terms; (4) any breach of your representations and warranties set forth in these Legal Terms.",
      "Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defense of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it.",
    ],
  },
  {
    id: "user-data",
    title: "User data",
    content: [
      "We will maintain certain data that you transmit to the Services for the purpose of managing the performance of the Services, as well as data relating to your use of the Services. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Services.",
      "You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.",
    ],
  },
  {
    id: "contact-us",
    title: "Contact us",
    content: [
      "In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:",
    ],
    bulletPoints: [
      "Overbase, Inc.",
      "600 California St",
      "San Francisco, CA 94108",
      "United States",
      "Email: legal@overbase.com",
    ],
  },
];
