import { useState, useEffect, useMemo } from 'react'
import { FaXTwitter, FaChartLine, FaDiamond, FaSnowflake } from 'react-icons/fa6'
import { IoMenu, IoClose, IoWallet, IoSwapHorizontal, IoHeart, IoSearch } from 'react-icons/io5'
import { HiClipboardCopy, HiCheck, HiShoppingCart, HiStar, HiUsers, HiTrendingUp } from 'react-icons/hi'
import { BsDropletFill, BsLightningChargeFill } from 'react-icons/bs'
import './App.css'

const CONTRACT_ADDRESS = 'G8XfMyCLW82Hq2duaf3Kw9hQXf9ntLsPvSx8qZhZpump'
const DEXSCREENER_URL = 'https://dexscreener.com/solana/eywkgxxccbp649ljq6ygbnvdm2d3mctrktiajt6yj94q'
const TWITTER_URL = 'https://x.com/i/communities/2019555835563954264'

const MEME_PHRASES = [
  "gm bears",
  "ber season is forever",
  "smol ber, big dreams",
  "just a ber on solana",
  "ber market? more like ber to the moon",
  "diamond paws",
  "wagmi ber frens",
  "ber is the way",
  "not a bear market, a $ber market",
  "icy paws, warm heart",
  "ber go brrr",
  "proof of ber",
]

const MARQUEE_ITEMS = [
  "$BER", "WHITE BEAR", "SOLANA", "MEME", "TO THE MOON",
  "HODL", "BEARS UNITE", "GM", "WAGMI", "ICY",
  "$BER", "WHITE BEAR", "SOLANA", "MEME", "TO THE MOON",
  "HODL", "BEARS UNITE", "GM", "WAGMI", "ICY",
]

function Snowfall() {
  const snowflakes = useMemo(() =>
    Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 8 + 5}s`,
      animationDelay: `${Math.random() * 5}s`,
      fontSize: `${Math.random() * 0.8 + 0.4}em`,
      opacity: Math.random() * 0.6 + 0.2,
    })), [])

  return (
    <div className="snowfall">
      {snowflakes.map((flake) => (
        <span
          key={flake.id}
          className="snowflake"
          style={{
            left: flake.left,
            animationDuration: flake.animationDuration,
            animationDelay: flake.animationDelay,
            fontSize: flake.fontSize,
            opacity: flake.opacity,
          }}
        >
          <FaSnowflake size={14} />
        </span>
      ))}
    </div>
  )
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <a href="#" className="navbar-logo">
        <img src="/bear.svg" alt="$BER" className="navbar-bear-img" />
        $BER
      </a>
      <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
      </button>
      <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#how-to-buy" onClick={() => setMenuOpen(false)}>Buy</a>
        <a href="#vibes" onClick={() => setMenuOpen(false)}>Vibes</a>
        <a href="#community" onClick={() => setMenuOpen(false)}>Community</a>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bear-container">
        <img
          src="/beronsol.jpeg"
          alt="$BER - White Bear"
          className="hero-bear"
        />
        <span className="hero-badge">
          <HiStar size={14} /> on Solana
        </span>
      </div>

      <h1 className="hero-title">$BER</h1>

      <p className="hero-subtitle">
        the most <span className="highlight">bearish</span> meme coin on Solana.
        <br />
        just a smol white ber vibing on chain.
      </p>

      <div className="hero-buttons">
        <a href={DEXSCREENER_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          <FaChartLine size={18} /> Dexscreener
        </a>
        <a href={TWITTER_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
          <FaXTwitter size={18} /> Twitter / X
        </a>
        <a href="#how-to-buy" className="btn btn-outline">
          <HiShoppingCart size={18} /> How to Buy
        </a>
      </div>
    </section>
  )
}

function ContractSection() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      const textarea = document.createElement('textarea')
      textarea.value = CONTRACT_ADDRESS
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="contract-section">
      <div className="contract-box">
        <span className="contract-label">CA:</span>
        <span className="contract-address">{CONTRACT_ADDRESS}</span>
        <button className={`copy-btn ${copied ? 'copied' : ''}`} onClick={handleCopy}>
          {copied ? <><HiCheck size={14} /> Copied!</> : <><HiClipboardCopy size={14} /> Copy</>}
        </button>
      </div>
    </div>
  )
}

function Marquee() {
  return (
    <div className="marquee-container">
      <div className="marquee">
        {MARQUEE_ITEMS.map((item, i) => (
          <span key={i}>{item} <FaDiamond size={10} style={{ verticalAlign: 'middle' }} /></span>
        ))}
      </div>
    </div>
  )
}

function About() {
  return (
    <section className="section" id="about">
      <h2 className="section-title">WTF is $BER?</h2>
      <p className="section-subtitle">
        just a cute white bear who woke up one day and decided to live on the blockchain. no roadmap. no promises. just vibes.
      </p>

      <div className="about-grid">
        <div className="about-card">
          <span className="card-icon"><HiUsers size={40} /></span>
          <h3>100% Community</h3>
          <p>No team tokens. No VC. Just ber frens holding together through the ice age and beyond.</p>
        </div>
        <div className="about-card">
          <span className="card-icon"><BsDropletFill size={40} /></span>
          <h3>Ice Cold Liquidity</h3>
          <p>LP burned. Contract renounced. This ber is as free as the arctic wind. No rug, only fluff.</p>
        </div>
        <div className="about-card">
          <span className="card-icon"><BsLightningChargeFill size={40} /></span>
          <h3>Meme Power</h3>
          <p>Fueled by memes, vibes, and the unshakeable belief that a white bear deserves its own token.</p>
        </div>
      </div>
    </section>
  )
}

function HowToBuy() {
  const [widgetLoaded, setWidgetLoaded] = useState(false)

  useEffect(() => {
    if (document.getElementById('jupiter-terminal-script')) {
      setWidgetLoaded(true)
      return
    }
    const script = document.createElement('script')
    script.id = 'jupiter-terminal-script'
    script.src = 'https://terminal.jup.ag/main-v4.js'
    script.onload = () => setWidgetLoaded(true)
    document.head.appendChild(script)
  }, [])

  useEffect(() => {
    if (widgetLoaded && window.Jupiter) {
      window.Jupiter.init({
        displayMode: 'integrated',
        integratedTargetId: 'jupiter-terminal',
        endpoint: 'https://api.mainnet-beta.solana.com',
        formProps: {
          initialOutputMint: CONTRACT_ADDRESS,
        },
      })
    }
  }, [widgetLoaded])

  return (
    <section className="section how-to-buy" id="how-to-buy">
      <div className="htb-header">
        <img src="/beronsol.jpeg" alt="$BER" className="htb-header-img" />
        <div>
          <h2 className="section-title">How to Buy $BER</h2>
          <p className="section-subtitle">
            grab your $BER in 3 easy steps. even a bear could do it.
          </p>
        </div>
      </div>

      <div className="htb-two-col">
        <div className="htb-steps-col">
          <div className="step-card">
            <div className="step-number">1</div>
            <span className="step-icon"><IoWallet size={32} /></span>
            <div className="step-content">
              <h3>Get a Wallet</h3>
              <p>Download Phantom or Solflare wallet. Fund it with SOL from any exchange.</p>
            </div>
          </div>
          <div className="step-card">
            <div className="step-number">2</div>
            <span className="step-icon"><IoSwapHorizontal size={32} /></span>
            <div className="step-content">
              <h3>Swap on Jupiter</h3>
              <p>Use Jupiter to swap your SOL for $BER. Paste the contract address and swap.</p>
            </div>
          </div>
          <div className="step-card">
            <div className="step-number">3</div>
            <span className="step-icon"><IoHeart size={32} /></span>
            <div className="step-content">
              <h3>HODL & Vibe</h3>
              <p>Welcome to the ber fam. Hold tight, share memes, and enjoy the ride.</p>
            </div>
          </div>
        </div>

        <div className="htb-jupiter-col">
          <div id="jupiter-terminal" className="jupiter-widget"></div>
        </div>
      </div>
    </section>
  )
}

function Vibes() {
  return (
    <section className="section" id="vibes">
      <h2 className="section-title">Ber Vibes Only</h2>
      <p className="section-subtitle">
        things ber frens say
      </p>

      <div className="meme-phrases">
        {MEME_PHRASES.map((phrase, i) => (
          <div key={i} className="meme-phrase">
            {phrase}
          </div>
        ))}
      </div>
    </section>
  )
}

function Community() {
  return (
    <section className="section" id="community">
      <h2 className="section-title">Join the Ber Den</h2>
      <p className="section-subtitle">
        find your ber frens across the internet
      </p>

      <div className="community-links">
        <a href={TWITTER_URL} target="_blank" rel="noopener noreferrer" className="community-card">
          <span className="card-icon"><FaXTwitter size={36} /></span>
          <h3>Twitter / X</h3>
          <p>Bear community</p>
        </a>
        <a href={DEXSCREENER_URL} target="_blank" rel="noopener noreferrer" className="community-card">
          <span className="card-icon"><HiTrendingUp size={36} /></span>
          <h3>Dexscreener</h3>
          <p>Live chart</p>
        </a>
        <a href={`https://solscan.io/token/${CONTRACT_ADDRESS}`} target="_blank" rel="noopener noreferrer" className="community-card">
          <span className="card-icon"><IoSearch size={36} /></span>
          <h3>Solscan</h3>
          <p>On-chain data</p>
        </a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <img src="/bear.svg" alt="$BER" className="footer-bear-img" />
      <p>$BER on Solana</p>
      <p className="disclaimer">
        $BER is a meme coin with no intrinsic value or expectation of financial return.
        There is no formal team or roadmap. The coin is completely useless and for entertainment purposes only.
      </p>
    </footer>
  )
}

function App() {
  return (
    <>
      <Snowfall />
      <Navbar />
      <Hero />
      <ContractSection />
      <Marquee />
      <About />
      <HowToBuy />
      <Marquee />
      <Vibes />
      <Community />
      <Footer />
    </>
  )
}

export default App
