"use client";

import { Suspense, lazy, type ReactNode } from "react";
import {
  ArrowRight,
  BookOpen,
  Check,
  Clapperboard,
  ExternalLink,
  Flame,
  PlayCircle,
  ScrollText,
  Shield,
  Sparkles,
  Swords,
  UserRound,
} from "lucide-react";
import Link from "next/link";
import { useMessages } from "next-intl";
import { VideoFeature } from "@/components/home/VideoFeature";
import { LatestGuidesAccordion } from "@/components/home/LatestGuidesAccordion";
import { NativeBannerAd, AdBanner } from "@/components/ads";
import { getPreferredMobileBannerSelection } from "@/components/ads/mobileAdConfigs";
import { SidebarAd } from "@/components/ads/SidebarAd";
import { scrollToSection } from "@/lib/scrollToSection";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import type { ContentItemWithType } from "@/lib/getLatestArticles";
import {
  HERO_IMAGE_ALT,
  OFFICIAL_SITE_URL,
  PLAYSTATION_URL,
  REDDIT_URL,
  getHomeCopy,
  SITE_NAME,
  SITE_SHORT_NAME,
  SITE_URL_FALLBACK,
  STEAM_URL,
  STEAM_COMMUNITY_URL,
  XBOX_URL,
  X_URL,
  YOUTUBE_VIDEO_ID,
  YOUTUBE_VIDEO_URL,
} from "@/lib/site-config";

const HeroStats = lazy(() => import("@/components/home/HeroStats"));
const FAQSection = lazy(() => import("@/components/home/FAQSection"));
const CTASection = lazy(() => import("@/components/home/CTASection"));

const LoadingPlaceholder = ({ height = "h-64" }: { height?: string }) => (
  <div
    className={`${height} rounded-xl border border-border bg-white/5 animate-pulse`}
  />
);

function SectionHeading({
  icon,
  title,
  intro,
}: {
  icon: ReactNode;
  title: string;
  intro: string;
}) {
  return (
    <div className="mb-8 text-center md:mb-12">
      <div className="mb-4 flex items-center justify-center gap-3 text-[hsl(var(--nav-theme-light))]">
        {icon}
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[hsl(var(--nav-theme-light))]">
          Homepage Module
        </span>
      </div>
      <h2 className="mb-4 text-3xl font-bold leading-tight md:text-5xl">
        {title}
      </h2>
      <p className="mx-auto max-w-3xl text-base leading-7 text-muted-foreground md:text-lg">
        {intro}
      </p>
    </div>
  );
}

interface HomePageClientProps {
  latestArticles: ContentItemWithType[];
  locale: string;
}

export default function HomePageClient({
  latestArticles,
  locale,
}: HomePageClientProps) {
  const t = useMessages() as any;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || SITE_URL_FALLBACK;
  const copy = getHomeCopy(locale);
  const mobileBannerAd = getPreferredMobileBannerSelection();

  const toolsCards = t.tools.cards;
  const releaseModule = t.modules.onimushaReleaseDatePlatforms;
  const demoModule = t.modules.onimushaDemoDownloadRewards;
  const editionsModule = t.modules.onimushaPreOrderBonusesEditions;
  const trailersModule = t.modules.onimushaTrailersGameplayVideos;
  const guideModule = t.modules.onimushaBeginnerGuide;
  const combatModule = t.modules.onimushaCombatOniGauntlet;
  const storyModule = t.modules.onimushaCharactersStory;
  const bossesModule = t.modules.onimushaBossesGenmaLocations;
  const guideStepIcons = [
    "Gamepad2",
    "Footprints",
    "ShieldCheck",
    "Zap",
    "Orbit",
    "Flame",
    "Mountain",
    "Swords",
  ];
  const combatIcons = [
    "Shield",
    "ShieldPlus",
    "Sparkles",
    "CircleDashed",
    "Flame",
    "Hammer",
    "Wind",
    "Gauge",
  ];
  const storyIcons = [
    "UserRound",
    "BadgeHelp",
    "Swords",
    "Skull",
    "Landmark",
    "ScrollText",
  ];
  const bossesIcons = [
    "Skull",
    "Crosshair",
    "Flame",
    "Mountain",
    "Landmark",
    "Map",
    "ShieldAlert",
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: SITE_NAME,
        description: copy.seo.description,
        image: {
          "@type": "ImageObject",
          url: `${siteUrl}/images/hero.webp`,
          width: 1920,
          height: 1080,
          caption: HERO_IMAGE_ALT,
        },
        potentialAction: {
          "@type": "SearchAction",
          target: `${siteUrl}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: SITE_NAME,
        alternateName: SITE_SHORT_NAME,
        url: siteUrl,
        description: copy.seo.description,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/android-chrome-512x512.png`,
          width: 512,
          height: 512,
        },
        image: {
          "@type": "ImageObject",
          url: `${siteUrl}/images/hero.webp`,
          width: 1920,
          height: 1080,
          caption: HERO_IMAGE_ALT,
        },
        sameAs: [
          OFFICIAL_SITE_URL,
          STEAM_URL,
          PLAYSTATION_URL,
          XBOX_URL,
          X_URL,
          REDDIT_URL,
          STEAM_COMMUNITY_URL,
        ],
      },
      {
        "@type": "VideoGame",
        name: "Onimusha: Way of the Sword",
        gamePlatform: ["PlayStation 5", "Xbox Series X|S", "PC"],
        applicationCategory: "Game",
        genre: ["Action", "Swordplay", "Dark Fantasy"],
        numberOfPlayers: {
          minValue: 1,
          maxValue: 1,
        },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/PreOrder",
          url: STEAM_URL,
        },
      },
      {
        "@type": "VideoObject",
        name: copy.video.title,
        description: copy.video.description,
        uploadDate: "2026-06-03",
        thumbnailUrl: [`${siteUrl}/images/hero.webp`],
        embedUrl: `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`,
        url: YOUTUBE_VIDEO_URL,
        publisher: {
          "@type": "Organization",
          name: SITE_NAME,
          url: siteUrl,
        },
      },
    ],
  };

  return (
    <div className="home-shell min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <aside
        className="fixed top-20 z-10 hidden w-40 xl:block"
        style={{ left: "calc((100vw - 896px) / 2 - 180px)" }}
      >
        <SidebarAd
          type="sidebar-160x300"
          adKey={process.env.NEXT_PUBLIC_AD_SIDEBAR_160X300}
        />
      </aside>

      <aside
        className="fixed top-20 z-10 hidden w-40 xl:block"
        style={{ right: "calc((100vw - 896px) / 2 - 180px)" }}
      >
        <SidebarAd
          type="sidebar-160x600"
          adKey={process.env.NEXT_PUBLIC_AD_SIDEBAR_160X600}
        />
      </aside>

      <section className="relative overflow-hidden px-4 pb-14 pt-24 md:pb-20 md:pt-32">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8 text-center scroll-reveal">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[hsl(var(--nav-theme)/0.3)] bg-[hsl(var(--nav-theme)/0.1)] px-3 py-1.5 md:mb-6 md:px-4 md:py-2">
              <Sparkles className="h-4 w-4 text-[hsl(var(--nav-theme-light))]" />
              <span className="text-xs font-medium md:text-sm">
                {copy.hero.badge}
              </span>
            </div>

            <h1 className="mb-4 text-4xl font-bold leading-[1.05] sm:text-5xl md:mb-6 md:text-7xl">
              {copy.hero.title}
            </h1>

            <p className="mx-auto mb-8 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg md:mb-10 md:max-w-3xl md:text-2xl">
              {copy.hero.description}
            </p>

            <div className="mb-10 flex flex-col justify-center gap-3 sm:flex-row md:mb-12 md:gap-4">
              <a
                href={OFFICIAL_SITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[hsl(var(--nav-theme))] px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[hsl(var(--nav-theme)/0.9)] md:px-8 md:py-4 md:text-lg"
              >
                <BookOpen className="h-5 w-5" />
                {copy.hero.primaryCta}
              </a>
              <a
                href={STEAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-6 py-3.5 text-base font-semibold transition-colors hover:bg-white/10 md:px-8 md:py-4 md:text-lg"
              >
                {copy.hero.secondaryCta}
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>

          <Suspense fallback={<LoadingPlaceholder height="h-32" />}>
            <HeroStats stats={copy.hero.stats} />
          </Suspense>
        </div>
      </section>

      <section className="px-4 py-10 md:py-12">
        <div className="container mx-auto max-w-5xl">
          <div className="scroll-reveal rounded-[1.75rem] border border-[hsl(var(--nav-theme)/0.22)] bg-gradient-to-br from-[hsl(var(--nav-theme)/0.14)] via-background to-[hsl(var(--nav-theme-light)/0.08)] p-5 md:p-7">
            <div className="mb-6 text-center">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-[hsl(var(--nav-theme-light))]">
                {t.gameFeature.title}
              </p>
              <h2 className="mb-3 text-2xl font-bold md:text-4xl">
                {copy.video.title}
              </h2>
              <p className="mx-auto max-w-3xl text-sm leading-6 text-muted-foreground md:text-base">
                {t.gameFeature.description}
              </p>
            </div>
            <div className="relative overflow-hidden rounded-2xl">
              <VideoFeature videoId={YOUTUBE_VIDEO_ID} title={copy.video.title} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white/[0.02] px-4 py-14 md:py-20">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-8 text-center scroll-reveal md:mb-12">
            <h2 className="mb-3 text-3xl font-bold md:mb-4 md:text-5xl">
              {t.tools.title}{" "}
              <span className="text-[hsl(var(--nav-theme-light))]">
                {t.tools.titleHighlight}
              </span>
            </h2>
            <p className="text-base text-muted-foreground md:text-lg">
              {t.tools.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <a
              href="#release-date-platforms"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("release-date-platforms");
              }}
              className="scroll-reveal group block rounded-2xl border border-border bg-card/90 p-4 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--nav-theme)/0.55)] hover:shadow-lg hover:shadow-[hsl(var(--nav-theme)/0.12)] md:p-5"
              style={{ animationDelay: "0ms" }}
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-[hsl(var(--nav-theme)/0.25)] bg-[hsl(var(--nav-theme)/0.1)] transition-colors group-hover:bg-[hsl(var(--nav-theme)/0.16)]">
                <DynamicIcon
                  name={toolsCards[0].icon}
                  className="h-5 w-5 text-[hsl(var(--nav-theme-light))]"
                />
              </div>
              <h3 className="mb-2 text-sm font-semibold leading-6 md:text-base">
                {toolsCards[0].title}
              </h3>
              <p className="text-sm leading-6 text-muted-foreground">
                {toolsCards[0].description}
              </p>
            </a>
            <a
              href="#demo-download-rewards"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("demo-download-rewards");
              }}
              className="scroll-reveal group block rounded-2xl border border-border bg-card/90 p-4 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--nav-theme)/0.55)] hover:shadow-lg hover:shadow-[hsl(var(--nav-theme)/0.12)] md:p-5"
              style={{ animationDelay: "60ms" }}
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-[hsl(var(--nav-theme)/0.25)] bg-[hsl(var(--nav-theme)/0.1)] transition-colors group-hover:bg-[hsl(var(--nav-theme)/0.16)]">
                <DynamicIcon
                  name={toolsCards[1].icon}
                  className="h-5 w-5 text-[hsl(var(--nav-theme-light))]"
                />
              </div>
              <h3 className="mb-2 text-sm font-semibold leading-6 md:text-base">
                {toolsCards[1].title}
              </h3>
              <p className="text-sm leading-6 text-muted-foreground">
                {toolsCards[1].description}
              </p>
            </a>
            <a
              href="#pre-order-bonuses-editions"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("pre-order-bonuses-editions");
              }}
              className="scroll-reveal group block rounded-2xl border border-border bg-card/90 p-4 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--nav-theme)/0.55)] hover:shadow-lg hover:shadow-[hsl(var(--nav-theme)/0.12)] md:p-5"
              style={{ animationDelay: "120ms" }}
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-[hsl(var(--nav-theme)/0.25)] bg-[hsl(var(--nav-theme)/0.1)] transition-colors group-hover:bg-[hsl(var(--nav-theme)/0.16)]">
                <DynamicIcon
                  name={toolsCards[2].icon}
                  className="h-5 w-5 text-[hsl(var(--nav-theme-light))]"
                />
              </div>
              <h3 className="mb-2 text-sm font-semibold leading-6 md:text-base">
                {toolsCards[2].title}
              </h3>
              <p className="text-sm leading-6 text-muted-foreground">
                {toolsCards[2].description}
              </p>
            </a>
            <a
              href="#trailers-gameplay-videos"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("trailers-gameplay-videos");
              }}
              className="scroll-reveal group block rounded-2xl border border-border bg-card/90 p-4 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--nav-theme)/0.55)] hover:shadow-lg hover:shadow-[hsl(var(--nav-theme)/0.12)] md:p-5"
              style={{ animationDelay: "180ms" }}
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-[hsl(var(--nav-theme)/0.25)] bg-[hsl(var(--nav-theme)/0.1)] transition-colors group-hover:bg-[hsl(var(--nav-theme)/0.16)]">
                <DynamicIcon
                  name={toolsCards[3].icon}
                  className="h-5 w-5 text-[hsl(var(--nav-theme-light))]"
                />
              </div>
              <h3 className="mb-2 text-sm font-semibold leading-6 md:text-base">
                {toolsCards[3].title}
              </h3>
              <p className="text-sm leading-6 text-muted-foreground">
                {toolsCards[3].description}
              </p>
            </a>
            <a
              href="#beginner-guide"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("beginner-guide");
              }}
              className="scroll-reveal group block rounded-2xl border border-border bg-card/90 p-4 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--nav-theme)/0.55)] hover:shadow-lg hover:shadow-[hsl(var(--nav-theme)/0.12)] md:p-5"
              style={{ animationDelay: "240ms" }}
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-[hsl(var(--nav-theme)/0.25)] bg-[hsl(var(--nav-theme)/0.1)] transition-colors group-hover:bg-[hsl(var(--nav-theme)/0.16)]">
                <DynamicIcon
                  name={toolsCards[4].icon}
                  className="h-5 w-5 text-[hsl(var(--nav-theme-light))]"
                />
              </div>
              <h3 className="mb-2 text-sm font-semibold leading-6 md:text-base">
                {toolsCards[4].title}
              </h3>
              <p className="text-sm leading-6 text-muted-foreground">
                {toolsCards[4].description}
              </p>
            </a>
            <a
              href="#combat-oni-gauntlet"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("combat-oni-gauntlet");
              }}
              className="scroll-reveal group block rounded-2xl border border-border bg-card/90 p-4 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--nav-theme)/0.55)] hover:shadow-lg hover:shadow-[hsl(var(--nav-theme)/0.12)] md:p-5"
              style={{ animationDelay: "300ms" }}
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-[hsl(var(--nav-theme)/0.25)] bg-[hsl(var(--nav-theme)/0.1)] transition-colors group-hover:bg-[hsl(var(--nav-theme)/0.16)]">
                <DynamicIcon
                  name={toolsCards[5].icon}
                  className="h-5 w-5 text-[hsl(var(--nav-theme-light))]"
                />
              </div>
              <h3 className="mb-2 text-sm font-semibold leading-6 md:text-base">
                {toolsCards[5].title}
              </h3>
              <p className="text-sm leading-6 text-muted-foreground">
                {toolsCards[5].description}
              </p>
            </a>
            <a
              href="#characters-story"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("characters-story");
              }}
              className="scroll-reveal group block rounded-2xl border border-border bg-card/90 p-4 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--nav-theme)/0.55)] hover:shadow-lg hover:shadow-[hsl(var(--nav-theme)/0.12)] md:p-5"
              style={{ animationDelay: "360ms" }}
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-[hsl(var(--nav-theme)/0.25)] bg-[hsl(var(--nav-theme)/0.1)] transition-colors group-hover:bg-[hsl(var(--nav-theme)/0.16)]">
                <DynamicIcon
                  name={toolsCards[6].icon}
                  className="h-5 w-5 text-[hsl(var(--nav-theme-light))]"
                />
              </div>
              <h3 className="mb-2 text-sm font-semibold leading-6 md:text-base">
                {toolsCards[6].title}
              </h3>
              <p className="text-sm leading-6 text-muted-foreground">
                {toolsCards[6].description}
              </p>
            </a>
            <a
              href="#bosses-genma-locations"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("bosses-genma-locations");
              }}
              className="scroll-reveal group block rounded-2xl border border-border bg-card/90 p-4 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--nav-theme)/0.55)] hover:shadow-lg hover:shadow-[hsl(var(--nav-theme)/0.12)] md:p-5"
              style={{ animationDelay: "420ms" }}
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-[hsl(var(--nav-theme)/0.25)] bg-[hsl(var(--nav-theme)/0.1)] transition-colors group-hover:bg-[hsl(var(--nav-theme)/0.16)]">
                <DynamicIcon
                  name={toolsCards[7].icon}
                  className="h-5 w-5 text-[hsl(var(--nav-theme-light))]"
                />
              </div>
              <h3 className="mb-2 text-sm font-semibold leading-6 md:text-base">
                {toolsCards[7].title}
              </h3>
              <p className="text-sm leading-6 text-muted-foreground">
                {toolsCards[7].description}
              </p>
            </a>
          </div>
        </div>
      </section>

      <NativeBannerAd adKey={process.env.NEXT_PUBLIC_AD_NATIVE_BANNER || ""} />

      <LatestGuidesAccordion articles={latestArticles} locale={locale} max={12} />

      <AdBanner
        type="banner-300x250"
        adKey={process.env.NEXT_PUBLIC_AD_BANNER_300X250}
        className="md:hidden"
      />
      <AdBanner
        type="banner-728x90"
        adKey={process.env.NEXT_PUBLIC_AD_BANNER_728X90}
        className="hidden md:flex"
      />

      <section id="release-date-platforms" className="scroll-mt-24 px-4 py-14 md:py-20">
        <div className="container mx-auto max-w-5xl">
          <SectionHeading
            icon={<BookOpen className="h-6 w-6" />}
            title={releaseModule.title}
            intro={releaseModule.intro}
          />
          <div className="scroll-reveal overflow-hidden rounded-3xl border border-border bg-card/70">
            <div className="grid border-b border-border bg-[hsl(var(--nav-theme)/0.08)] px-5 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground md:grid-cols-[1.15fr_1fr_1.25fr] md:px-6">
              <span>Category</span>
              <span className="hidden md:block">Confirmed Data</span>
              <span className="hidden md:block">Details</span>
            </div>
            {releaseModule.rows.map((row: any, index: number) => (
              <div
                key={row.label}
                className={`grid gap-2 border-b border-border px-5 py-5 md:grid-cols-[1.15fr_1fr_1.25fr] md:gap-4 md:px-6 ${index === releaseModule.rows.length - 1 ? "border-b-0" : ""}`}
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[hsl(var(--nav-theme-light))] md:hidden">
                    Category
                  </p>
                  <p className="font-semibold">{row.label}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[hsl(var(--nav-theme-light))] md:hidden">
                    Confirmed Data
                  </p>
                  <p className="font-medium text-foreground">{row.value}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[hsl(var(--nav-theme-light))] md:hidden">
                    Details
                  </p>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {row.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-3 scroll-reveal">
            {releaseModule.stores.map((store: any) => (
              <a
                key={store.label}
                href={store.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--nav-theme)/0.3)] bg-[hsl(var(--nav-theme)/0.08)] px-4 py-2 text-sm font-medium transition-colors hover:bg-[hsl(var(--nav-theme)/0.14)]"
              >
                {store.label}
                <ExternalLink className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <AdBanner
        type="banner-300x250"
        adKey={process.env.NEXT_PUBLIC_AD_BANNER_300X250}
        className="md:hidden"
      />
      <AdBanner
        type="banner-468x60"
        adKey={process.env.NEXT_PUBLIC_AD_BANNER_468X60}
        className="hidden md:flex"
      />

      <section id="demo-download-rewards" className="scroll-mt-24 bg-white/[0.02] px-4 py-14 md:py-20">
        <div className="container mx-auto max-w-5xl">
          <SectionHeading
            icon={<PlayCircle className="h-6 w-6" />}
            title={demoModule.title}
            intro={demoModule.intro}
          />
          <div className="grid gap-4 md:grid-cols-2 scroll-reveal">
            {demoModule.cards.map((card: any) => (
              <div
                key={card.title}
                className="rounded-2xl border border-border bg-card/80 p-6 transition-colors hover:border-[hsl(var(--nav-theme)/0.45)]"
              >
                <h3 className="mb-3 text-xl font-semibold text-[hsl(var(--nav-theme-light))]">
                  {card.title}
                </h3>
                <p className="text-sm leading-6 text-muted-foreground">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-3 scroll-reveal">
            {demoModule.highlights.map((highlight: string) => (
              <span
                key={highlight}
                className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--nav-theme)/0.3)] bg-[hsl(var(--nav-theme)/0.08)] px-4 py-2 text-sm"
              >
                <Check className="h-4 w-4 text-[hsl(var(--nav-theme-light))]" />
                {highlight}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="pre-order-bonuses-editions" className="scroll-mt-24 px-4 py-14 md:py-20">
        <div className="container mx-auto max-w-5xl">
          <SectionHeading
            icon={<Sparkles className="h-6 w-6" />}
            title={editionsModule.title}
            intro={editionsModule.intro}
          />
          <div className="grid gap-4 lg:grid-cols-3 scroll-reveal">
            {editionsModule.editions.map((edition: any) => (
              <div
                key={edition.name}
                className="rounded-3xl border border-border bg-card/85 p-6 transition-colors hover:border-[hsl(var(--nav-theme)/0.45)]"
              >
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold">{edition.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {edition.summary}
                    </p>
                  </div>
                  <span className="rounded-full border border-[hsl(var(--nav-theme)/0.3)] bg-[hsl(var(--nav-theme)/0.08)] px-3 py-1 text-sm font-semibold text-[hsl(var(--nav-theme-light))]">
                    {edition.price}
                  </span>
                </div>
                <ul className="space-y-3">
                  {edition.includes.map((entry: string) => (
                    <li key={entry} className="flex items-start gap-2 text-sm leading-6">
                      <Check className="mt-1 h-4 w-4 flex-shrink-0 text-[hsl(var(--nav-theme-light))]" />
                      <span className="text-muted-foreground">{entry}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="trailers-gameplay-videos" className="scroll-mt-24 bg-white/[0.02] px-4 py-14 md:py-20">
        <div className="container mx-auto max-w-5xl">
          <SectionHeading
            icon={<Clapperboard className="h-6 w-6" />}
            title={trailersModule.title}
            intro={trailersModule.intro}
          />
          <div className="grid gap-4 md:grid-cols-2 scroll-reveal">
            {trailersModule.videos.map((video: any) => (
              <a
                key={video.title}
                href={video.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-3xl border border-border bg-card/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--nav-theme)/0.45)]"
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--nav-theme)/0.3)] bg-[hsl(var(--nav-theme)/0.08)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[hsl(var(--nav-theme-light))]">
                    {video.channel}
                  </span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-[hsl(var(--nav-theme-light))]" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">{video.title}</h3>
                <p className="text-sm leading-6 text-muted-foreground">
                  {video.summary}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="beginner-guide" className="scroll-mt-24 px-4 py-14 md:py-20">
        <div className="container mx-auto max-w-5xl">
          <SectionHeading
            icon={<ScrollText className="h-6 w-6" />}
            title={guideModule.title}
            intro={guideModule.intro}
          />
          <div className="grid gap-4 scroll-reveal lg:grid-cols-2">
            {guideModule.steps.map((step: any, index: number) => (
              <div
                key={step.title}
                className="rounded-[1.75rem] border border-border bg-card/85 p-5 transition-colors hover:border-[hsl(var(--nav-theme)/0.45)] md:p-6"
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border border-[hsl(var(--nav-theme)/0.28)] bg-[hsl(var(--nav-theme)/0.1)]">
                    <DynamicIcon
                      name={guideStepIcons[index] || "ScrollText"}
                      className="h-5 w-5 text-[hsl(var(--nav-theme-light))]"
                    />
                  </div>
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[hsl(var(--nav-theme)/0.36)] bg-[hsl(var(--nav-theme)/0.12)] text-sm font-bold text-[hsl(var(--nav-theme-light))]">
                    {index + 1}
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                    <p className="text-sm leading-6 text-muted-foreground md:text-base">
                      {step.summary}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-[hsl(var(--nav-theme)/0.2)] bg-[hsl(var(--nav-theme)/0.06)] p-4">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[hsl(var(--nav-theme-light))]">
                      Recommended Play
                    </p>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {step.action}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border bg-background/50 p-4">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[hsl(var(--nav-theme-light))]">
                      Demo Note
                    </p>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {step.demoNote}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-3xl border border-[hsl(var(--nav-theme)/0.28)] bg-[hsl(var(--nav-theme)/0.07)] p-6 scroll-reveal">
            <div className="mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-[hsl(var(--nav-theme-light))]" />
              <h3 className="text-lg font-semibold">{guideModule.quickTipsTitle}</h3>
            </div>
            <ul className="space-y-3">
              {guideModule.quickTips.map((tip: string) => (
                <li key={tip} className="flex items-start gap-2">
                  <Check className="mt-1 h-4 w-4 flex-shrink-0 text-[hsl(var(--nav-theme-light))]" />
                  <span className="text-sm leading-6 text-muted-foreground">
                    {tip}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {mobileBannerAd && (
        <AdBanner
          type={mobileBannerAd.type}
          adKey={mobileBannerAd.adKey}
          className="md:hidden"
        />
      )}

      <section id="combat-oni-gauntlet" className="scroll-mt-24 bg-white/[0.02] px-4 py-14 md:py-20">
        <div className="container mx-auto max-w-5xl">
          <SectionHeading
            icon={<Shield className="h-6 w-6" />}
            title={combatModule.title}
            intro={combatModule.intro}
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 scroll-reveal">
            {combatModule.mechanics.map((mechanic: any, index: number) => (
              <div
                key={mechanic.name}
                className="rounded-[1.75rem] border border-border bg-card/80 p-6 transition-colors hover:border-[hsl(var(--nav-theme)/0.45)]"
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[hsl(var(--nav-theme)/0.25)] bg-[hsl(var(--nav-theme)/0.1)]">
                    <DynamicIcon
                      name={combatIcons[index] || "Shield"}
                      className="h-5 w-5 text-[hsl(var(--nav-theme-light))]"
                    />
                  </div>
                  <span className="rounded-full border border-[hsl(var(--nav-theme)/0.22)] bg-[hsl(var(--nav-theme)/0.08)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[hsl(var(--nav-theme-light))]">
                    System
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-[hsl(var(--nav-theme-light))]">
                  {mechanic.name}
                </h3>
                <p className="mb-4 text-sm leading-6 text-muted-foreground">
                  {mechanic.summary}
                </p>
                <p className="mb-4 text-sm leading-6 text-foreground/85">
                  {mechanic.details}
                </p>
                <div className="rounded-2xl border border-[hsl(var(--nav-theme)/0.2)] bg-[hsl(var(--nav-theme)/0.06)] p-4">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[hsl(var(--nav-theme-light))]">
                    Best Use Case
                  </p>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {mechanic.useCase}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-3xl border border-[hsl(var(--nav-theme)/0.28)] bg-[hsl(var(--nav-theme)/0.07)] p-6 scroll-reveal">
            <div className="mb-4 flex items-center gap-2">
              <Swords className="h-5 w-5 text-[hsl(var(--nav-theme-light))]" />
              <h3 className="text-lg font-semibold">{combatModule.combatLoopTitle}</h3>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {combatModule.combatLoop.map((step: string, index: number) => (
                <div
                  key={step}
                  className="rounded-2xl border border-border bg-background/60 p-4"
                >
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[hsl(var(--nav-theme-light))]">
                    Step {index + 1}
                  </p>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="characters-story" className="scroll-mt-24 px-4 py-14 md:py-20">
        <div className="container mx-auto max-w-5xl">
          <SectionHeading
            icon={<UserRound className="h-6 w-6" />}
            title={storyModule.title}
            intro={storyModule.intro}
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 scroll-reveal">
            {storyModule.characters.map((character: any, index: number) => (
              <div
                key={character.name}
                className="rounded-[1.75rem] border border-border bg-card/80 p-6 transition-colors hover:border-[hsl(var(--nav-theme)/0.45)]"
              >
                <div className="mb-3 flex items-center justify-between gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[hsl(var(--nav-theme)/0.25)] bg-[hsl(var(--nav-theme)/0.1)]">
                    <DynamicIcon
                      name={storyIcons[index] || "UserRound"}
                      className="h-5 w-5 text-[hsl(var(--nav-theme-light))]"
                    />
                  </div>
                  <span className="rounded-full border border-[hsl(var(--nav-theme)/0.3)] bg-[hsl(var(--nav-theme)/0.08)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[hsl(var(--nav-theme-light))]">
                    {character.role}
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-semibold">{character.name}</h3>
                <p className="text-sm leading-6 text-muted-foreground">
                  {character.description}
                </p>
                <ul className="mt-5 space-y-3">
                  {character.keyFacts.map((fact: string) => (
                    <li key={fact} className="flex items-start gap-2">
                      <Check className="mt-1 h-4 w-4 flex-shrink-0 text-[hsl(var(--nav-theme-light))]" />
                      <span className="text-sm leading-6 text-muted-foreground">
                        {fact}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="bosses-genma-locations" className="scroll-mt-24 bg-white/[0.02] px-4 py-14 md:py-20">
        <div className="container mx-auto max-w-5xl">
          <SectionHeading
            icon={<Flame className="h-6 w-6" />}
            title={bossesModule.title}
            intro={bossesModule.intro}
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 scroll-reveal">
            {bossesModule.entries.map((entry: any, index: number) => (
              <div
                key={entry.name}
                className="rounded-[1.75rem] border border-border bg-card/80 p-6 transition-colors hover:border-[hsl(var(--nav-theme)/0.45)]"
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[hsl(var(--nav-theme)/0.25)] bg-[hsl(var(--nav-theme)/0.1)]">
                    <DynamicIcon
                      name={bossesIcons[index] || "Flame"}
                      className="h-5 w-5 text-[hsl(var(--nav-theme-light))]"
                    />
                  </div>
                  <span className="inline-flex rounded-full border border-[hsl(var(--nav-theme)/0.3)] bg-[hsl(var(--nav-theme)/0.08)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[hsl(var(--nav-theme-light))]">
                    {entry.category}
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-semibold">{entry.name}</h3>
                <p className="mb-4 text-sm leading-6 text-muted-foreground">
                  {entry.description}
                </p>
                <div className="space-y-3">
                  <div className="rounded-2xl border border-[hsl(var(--nav-theme)/0.2)] bg-[hsl(var(--nav-theme)/0.06)] p-4">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[hsl(var(--nav-theme-light))]">
                      Known Context
                    </p>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {entry.knownContext}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border bg-background/50 p-4">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[hsl(var(--nav-theme-light))]">
                      Player Focus
                    </p>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {entry.playerFocus}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Suspense fallback={<LoadingPlaceholder />}>
        <FAQSection
          title={t.faq.title}
          titleHighlight={t.faq.titleHighlight}
          subtitle={t.faq.subtitle}
          questions={t.faq.questions}
        />
      </Suspense>

      <Suspense fallback={<LoadingPlaceholder />}>
        <CTASection
          title={t.cta.title}
          description={t.cta.description}
          joinCommunity={t.cta.joinCommunity}
          joinGame={t.cta.joinGame}
        />
      </Suspense>

      <AdBanner
        type="banner-300x250"
        adKey={process.env.NEXT_PUBLIC_AD_BANNER_300X250}
        className="md:hidden"
      />
      <AdBanner
        type="banner-728x90"
        adKey={process.env.NEXT_PUBLIC_AD_BANNER_728X90}
        className="hidden md:flex"
      />

      <footer className="border-t border-border bg-white/[0.02]">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-xl font-bold text-[hsl(var(--nav-theme-light))]">
                {t.footer.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t.footer.description}
              </p>
            </div>

            <div>
              <h4 className="mb-4 font-semibold">{t.footer.community}</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href={REDDIT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition hover:text-[hsl(var(--nav-theme-light))]"
                  >
                    {t.footer.discord}
                  </a>
                </li>
                <li>
                  <a
                    href={X_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition hover:text-[hsl(var(--nav-theme-light))]"
                  >
                    {t.footer.twitter}
                  </a>
                </li>
                <li>
                  <a
                    href={STEAM_COMMUNITY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition hover:text-[hsl(var(--nav-theme-light))]"
                  >
                    {t.footer.steamCommunity}
                  </a>
                </li>
                <li>
                  <a
                    href={STEAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition hover:text-[hsl(var(--nav-theme-light))]"
                  >
                    {t.footer.steamStore}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold">{t.footer.legal}</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/about"
                    className="text-muted-foreground transition hover:text-[hsl(var(--nav-theme-light))]"
                  >
                    {t.footer.about}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-muted-foreground transition hover:text-[hsl(var(--nav-theme-light))]"
                  >
                    {t.footer.privacy}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-of-service"
                    className="text-muted-foreground transition hover:text-[hsl(var(--nav-theme-light))]"
                  >
                    {t.footer.terms}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/copyright"
                    className="text-muted-foreground transition hover:text-[hsl(var(--nav-theme-light))]"
                  >
                    {t.footer.copyrightNotice}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold">{t.footer.resources}</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href={OFFICIAL_SITE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition hover:text-[hsl(var(--nav-theme-light))]"
                  >
                    Official Site
                  </a>
                </li>
                <li>
                  <a
                    href={PLAYSTATION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition hover:text-[hsl(var(--nav-theme-light))]"
                  >
                    PlayStation Store
                  </a>
                </li>
                <li>
                  <a
                    href={XBOX_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition hover:text-[hsl(var(--nav-theme-light))]"
                  >
                    Xbox Store
                  </a>
                </li>
                <li>
                  <a
                    href={YOUTUBE_VIDEO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition hover:text-[hsl(var(--nav-theme-light))]"
                  >
                    Trailer on YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm md:flex-row">
            <p className="text-muted-foreground">{t.footer.copyright}</p>
            <p className="text-muted-foreground">{t.footer.disclaimer}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
