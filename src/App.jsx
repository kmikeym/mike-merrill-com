import { useState, useEffect, Suspense, lazy } from 'react'
import './App.css'

// Lazy load video2ascii to avoid blocking initial render
const Video2Ascii = lazy(() => import('video2ascii'))

const YEARS_TRADED = new Date().getFullYear() - 2008

const CREDIBILITY = [
  'TEDx', 'ideacity', 'XOXO', 'Future Congress', 'WIRED', 'VICE', 'Variety'
]

const TOPICS = [
  {
    title: 'Community Through Capitalism',
    desc: `How giving up control creates deeper connection. ${YEARS_TRADED} years of shareholder democracy proves that markets aren't just about money — they're about trust.`,
    tags: ['Governance', 'DAOs', 'Community', 'Creator Economy']
  },
  {
    title: 'The Publicly Traded Life',
    desc: 'Identity, privacy, and agency in the age of the algorithm — examined through the lens of one person who made it all explicit.',
    tags: ['Tech', 'Culture', 'Identity', 'Privacy']
  },
  {
    title: 'Vibe Coding & the AI-Native Life',
    desc: 'How a non-technical publicly traded person uses AI agents to run his life — from morning routines to shareholder reports.',
    tags: ['AI', 'Automation', 'Future of Work', 'Vibe Coding']
  }
]

const TALKS = [
  {
    venue: 'TEDxVienna',
    title: 'How I became the world\'s first publicly traded person',
    duration: '22:14',
    embedUrl: 'https://www.youtube.com/embed/PPa1HeWGs-Y',
    type: 'youtube'
  },
  {
    venue: 'ideacity Toronto',
    title: 'Mike Merrill likes to be controlled',
    duration: '18:42',
    embedUrl: 'https://www.youtube.com/embed/8p6doeO2eIk',
    type: 'youtube'
  },
  {
    venue: 'Future Congress',
    title: 'Personal Corporatehood — Keynote',
    duration: '22:44',
    embedUrl: 'https://fast.wistia.net/embed/iframe/78tcb5bwjt',
    type: 'wistia'
  },
  {
    venue: 'TODAY Show',
    title: 'Mike Merrill on the TODAY Show',
    duration: '4:39',
    embedUrl: 'https://fast.wistia.net/embed/iframe/ew05qq4yzy',
    type: 'wistia'
  }
]

const PRESS = [
  {
    title: 'Executive Producer of IPO Series with Amazon & Sony Pictures',
    source: 'Variety + Deadline',
    url: 'https://news.kmikeym.com/mike-merrill-to-executive-produce-ipo-series-with-amazon-and-sony-pictures-television/'
  },
  {
    title: 'The Man Who Sold Shares of Himself',
    source: 'The Hustle',
    url: 'https://news.kmikeym.com/the-man-who-sold-shares-of-himself/'
  },
  {
    title: 'Meet The Man Selling Influence Over His Personal Life Decisions',
    source: 'VICE News',
    url: 'https://news.kmikeym.com/meet-the-man-selling-influence-over-his-personal-life-decisions/'
  },
  {
    title: 'Meet the Man Who Sold His Fate to Investors at $1 a Share',
    source: 'WIRED',
    url: 'https://news.kmikeym.com/meet-the-man-who-sold-his-fate-to-investors-at-1-a-share/'
  }
]

const HISTORY = [
  { date: 'May 2020', event: 'K5M Shareholder Conference — Keynote' },
  { date: 'May 2020', event: 'Ethereal Summit — Personal Tokens Roundtable' },
  { date: 'Jun 2019', event: 'Future Congress — Personal Corporatehood' },
  { date: 'Dec 2016', event: 'K5M Shareholder Conference — Keynote' },
  { date: 'Jan 2016', event: 'Portland State University — "Show & Tell" Lecture' },
  { date: 'Jun 2015', event: 'Curiosity Club — Fun w/ Factual Failures' },
  { date: 'Oct 2014', event: 'XOXO — The New Disrupters' },
  { date: 'May 2014', event: 'Webvisions — Watch Your Wearables Disappear' },
  { date: 'Jun 2013', event: 'ideacity — Contractual Romance' },
  { date: 'Sep 2012', event: 'Ten Conf — Community Through Capitalism' },
  { date: 'Aug 2012', event: 'CyborgCamp — Community Through Capitalism' },
  { date: 'Oct 2010', event: 'AIA Architecture and Design Festival' },
  { date: 'Dec 2009', event: 'Research Club — Community Through Capitalism' },
]

const MILESTONES = [
  'Born in the dark wastelands of the arctic',
  'Grew up alone',
  'Had a near-death experience',
  'Joined the US Army',
  'Lost my sense of purpose',
  'Read Crossing the Chasm and it changed my life',
  'Worked my way up the ranks at a global conglomerate',
]

function App() {
  const [heroLoaded, setHeroLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setHeroLoaded(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <a href="#top" className="nav-logo">K.MIKE.MERRILL</a>
        <ul className="nav-links">
          <li><a href="#topics">Topics</a></li>
          <li><a href="#talks">Talks</a></li>
          <li><a href="#press">Press</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#invite" className="nav-cta">Invite Mike</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section id="top" className="hero">
        <div className="hero-ascii">
          {heroLoaded && (
            <Suspense fallback={null}>
              <Video2Ascii
                src="/hero-clip.mp4"
                numColumns={180}
                colored={true}
                brightness={0.85}
                enableMouse={true}
                enableRipple={true}
                charset="detailed"
                autoPlay={true}
                isPlaying={true}
                className="hero-ascii-canvas"
              />
            </Suspense>
          )}
        </div>
        <div className="hero-overlay">
          <h1 className="hero-name">K. Mike Merrill</h1>
          <p className="hero-tagline">The World's First Publicly Traded Person</p>
          <div className="hero-ctas">
            <a href="#invite" className="btn-primary">Invite Mike</a>
            <a href="https://kmikeym.com" target="_blank" rel="noopener noreferrer" className="btn-secondary">Buy Shares</a>
          </div>
        </div>
        <div className="hero-scroll-hint">Scroll</div>
      </section>

      {/* BIO */}
      <section className="bio">
        <p className="bio-text">
          <strong>Mike Merrill has been publicly traded since 2008.</strong> Shareholders buy shares and vote on his life decisions — from career moves to relationships. He's spent {YEARS_TRADED} years turning one life into a live experiment in governance, markets, and identity.
        </p>
      </section>

      {/* CREDIBILITY BAR */}
      <div className="credibility">
        <div className="credibility-inner">
          {CREDIBILITY.map((item, i) => (
            <span key={item}>
              <span className="credibility-item">{item}</span>
              {i < CREDIBILITY.length - 1 && <span className="credibility-dot"> </span>}
            </span>
          ))}
        </div>
      </div>

      {/* TOPICS */}
      <section id="topics" className="section">
        <p className="section-label">Talk Topics</p>
        <h2 className="section-title">What Mike Speaks About</h2>
        <div className="section-divider" />
        <div className="topics-grid">
          {TOPICS.map((topic, i) => (
            <div key={i} className="topic-card">
              <div className="topic-number">0{i + 1}</div>
              <h3 className="topic-title">{topic.title}</h3>
              <p className="topic-desc">{topic.desc}</p>
              <div className="topic-tags">
                {topic.tags.map(tag => (
                  <span key={tag} className="topic-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TALKS */}
      <section id="talks" className="section">
        <p className="section-label">Featured Talks</p>
        <h2 className="section-title">Watch</h2>
        <div className="section-divider" />
        <div className="talks-grid">
          {TALKS.map((talk, i) => (
            <div key={i} className="talk-card">
              <div className="talk-embed">
                <iframe
                  src={talk.embedUrl}
                  title={talk.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className="talk-info">
                <div className="talk-venue">{talk.venue}</div>
                <div className="talk-title">{talk.title}</div>
                <div className="talk-duration">{talk.duration}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRESS */}
      <section id="press" className="section">
        <p className="section-label">Press</p>
        <h2 className="section-title">In the News</h2>
        <div className="section-divider" />
        <ul className="press-list">
          {PRESS.map((item, i) => (
            <li key={i} className="press-item">
              <a href={item.url} target="_blank" rel="noopener noreferrer">{item.title}</a>
              <span className="press-source">{item.source}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <p className="section-label">About</p>
        <h2 className="section-title">The Story</h2>
        <div className="section-divider" />
        <div className="about-content">
          <div className="about-bio">
            <p>
              Mike Merrill created <a href="https://kmikeym.com" target="_blank" rel="noopener noreferrer">KmikeyM</a> in 2008, selling shares in himself and letting shareholders vote on his life decisions. What started as an experiment became a {YEARS_TRADED}-year practice in radical transparency and participatory governance.
            </p>
            <p>
              He's the executive producer of an <a href="https://news.kmikeym.com/mike-merrill-to-executive-produce-ipo-series-with-amazon-and-sony-pictures-television/" target="_blank" rel="noopener noreferrer">Amazon & Sony Pictures television series</a> based on his life, and currently serves as Head of Content at <a href="https://vibes.diy" target="_blank" rel="noopener noreferrer">Vibes DIY</a>. Previously he co-founded Chroma (acquired), went through the Barclays Fintech Accelerator and the Nike+ Accelerator, and spent ten years at <a href="https://panic.com" target="_blank" rel="noopener noreferrer">Panic</a>.
            </p>
            <p>Based in Los Angeles, CA.</p>
          </div>
          <div>
            <ul className="milestones">
              {MILESTONES.map((m, i) => (
                <li key={i}>{m}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SPEAKING HISTORY */}
      <section className="section">
        <p className="section-label">Speaking History</p>
        <h2 className="section-title">Previous Events</h2>
        <div className="section-divider" />
        <ul className="history-list">
          {HISTORY.map((item, i) => (
            <li key={i} className="history-item">
              <span className="history-date">{item.date}</span>
              {item.event}
            </li>
          ))}
        </ul>
      </section>

      {/* INVITE */}
      <section id="invite" className="invite">
        <h2 className="invite-title">Invite Mike to speak at your event</h2>
        <p className="invite-subtitle">
          Available for keynotes, panels, podcasts, workshops, and media appearances.
        </p>
        <div className="invite-types">
          {['Keynote', 'Panel', 'Podcast', 'Workshop', 'TV / Media'].map(type => (
            <span key={type} className="invite-type">{type}</span>
          ))}
        </div>
        <a href="mailto:kmikeym@kmikeym.com" className="invite-email">
          kmikeym@kmikeym.com
        </a>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-left">
            <div className="footer-name">K. Mike Merrill</div>
            <div className="footer-location">Los Angeles, CA</div>
            <div className="footer-copyright">&copy; 1977&ndash;2026 K. Mike Merrill</div>
          </div>
          <div className="footer-links">
            <a href="https://kmikeym.com" target="_blank" rel="noopener noreferrer">KmikeyM</a>
            <a href="https://www.imdb.com/name/nm5017870/" target="_blank" rel="noopener noreferrer">IMDb</a>
            <a href="https://www.linkedin.com/in/kmikeym/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.youtube.com/@kmikeym2107" target="_blank" rel="noopener noreferrer">YouTube</a>
            <a href="https://twitter.com/kmikeym" target="_blank" rel="noopener noreferrer">X</a>
            <a href="https://www.instagram.com/kmikeym/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://kmikeym.com" target="_blank" rel="noopener noreferrer" className="footer-shares">Buy Shares</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
