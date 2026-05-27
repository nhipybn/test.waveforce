'use client'

import { useEffect, useState } from 'react'
import { Menu, X, ArrowRight, Download } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)

    if (element) {
      const navbar = document.getElementById('navbar')
      const navbarHeight = navbar?.offsetHeight || 0

      const top =
        element.getBoundingClientRect().top +
        window.pageYOffset -
        navbarHeight -
        20

      window.scrollTo({
        top,
        behavior: 'smooth',
      })
    }

    setIsNavOpen(false)
  }

  // 1. Hook xử lý hiệu ứng cuộn của Navbar
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
      {/* Navbar */}
      <nav id="navbar" className="sticky top-0 z-50 border-b border-border transition-all duration-300 bg-[#081529]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-24 w-full">
            
            {/* 1. KHU VỰC LOGO VÀ MENU GỐC (GIỮ NGUYÊN BỐ CỤC BAN ĐẦU CỦA ANH) */}
            <div className="flex items-center space-x-4">
              {/* Vị trí chèn LOGO của anh (Nếu có thẻ <Image> hoặc chữ logo ban đầu, anh cứ giữ lại nhé) */}
              <div className="flex-shrink-0">
                <span className="text-xl font-bold text-white tracking-wider">WAVEFORCE</span>
              </div>
            </div>

            {/* 2. KHU VỰC MENU TRÊN MÁY TÍNH (PC NAVIGATION) */}
            {/* Lệnh 'hidden md:flex' giúp đống nút này CHỈ HIỆN TRÊN PC, CÒN ĐIỆN THOẠI SẼ ẨN HẲN */}
            <div className="hidden md:flex items-center space-x-4 ml-auto">
              <button
                onClick={() => scrollToSection('why-us')}
                className="px-6 py-2.5 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-all text-sm"
              >
                Our Services
              </button>

              {/* Portfolio trên PC: Đã thêm viền trắng mờ để có Khung Viền đồng bộ với 2 nút kia */}
              <Link
                href="https://waveforce.studio/projects"
                className="px-6 py-2.5 border-2 border-white/20 text-foreground hover:border-accent hover:text-accent rounded-lg font-semibold transition-all text-sm flex items-center justify-center h-[42px]"
              >
                Portfolio
              </Link>

              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-2.5 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all transform hover:scale-105 text-sm"
              >
                Contact Us
              </button>
            </div>

            {/* 3. NÚT BA GẠCH / ĐÓNG MENU (CHỈ HIỆN TRÊN ĐIỆN THOẠI) */}
            {/* Lệnh 'md:hidden' giúp ẩn nút này khi xem trên máy tính */}
            <button
              onClick={() => setIsNavOpen(!isNavOpen)}
              className="md:hidden p-2 text-foreground hover:text-accent transition-colors ml-auto z-50"
              aria-label="Toggle Menu"
            >
              {isNavOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* ========================================================= */}
          {/* 4. GIAO DIỆN DROPDOWN TRÊN ĐIỆN THOẠI (Y HỆT HÌNH ANH GỬI) */}
          {/* ========================================================= */}
          {isNavOpen && (
            <div className="md:hidden absolute left-0 right-0 top-full bg-[#081529]/95 backdrop-blur-md border-b border-border px-6 py-6 space-y-4 shadow-xl z-50 rounded-b-xl animate-in fade-in slide-in-from-top-5 duration-200">
              <button
                onClick={() => {
                  scrollToSection('why-us');
                  setIsNavOpen(false);
                }}
                className="block w-full text-center py-3 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-all"
              >
                Our Services
              </button>

              <Link
                href="https://waveforce.studio/projects"
                onClick={() => setIsNavOpen(false)}
                className="block w-full text-center py-3 border-2 border-white/20 text-foreground rounded-lg font-semibold hover:border-accent hover:text-accent transition-all"
              >
                Portfolio
              </Link>

              <button
                onClick={() => {
                  scrollToSection('contact');
                  setIsNavOpen(false);
                }}
                className="block w-full text-center py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg shadow-accent/30 transition-all"
              >
                Contact Us
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* 1. HERO SECTION */}
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
                Premium Stylized and Semi-real Art. Engineered for Indie Studios
              </h1>

              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                Collaborate directly with passionate creators. We are an independent team of Stylized 3D artists. Expect high-end artistic vision backed by strict topology and seamless engine integration.
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

      {/* 2. PAIN POINTS & SOLUTIONS - KÉO CẬP LINES SÁT LÊN TRÊN */}
      <section id="why-us" className="py-16 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              The Challenge
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Game studios face these problems. We solve them.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Broken Topology & Deformations',
                problem: 'Auto-retopo causing animation breaks.',
                solution: '100% manual retopology for clean articulation.',
              },
              {
                title: 'FPS Drops & Memory Bloat',
                problem: 'Unoptimized polycounts and bloated textures.',
                solution: 'Strict budget management, smart UV packing, and optimized LODs.',
              },
              {
                title: 'Messy Engine Integration',
                problem: 'Broken scales and offset pivots.',
                solution: 'Fully zeroed transforms and strict native conventions for Unreal/Unity.',
              },
              {
                title: 'Inconsistent Art Direction',
                problem: 'Mismatched freelance and store assets.',
                solution: "A dedicated team that strictly matches and maintains your project's art bible.",
              },
              {
                title: 'Poor Communication & Zero Integration Support',
                problem: 'Vendors cutting contact post-delivery.',
                solution: 'Continuous support and co-debugging until all assets function perfectly in-engine.',
              },
              {
                title: 'Post-Approval Quality Drops',
                problem: 'Quality degrading over time after initial approval.',
                solution: 'Strict internal QA ensuring identical quality from start to finish.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-sm overflow-hidden border border-cyan-900/60 bg-[#081529] flex flex-col h-full"
              >
                {/* Phần tiêu đề xanh đậm phía trên */}
                <div className="bg-[#0b1d36] border-b border-cyan-900/60 text-center text-white font-bold px-5 py-4 text-sm md:text-base min-h-[72px] flex items-center justify-center">
                  {item.title}
                </div>

                {/* Phần ruột */}
                <div className="p-6 flex-1 flex flex-col justify-between">

                  {/* PHẦN LỖI (✕) - Đã hạ min-height xuống sát nhất có thể để kéo line lên */}
                  <div className="flex items-start gap-3 min-h-[56px] md:min-h-[60px]">
                    <span className="text-red-500 text-2xl leading-none pt-0.5">✕</span>
                    <p className="text-white text-[15px] leading-relaxed font-medium">
                      {item.problem}
                    </p>
                  </div>

                  {/* PHẦN SỬA LỖI (✓) CÓ ĐƯỜNG LINE - Giảm mt-2 thành mt-1 để thu hẹp khoảng cách */}
                  <div className="flex-1 flex flex-col justify-start border-t border-cyan-900/30 pt-4 mt-1">
                    <div className="flex items-start gap-3">
                      <span className="text-cyan-400 text-2xl leading-none pt-0.5">✓</span>
                      <p className="text-gray-400 text-[15px] leading-relaxed">
                        <span className="font-bold text-white">Our Fix:</span> {item.solution}
                      </p>
                    </div>
                  </div>

                </div>
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
            <p className="text-lg text-muted-foreground">
              Complete 3D art solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Full Character & Creature Pipeline',
                desc: (
                  <>
                    <p className="mb-10">
                      • <span className="font-bold">What we deliver:</span> High-poly sculpting, 100% manual retopology, and production-ready rigging.
                    </p>
                    <p>
                      • <span className="font-bold">Best for:</span> Hero characters, unique NPCs, and monsters requiring clean animation deformation.
                    </p>
                  </>
                ),
              },
              {
                title: 'Environment Art & Modular Kits',
                desc: (
                  <>
                    <p className="mb-10">
                      • <span className="font-bold">What we deliver:</span> Smart modular kits, trim sheets, and optimized collision setup.
                    </p>
                    <p>
                      • <span className="font-bold">Best for:</span> Building large-scale levels fast while minimizing memory footprint.
                    </p>
                  </>
                ),
              },
              {
                title: 'Asset Multiplication & Scaling',
                desc: (
                  <>
                    <p className="mb-10">
                      • <span className="font-bold">What we deliver:</span> Base mesh variations, modular armor systems, and texture swapping.
                    </p>
                    <p>
                      • <span className="font-bold">Best for:</span> Scaling your NPC/enemy roster 10x while cutting production costs.
                    </p>
                  </>
                ),
              },
            ].map((svc, i) => (
              <div
                key={i}
                className="card-gradient p-6 rounded-xl hover:shadow-2xl hover:shadow-accent/30 transition-all hover:-translate-y-2"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/20 text-accent flex items-center justify-center mb-4 font-bold">
                  {i + 1}
                </div>

                <h3 className="font-bold mb-6 leading-snug">{svc.title}</h3>
                <div className="text-sm text-muted-foreground leading-8">{svc.desc}</div>
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
              { img: '/images/portfolio1.jpg', title: 'Stylized Enforcer - My team`s project' },
              { img: '/images/portfolio2.jpg', title: 'Stylized Bedroom - Modular Asset Kit' },
              { img: '/images/portfolio3.jpg', title: 'Stylized character - ROVE' },
              { img: '/images/portfolio4.jpg', title: 'Stylized Enforcer - My team`s project' },
              { img: '/images/portfolio5.png', title: 'Steampunk Armor' },
              { img: '/images/service1.jpg', title: 'Another Pint - The Client`s Project' },
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

      {/* 3. DOWNLOAD MATERIALS */}
      <section id="downloads" className="py-16 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Download 3D Asset
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Try us before you trust us
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8">WaveforceStudio's Assets</h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Stylized Duo Enforcer',
                  desc: 'Marmoset viewer file',
                  link: 'https://drive.google.com/drive/folders/1gOd9PF62lIseU3Ztzu0GBuOuxos1DJox?usp=sharing',
                  image: '/images/stylized-duo-enforcer.jpg' // Đường dẫn trỏ vào public/images/stylized-duo-enforcer.jpg
                },
                {
                  title: 'Stylized Male Enforcer',
                  desc: `Unreal Engine 5.0 - 5.7. FBX file`,
                  link: 'https://drive.google.com/drive/folders/1j3p8kbaepsFNOBpNC4i4kSGT7OECZxO_?usp=sharing',
                  image: '/images/stylized-male-enforcer.jpg' // Đường dẫn trỏ vào public/images/stylized-male-enforcer.jpg
                },
                {
                  title: 'Stylized Bedroom',
                  desc: `Unity package file. Unreal Engine 5.0 - 5.7. FBX file`,
                  link: 'https://drive.google.com/drive/folders/1pmHp9cjWY6iS_obLe3EG_HPTGJaCUJE3?usp=sharing',
                  image: '/images/stylized-bedroom.jpg' // Đường dẫn trỏ vào public/images/stylized-bedroom.jpg
                }
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-cyan-900/60 bg-[#081529] p-6 flex flex-col overflow-hidden"
                >
                  {/* Vùng hiển thị hình ảnh sản phẩm */}
                  <div className="w-full h-48 rounded-xl overflow-hidden mb-8 bg-cyan-500/10 project-thumbnail">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition duration-300"
                    />
                  </div>

                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-white mb-4 leading-snug">{item.title}</h4>
                    <p className="text-gray-400 leading-8 mb-10">{item.desc}</p>
                  </div>

                  <a
                    href={item.link}
                    download
                    className="w-full h-[56px] inline-flex items-center justify-center rounded-xl bg-cyan-400 text-black font-semibold text-lg hover:opacity-90 transition"
                  >
                    Download
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. CONTACT FORM - BẢO MẬT CHỐNG MẤT KHUNG KHI PUSH GIT */}
      {/* 5. CONTACT FORM - Tăng padding bên trong cho thoáng */}
      <section id="contact" className="py-24 md:py-32 bg-[#081529]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Ready to Start?</h2>
            <p className="text-muted-foreground text-lg">Provide your details and we will provide a quote within 24 hours.</p>
          </div>

          {/* Tăng padding ở đây (p-8 md:p-12) sẽ đẩy cái Form vào giữa, 
              tạo ra khoảng trống trắng bao quanh các ô nhập liệu 
          */}
          <div className="rounded-[2.5rem] shadow-2xl p-8 md:p-16">
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
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 border-t border-accent/20 bg-[#061621] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Layout 4 cột bằng nhau hợp với form hiện tại */}
          <div className="grid md:grid-cols-4 gap-8 mb-8">

            {/* CỘT 1: LOGO VÀ THÔNG TIN CÔNG TY (Cột trái ngoài cùng) */}
<div className="space-y-4">
  <div className="flex items-center gap-2 mb-4">
    <Image src="/logo.png" alt="Waveforce Studio" width={40} height={40} className="h-8 w-auto object-contain" />
    <span className="font-bold text-sm">
      <span className="text-foreground">WAVE</span>
      <span className="text-accent">FORCE</span>
    </span>
  </div>
  <p className="text-sm text-gray-300 leading-relaxed">
    Founded in 2025 by Duc Minh Pham - a Lead 3D Artist with 7 years
    of specialized production experience - Waveforce Studio was built
    from the ground up to solve the 3D outsourcing needs of indie studios
    with optimized, game-ready assets.
  </p>
  
  {/* HÀNG MỚI ĐƯỢC CHÈN NGAY DƯỚI ĐOẠN VĂN GIỚI THIỆU */}
  <div className="text-sm pb-2">
    <a 
      href="https://sorcery.gg/portfolio/minhpham" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-orange-400 hover:underline inline-flex items-center gap-1 font-medium"
    >
      View Minh Pham's Profile →
    </a>
  </div>

  <div className="text-xs space-y-1 pt-2 border-t border-accent/10">
    <p className="text-gray-300">
      <span className="font-semibold text-white">Email:</span>{' '}
      <a href="mailto:business@waveforce-studio.com" className="text-orange-400 hover:underline">
        business@waveforce-studio.com
      </a>
    </p>
    <p className="text-gray-300 leading-normal">
      <span className="font-semibold text-white">Address:</span> 252 Tay Son Street, Dong Da Ward, Hanoi, Vietnam
    </p>
  </div>
</div>

            {/* CỘT 2: 3D GAME ART (Đúng chữ trong ảnh) */}
            <div>
              <h4 className="font-bold text-sm text-orange-400 mb-4">3D Game art</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="text-gray-300">3D Characters</li>
                <li className="text-gray-300">3D Environment vs Props</li>
                <li className="text-gray-300">3D Hard Surface</li>
              </ul>
            </div>

            {/* CỘT 3: ART STYLE & LINKS ĐIỀU HƯỚNG */}
            <div>
              <h4 className="font-bold text-sm text-orange-400 mb-4">Art style</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="text-gray-300 mb-4">Stylized<br />Semi-real</li>

                {/* Giữ lại các nút bấm scrollToSection của form cũ nhưng làm gọn lại */}
                <li className="border-t border-accent/10 pt-2">
                  <button onClick={() => scrollToSection('why-us')} className="hover:text-accent transition-colors text-xs text-gray-400">
                    Why Us
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('portfolio')} className="hover:text-accent transition-colors text-xs text-gray-400">
                    Portfolio
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('contact')} className="hover:text-accent transition-colors text-xs text-gray-400">
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>

            {/* CỘT 4: TECHNICAL SERVICE & FOLLOW LINKS */}
            <div>
              <h4 className="font-bold text-sm text-orange-400 mb-4">Technical Service</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="text-gray-300">Rigging/Skinning</li>
                <li className="text-gray-300">Blendshapes</li>
                <li className="text-gray-300">Modular</li>
                <li className="text-gray-300 mb-4">Unreal Engine/ Unity</li>

                {/* Giữ các liên kết MXH của form cũ */}
                <li className="border-t border-accent/10 pt-2 flex gap-3 text-xs text-gray-400">
                  <a href="https://www.linkedin.com/in/minhpham1106/?locale=vi_VN" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
                  <a href="https://waveforcestudio.artstation.com/projects" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">ArtStation</a>
                  <a href="https://www.facebook.com/studiowaveforce?locale=vi_VN" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">Facebook</a>
                </li>
              </ul>
            </div>

          </div>

          {/* DÒNG COPYRIGHT DƯỚI CÙNG Y HỆT TRÊN ẢNH */}
          <div className="border-t border-accent/20 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 opacity-90">
            <p>
              © Copyright 2025-2026 | WAVEFORCE STUDIO COMPANY LIMITED | All Rights Reserved |
            </p>
            <div className="flex gap-4 mt-4 md:mt-0 opacity-60">
              <a href="#" className="hover:text-accent transition-colors">Privacy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms</a>
            </div>
          </div>

        </div>
      </footer>
    </main>
  )
}