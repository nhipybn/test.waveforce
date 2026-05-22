'use client'

import { useEffect, useState } from 'react'
import { Menu, X, ArrowRight, Download } from 'lucide-react'
import Image from 'next/image'

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

<<<<<<< HEAD
  // 2. Hiệu ứng Navbar khi cuộn trang
=======
  // 1. Hook xử lý hiệu ứng cuộn của Navbar
>>>>>>> 283b173 (fix: update contact form logic)
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

  // 2. Hook chủ động tải Script BowNow để tự động render Form vào đúng container
  useEffect(() => {
    const container = document.getElementById('bownow-form-container')
    if (!container) return

    const script = document.createElement('script')
    script.src = "https://contents.bownow.jp/forms/sid_79340359725cff1f243d/trace.js"
    script.charset = "utf-8"
    script.async = true

    container.appendChild(script)

    return () => {
      if (container && container.contains(script)) {
        container.removeChild(script)
      }
    }
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

     <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-accent/8 blur-3xl animate-float" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-accent/6 blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 md:space-y-8">
              <div className="flex items-center gap-3">
                <Image
                  src="/logo.png"
                  alt="Waveforce"
                  width={60}
                  height={60}
                  className="h-14 w-auto"
                />
                <div>
                  <h2 className="text-2xl font-bold">
                    <span className="text-foreground">WAVE</span>
                    <span className="text-accent">FORCE</span>
                  </h2>
                  <p className="text-xs text-muted-foreground">Premium 3D Game Art</p>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-pretty">
                Professional 3D Game Assets for Indie Developers
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                Get production-ready 3D characters, environments, and assets. Founded by AAA veterans. Trusted by 500+ indie studios worldwide.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-bold hover:shadow-2xl hover:shadow-accent/50 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  Start Your Project <ArrowRight size={20} />
                </button>
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="px-8 py-3 border-2 border-accent text-accent rounded-lg font-bold hover:bg-accent/10 transition-all"
                >
                  View Portfolio
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative h-80 rounded-xl overflow-hidden border border-accent/20">
                <Image
                  src="/images/hero1.jpg"
                  alt="3D Character"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-48 rounded-xl overflow-hidden border border-accent/20">
                  <Image src="/images/hero2.jpg" alt="Environment" fill className="object-cover" />
                </div>
                <div className="relative h-48 rounded-xl overflow-hidden border border-accent/20">
                  <Image src="/images/hero3.png" alt="Assets" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PAIN POINTS & SOLUTIONS */}
      <section className="py-16 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              The Challenge
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Game studios face these problems. We solve them.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { problem: 'Limited Budget', solution: 'Cost-effective outsourcing without quality compromise' },
              { problem: 'Tight Deadlines', solution: 'Fast turnaround with dedicated teams' },
              { problem: 'Skill Shortage', solution: 'Access 100+ specialists across all disciplines' },
              { problem: 'Quality Issues', solution: 'AAA-quality standards with QA' }
            ].map((item, i) => (
              <div key={i} className="card-gradient p-8 rounded-xl">
                <div className="flex gap-3 mb-6">
                  <span className="text-2xl text-red-500">✕</span>
                  <h3 className="font-bold text-lg">{item.problem}</h3>
                </div>
                <div className="flex gap-3">
                  <span className="text-2xl text-accent">✓</span>
                  <p className="text-muted-foreground">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
       {/* 3. WHY WAVEFORCE (USP) */}
      <section id="why-us" className="py-16 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Why Waveforce
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our unique advantages
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: 'AAA Quality', desc: 'Every asset meets AAA studio standards' },
              { title: 'Fast Turnaround', desc: 'Ship on schedule with proven workflows' },
              { title: 'Flexible Teams', desc: 'Project-based or dedicated arrangements' },
              { title: '24/7 Support', desc: 'Direct access to project leads' },
              { title: 'Proven Track Record', desc: '50+ shipped games, 15+ years experience' },
              { title: 'Tech Expertise', desc: 'Unreal, Unity, Godot specialists' }
            ].map((item, i) => (
              <div key={i} className="card-gradient p-6 rounded-xl hover:shadow-2xl hover:shadow-accent/30 transition-all hover:-translate-y-1">
                <Check className="w-6 h-6 text-accent mb-4" />
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SERVICES */}
      <section id="services" className="py-16 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground">Complete 3D art solutions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: '3D Characters', desc: 'Hero and NPC models with rigging' },
              { title: 'Environments', desc: 'Level design and environmental assets' },
              { title: 'Props & Objects', desc: 'Game-ready interactive objects' },
              { title: 'VFX & Particles', desc: 'Visual effects systems' },
              { title: 'Technical Art', desc: 'Shaders, materials, optimization' },
              { title: 'Rigging & Animation', desc: 'Professional animation services' },
              { title: 'Concept Art', desc: 'Visual development concepts' },
              { title: 'Art Direction', desc: 'Creative consultation & guidance' }
            ].map((svc, i) => (
              <div key={i} className="card-gradient p-6 rounded-xl hover:shadow-2xl hover:shadow-accent/30 transition-all hover:-translate-y-2">
                <div className="w-10 h-10 rounded-lg bg-accent/20 text-accent flex items-center justify-center mb-4 font-bold">
                  {i + 1}
                </div>
                <h3 className="font-bold mb-2">{svc.title}</h3>
                <p className="text-sm text-muted-foreground">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PORTFOLIO */}
      <section id="portfolio" className="py-16 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Featured Works
            </h2>
            <p className="text-lg text-muted-foreground">Recent game art projects</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { img: '/images/portfolio1.jpg', title: 'Character Design' },
              { img: '/images/portfolio2.jpg', title: 'Environment Asset' },
              { img: '/images/portfolio3.jpg', title: 'Fantasy Set' },
              { img: '/images/portfolio4.jpg', title: 'Sci-Fi Character' },
              { img: '/images/portfolio5.png', title: 'Game Scene' },
              { img: '/images/service1.jpg', title: 'Asset Library' }
            ].map((item, i) => (
              <div key={i} className="relative h-80 rounded-xl overflow-hidden group border border-accent/20 hover:border-accent transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/30">
                <Image src={item.img} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity flex items-end">
                  <div className="p-6 w-full">
                    <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DOWNLOADS SECTION */}
      <section id="downloads" className="py-16 md:py-28 bg-[#081529]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Download Materials</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Stylized Duo Enforcer', desc: 'Marmoset viewer file' },
              { title: 'Stylized Male Enforcer', desc: 'Unreal Engine 5.0 - 5.7/ FBX file' },
              { title: 'Stylized Bedroom', desc: 'Unity package file/ Unreal Engine 5.0 - 5.7/ FBX file ' }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl border border-cyan-900/60 bg-[#0b1d36] flex flex-col justify-between">
                <div>
                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-gray-400 text-sm mb-6">{item.desc}</p>
                </div>
                <button className="w-full py-3 bg-cyan-400 text-black text-center font-bold rounded-xl hover:bg-cyan-300 transition flex items-center justify-center gap-2">
                  <Download size={18} /> Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CONTACT FORM (BOWNOW) */}
     {/* 5. CONTACT FORM (NHÚNG TRỰC TIẾP QUA IFRAME) */}
      <section id="contact" className="py-16 md:py-28 bg-[#081529]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Ready to Start?</h2>
            <p className="text-muted-foreground text-lg">Provide your details and we will provide a quote within 24 hours.</p>
          </div>

<<<<<<< HEAD
          <div className="bg-[#0b1d36] rounded-[2.5rem] shadow-2xl p-8 md:p-16">
            {/* Thay vì dùng script, ta dùng iframe trỏ thẳng tới view?form_id=...
                Lưu ý: Bạn hãy kiểm tra lại form_id trong link dưới đây có đúng là sid của bạn không
            */}
            <iframe 
              src="https://contents.bownow.jp/forms/view?form_id=sid_79340359725cff1f243d" 
              width="100%" 
              height="800" 
              frameBorder="0" 
              scrolling="yes"
              style={{ display: 'block', border: 'none' }}
              title="Waveforce Contact Form"
            >
              Loading form...
            </iframe>
=======
          <div className="card-gradient border border-accent/30 rounded-xl p-8 md:p-12 hover:border-accent hover:shadow-2xl hover:shadow-accent/40 transition-all">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center">
              Get Your Project Quote
            </h3>

            <p className="text-muted-foreground mb-8 text-center max-w-2xl mx-auto leading-8">
              Fill out the form and our team will review your project details
              and provide a customized quote within 24 hours.
            </p>

            {/* DÙNG IFRAME ĐỂ BỎ QUA XUNG ĐỘT JAVASCRIPT ĐỐI VỚI NEXT.JS */}
            <div className="w-full min-h-[500px] overflow-hidden rounded-lg bg-white">
              <iframe
                src="https://contents.bownow.jp/forms/sid_79340359725cff1f243d"
                className="w-full h-[600px] border-0"
                title="BowNow Contact Form"
                allowFullScreen
              />
            </div>
>>>>>>> 283b173 (fix: update contact form logic)
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-white/10 text-center bg-[#040a16]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center items-center gap-2 mb-6">
            <Image src="/logo.png" alt="Waveforce" width={30} height={30} />
            <span className="font-bold text-white tracking-widest">WAVEFORCE STUDIO</span>
          </div>
          <p className="text-sm text-gray-500">© 2026 Waveforce Studio. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}