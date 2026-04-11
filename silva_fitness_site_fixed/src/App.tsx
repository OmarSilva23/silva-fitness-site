/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  MapPin, 
  Instagram, 
  Facebook, 
  ArrowRight, 
  CheckCircle2,
  Menu,
  X
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

gsap.registerPlugin(ScrollTrigger);

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const bentoRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-title', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        stagger: 0.2
      });

      gsap.from('.hero-sub', {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.8,
        ease: 'power3.out'
      });

      gsap.from('.hero-cta', {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        delay: 1.2,
        ease: 'back.out(1.7)'
      });

      const sections = document.querySelectorAll('.reveal');
      sections.forEach((section) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'power3.out'
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const CTA_LINK = "#agendamento";
  const GOOGLE_REVIEWS_LINK = "https://www.google.com/maps?q=SilvaFitness.pt,+R.+Avelar+Brotero+37,+2670-418+Loures&ftid=0xd192dc5077899f1:0x202be708e128dfec&entry=gps&lucs=,94231188,47071704,94218641,94282134,94286869&g_ep=CAISEjI1LjIwLjAuNzU3ODEwNjA5MBgAIIgnKi0sOTQyMzExODgsNDcwNzE3MDQsOTQyMTg2NDEsOTQyODIxMzQsOTQyODY4NjlCAlBU&skid=6bbe64ae-abfd-408c-84c9-6fc35c80d086&g_st=com.google.maps.preview.copy";

  return (
    <div className="min-h-screen font-sans selection:bg-white selection:text-black">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 glass py-4 px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img 
            src="https://i.postimg.cc/dVshDthG/Silva-Fitness-Logo.png" 
            alt="Logo Silva Fitness" 
            style={{ maxHeight: '45px', width: 'auto', filter: 'invert(1) brightness(2)', WebkitFilter: 'invert(1) brightness(2)' }} 
            referrerPolicy="no-referrer"
          />
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-white/70">
          <a href="#metodo" className="hover:text-white transition-colors">Método</a>
          <a href="#ambiente" className="hover:text-white transition-colors">Ambiente</a>
          <a href="#resultados" className="hover:text-white transition-colors">Resultados</a>
          <a href="#localizacao" className="hover:text-white transition-colors">Localização</a>
        </nav>

        <div className="flex items-center gap-4">
          <a 
            href="#agendamento"
            className="hidden sm:flex glass px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
          >
            Reservar Agora
          </a>
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-luxury-black flex flex-col items-center justify-center gap-8 text-2xl font-display uppercase">
          <a href="#metodo" onClick={() => setIsMenuOpen(false)}>Método</a>
          <a href="#ambiente" onClick={() => setIsMenuOpen(false)}>Ambiente</a>
          <a href="#resultados" onClick={() => setIsMenuOpen(false)}>Resultados</a>
          <a href="#localizacao" onClick={() => setIsMenuOpen(false)}>Localização</a>
          <a 
            href="#agendamento"
            onClick={() => setIsMenuOpen(false)}
            className="bg-white text-black px-8 py-3 rounded-full text-lg font-bold"
          >
            Reservar Agora
          </a>
        </div>
      )}

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop" 
            alt="Personal Training Background"
            className="w-full h-full object-cover opacity-30 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-luxury-black via-transparent to-luxury-black"></div>
        </div>

        <div className="relative z-10 max-w-5xl">
          <div className="overflow-visible mb-4 pt-4">
            <h1 className="hero-title font-display text-6xl md:text-9xl uppercase leading-[0.95] tracking-tighter">
              Tu és a peça <br /> <span className="text-white/30">que falta</span>
            </h1>
          </div>
          
          <p className="hero-sub text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Transforme o seu corpo e mente em Loures. Treino experimental de alta performance por apenas <span className="text-white font-bold">€15</span>.
          </p>

          <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={CTA_LINK}
              className="group relative bg-white text-black px-10 py-5 rounded-full font-bold uppercase tracking-widest overflow-hidden transition-all hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                Começar Agora <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <div className="flex items-center gap-2 text-white/40 text-sm uppercase tracking-widest">
              <CheckCircle2 size={16} />
              <span>Vagas Limitadas</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        </div>
      </section>

      {/* Authority Marquee */}
      <section className="py-12 border-y border-white/5 overflow-hidden bg-luxury-dark">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 px-6">
              <span className="text-4xl md:text-6xl font-display uppercase text-white/10">Queima 1000kcal</span>
              <span className="text-4xl md:text-6xl font-display uppercase text-white/10">•</span>
              <span className="text-4xl md:text-6xl font-display uppercase text-white/10">45 Minutos</span>
              <span className="text-4xl md:text-6xl font-display uppercase text-white/10">•</span>
              <span className="text-4xl md:text-6xl font-display uppercase text-white/10">Loures Portugal</span>
              <span className="text-4xl md:text-6xl font-display uppercase text-white/10">•</span>
            </div>
          ))}
        </div>
      </section>

      {/* Conheça o Nosso Método Section */}
      <section id="metodo" className="py-24 bg-luxury-black overflow-hidden" ref={bentoRef}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-24 text-center reveal">
            <h2 className="font-display text-4xl md:text-6xl uppercase mb-6 tracking-tight">
              Conheça o <span className="text-white/30">Nosso Método</span>
            </h2>
          </div>

          <div className="space-y-32">
            <div className="reveal grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="rounded-3xl overflow-hidden glass aspect-video lg:aspect-square">
                <iframe 
                  src="https://www.youtube.com/embed/pBf-rxjqaZI?autoplay=1&mute=1&loop=1&playlist=pBf-rxjqaZI&controls=0&modestbranding=1&rel=0" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                  className="w-full h-full object-cover"
                ></iframe>
              </div>
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-display uppercase tracking-tight">A Origem: De Superação a Transformação</h3>
                <p className="text-white/60 text-lg leading-relaxed">
                  O fundador Gilson da Silva superou as limitações da asma através do desporto e das artes marciais. Dessa experiência, nasceu um método cientificamente comprovado e totalmente adaptável. Seja com treinos personalizados ou em grupo, o nosso foco é criar uma comunidade onde aprendes, evoluis e te superas.
                </p>
              </div>
            </div>

            <div className="reveal grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="lg:order-2 rounded-3xl overflow-hidden glass aspect-video lg:aspect-square">
                <iframe 
                  src="https://www.youtube.com/embed/g_DbDr5UbSs?autoplay=1&mute=1&loop=1&playlist=g_DbDr5UbSs&controls=0&modestbranding=1&rel=0" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                  className="w-full h-full object-cover"
                ></iframe>
              </div>
              <div className="lg:order-1 space-y-6">
                <h3 className="text-3xl md:text-4xl font-display uppercase tracking-tight">O Fim do Cansaço Diário</h3>
                <p className="text-white/60 text-lg leading-relaxed">
                  Ficas sem ar ao subir escadas? Isso não acontece de um dia para o outro. A maioria das pessoas não precisa de mais motivação; precisa de estrutura, de um método claro e da pessoa certa ao seu lado. Juntos, vamos mudar a tua realidade física.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Social Proof Section - O Ambiente Silva Fitness */}
      <section id="ambiente" className="py-24 bg-luxury-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16 text-center reveal">
            <h2 className="font-display text-4xl md:text-6xl uppercase mb-6 tracking-tight">
              O Ambiente <span className="text-white/30">Silva Fitness</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="reveal rounded-xl overflow-hidden glass">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/4djE6Mpgqqo?autoplay=1&mute=1&loop=1&playlist=4djE6Mpgqqo&controls=0&modestbranding=1&rel=0" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen 
                style={{ aspectRatio: '9/16' }}
              ></iframe>
            </div>
            <div className="reveal rounded-xl overflow-hidden glass">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/Z4EJYwBIX7w?autoplay=1&mute=1&loop=1&playlist=Z4EJYwBIX7w&controls=0&modestbranding=1&rel=0" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen 
                style={{ aspectRatio: '9/16' }}
              ></iframe>
            </div>
            <div className="reveal rounded-xl overflow-hidden glass">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/Wfo8Zj63Kfk?autoplay=1&mute=1&loop=1&playlist=Wfo8Zj63Kfk&controls=0&modestbranding=1&rel=0" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen 
                style={{ aspectRatio: '9/16' }}
              ></iframe>
            </div>
            <div className="reveal rounded-xl overflow-hidden glass">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/raf5cUpGlI4?autoplay=1&mute=1&loop=1&playlist=raf5cUpGlI4&controls=0&modestbranding=1&rel=0" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen 
                style={{ aspectRatio: '9/16' }}
              ></iframe>
            </div>
            <div className="reveal rounded-xl overflow-hidden glass">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/AwTgxbqYkkA?autoplay=1&mute=1&loop=1&playlist=AwTgxbqYkkA&controls=0&modestbranding=1&rel=0" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen 
                style={{ aspectRatio: '9/16' }}
              ></iframe>
            </div>
            <div className="reveal rounded-xl overflow-hidden glass">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/pPkZ4W-dhQ4?autoplay=1&mute=1&loop=1&playlist=pPkZ4W-dhQ4&controls=0&modestbranding=1&rel=0" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen 
                style={{ aspectRatio: '9/16' }}
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Services / About */}
      <section id="servicos" className="py-32 bg-luxury-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="reveal">
            <h2 className="font-display text-4xl md:text-6xl uppercase mb-8 leading-tight">
              A sua melhor versão <br /> <span className="text-white/30">começa aqui</span>
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 glass rounded-full flex items-center justify-center font-display text-xl">1</div>
                <div>
                  <h4 className="text-xl font-bold uppercase mb-2">Avaliação Inicial</h4>
                  <p className="text-white/50">Analisamos seus objetivos e limitações para traçar o melhor caminho.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 glass rounded-full flex items-center justify-center font-display text-xl">2</div>
                <div>
                  <h4 className="text-xl font-bold uppercase mb-2">Treino Personalizado</h4>
                  <p className="text-white/50">Cada repetição conta. Foco total na sua técnica e evolução.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 glass rounded-full flex items-center justify-center font-display text-xl">3</div>
                <div>
                  <h4 className="text-xl font-bold uppercase mb-2">Acompanhamento</h4>
                  <p className="text-white/50">Suporte constante para garantir que você nunca perca a motivação.</p>
                </div>
              </div>
            </div>
            
            <a 
              href={CTA_LINK}
              className="mt-12 inline-flex items-center gap-4 text-white font-bold uppercase tracking-widest group"
            >
              Agendar Treino Experimental <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>

          <div className="relative reveal">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden">
              <img 
                src="https://i.postimg.cc/MKRJjhch/776b42c3-7859-4891-9344-7131c8008323.jpg" 
                alt="Personal Trainer"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 glass p-8 rounded-3xl hidden md:block">
              <div className="text-5xl font-display mb-1">€15</div>
              <div className="text-xs uppercase tracking-widest text-white/50">Treino Experimental</div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <section id="resultados" className="py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 reveal">
            <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight">
              Resultados <span className="text-white/30">Reais</span>
            </h2>
          </div>

          <div className="reveal py-8 w-full mx-auto">
            <div className="glass rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto">
              <div className="text-2xl md:text-3xl mb-4">★★★★★</div>
              <h3 className="font-display text-2xl md:text-4xl uppercase tracking-tight mb-6">
                Veja as nossas avaliações no Google
              </h3>
              <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                Conheça as experiências reais dos nossos alunos e descubra porque a Silva Fitness é uma referência em Loures.
              </p>
              <a
                href={GOOGLE_REVIEWS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 glass px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
              >
                Ver avaliações no Google <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Location / Contact */}
      <section id="localizacao" className="py-32 bg-luxury-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="reveal h-[500px] rounded-3xl overflow-hidden glass group order-2 lg:order-1">
            <a 
              href="https://www.google.com.br/maps/place/SilvaFitness/@38.8319001,-9.1795445,17z/data=!3m1!4b1!4m6!3m5!1s0xd192dc5077899f1:0x202be708e128dfec!8m2!3d38.8319001!4d-9.1769696!16s%2Fg%2F11pyc6nxqp?entry=ttu&g_ep=EgoyMDI2MDMxNS4wIKXMDSoASAFQAw%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full h-full"
            >
              <img 
                src="https://lh3.googleusercontent.com/d/1X_pzikoRW98vRC-5Ohgfk26eoudyY8Rv" 
                alt="Silva Fitness Google Maps View"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors flex items-center justify-center">
                <div className="glass px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Ver no Google Maps
                </div>
              </div>
            </a>
          </div>

          <div className="reveal order-1 lg:order-2">
            <h2 className="font-display text-4xl md:text-6xl uppercase mb-8">
              Estamos em <br /> <span className="text-white/30">Loures</span>
            </h2>
            <div className="space-y-6 text-white/60">
              <div className="flex items-start gap-4">
                <MapPin className="text-white mt-1" />
                <div>
                  <p className="text-white font-bold uppercase mb-1">Endereço</p>
                  <p>Loures, Portugal</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Instagram className="text-white mt-1" />
                <div>
                  <p className="text-white font-bold uppercase mb-1">Instagram</p>
                  <p>@silvafitness</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Facebook className="text-white mt-1" />
                <div>
                  <p className="text-white font-bold uppercase mb-1">Facebook</p>
                  <p>Silva Fitness</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-8 glass rounded-3xl">
              <h4 className="text-xl font-display uppercase mb-4">Horário de Funcionamento</h4>
              <div className="flex justify-between text-sm py-2 border-b border-white/5">
                <span>Segunda - Sexta</span>
                <span>07:00 - 21:00</span>
              </div>
              <div className="flex justify-between text-sm py-2">
                <span>Sábado</span>
                <span>09:00 - 14:00</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scheduling Section */}
      <section id="agendamento" className="py-32 bg-luxury-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16 text-center reveal">
            <h2 className="font-display text-4xl md:text-6xl uppercase mb-6 tracking-tight">
              Marque o seu <span className="text-white/30">primeiro treino.</span>
            </h2>
          </div>
          
          <div className="reveal glass rounded-3xl overflow-hidden max-w-4xl mx-auto shadow-2xl">
            <iframe 
              src="https://calendly.com/andreavilasouza14/treino-experimental-15" 
              width="100%" 
              height="700" 
              frameBorder="0" 
              scrolling="no"
              title="Calendly Scheduling"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-white/30 text-[10px] uppercase tracking-[0.2em]">
        <div>
          © 2026 Silva Fitness. Todos os direitos reservados.
        </div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Termos</a>
          <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Cookies</a>
        </div>
        <div className="font-display text-sm tracking-tighter text-white/10">
          Silva Fitness Loures
        </div>
      </footer>
    </div>
  );
}
