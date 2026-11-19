import { Button, Column, Heading, Image, Link, Menu, Page, Span, Text, Row, Section } from "@hyper-elements/react";

/**
 * LAV Resort — a private coastal escape.
 * Visual direction: deep lagoon green, sand, sea glass, and warm sunset gold.
 */

const C = {
  paper: "#F7F3EA",
  paperDeep: "#DED3BB",
  white: "#FFFDFC",
  ink: "#17202A",
  forest: "#18312D",
  forest2: "#24544A",
  olive: "#6D866F",
  oliveLight: "#BBCAB1",
  gold: "#E6B76A",
  rust: "#B85C40",
  muted: "#667067",
  line: "#D8D1C1",
};

const SERIF = "'Cormorant Garamond', Georgia, serif";
const SANS = "Jost, 'Helvetica Neue', Arial, sans-serif";
const SITE = "https://lavlives.example";

const eyebrow = {
  color: C.olive,
  fontSize: 11,
  fontWeight: 600,
  letterSpacing: 2.5,
  textTransform: "uppercase",
} as const;

const COASTAL_VIEW = `data:image/svg+xml,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="760" height="900" viewBox="0 0 760 900">
  <defs>
    <linearGradient id="dawn" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#F5C889"/><stop offset="0.58" stop-color="#E9DDC2"/><stop offset="1" stop-color="#AFC4B7"/>
    </linearGradient>
    <clipPath id="arch"><path d="M55 835V350a325 325 0 0 1 650 0v485z"/></clipPath>
  </defs>
  <rect width="760" height="900" fill="#18312D"/>
  <g clip-path="url(#arch)">
    <rect width="760" height="900" fill="url(#dawn)"/>
    <circle cx="535" cy="245" r="68" fill="#E6B76A" opacity=".95"/>
    <path d="M0 520 Q190 485 380 530 T760 510V900H0Z" fill="#819A90"/>
    <path d="M0 595 Q190 550 380 610 T760 580V900H0Z" fill="#5E8178"/>
    <path d="M0 685 Q190 635 380 700 T760 660V900H0Z" fill="#3B6861"/>
    <path d="M0 760 Q190 725 380 770 T760 735V900H0Z" fill="#D6CDAE"/>
    <g fill="#FFFDFC" opacity=".75">
      <path d="M0 690Q190 650 380 710T760 670" fill="none" stroke="#FFFDFC" stroke-width="5"/>
      <path d="M0 775Q190 740 380 785T760 748" fill="none" stroke="#FFFDFC" stroke-width="3"/>
    </g>
    <g>
      <rect x="220" y="590" width="330" height="155" fill="#F3E9D2"/>
      <path d="M205 596L385 500L565 596Z" fill="#B85C40"/>
      <rect x="245" y="625" width="54" height="90" fill="#18312D"/>
      <rect x="322" y="625" width="54" height="90" fill="#18312D"/>
      <rect x="399" y="625" width="54" height="90" fill="#18312D"/>
      <rect x="476" y="625" width="54" height="90" fill="#18312D"/>
      <rect x="205" y="745" width="360" height="18" fill="#DED3BB"/>
    </g>
    <g fill="#18312D">
      <ellipse cx="115" cy="715" rx="58" ry="92"/><ellipse cx="155" cy="740" rx="42" ry="65"/>
      <ellipse cx="650" cy="720" rx="65" ry="105"/><ellipse cx="600" cy="750" rx="42" ry="72"/>
    </g>
  </g>
  <path d="M55 835V350a325 325 0 0 1 650 0v485" fill="none" stroke="#F2E8D4" stroke-width="3"/>
  <path d="M32 856h696" stroke="#E6B76A" stroke-width="2" opacity=".9"/>
  <text x="380" y="885" fill="#F7F3EA" font-family="Georgia,serif" font-size="15" letter-spacing="5" text-anchor="middle">LAV · COASTAL ESCAPE</text>
</svg>`)}`;

const MARK = `data:image/svg+xml,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180">
 <circle cx="90" cy="90" r="82" fill="none" stroke="#78834D" stroke-width="1.5"/>
 <circle cx="90" cy="90" r="73" fill="none" stroke="#78834D" stroke-width=".7" stroke-dasharray="2 5"/>
 <path d="M90 132C83 108 94 83 117 55M91 109C69 102 54 85 46 67M100 91C119 92 133 83 142 68" fill="none" stroke="#263B2B" stroke-width="3" stroke-linecap="round"/>
 <g fill="#78834D"><ellipse cx="61" cy="79" rx="8" ry="17" transform="rotate(-42 61 79)"/><ellipse cx="77" cy="97" rx="8" ry="16" transform="rotate(-58 77 97)"/><ellipse cx="111" cy="77" rx="8" ry="17" transform="rotate(35 111 77)"/><ellipse cx="128" cy="69" rx="7" ry="15" transform="rotate(45 128 69)"/><ellipse cx="104" cy="111" rx="7" ry="15" transform="rotate(25 104 111)"/></g>
 <text x="90" y="153" font-family="Georgia,serif" font-size="8" letter-spacing="2" fill="#263B2B" text-anchor="middle">LAV RESORT</text>
</svg>`)}`;

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <Column style={{ gap: 1, minWidth: 110 }}>
      <Text style={{ fontFamily: SERIF, color: C.gold, fontSize: 38, lineHeight: 1 }}>{number}</Text>
      <Text style={{ color: C.paperDeep, fontSize: 11, letterSpacing: 1.6, textTransform: "uppercase" }}>{label}</Text>
    </Column>
  );
}

function Room({ number, name, note, sleeps, price }: { number: string; name: string; note: string; sleeps: string; price: string }) {
  return (
    <Row stackOnMobile={false} style={{ alignItems: "center", flexWrap: "wrap", gap: 18, padding: [22, 0], border: { top: `1px solid ${C.line}` } }}>
      <Text style={{ width: 42, color: C.olive, fontSize: 12, letterSpacing: 1.5 }}>{number}</Text>
      <Column style={{ flex: 1, minWidth: 190, gap: 2 }}>
        <Text style={{ fontFamily: SERIF, fontSize: 29, fontWeight: 600, lineHeight: 1.05, color: C.ink }}>{name}</Text>
        <Text style={{ fontSize: 14, color: C.muted, lineHeight: 1.45 }}>{note}</Text>
      </Column>
      <Column style={{ width: 90, gap: 2 }}>
        <Text style={{ textAlign: "right", color: C.muted, fontSize: 12 }}>SLEEPS {sleeps}</Text>
        <Text style={{ textAlign: "right", fontFamily: SERIF, fontSize: 26, color: C.ink }}>{price}</Text>
      </Column>
    </Row>
  );
}

function Season({ index, name, months, note }: { index: string; name: string; months: string; note: string }) {
  return (
    <Column style={{ flex: 1, minWidth: 205, gap: 12, padding: [20, 18, 22], backgroundColor: C.white, border: { top: `3px solid ${C.olive}` } }}>
      <Text style={{ color: C.gold, fontSize: 12, letterSpacing: 2 }}>{index} / THE YEAR</Text>
      <Text style={{ fontFamily: SERIF, fontSize: 34, lineHeight: 1, color: C.ink }}>{name}</Text>
      <Text style={{ ...eyebrow, color: C.olive, fontSize: 10 }}>{months}</Text>
      <Text style={{ color: C.muted, lineHeight: 1.55, fontSize: 15 }}>{note}</Text>
    </Column>
  );
}

export default function LavResortPage() {
  return (
    <Page
      width={1240}
      lang="en"
      title="LAV Resort — Designed for the art of living"
      description="A private coastal resort for unhurried days, soulful suites, fresh dining and unforgettable sunsets."
      fonts={[
        { family: "Cormorant Garamond", src: "https://fonts.gstatic.com/s/cormorantgaramond/v21/co3bmX5slCNuHLi8bLeY9MK7whWMhyjYqXtKky2F7g.woff2", format: "woff2", weight: "300 700" },
        { family: "Jost", src: "https://fonts.gstatic.com/s/jost/v20/92zatBhPNqw73oTd4jQmfxI.woff2", format: "woff2", weight: "100 900" },
      ]}
      style={{ backgroundColor: C.paper, color: C.ink, fontFamily: SANS, fontSize: 16, fontWeight: 300, lineHeight: 1.6 }}
    >
      {/* Navigation */}
      <Section style={{ padding: [22, 48], mobile: { padding: [18, 20] } }}>
        <Row stackOnMobile={false} style={{ alignItems: "center", flexWrap: "wrap", justifyContent: "space-between", gap: 16 }}>
          <Row stackOnMobile={false} style={{ alignItems: "center", gap: 11 }}>
            <Image src={MARK} alt="LAV Resort emblem" style={{ width: 48, height: 48 }} />
            <Column style={{ gap: 0 }}>
              <Text style={{ fontFamily: SERIF, fontSize: 27, fontWeight: 600, lineHeight: 1, letterSpacing: 1 }}>LAV</Text>
              <Text style={{ fontSize: 9, letterSpacing: 2.2, color: C.muted, textTransform: "uppercase" }}>Lives beautifully</Text>
            </Column>
          </Row>
          <Row stackOnMobile={false} style={{ alignItems: "center", flexWrap: "wrap", gap: 14 }}>
            <Menu
              hidden={{ mobile: true }}
              items={[
                { text: "The resort", href: `${SITE}/resort` },
                { text: "Suites", href: `${SITE}/suites` },
                { text: "Experiences", href: `${SITE}/experiences` },
                { text: "Visit", href: `${SITE}/visit` },
              ]}
              style={{ color: C.ink, fontSize: 14, fontWeight: 400, padding: [6, 18, 6, 0] }}
            />
            <Button href={`${SITE}/book`} style={{ backgroundColor: C.forest, color: C.paper, borderRadius: 2, padding: [12, 20], fontSize: 13, letterSpacing: 1, hover: { backgroundColor: C.rust } }}>
              RESERVE YOUR STAY ↗
            </Button>
          </Row>
        </Row>
      </Section>

      {/* Hero */}
      <Section style={{ backgroundColor: C.forest, color: C.paper, padding: [34, 48, 70], mobile: { padding: [24, 20, 48] } }}>
        <Row style={{ alignItems: "center", flexWrap: "wrap", gap: 46, mobile: { gap: 28 } }}>
          <Column style={{ flex: 1, minWidth: 290, maxWidth: 570, gap: 23 }}>
            <Text style={{ color: C.oliveLight, fontSize: 11, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase" }}>Private coastal resort · Somewhere between sky and sea</Text>
            <Heading level={1} style={{ fontFamily: SERIF, color: C.paper, fontSize: 88, fontWeight: 500, lineHeight: 0.86, letterSpacing: -2, mobile: { fontSize: 60 } }}>
              Arrive curious. Leave <Span style={{ color: C.gold, fontFamily: SERIF, fontStyle: "italic" }}>unhurried.</Span>
            </Heading>
            <Text style={{ color: "#E7EBDD", fontSize: 18, lineHeight: 1.65, maxWidth: 450 }}>
              A private world of barefoot luxury, considered spaces and slow coastal rituals. Wake to sea air, dine with the horizon and let every day unfold naturally.
            </Text>
            <Row stackOnMobile={false} style={{ alignItems: "center", flexWrap: "wrap", gap: 25 }}>
              <Button href={`${SITE}/stay`} style={{ backgroundColor: C.gold, color: C.ink, borderRadius: 2, padding: [15, 25], fontSize: 14, fontWeight: 600, hover: { backgroundColor: C.paper } }}>
                EXPLORE YOUR STAY ↗
              </Button>
              <Text style={{ color: C.paper, fontSize: 14 }}><Link href={`${SITE}/suites`} style={{ color: C.paper }}>Discover 12 private suites →</Link></Text>
            </Row>
            <Row style={{ flexWrap: "wrap", gap: 28, padding: [22, 0, 0], border: { top: "1px solid #53634E" } }}>
              <Stat number="2026" label="A new escape" />
              <Stat number="12" label="Private suites" />
              <Stat number="01" label="Wild shoreline" />
            </Row>
          </Column>
          <Column style={{ flex: 1, minWidth: 280, maxWidth: 510, gap: 10 }}>
            <Image src={COASTAL_VIEW} alt="Illustrated coastal resort landscape framed by an elegant arch" style={{ width: "100%" }} />
            <Text style={{ color: C.oliveLight, fontSize: 10, textAlign: "right", letterSpacing: 2 }}>THE ART OF LIVING · LAV LIVES</Text>
          </Column>
        </Row>
      </Section>

      {/* Intro / story */}
      <Section style={{ padding: [88, 48, 82], mobile: { padding: [54, 20] } }}>
        <Row style={{ alignItems: "start", flexWrap: "wrap", gap: 55 }}>
          <Column style={{ flex: 1, minWidth: 270, gap: 16 }}>
            <Text style={eyebrow}>01 / The LAV way</Text>
            <Heading level={2} style={{ fontFamily: SERIF, fontSize: 56, fontWeight: 500, lineHeight: 0.98, letterSpacing: -1, mobile: { fontSize: 43 } }}>
              Luxury is not more. It is everything in its place.
            </Heading>
          </Column>
          <Column style={{ flex: 1, minWidth: 280, padding: [8, 0, 0], gap: 17 }}>
            <Text style={{ fontSize: 17, color: C.muted, lineHeight: 1.7 }}>
              LAV was created around one rare idea: that true escape begins with a feeling. Space to breathe. Beauty with purpose. Service that appears when needed and disappears when not.
            </Text>
            <Text style={{ fontSize: 17, color: C.muted, lineHeight: 1.7 }}>
              Breakfast follows the sun. Afternoons drift between the pool and the shore. Evenings belong to open fires, local ingredients and conversations that last.
            </Text>
            <Text style={{ fontFamily: SERIF, fontSize: 26, fontStyle: "italic", color: C.rust }}>LAV Lives — with less noise and more wonder.</Text>
          </Column>
        </Row>
      </Section>

      {/* Details band */}
      <Section style={{ backgroundColor: C.paperDeep, padding: [27, 48], mobile: { padding: [25, 20] } }}>
        <Row style={{ flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
          <Column style={{ minWidth: 150, gap: 2 }}>
            <Text style={{ fontFamily: SERIF, fontSize: 25, color: C.ink }}>One shoreline</Text>
            <Text style={{ ...eyebrow, color: C.muted, fontSize: 9 }}>Private and protected</Text>
          </Column>
          <Column style={{ minWidth: 150, gap: 2 }}>
            <Text style={{ fontFamily: SERIF, fontSize: 25, color: C.ink }}>Three nights</Text>
            <Text style={{ ...eyebrow, color: C.muted, fontSize: 9 }}>Minimum escape</Text>
          </Column>
          <Column style={{ minWidth: 150, gap: 2 }}>
            <Text style={{ fontFamily: SERIF, fontSize: 25, color: C.ink }}>Made here</Text>
            <Text style={{ ...eyebrow, color: C.muted, fontSize: 9 }}>Season-led cuisine</Text>
          </Column>
          <Column style={{ minWidth: 150, gap: 2 }}>
            <Text style={{ fontFamily: SERIF, fontSize: 25, color: C.ink }}>Entirely yours</Text>
            <Text style={{ ...eyebrow, color: C.muted, fontSize: 9 }}>No rush, no itinerary</Text>
          </Column>
        </Row>
      </Section>

      {/* Suites */}
      <Section style={{ padding: [88, 48, 84], mobile: { padding: [54, 20] } }}>
        <Row style={{ alignItems: "end", justifyContent: "space-between", flexWrap: "wrap", gap: 20 }}>
          <Column style={{ gap: 10 }}>
            <Text style={eyebrow}>02 / Sleep differently</Text>
            <Heading level={2} style={{ fontFamily: SERIF, fontSize: 58, lineHeight: 0.95, fontWeight: 500, mobile: { fontSize: 43 } }}>A suite made for stillness.</Heading>
          </Column>
          <Text style={{ maxWidth: 300, color: C.muted, fontSize: 14 }}>Twelve distinct retreats, each shaped around light, calm and effortless coastal living.</Text>
        </Row>
        <Column style={{ padding: [28, 0, 0], border: { bottom: `1px solid ${C.ink}` } }}>
          <Room number="01" name="The Horizon Suite" note="A sweeping sea view, private terrace and the longest golden hour." sleeps="2" price="€420" />
          <Room number="02" name="The Garden Suite" note="A quiet green sanctuary with an outdoor soaking terrace." sleeps="2–3" price="€360" />
          <Room number="03" name="The Sunset Villa" note="Two serene levels, an infinity pool and an intimate sunset deck." sleeps="2–4" price="€680" />
          <Room number="04" name="The Pool Pavilion" note="Direct pool access, shaded loungers and a private garden." sleeps="2" price="€390" />
          <Room number="05" name="The Cove Residence" note="A freestanding escape with generous living space and sea views." sleeps="4" price="€820" />
          <Room number="06" name="The Shore Room" note="Barefoot ease with a king bed and steps to the water." sleeps="2" price="€300" />
        </Column>
        <Text style={{ color: C.muted, fontSize: 12, padding: [14, 0, 0] }}>Rates include daily breakfast, airport transfer and a sunset ritual. Dates and availability are confirmed upon booking.</Text>
      </Section>

      {/* The year */}
      <Section style={{ backgroundColor: C.paperDeep, padding: [78, 48, 86], mobile: { padding: [52, 20] } }}>
        <Column style={{ gap: 12, padding: [0, 0, 30] }}>
          <Text style={eyebrow}>03 / A life in seasons</Text>
          <Heading level={2} style={{ fontFamily: SERIF, fontSize: 57, fontWeight: 500, lineHeight: 0.95, mobile: { fontSize: 43 } }}>Every moment has a mood.</Heading>
          <Text style={{ maxWidth: 470, color: C.muted }}>The shore changes, the light moves and LAV becomes a different story throughout the year.</Text>
        </Column>
        <Row style={{ flexWrap: "wrap", gap: 12 }}>
          <Season index="01" name="Awaken" months="MARCH — MAY" note="Fresh mornings, wild gardens and the first warm evenings by the water." />
          <Season index="02" name="Glow" months="JUNE — AUGUST" note="Bright skies, long swims and golden dinners beneath the open air." />
          <Season index="03" name="Unwind" months="SEPTEMBER — NOVEMBER" note="Soft light, quiet shores and generous late-season days." />
          <Season index="04" name="Retreat" months="DECEMBER — FEBRUARY" note="Cool sea air, private fireside dinners and deeply restful stays." />
        </Row>
      </Section>

      {/* Experience */}
      <Section style={{ padding: [82, 48, 88], mobile: { padding: [54, 20] } }}>
        <Row style={{ alignItems: "start", flexWrap: "wrap", gap: 50 }}>
          <Column style={{ flex: 1, minWidth: 250, gap: 13 }}>
            <Text style={eyebrow}>04 / While you are here</Text>
            <Heading level={2} style={{ fontFamily: SERIF, fontSize: 55, lineHeight: 0.98, fontWeight: 500, mobile: { fontSize: 42 } }}>Leave space for wonder.</Heading>
          </Column>
          <Column style={{ flex: 1.2, minWidth: 280, gap: 0 }}>
            <Row stackOnMobile={false} style={{ alignItems: "start", gap: 18, padding: [17, 0], border: { top: `1px solid ${C.line}` } }}>
              <Text style={{ color: C.gold, fontFamily: SERIF, fontSize: 25 }}>01</Text>
              <Column style={{ gap: 2 }}><Text style={{ fontFamily: SERIF, fontSize: 25 }}>Dine without clocks</Text><Text style={{ color: C.muted, fontSize: 14 }}>Season-led menus, intimate tables and ingredients chosen at their moment of perfection.</Text></Column>
            </Row>
            <Row stackOnMobile={false} style={{ alignItems: "start", gap: 18, padding: [17, 0], border: { top: `1px solid ${C.line}` } }}>
              <Text style={{ color: C.gold, fontFamily: SERIF, fontSize: 25 }}>02</Text>
              <Column style={{ gap: 2 }}><Text style={{ fontFamily: SERIF, fontSize: 25 }}>Find your blue</Text><Text style={{ color: C.muted, fontSize: 14 }}>Private boats, hidden coves, guided swims and long afternoons in the sun.</Text></Column>
            </Row>
            <Row stackOnMobile={false} style={{ alignItems: "start", gap: 18, padding: [17, 0], border: { top: `1px solid ${C.line}` } }}>
              <Text style={{ color: C.gold, fontFamily: SERIF, fontSize: 25 }}>03</Text>
              <Column style={{ gap: 2 }}><Text style={{ fontFamily: SERIF, fontSize: 25 }}>Restore yourself</Text><Text style={{ color: C.muted, fontSize: 14 }}>Ocean-inspired treatments, sunrise movement and quiet spaces made for real rest.</Text></Column>
            </Row>
          </Column>
        </Row>
      </Section>

      {/* Booking */}
      <Section style={{ backgroundColor: C.rust, color: C.paper, padding: [68, 48], mobile: { padding: [48, 20] } }}>
        <Row style={{ alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 28 }}>
          <Column style={{ flex: 1, minWidth: 260, gap: 12 }}>
            <Text style={{ color: "#F4D4B2", fontSize: 10, fontWeight: 600, letterSpacing: 2.5 }}>YOUR ESCAPE STARTS HERE</Text>
            <Heading level={2} style={{ fontFamily: SERIF, fontSize: 61, lineHeight: 0.95, fontWeight: 500, color: C.paper, mobile: { fontSize: 44 } }}>Stay close to what matters.</Heading>
            <Text style={{ color: "#FFF2E4", fontSize: 16 }}>Suites from €300 per night. Breakfast and airport transfer included.</Text>
          </Column>
          <Column style={{ width: 250, gap: 12, mobile: { width: "100%" } }}>
            <Button href={`${SITE}/book`} style={{ backgroundColor: C.paper, color: C.rust, borderRadius: 2, padding: [17, 22], fontSize: 14, fontWeight: 600, hover: { backgroundColor: C.gold, color: C.ink } }}>
              CHECK AVAILABILITY ↗
            </Button>
            <Text style={{ color: "#FFF2E4", fontSize: 11, textAlign: "center", letterSpacing: 1 }}>PRIVATE SUITES · ONE SHORELINE</Text>
          </Column>
        </Row>
      </Section>

      {/* Footer */}
      <Section style={{ backgroundColor: C.forest, color: C.paper, padding: [34, 48, 38], mobile: { padding: [28, 20] } }}>
        <Row style={{ alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
          <Row stackOnMobile={false} style={{ alignItems: "center", gap: 12 }}>
            <Image src={MARK} alt="LAV Resort emblem" style={{ width: 46, height: 46 }} />
            <Column style={{ gap: 0 }}>
              <Text style={{ fontFamily: SERIF, fontSize: 25, color: C.paper, lineHeight: 1 }}>LAV RESORT</Text>
              <Text style={{ color: C.oliveLight, fontSize: 9, letterSpacing: 1.8 }}>LAV LIVES BEAUTIFULLY</Text>
            </Column>
          </Row>
          <Column style={{ gap: 3 }}>
            <Text style={{ color: C.paper, fontSize: 13 }}>A private coastal destination</Text>
            <Text style={{ color: C.oliveLight, fontSize: 13 }}><Link href="mailto:stay@lavlives.example" style={{ color: C.paper }}>stay@lavlives.example</Link></Text>
          </Column>
          <Text style={{ color: C.oliveLight, fontSize: 10, letterSpacing: 1.5 }}>THE ART OF LIVING · © LAV RESORT</Text>
        </Row>
      </Section>
    </Page>
  );
}
