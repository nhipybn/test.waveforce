'use client'

import { useEffect, useState } from 'react'
import { Menu, X, ArrowRight, Download } from 'lucide-react'
import Image from 'next/image'
import Script from 'next/script'

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  // 1. Hàm xử lý cuộn trang mượt mà
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const navbar = document.getElementById('navbar')
      const navbarHeight = navbar?.offsetHeight || 0
      const top = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20
      window.scrollTo({ top, behavior: 'smooth' })
    }
    setIsNavOpen(false)
  }

  // 2. Hiệu ứng Navbar khi cuộn trang
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar')
      if (window.scrollY > 10) {
        navbar?.classList.add('backdrop-blur-md', 'bg-background/80', 'shadow-lg', 'shadow-accent/10')
      } else {
        navbar?.classList.remove('backdrop-blur-md', 'bg-background/80', 'shadow-lg', 'shadow-accent/10')
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="relative z-10 w-full">
      {/* NAVBAR */}
      <nav id="navbar" className="sticky top-0 z-50 border-b border-border transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-24">
            <div className="flex-shrink-0">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center gap-3"
              >
                <Image src="/logo.png" alt="Waveforce Studio" width={60} height={60} className="h-14 md:h-16 w-auto" />
                <span className="hidden sm:block text-base md:text-lg font-bold">
                  <span className="text-foreground">WAVE</span>
                  <span className="text-accent">FORCE</span>
                </span>
              </button>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <button onClick={() => scrollToSection('why-us')} className="px-6 py-2.5 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-all">
                Our Services
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="px-6 py-2.5 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-all">
                Portfolio
              </button>
              <button onClick={() => scrollToSection('contact')} className="px-6 py-2.5 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all transform hover:scale-105">
                Contact Us
              </button>
            </div>

            <button onClick={() => setIsNavOpen(!isNavOpen)} className="md:hidden p-2 text-foreground hover:text-accent">
              {isNavOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isNavOpen && (
            <div className="md:hidden pb-4 space-y-3 border-t border-border pt-4">
              <button onClick={() => scrollToSection('why-us')} className="block w-full px-4 py-2.5 text-left border-2 border-accent text-accent rounded-lg font-semibold">Why Us</button>
              <button onClick={() => scrollToSection('portfolio')} className="block w-full px-4 py-2.5 text-left border-2 border-accent text-accent rounded-lg font-semibold">Portfolio</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full px-4 py-2.5 bg-accent text-accent-foreground rounded-lg font-semibold">Contact Us</button>
            </div>
          )}
        </div>
      </nav>

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-accent/8 blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 md:space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
                Professional 3D Game Assets for Indie Developers
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Get production-ready 3D characters, environments, and assets. Founded by AAA veterans.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => scrollToSection('contact')} className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-bold flex items-center justify-center gap-2">
                  Start Your Project <ArrowRight size={20} />
                </button>
                <button onClick={() => scrollToSection('portfolio')} className="px-8 py-3 border-2 border-accent text-accent rounded-lg font-bold">
                  View Portfolio
                </button>
              </div>
            </div>
            <div className="relative h-80 md:h-[450px] rounded-xl overflow-hidden border border-accent/20">
              <Image src="/images/hero1.jpg" alt="3D Character" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. PAIN POINTS */}
      <section id="why-us" className="py-16 md:py-28 bg-[#040a16]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">The Challenge</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Broken Topology', problem: 'Auto-retopo causing animation breaks.', solution: '100% manual retopology.' },
              { title: 'FPS Drops', problem: 'Unoptimized polycounts.', solution: 'Strict budget & LOD management.' },
              { title: 'Inconsistent Art', problem: 'Mismatched freelance assets.', solution: 'Strict adherence to your art bible.' },
            ].map((item, i) => (
              <div key={i} className="rounded-lg overflow-hidden border border-cyan-900/60 bg-[#081529] p-6">
                <h4 className="font-bold text-white mb-4 border-b border-cyan-900/60 pb-2">{item.title}</h4>
                <p className="text-red-400 text-sm mb-4">✕ {item.problem}</p>
                <p className="text-cyan-400 text-sm font-bold">✓ Fix: <span className="text-gray-300 font-normal">{item.solution}</span></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PORTFOLIO */}
      <section id="portfolio" className="py-16 md:py-28">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-white">Featured Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="relative h-64 rounded-xl overflow-hidden group border border-accent/20">
                <Image 
                  src={`/images/portfolio${i}.jpg`} 
                  alt="Portfolio" 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x400?text=Waveforce' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CONTACT FORM (LOGIC PROJECT CŨ) */}
      <section id="contact" className="py-16 md:py-28 bg-[#081529]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Ready to Start?</h2>
            <p className="text-muted-foreground">Provide your details and we will provide a quote within 24 hours.</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            {/* 1. Wrapper giữ vị trí form - ID PHẢI ĐÚNG ĐỊNH DẠNG BOWNOW */}
            <div
              className="relative w-full min-h-[400px]"
              id="_bownow_cs_form_sid_79340359725cff1f243d"
            >
              <p className="text-center py-20 text-gray-400 italic animate-pulse">Loading form...</p>
            </div>

            {/* 2. Script thực thi logic của bạn */}
            <Script id="bownow-inject-logic" strategy="afterInteractive">
              {`
                (function() {
                  var sid = 'sid_79340359725cff1f243d';
                  var scriptId = '_bownow_cs_' + sid;
                  
                  // Kiểm tra nếu script đã tồn tại thì xóa đi để tránh lỗi lặp
                  var existing = document.getElementById(scriptId);
                  if (existing) existing.remove();

                  var s = document.createElement('script');
                  s.id = scriptId;
                  s.charset = 'utf-8';
                  s.src = 'https://contents.bownow.jp/forms/' + sid + '/trace.js?t=' + new Date().getTime();
                  document.getElementsByTagName('head')[0].appendChild(s);
                })();
              `}
            </Script>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-accent/20 text-center">
        <p className="text-sm text-muted-foreground">© 2026 Waveforce Studio. All rights reserved.</p>
      </footer>
    </main>
  )
}