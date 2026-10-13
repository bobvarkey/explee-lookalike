import { BRAND } from '../config'
const B = BRAND.name

export const results = [
  { name: 'Nadia Okonkwo', co: 'Quillstone Studio', quote: `I'm a team of one. ${B} quietly took over the part of my week I dreaded most.`, leads: 312, cpl: '$2.90' },
  { name: 'Marcus Lindqvist', co: 'Fjordline Logistics', quote: 'An agency got us silence. This got us actual conversations, and it costs me ten minutes each morning.', leads: 47, cpl: '$5.80' },
  { name: 'Priya Desai', co: 'Brightpath Tutors', quote: 'We have tested plenty of outbound tools. This is the first one that runs without babysitting.', leads: 198, cpl: '$4.10' },
  { name: 'Tomás Ferreira', co: 'Ondas Media', quote: 'Doors opened in weeks that would have taken a quarter of cold calling.', leads: 221, cpl: '$1.95' },
]

export const quotes = [
  { name: 'Hannah Brooks', co: 'Copperleaf CRM', text: 'No domains to buy, no warm-up spreadsheets. I pasted my URL and it was sending by lunch.' },
  { name: 'Kwame Mensah', co: 'Lumen Clinics', text: 'Honestly the cleanest product I have used this year. Everything is where you expect it.' },
  { name: 'Sofia Ricci', co: 'Atelier Nove', text: 'The replies come from decision makers, not interns. That alone changed our pipeline.' },
  { name: 'Daniel Cho', co: 'Packwell', text: 'Four deals in late stages after the first month.' },
  { name: 'Leah Steiner', co: 'Northbeam Events', text: 'It books several demos a week on autopilot, and the targeting is shockingly accurate.' },
  { name: 'Omar Haddad', co: 'Sandline Freight', text: 'Feels like hiring a full SDR team and never having to manage one.' },
  { name: 'Grace Whitaker', co: 'Fernhouse', text: 'The starter credits alone produced two booked calls. I did not expect that.' },
  { name: 'Ravi Menon', co: 'Tidewater Analytics', text: 'A prospect thanked me for the research in my email. The email was written by the agent.' },
  { name: 'Elena Petrova', co: 'Kite & Key', text: 'Simple, fast, and it actually works. Rare combination.' },
]

export const segments = [
  { name: 'Specialty coffee roasters', fit: 94 },
  { name: 'Boutique hotels', fit: 89 },
  { name: 'Corporate catering firms', fit: 84 },
  { name: 'Co-working operators', fit: 78 },
  { name: 'University cafés', fit: 71 },
]

export const people = [
  { name: 'Iris Calder', role: 'Owner', co: 'Ember Roastery' },
  { name: 'Ben Achebe', role: 'Head of Ops', co: 'Harbor Hotels' },
  { name: 'Yuki Tanaka', role: 'Founder', co: 'Steamline Café' },
  { name: 'Liam Novak', role: 'Buyer', co: 'Grainhouse Catering' },
]

export const stats = [
  { big: '120M', label: 'verified decision-makers', sub: 'Indexed and refreshed by our own data pipeline' },
  { big: '96%', label: 'inbox placement', sub: 'Pre-warmed sending domains, ready on day one' },
  { big: '$1', label: 'and up per warm lead', sub: 'Usage-based at roughly five cents per email', prefix: 'From ' },
]

export const faqs = [
  { q: 'What do I need to start?', a: `Only your website address. ${B} reads it, works out what you offer and who is likely to buy, then assembles a list of real people to contact. Building the list is free.` },
  { q: 'How is it priced?', a: 'You pay per email actually sent. No seats, no subscription, no charge for prospecting. New accounts receive starter credits, and a daily cap keeps spend predictable.' },
  { q: 'Will it send from my own domain?', a: 'No. Messages go out from a managed pool of warmed inboxes, so your own domain reputation is never exposed. Replies are threaded back into your dashboard.' },
  { q: 'How do you avoid spam folders?', a: 'Every inbox is authenticated (SPF, DKIM, DMARC), volume ramps gradually, and any mailbox whose health dips is rotated out automatically.' },
  { q: 'Can I review emails before they go out?', a: 'Yes. Each campaign shows its lead list and a live preview of the email against real prospects before anything is sent.' },
  { q: 'What happens when someone replies?', a: 'The agent answers common questions, proposes times and books the meeting on your calendar. You can step in at any point.' },
  { q: 'Can I upload my own list?', a: 'Yes, CSV import is supported alongside the built-in database.' },
]
