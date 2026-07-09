import { RAW_PAGES } from "@/lib/generated-pages";

export type SeoPage = (typeof RAW_PAGES)[number];

export const SITE_NAME = "TidyFacility";
export const DEFAULT_SITE_URL = "https://tidyfacility.com";
export const PHONE_DISPLAY = "1-888-621-1053";
export const PHONE_E164 = "+18886211053";

export const SEO_PAGES: SeoPage[] = [...RAW_PAGES];
export const SERVICE_PILLARS = SEO_PAGES.filter((page) => page.pageType === "Service Pillar");
export const CITY_PAGES = SEO_PAGES.filter((page) => page.pageType === "City Service Page");
export const SUPPORT_PAGES = SEO_PAGES.filter((page) => page.pageType !== "Service Pillar" && page.pageType !== "City Service Page");

type ServiceProfile = {
  slug: string;
  label: string;
  audience: string;
  scope: string;
  outcome: string;
  rhythm: string;
  concern: string;
};

type CityFact = {
  neighborhoods: [string, string];
  landmarks: [string, string];
  climate: string;
  profile: string;
};

const SERVICE_PROFILES: Record<string, ServiceProfile> = {
  "/floor-mat-rental-service": {
    slug: "/floor-mat-rental-service",
    label: "floor mat rental",
    audience: "office managers, industrial sites, retail teams, and property operators",
    scope: "entry mat programs, seasonal swaps, logo mats, laundering, and replacement planning",
    outcome: "cleaner entrances, safer footing, and a more consistent first impression",
    rhythm: "weekly, bi-weekly, or weather-driven exchange schedules",
    concern: "winter salt, rain carry-in, and worn mat edges that make lobbies look neglected",
  },
  "/commercial-carpet-cleaning": {
    slug: "/commercial-carpet-cleaning",
    label: "commercial carpet cleaning",
    audience: "workplaces, medical offices, hotels, educational sites, and multi-tenant properties",
    scope: "spot treatment, low-moisture maintenance, deep extraction, and traffic-lane recovery",
    outcome: "healthier-looking interiors, better odor control, and longer carpet life",
    rhythm: "after-hours visits or staged cleaning cycles around foot traffic",
    concern: "staining, embedded soil, and carpet wear that makes a professional space feel tired",
  },
  "/floor-cleaning-service": {
    slug: "/floor-cleaning-service",
    label: "commercial floor cleaning",
    audience: "facility teams responsible for hard floors in public-facing or high-traffic buildings",
    scope: "scrubbing, burnishing, stripping, waxing, and tile-and-grout care",
    outcome: "brighter floors, cleaner joints, and less visual wear in heavy-use areas",
    rhythm: "recurring maintenance plus periodic restoration work",
    concern: "finish breakdown, dull traffic lanes, and grime that collects in textured surfaces",
  },
  "/mop-rental-service": {
    slug: "/mop-rental-service",
    label: "mop rental",
    audience: "janitorial teams, restaurants, healthcare spaces, and industrial operators",
    scope: "dust mops, wet mops, laundering, replacements, and inventory rotation",
    outcome: "clean tools on hand without stocking, washing, or replacing mops internally",
    rhythm: "scheduled pick-up and drop-off aligned to cleaning demand",
    concern: "cross-contamination, worn mop heads, and supply rooms that stay overfilled",
  },
  "/washroom-cleaning-service": {
    slug: "/washroom-cleaning-service",
    label: "washroom cleaning",
    audience: "commercial properties, public venues, offices, and multi-occupant facilities",
    scope: "washroom detailing, sanitizing, deodorizing, restocking coordination, and fixture cleaning",
    outcome: "cleaner washrooms, steadier hygiene standards, and fewer complaints from occupants",
    rhythm: "daily, multi-day, or high-traffic service patterns",
    concern: "odor, fixture buildup, and visible hygiene misses that damage trust quickly",
  },
  "/uniform-rental-service": {
    slug: "/uniform-rental-service",
    label: "uniform rental",
    audience: "manufacturing teams, auto shops, food operations, and customer-facing crews",
    scope: "sizing, garment rotation, laundering, repairs, replacements, and wearer allocation",
    outcome: "consistent presentation, simpler staffing logistics, and less purchasing waste",
    rhythm: "weekly route service with planned wearer changes and stock balancing",
    concern: "inconsistent branding, damaged garments, and extra admin work when staff turns over",
  },
  "/linen-service": {
    slug: "/linen-service",
    label: "linen service",
    audience: "hospitality operators, treatment spaces, salons, clinics, and commercial guest environments",
    scope: "pickup, laundering, folding, replacement, and inventory balancing",
    outcome: "predictable linen availability without internal washing bottlenecks",
    rhythm: "recurring route service based on room turns or treatment volume",
    concern: "shortages, inconsistent presentation, and backup inventory taking over storage rooms",
  },
  "/shop-towel-service": {
    slug: "/shop-towel-service",
    label: "shop towel service",
    audience: "automotive, fabrication, maintenance, and industrial workplaces",
    scope: "towel supply, collection, laundering, replacement, and bin support",
    outcome: "clean wiping materials on hand while reducing disposable waste",
    rhythm: "steady exchange intervals based on production pace and soil load",
    concern: "supply gaps, overflowing used-towel bins, and overuse of disposable paper products",
  },
  "/workplace-first-aid-service": {
    slug: "/workplace-first-aid-service",
    label: "workplace first aid service",
    audience: "employers who need stocked, compliant, and easy-to-check first aid coverage",
    scope: "kit inspection, replenishment, signage support, cabinet programs, and site planning",
    outcome: "fewer compliance gaps and a clearer record of what each location needs",
    rhythm: "routine audits plus replenishment after incidents or seasonal demand shifts",
    concern: "expired contents, incomplete kits, and uncertainty about what each site is supposed to carry",
  },
};

const SUPPORT_TO_PILLAR: Record<string, string> = {
  "/feminine-hygiene-disposal": "/washroom-cleaning-service",
  "/coverall-rental": "/uniform-rental-service",
  "/ontario-first-aid-kit-requirements": "/workplace-first-aid-service",
  "/bc-first-aid-kit-requirements": "/workplace-first-aid-service",
};

const CITY_FACTS: Record<string, CityFact> = {
  Barrie: {
    neighborhoods: ["Allandale", "Painswick"],
    landmarks: ["Kempenfelt Bay", "Barrie Waterfront"],
    climate: "snowy winters and humid summers shaped by Georgian Bay weather",
    profile: "a fast-growing Simcoe County hub with busy retail strips and industrial parks",
  },
  Brampton: {
    neighborhoods: ["Springdale", "Heart Lake"],
    landmarks: ["Gage Park", "Claireville Conservation Area"],
    climate: "humid summers and sharp winter freeze-thaw swings",
    profile: "one of the GTA's biggest logistics and employment centres",
  },
  Burnaby: {
    neighborhoods: ["Metrotown", "Brentwood"],
    landmarks: ["Burnaby Mountain", "Deer Lake Park"],
    climate: "wet coastal winters with long stretches of rain and mild summers",
    profile: "a major Metro Vancouver business district with dense mixed-use corridors",
  },
  Calgary: {
    neighborhoods: ["Bowness", "Beltline"],
    landmarks: ["Bow River", "Stampede Park"],
    climate: "dry prairie conditions with quick temperature changes during Chinook events",
    profile: "a large operations city with office towers, industrial land, and regional distribution",
  },
  Edmonton: {
    neighborhoods: ["Westmount", "Mill Woods"],
    landmarks: ["North Saskatchewan River", "West Edmonton Mall"],
    climate: "long cold winters and dry, bright summers",
    profile: "a government and industrial centre with large facilities spread across the metro",
  },
  Guelph: {
    neighborhoods: ["Exhibition Park", "Kortright Hills"],
    landmarks: ["Speed River", "University of Guelph"],
    climate: "humid summers and damp shoulder seasons",
    profile: "a manufacturing and education city with a strong research and agri-food presence",
  },
  Halifax: {
    neighborhoods: ["Hydrostone", "Fairview"],
    landmarks: ["Halifax Harbour", "Point Pleasant Park"],
    climate: "coastal rain, fog, and winter storms off the Atlantic",
    profile: "Atlantic Canada's largest business centre with a port-driven economy",
  },
  Hamilton: {
    neighborhoods: ["Westdale", "Stoney Creek"],
    landmarks: ["Hamilton Harbour", "Niagara Escarpment"],
    climate: "lake humidity paired with snow, rain, and regular freeze-thaw cycles",
    profile: "an industrial and healthcare city with diverse commercial building stock",
  },
  Kelowna: {
    neighborhoods: ["Rutland", "Glenmore"],
    landmarks: ["Okanagan Lake", "Knox Mountain"],
    climate: "dry summers and cooler valley winters",
    profile: "a service and tourism market with year-round hospitality demand",
  },
  Kitchener: {
    neighborhoods: ["Doon", "Forest Heights"],
    landmarks: ["Victoria Park", "THEMUSEUM district"],
    climate: "snowy winters and warm, humid summers",
    profile: "a Waterloo Region employment base with offices, healthcare, and light industry",
  },
  Lethbridge: {
    neighborhoods: ["London Road", "West Highlands"],
    landmarks: ["Oldman River", "High Level Bridge"],
    climate: "sunny prairie weather with frequent wind exposure",
    profile: "a southern Alberta regional centre serving agriculture, education, and healthcare",
  },
  London: {
    neighborhoods: ["Old North", "Byron"],
    landmarks: ["Thames River", "Victoria Park"],
    climate: "humid summers and snowy Southwestern Ontario winters",
    profile: "a large regional market with hospitals, campuses, and steady office occupancy",
  },
  Markham: {
    neighborhoods: ["Unionville", "Milliken Mills"],
    landmarks: ["Toogood Pond", "Main Street Unionville"],
    climate: "humid summers and icy York Region winters",
    profile: "a technology-heavy business district with office campuses and commercial plazas",
  },
  Mississauga: {
    neighborhoods: ["Port Credit", "Streetsville"],
    landmarks: ["Credit River", "Square One"],
    climate: "lake-influenced humidity and cold winter temperature swings",
    profile: "a major airport-adjacent employment zone with dense office and industrial space",
  },
  Moncton: {
    neighborhoods: ["Dieppe border area", "New West End"],
    landmarks: ["Petitcodiac River", "Avenir Centre"],
    climate: "humid summers and snowy Maritime winters",
    profile: "a bilingual logistics and service hub for New Brunswick",
  },
  Montreal: {
    neighborhoods: ["Saint-Laurent", "Griffintown"],
    landmarks: ["Mount Royal", "Old Port"],
    climate: "hot summers and cold winters with regular snow and thaw cycles",
    profile: "a dense commercial market with multilingual workplaces and mixed building vintages",
  },
  Ottawa: {
    neighborhoods: ["Kanata", "Nepean"],
    landmarks: ["Rideau Canal", "Parliament Hill"],
    climate: "humid summers and very cold winters",
    profile: "a federal and technology market with large campuses and public buildings",
  },
  "Quebec City": {
    neighborhoods: ["Sainte-Foy", "Limoilou"],
    landmarks: ["Old Quebec", "Plains of Abraham"],
    climate: "cold snowy winters and warm summers",
    profile: "a government and tourism centre with heritage buildings and institutional spaces",
  },
  "Red Deer": {
    neighborhoods: ["Lancaster", "Anders"],
    landmarks: ["Waskasoo Park", "Red Deer River"],
    climate: "dry, windy prairie weather with cold winters",
    profile: "a Central Alberta service market between Calgary and Edmonton",
  },
  Regina: {
    neighborhoods: ["Harbour Landing", "Lakeview"],
    landmarks: ["Wascana Centre", "Mosaic Stadium"],
    climate: "dry prairie summers and very cold winters",
    profile: "a provincial capital with public-sector campuses and broad suburban commercial stock",
  },
  Saskatoon: {
    neighborhoods: ["Nutana", "Stonebridge"],
    landmarks: ["South Saskatchewan River", "Midtown Plaza"],
    climate: "cold winters, warm summers, and dry prairie air",
    profile: "a growing prairie city with healthcare, education, and regional distribution activity",
  },
  Surrey: {
    neighborhoods: ["Guildford", "Newton"],
    landmarks: ["Crescent Beach", "Surrey City Hall"],
    climate: "rain-heavy coastal winters and mild summers",
    profile: "a rapidly expanding Metro Vancouver market with large mixed-use growth corridors",
  },
  Toronto: {
    neighborhoods: ["North York", "Liberty Village"],
    landmarks: ["CN Tower", "Exhibition Place"],
    climate: "humid summers and wet, icy winter weather off Lake Ontario",
    profile: "Canada's largest office and multi-site commercial market",
  },
  Vancouver: {
    neighborhoods: ["Mount Pleasant", "Kitsilano"],
    landmarks: ["Canada Place", "False Creek"],
    climate: "mild, rainy winters and dry summer stretches",
    profile: "a dense coastal business district with hospitality, office, and mixed-use demand",
  },
  Victoria: {
    neighborhoods: ["James Bay", "Fernwood"],
    landmarks: ["Inner Harbour", "Beacon Hill Park"],
    climate: "mild winters, ocean moisture, and dry summers",
    profile: "a public-sector and tourism market with steady year-round presentation needs",
  },
  Winnipeg: {
    neighborhoods: ["St. Boniface", "River Heights"],
    landmarks: ["The Forks", "Red River"],
    climate: "very cold winters, warm summers, and dry inland conditions",
    profile: "a prairie distribution centre with broad industrial and institutional demand",
  },
};

export function getSiteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL).replace(/\/+$/, "");
}

export function toPath(slug: string) {
  return slug.startsWith("/") ? slug : `/${slug}`;
}

export function absoluteUrl(path: string) {
  return `${getSiteUrl()}${toPath(path)}`;
}

export function bySlug(slug: string) {
  const clean = toPath(slug).replace(/\/+$/, "");
  return SEO_PAGES.find((page) => page.pageSlug === clean);
}

export function isCityPage(page: SeoPage) {
  return page.pageType === "City Service Page";
}

export function isSupportPage(page: SeoPage) {
  return page.pageType !== "Service Pillar" && page.pageType !== "City Service Page";
}

export function cityFromTargetArea(targetArea: string) {
  return targetArea.split(",")[0].trim();
}

export function provinceFromTargetArea(targetArea: string) {
  if (targetArea.includes(",")) return targetArea.split(",")[1].trim();
  if (targetArea.includes("Canada")) return "Canada";
  return targetArea.trim();
}

export function pageLocation(page: SeoPage) {
  if (isCityPage(page)) return cityFromTargetArea(page.targetArea);
  if (page.targetArea.includes("Canada")) return "Canada";
  return page.targetArea;
}

export function titleCase(value: string) {
  return value
    .split(/(\s|-|\/)/)
    .map((part) => {
      if (/^\s|-|\/$/.test(part)) return part;
      const lower = part.toLowerCase();
      if (lower === "bc") return "BC";
      if (lower === "on") return "ON";
      if (lower === "ns") return "NS";
      if (lower === "nb") return "NB";
      if (lower === "qc") return "QC";
      if (lower === "ab") return "AB";
      if (lower === "mb") return "MB";
      if (lower === "sk") return "SK";
      if (lower === "gta") return "GTA";
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join("")
    .replace(/\bAnd\b/g, "and")
    .replace(/\bIn\b/g, "in")
    .replace(/\bFor\b/g, "for")
    .replace(/\bNear Me\b/g, "Near Me");
}

function cleanTitle(value: string) {
  return value.replace(/\s*\|\s*.*$/, "").trim();
}

export function buildH1(page: SeoPage) {
  return cleanTitle(page.pageTitle);
}

export function buildMetaTitle(page: SeoPage) {
  const location = pageLocation(page);
  const keyword = titleCase(page.primaryKeyword);
  let base = isCityPage(page) ? `${keyword} ${location}` : location === "Canada" ? `${keyword} Canada` : `${keyword} ${location}`;
  if (base.length > 43) {
    base = cleanTitle(page.pageTitle).replace(/\s+in Canada$/i, " Canada").trim();
  }
  let title = `${base} | ${SITE_NAME}`;
  if (title.length > 60) {
    title = `${base.slice(0, 60 - SITE_NAME.length - 3).replace(/[,\- ]+$/, "")} | ${SITE_NAME}`;
  }
  return title;
}

export function buildMetaDescription(page: SeoPage) {
  const location = pageLocation(page);
  const profile = serviceProfileFor(page);
  const opener = isCityPage(page)
    ? `${titleCase(page.primaryKeyword)} in ${location} for cleaner, safer facilities.`
    : `${titleCase(page.primaryKeyword)} for commercial facilities in ${location}.`;
  let description = `${opener} Book tailored support, clear scheduling, and responsive service from ${SITE_NAME}. Call ${PHONE_DISPLAY} today.`;
  if (description.length > 160) {
    description = `${description.slice(0, 157).replace(/[,. ]+$/, "")}.`;
  }
  while (description.length < 150) {
    description = `${description.replace(/\.$/, "")} Built for ${profile.audience}.`;
    if (description.length > 160) {
      description = `${description.slice(0, 157).replace(/[,. ]+$/, "")}.`;
      break;
    }
  }
  return description;
}

export function serviceFamily(page: SeoPage) {
  if (page.pageType === "Service Pillar") return page.pageSlug;
  if (SUPPORT_TO_PILLAR[page.pageSlug]) return SUPPORT_TO_PILLAR[page.pageSlug];
  if (page.pageSlug.startsWith("/commercial-carpet-cleaning")) return "/commercial-carpet-cleaning";
  if (page.pageSlug.startsWith("/uniform-rental")) return "/uniform-rental-service";
  if (page.pageSlug.startsWith("/floor-mat-rental")) return "/floor-mat-rental-service";
  return SERVICE_PILLARS[0]?.pageSlug || "";
}

export function pillarFor(page: SeoPage) {
  const slug = serviceFamily(page);
  return SERVICE_PILLARS.find((item) => item.pageSlug === slug) || SERVICE_PILLARS[0];
}

export function serviceProfileFor(page: SeoPage) {
  return SERVICE_PROFILES[serviceFamily(page)] || SERVICE_PROFILES["/floor-mat-rental-service"];
}

export function cityPagesForPillar(pillar: SeoPage) {
  return CITY_PAGES.filter((page) => serviceFamily(page) === pillar.pageSlug);
}

export function supportPagesForPillar(pillar: SeoPage) {
  return SUPPORT_PAGES.filter((page) => serviceFamily(page) === pillar.pageSlug);
}

export function sameCityPages(page: SeoPage) {
  if (!isCityPage(page)) return [];
  const city = cityFromTargetArea(page.targetArea);
  return CITY_PAGES.filter((item) => item.pageSlug !== page.pageSlug && cityFromTargetArea(item.targetArea) === city);
}

export function supportCityLinks(page: SeoPage, limit = 5) {
  const pillar = pillarFor(page);
  const familyMatches = cityPagesForPillar(pillar);
  if (isCityPage(page)) {
    return familyMatches.filter((item) => item.pageSlug !== page.pageSlug).slice(0, limit);
  }
  return familyMatches.slice(0, limit);
}

export function linkLabel(page: SeoPage) {
  return titleCase(page.primaryKeyword);
}

export function pageListLabel(page: SeoPage) {
  return cleanTitle(page.pageTitle)
    .replace(/\s+in Canada$/i, "")
    .replace(/\s+Canada$/i, "")
    .trim();
}

export function serviceTopicLabel(page: SeoPage) {
  const pillar = pillarFor(page);
  return pageListLabel(pillar);
}

export function cityFactsFor(page: SeoPage) {
  if (!isCityPage(page)) return null;
  return CITY_FACTS[cityFromTargetArea(page.targetArea)] || null;
}

export function buildIntro(page: SeoPage) {
  const location = pageLocation(page);
  const profile = serviceProfileFor(page);
  const cityFacts = cityFactsFor(page);

  if (isCityPage(page) && cityFacts) {
    return `Facilities in ${location} deal with real foot traffic, weather, and presentation pressure every week — and ${profile.label} is one of the areas where a reliable program makes a visible difference. Teams around ${cityFacts.neighborhoods[0]} and ${cityFacts.neighborhoods[1]} often need service plans that fit busy public hours, loading access, and the expectations that come with landmarks like ${cityFacts.landmarks[0]} and ${cityFacts.landmarks[1]}. With ${cityFacts.climate}, building operators want something that runs predictably rather than reacting to problems after they have already shown up. This page covers what a thoughtful local program typically includes, what details help at the start of a conversation, and how to compare options without overcomplicating the process.`;
  }

  if (page.pageType === "Service Pillar") {
    return `Most ${profile.audience} who start researching ${profile.label} are already past the question of whether they need it. They want to know what a dependable program actually looks like, what separates good service from one that creates more admin work than it saves, and how to get a realistic picture of scope and cost before talking to a provider. The work can cover ${profile.scope}, and the goal is normally ${profile.outcome}. This page gives a practical overview of how the service is typically structured across Canada, what usually shapes pricing and rollout, and where to go next if you need city-specific or more focused answers.`;
  }

  return `This topic is easier to work through when the conversation stays practical. Rather than treating it like a checklist item, most facility teams want to know what the requirement means on site, how often it should be reviewed, and what mistakes create avoidable risk or extra cost. This guide covers the operational details that matter first and what a manager should ask before choosing a vendor or updating an existing process.`;
}

export function buildSections(page: SeoPage) {
  const profile = serviceProfileFor(page);
  const location = pageLocation(page);
  const facts = cityFactsFor(page);

  if (isCityPage(page) && facts) {
    return [
      {
        title: `How facility teams usually approach this in ${location}`,
        paragraphs: [
          `${location} operators normally start by looking at building type, operating hours, and how visible the issue is to visitors or staff. In a city described by ${facts.profile}, service decisions often need to work across storefront entries, office corridors, break areas, and mixed-use spaces rather than one simple room or hallway. That is why the strongest plans define where the work happens, when it can happen, and what the result should look like between visits.`,
          `For this service line, buyers often compare whether the provider can adjust to changing weather, public traffic, or shift-driven access. A polished proposal is useful, but it is usually the practical details that decide whether the relationship lasts: response windows, route consistency, communication, and whether the team on site can keep standards steady when occupancy spikes.`,
        ],
      },
      {
        title: "What should be covered during the first conversation",
        paragraphs: [
          `A productive first call usually covers the number of entrances or work zones, the surfaces involved, any hygiene or safety pressure points, and who will oversee the account once service begins. For ${profile.label}, that kind of detail is more helpful than broad square-footage estimates because it reveals the real operating pattern inside the facility.`,
          `It also helps to mention seasonality. In ${location}, local conditions such as ${facts.climate} can change soil load, moisture levels, and staffing patterns quickly. When those realities are part of the early conversation, the resulting schedule feels deliberate rather than reactive and the site team spends less time correcting preventable misses later on.`,
        ],
      },
      {
        title: `Local context that influences service around ${location}`,
        paragraphs: [
          `Properties near ${facts.landmarks[0]} and ${facts.landmarks[1]} may plan differently from quieter suburban sites because access windows, visitor expectations, and travel timing can be less predictable. The same is true for teams serving tenants or customers around ${facts.neighborhoods[0]} and ${facts.neighborhoods[1]}, where local density can change how quickly mats soil, carpets mark, or uniforms cycle out of use.`,
          `The useful takeaway is not that every building needs a custom contract. It is that local service tends to work best when the schedule and scope reflect the way ${location} actually behaves from season to season. That keeps the program grounded in the daily reality of the property instead of a generic national service script.`,
        ],
      },
    ];
  }

  if (page.pageType === "Service Pillar") {
    return [
      {
        title: "What strong commercial service usually looks like",
        paragraphs: [
          `${profile.label} works best when it is tied to an operational outcome, not just a line item. Some clients need cleaner public presentation, some are trying to reduce internal handling, and others want a service cadence that is stable across several locations. The underlying need changes, but the most dependable programs still share the same traits: clear scope, clear timing, and a provider that can explain what happens when demand changes.`,
          `That is especially important for ${profile.audience}. Commercial spaces rarely stay static for long. Occupancy shifts, weather changes, staff levels move, and leadership often wants a cleaner record of why service happens the way it does. A useful program leaves room for those realities while still producing a visible result that front-line teams can trust.`,
        ],
      },
      {
        title: "How scheduling and scope are typically planned",
        paragraphs: [
          `Most buyers build the scope around where the service touches daily operations. With ${profile.label}, that may mean identifying high-traffic areas, deciding which locations need recurring attention, and setting a schedule that respects delivery hours or public occupancy. The more specific that scoping step is, the easier it becomes to hold the service accountable later.`,
          `The cadence usually follows ${profile.rhythm}. That does not mean every site receives the same treatment. It means the service has a repeatable operating rhythm that can be reviewed, adjusted, and measured. Facilities teams often prefer that model because it reduces ad hoc decision-making and makes multi-site budgeting easier to defend.`,
        ],
      },
      {
        title: "What teams monitor after launch",
        paragraphs: [
          `Once the service is active, most teams watch for the same signals: Is the site staying presentation-ready between visits, are requests being resolved quickly, and is the program still aligned with current occupancy? Those questions matter more than polished marketing language because they reveal whether the account is actually supporting operations.`,
          `This is also where communication matters. A strong vendor should be able to explain route changes, inventory shifts, or site-specific recommendations in plain language. That helps managers make better calls when the business adds headcount, changes flooring, opens another entry, or needs a temporary increase in frequency.`,
        ],
      },
      {
        title: "Where this service fits inside a broader facility plan",
        paragraphs: [
          `${profile.label} is rarely the only thing a site is managing. It often sits beside adjacent needs such as washroom care, uniform support, linen handling, or compliance supplies. Treating those as connected decisions can reduce vendor sprawl and help leadership understand the full operating picture rather than one isolated contract at a time.`,
          `That is why this page also links to city pages and related service pages. Some readers need a national overview before they shortlist vendors, while others are already comparing local availability or a narrower topic such as disposal units or provincial first aid requirements. Moving between those layers should feel natural, not forced.`,
        ],
      },
    ];
  }

  return [
    {
      title: "Why this topic matters in day-to-day operations",
      paragraphs: [
        `This topic usually becomes relevant once a facility team has moved past the basics and needs a more specific answer. The question may be operational, compliance-related, or tied to occupant expectations, but the underlying issue is usually the same: someone needs a clearer standard so the work can be managed consistently.`,
        `Because this connects to ${profile.label}, it makes more sense to plan it as part of the broader service rather than handling it separately. The best outcome is not simply knowing the rule or service name. It is understanding how that information affects supplier choice, visit planning, restocking, or the way you communicate with the people who use the building every day.`,
      ],
    },
    {
      title: `How this connects to service planning in ${location}`,
      paragraphs: [
        `For buyers in ${location}, the challenge is often balancing compliance or user experience with a process that remains easy to run. That means deciding who checks the service, how issues are recorded, and whether the current supplier is equipped to handle related requests without adding friction.`,
        `A more mature plan usually sets expectations in advance: what counts as acceptable, what triggers replenishment or servicing, and who receives updates. Once those points are written down, the topic becomes easier to budget for and far less likely to be forgotten until there is a complaint or inspection.`,
      ],
    },
    {
      title: "Questions worth asking before you move forward",
      paragraphs: [
        `Before choosing or revising a service, it helps to ask whether the current setup matches actual use patterns, whether site staff can see the status easily, and whether the recordkeeping is simple enough to survive staff turnover. Those are not glamorous questions, but they usually reveal where avoidable risk or waste is hiding.`,
        `From there, the next step is usually clear: tighten the scope, connect this back to the relevant service, and check a few city pages if local availability matters. That keeps the decision grounded and stops a single operational detail from turning into a recurring headache.`,
      ],
    },
  ];
}

export function buildHighlights(page: SeoPage) {
  const profile = serviceProfileFor(page);
  const location = pageLocation(page);

  if (isCityPage(page)) {
    return [
      {
        title: "Local fit",
        text: `Plans for ${location} should reflect traffic patterns, access windows, and the conditions facility teams manage on site.`,
      },
      {
        title: "Clear scope",
        text: `The work is easier to evaluate when the service zones, service cadence, and expected result are defined early.`,
      },
      {
        title: "Operational result",
        text: `Most buyers are aiming for ${profile.outcome.toLowerCase()}, not just a box checked on a vendor schedule.`,
      },
    ];
  }

  if (page.pageType === "Service Pillar") {
    return [
      {
        title: "Audience",
        text: `Built for ${profile.audience} that need dependable execution across active commercial spaces.`,
      },
      {
        title: "Scope",
        text: `Common programs cover ${profile.scope} with room to adapt as the building or route changes.`,
      },
      {
        title: "Watch-outs",
        text: `Teams often start this service because of ${profile.concern}.`,
      },
    ];
  }

  return [
    {
      title: "Practical guidance",
      text: "Written to help managers compare options, not to bury the decision in vague policy language.",
    },
    {
      title: "Part of a bigger plan",
      text: `This works best as part of a ${profile.label} program rather than something managed separately.`,
    },
    {
      title: "Next-step ready",
      text: `The goal is a clearer, easier-to-run process in ${location}.`,
    },
  ];
}

export function buildProcessSteps(page: SeoPage) {
  const profile = serviceProfileFor(page);
  const location = pageLocation(page);

  return [
    {
      title: "Map the site reality",
      text: `Identify the spaces, service pressure points, and access constraints that shape ${profile.label} at ${location}.`,
    },
    {
      title: "Set the service rhythm",
      text: `Choose a cadence that fits occupancy, staffing, and how quickly the site shows wear or runs through inventory.`,
    },
    {
      title: "Confirm accountability",
      text: "Define who handles route communication, exceptions, and small changes before they become recurring issues.",
    },
    {
      title: "Review and adjust",
      text: "Check whether the program still matches actual use after launch and refine the scope as the building changes.",
    },
  ];
}

export function faqsFor(page: SeoPage) {
  const location = pageLocation(page);
  const profile = serviceProfileFor(page);
  const city = isCityPage(page) ? cityFromTargetArea(page.targetArea) : null;

  if (isCityPage(page) && city) {
    return [
      {
        q: `How do most businesses in ${city} set up this kind of service?`,
        a: `Most teams start with access, traffic, and operating hours. Once those are clear, the service cadence and scope can be built around the way the property actually runs instead of a generic route template.`,
      },
      {
        q: `What details help before requesting service in ${city}?`,
        a: `It helps to share the building type, the busiest areas, any after-hours restrictions, and whether the current issue is presentation-related, safety-related, or tied to supply levels. That usually leads to a more accurate starting conversation.`,
      },
      {
        q: `Can this service be coordinated with other facility needs in ${city}?`,
        a: `Yes. Many operators review this service alongside adjacent needs such as uniforms, washrooms, first aid, or linen support so scheduling and vendor management stay simpler across the property.`,
      },
    ];
  }

  if (page.pageType === "Service Pillar") {
    return [
      {
        q: `What kind of businesses typically use this service?`,
        a: `This service is commonly used by ${profile.audience}. The need usually grows once internal handling becomes inconsistent, time-consuming, or too reactive for the pace of the facility.`,
      },
      {
        q: "How often should commercial service be reviewed?",
        a: `The right rhythm depends on traffic, occupancy, and how visible the issue becomes between visits. Most teams review cadence after launch, then adjust it around seasonality, staffing changes, or expansion.`,
      },
      {
        q: "What makes one provider easier to manage than another?",
        a: "Clear communication, stable route execution, and a service scope that is easy to audit usually matter more than polished sales language. Buyers tend to stay with providers that make day-to-day oversight simpler.",
      },
    ];
  }

  return [
    {
      q: `Why does this page matter if I already understand ${profile.label}?`,
      a: "Because specific requirements and sub-services often create the real operational friction. A focused page like this helps you decide how to run the process, not just what the category is called.",
    },
    {
      q: `Should this be handled separately from the main ${profile.label} service?`,
      a: "Not usually. It is often better managed as part of the broader service conversation so roles, documentation, and visit planning stay connected instead of splitting across separate workflows.",
    },
    {
      q: `What is the best next step for teams in ${location}?`,
      a: "Start with the main service page, then check the local pages for your area. That gives you enough context to compare options and move forward without overcomplicating the process.",
    },
  ];
}
