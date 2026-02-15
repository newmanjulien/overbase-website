import type {
  BlogSection,
  BlogPageHero,
} from "@/components/layouts/BlogPageLayout";

export const hero: BlogPageHero = {
  title: "Your talent pipeline is drying up",
  introduction: [
    "For centuries, Western universities were engines of talent. Students were pushed relentlessly, programs demanded deep mastery, and only those who could survive that pressure emerged capable of real impact. These institutions produced engineers and operators who could deliver results",
    "Today, that engine is faltering. Academic rigor has slipped and admissions often discriminate against students with ability. The pipeline that once reliably produced competent graduates hasn't fully dried up. But it is shrinking — fast",
    "Elite Western universities once trained the few people who could actually contribute. But that system is disappearing. The global supply of capable candidates is smaller and it's increasingly only available in new talent hubs",
  ],
  buttonLabel: "See solution",
  scrollTargetId: "new-strategy",
};

export const sections: BlogSection[] = [
  {
    id: "breakdown",
    title: "The breakdown of Western talent production",
    content: [
      "Elite Western universities once rigorously tested students. Entry into and graduation from MIT, Stanford, Oxford, Cambridge, and similar institutions meant survival of the fittest",
    ],
    subsections: [
      {
        title: "1. Training and sorting are collapsing",
        content: [
          "Some capable students still make it through, but the mechanisms that honed and separated real performers are weakening",
          "Admissions reward signaling over substance. Programs have softened, and faculty are discouraged from pushing students to excel. Grade inflation masks the differences between those who can contribute and those who cannot",
          "The result: fewer graduates emerge with the ability to do meaningful work, and degrees are no longer reliable signals of quality",
        ],
      },
      {
        title: "2. Aggregation is disappearing",
        content: [
          "These universities didn’t just train talent — they concentrated it",
          "Students from around the world were funneled into a few institutions where the capable were separated from the rest. That aggregation is less and less of a factor",
        ],
      },
      {
        title: "3. Elite degrees as countersignal",
        content: [
          "A degree from an elite Western school used to be a shortcut to capable talent",
          "Today, smart employers often see these elite degrees as a countersignal. Many graduates from elite schools like Harvard are less capable, lower IQ and less disciplined than even their peers from lower-ranked Western schools",
        ],
      },
    ],
    image: {
      src: "/harvard.avif",
      alt: "Google logo on a light background",
      caption: "Western schools no longer produce talent",
    },
    imagePlacement: "before-heading",
  },
  {
    id: "new-strategy",
    title: "Rise of the new talent strategy",
    content: [
      "Leading companies are reinventing how they find talent. The new model is simple: go where the remaining capable people are trained",
      "A few East Asian schools still produce engineers and operators who can deliver. Some Israeli and Indian schools continue to produce quality graduates. And talent hubs exist in some other large countries who have historically valued education",
      "Smart companies are embeding themselves in these remaining hubs to capture talent, before others have the time to shift",
    ],
  },
  {
    id: "big-tech-builds-abroad",
    title: "Big Tech builds abroad",
    content: [
      "Companies like Google, Meta, and Microsoft are establishing engineering hubs outside legacy Western centers",
      "Big Tech is increasingly focused on monopolizing the talent pipeline from IIT Bombay and happy to let others hire lower quality Stanford grads",
      "Rather than hiring talent through Western universities, these companies are embedding themselves directly in the few remaining talent ecosystems",
    ],
    image: {
      src: "/google.jpg",
      alt: "Google logo on a light background",
      caption: "Big Tech is refocusing away from Silicon Valley",
    },
    imagePlacement: "before-heading",
  },
  {
    id: "quant-firms-globalize",
    title: "Quant firms create modern talent pipelines",
    content: [
      "High-frequency trading firms and quantitative hedge funds historically recruited from MIT, Princeton, Cambridge, and a handful of other elite institutions",
      "Today, firms like Jane Street recruit from India, Israel, and other countries, hiring from the few remaining schools that still produce useful talent and relocating them to global offices in New York, Hong Kong, and elsewhere",
      "The logic is simple: with Western pipelines weakened, these firms must import talent from where it still exists",
    ],
  },
  {
    id: "startups-advantage",
    title: "Startups have a new advantage",
    content: [
      "Founder-led companies can adapt faster to the emerging reality of a talent pipeline that's getting more scarce with each passing year",
      "Startups can monopolize the few remaining sources of quality candidates quickly. While large, slow, legacy competitors will take decades to reorient a talent pipeline that's drying up faster than big companies can adjust",
      "Startups like Overbase are designing for strategic locations near the few remaining sources of talent. And forming partnerships with the handful of universities that continue to produce capable graduates",
    ],
    image: {
      src: "/office.jpg",
      alt: "Google logo on a light background",
      caption:
        "Startups are move fast to monopolize the remaining talent pools",
    },
  },
  {
    id: "the-takeaway",
    title: "The new talent war matters more than ever",
    content: [
      "The pool of graduates who can reliably deliver results has collapsed — and the decline is accelerating",
      "Fewer engineers, data scientists, and operators can make net positive contributions. A decade from now, that number will be smaller still — and increasingly only findable in a handful of new hubs",
      "As capable talent gets scarcer, recruiting capable talent becomes an even greater edge than before",
      "And as AI becomes a force multiplier, it’s even more important not to scale net-negative contributors",
    ],
  },
];
