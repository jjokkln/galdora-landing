"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { PartnersSlideshow } from "@/components/ui/PartnersSlideshow";
import { ValueCard } from "@/components/ui/ValueCard";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { FadeInUp, FadeInLeft, FadeInRight } from "@/components/ui/scroll-animation";
import { OfficeSlideshow } from "@/components/ui/OfficeSlideshow";
import { CircularServices } from "@/components/ui/CircularServices";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Aurora Background Hero Section */}
      <AuroraBackground className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative">
        {/* Header */}
        <header className="absolute top-0 left-0 right-0 z-10">
          <nav className="container mx-auto px-6 py-8">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center space-x-4">
                <Image
                  src="/Galdora Logo.png"
                  alt="Galdora Logo"
                  width={70}
                  height={70}
                  className="h-16 w-auto"
                />
                <div className="text-4xl font-bold text-white">
                  Galdora
                </div>
              </div>
              
              {/* Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <SocialLinks />
                <Link 
                  href="https://www.galdora.de" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  Website
                </Link>
              </div>
            </div>
          </nav>
        </header>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4 h-screen"
        >
          <div className="container mx-auto text-center">
            <div className="max-w-5xl mx-auto">
              {/* Main Heading */}
              <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-8">
                <div className="flex-shrink-0">
                  <Image
                    src="/Galdora Logo.png"
                    alt="Galdora Logo"
                    width={160}
                    height={160}
                    className="h-32 lg:h-40 w-auto"
                  />
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight text-center lg:text-left">
                  Personalmanagement
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    neu gedacht
                  </span>
                </h1>
              </div>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Persönliche Beratung trifft auf moderne Technologie
              </p>

              {/* CTA Button */}
              <div className="flex flex-col gap-4 mb-16">
                <Link 
                  href="https://galdora.de/kontakt" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="w-full">
                    Unsere originale Website
                  </Button>
                </Link>
              </div>

              {/* Location Info */}
              <div className="text-gray-400 text-lg">
                Mönchengladbach • Volksgartenstr. 85-89
              </div>
            </div>
          </div>
        </motion.div>
      </AuroraBackground>

      {/* Rest of the page with regular background */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
        
        {/* Leistungen Section */}
        <section className="py-24 bg-black/10">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              {/* Section Title */}
              <FadeInUp>
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Leistungen
                  </h2>
                  <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    Umfassende Personaldienstleistungen für Ihren Erfolg
                  </p>
                </div>
              </FadeInUp>

              {/* Circular Services Component */}
              <FadeInUp delay={0.2}>
                <CircularServices autoplay={true} />
              </FadeInUp>
            </div>
          </div>
        </section>
        
        {/* CV Converter Section */}
        <section className="py-24 bg-black/20">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Content */}
                <FadeInLeft>
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        KI-Powered CV Converter
                      </h2>
                      <p className="text-xl text-gray-300 mb-8">
                        Verwandeln Sie Ihren Lebenslauf in unsere professionellen Profilvorlagen mit künstlicher Intelligenz
                      </p>
                    </div>
                    
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                      <div className="space-y-6">
                        <FadeInLeft delay={0.2}>
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                              </svg>
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-white mb-1">Upload</h3>
                              <p className="text-gray-400 text-sm">Laden Sie Ihren aktuellen Lebenslauf hoch</p>
                            </div>
                          </div>
                        </FadeInLeft>
                        
                        <FadeInLeft delay={0.4}>
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                              </svg>
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-white mb-1">KI-Konvertierung</h3>
                              <p className="text-gray-400 text-sm">Unsere KI analysiert und strukturiert Ihre Daten</p>
                            </div>
                          </div>
                        </FadeInLeft>
                        
                        <FadeInLeft delay={0.6}>
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-white mb-1">Download</h3>
                              <p className="text-gray-400 text-sm">Erhalten Sie Ihr optimiertes Profil</p>
                            </div>
                          </div>
                        </FadeInLeft>
                      </div>
                    </div>
                    
                    <FadeInLeft delay={0.8}>
                      <Link 
                        href="https://galdora.streamlit.app" 
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-4 px-8 text-lg transition-all duration-300 transform hover:scale-105">
                          CV Converter jetzt testen
                        </Button>
                      </Link>
                    </FadeInLeft>
                  </div>
                </FadeInLeft>

                {/* Right Column - Converter Preview Image */}
                <FadeInRight delay={0.6}>
                  <div className="relative">
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                      <Image
                        src="/converter-vorschau.png"
                        alt="CV Converter Vorschau"
                        width={600}
                        height={400}
                        className="w-full h-auto rounded-xl object-cover"
                        priority
                      />
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl"></div>
                    <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full blur-xl"></div>
                  </div>
                </FadeInRight>
              </div>
            </div>
          </div>
        </section>

        {/* Impressionen Section */}
        <section className="py-24 bg-black/10">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <FadeInUp>
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Impressionen
                  </h2>
                  <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    Einblicke in unsere Büroräume und Arbeitsatmosphäre
                  </p>
                </div>
              </FadeInUp>
              
              {/* Office Slideshow */}
              <OfficeSlideshow />
            </div>
          </div>
        </section>

        {/* Bewerberprozess - 3 Schritte */}
        <section className="py-24 bg-black/5">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              {/* Section Title */}
              <FadeInUp>
                <div className="text-center mb-20">
                  <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                    Ihr Weg zum Traumjob
                  </h2>
                  <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    Mit unserer bewährten 3-Schritt-Methode bringen wir Sie schnell und effizient zu Ihrer neuen beruflichen Zukunft
                  </p>
                </div>
              </FadeInUp>

              {/* Steps */}
              <div className="relative">
                {/* Connection Line */}
                <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-white/20 to-transparent hidden lg:block"></div>
                
                <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
                  {/* Schritt 1 */}
                  <FadeInLeft delay={0.2}>
                    <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105">
                      {/* Step Number */}
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold border-4 border-slate-900">
                          1
                        </div>
                      </div>
                      
                      <div className="pt-8 text-center">
                        <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                          <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Erstberatung</h3>
                        <p className="text-gray-300 leading-relaxed text-lg">
                          Kostenlose persönliche Beratung zur Analyse Ihrer Qualifikationen und Wünsche. 
                          Wir lernen Sie kennen und verstehen Ihre beruflichen Ziele.
                        </p>
                        <div className="mt-6 text-blue-400 font-semibold">
                          ⏱️ 30-45 Minuten
                        </div>
                      </div>
                    </div>
                  </FadeInLeft>

                  {/* Schritt 2 */}
                  <FadeInUp delay={0.4}>
                    <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105">
                      {/* Step Number */}
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold border-4 border-slate-900">
                          2
                        </div>
                      </div>
                      
                      <div className="pt-8 text-center">
                        <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                          <svg className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">KI-Matching</h3>
                        <p className="text-gray-300 leading-relaxed text-lg">
                          Unser KI-gestütztes System findet passende Stellenangebote in unserem Netzwerk. 
                          Präzise Auswahl basierend auf Ihren Fähigkeiten und Präferenzen.
                        </p>
                        <div className="mt-6 text-purple-400 font-semibold">
                          🎯 24-48 Stunden
                        </div>
                      </div>
                    </div>
                  </FadeInUp>

                  {/* Schritt 3 */}
                  <FadeInRight delay={0.6}>
                    <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105">
                      {/* Step Number */}
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold border-4 border-slate-900">
                          3
                        </div>
                      </div>
                      
                      <div className="pt-8 text-center">
                        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                          <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Erfolgreiche Vermittlung</h3>
                        <p className="text-gray-300 leading-relaxed text-lg">
                          Persönliche Begleitung durch den gesamten Bewerbungsprozess bis hin zur 
                          erfolgreichen Stellenvermittlung und darüber hinaus.
                        </p>
                        <div className="mt-6 text-green-400 font-semibold">
                          🚀 Ongoing Support
                        </div>
                      </div>
                    </div>
                  </FadeInRight>
                </div>
              </div>

              {/* CTA */}
              <FadeInUp delay={0.8}>
                <div className="text-center mt-20">
                  <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl p-8 border border-white/10 backdrop-blur-sm mb-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      Bereit für Ihren Traumjob?
                    </h3>
                    <p className="text-gray-300 mb-8 text-lg">
                      Starten Sie noch heute Ihren Weg in eine erfolgreiche berufliche Zukunft
                    </p>
                    <Link 
                      href="https://www.galdora.de/fur-bewerber" 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="lg" className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold py-4 px-12 text-xl transition-all duration-300 transform hover:scale-105">
                        Bewerberprozess starten →
                      </Button>
                    </Link>
                  </div>
                </div>
              </FadeInUp>
            </div>
          </div>
        </section>

         {/* Values Section */}
         <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              {/* Section Title */}
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Unsere Werte
                </h2>
              </div>

              {/* Values Grid */}
              <div className="grid md:grid-cols-3 gap-8">
                <ValueCard
                  icon={
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  }
                  title="Persönliche Beratung"
                  description="Individuelle Lösungen durch direkten, persönlichen Kontakt und maßgeschneiderte Betreuung."
                />

                <ValueCard
                  icon={
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  }
                  title="Modernisierung"
                  description="Innovative Ansätze und moderne Methoden für effiziente Personalvermittlung."
                />

                <ValueCard
                  icon={
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  }
                  title="KI-Integration"
                  description="Künstliche Intelligenz unterstützt präzise Matching-Prozesse für optimale Ergebnisse."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-24 bg-black/20">
          <div className="w-full">
            <div className="container mx-auto px-6 mb-16">
              <div className="max-w-6xl mx-auto">
                {/* Section Title */}
                <div className="text-center">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Unsere Partner
                  </h2>
                  <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    Vertrauen führender Unternehmen
                  </p>
                </div>
              </div>
            </div>

            {/* Partners Slideshow - Full Width */}
            <PartnersSlideshow />
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Bereit für den nächsten Schritt?
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Lassen Sie uns gemeinsam Ihre Personalstrategie optimieren
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button size="lg">
                  Beratungstermin vereinbaren
                </Button>
                <Link 
                  href="https://www.galdora.de" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="lg" className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 border-2 border-purple-400 text-purple-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 shadow-lg shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 font-bold text-lg px-8 py-3">
                    Mehr erfahren
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 py-12">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              {/* Logo */}
              <div className="flex items-center space-x-4">
                <Image
                  src="/Galdora Logo.png"
                  alt="Galdora Logo"
                  width={40}
                  height={40}
                  className="h-10 w-auto"
                />
                <div className="text-2xl font-bold text-white">
                  Galdora Personalmanagement
                </div>
              </div>

              {/* Social Links */}
              <SocialLinks variant="footer" />
            </div>

            {/* Bottom Section */}
            <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-center md:text-left">
                <p>Volksgartenstr. 85-89, Mönchengladbach</p>
                <p className="mt-1">© 2024 Galdora Personalmanagement. Alle Rechte vorbehalten.</p>
              </div>
              
              <div className="flex space-x-6">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Datenschutz
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Impressum
                </Link>
                <Link href="https://www.galdora.de" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  Hauptwebsite
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
