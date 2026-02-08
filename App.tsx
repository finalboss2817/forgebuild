
import React, { useState, useEffect } from 'react';
import { BUILDS } from './constants';
import { PCBuild } from './types';

const App: React.FC = () => {
  const [selectedBudget, setSelectedBudget] = useState<number>(120000);
  const [filteredBuilds, setFilteredBuilds] = useState<PCBuild[]>(BUILDS);

  useEffect(() => {
    const filtered = BUILDS.filter(b => Math.abs(b.priceBracket - selectedBudget) < 60000 || b.priceBracket <= selectedBudget);
    setFilteredBuilds(filtered.sort((a,b) => b.priceBracket - a.priceBracket));
  }, [selectedBudget]);

  const openWhatsApp = (buildName?: string) => {
    const phone = "919820567505";
    const text = buildName 
      ? `Hi Meena Technologies, I'm interested in the "${buildName}" PC build. Can you provide a final quote?`
      : "Hi Meena Technologies, I want to discuss a custom PC build.";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass px-6 py-4 flex justify-between items-center border-b border-white/5">
        <a href="#hero" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center font-black text-xl italic shadow-[0_0_15px_rgba(234,88,12,0.4)]">F</div>
          <div>
            <h1 className="text-2xl font-extrabold tracking-tighter uppercase italic">FORGE</h1>
            <p className="text-[10px] text-gray-400 font-bold tracking-widest uppercase">By Meena Technologies</p>
          </div>
        </a>
        <div className="hidden md:flex gap-8 text-sm font-semibold uppercase tracking-widest text-gray-300">
          <a href="#builds" className="hover:text-orange-500 transition-colors">Curated Builds</a>
          <a href="#components" className="hover:text-orange-500 transition-colors">Components</a>
          <a href="#gallery" className="hover:text-orange-500 transition-colors">Gallery</a>
        </div>
        <button 
          onClick={() => openWhatsApp()}
          className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-orange-600 hover:text-white transition-all shadow-lg active:scale-95"
        >
          GET QUOTE
        </button>
      </nav>

      {/* Hero Section */}
      <header id="hero" className="relative py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-orange-600/10 rounded-full blur-[160px]"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-1 rounded-full border border-orange-500/30 bg-orange-500/5 text-orange-500 text-[10px] font-bold uppercase tracking-widest animate-pulse">
            Premium Hardware Solutions
          </div>
          <h2 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter gradient-text">
            FORGE YOUR <br/> ULTIMATE PC.
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Meena Technologies brings you world-class assembly and curated component selection for gaming, creative work, and professional workstations.
          </p>
          
          <div className="flex flex-col md:row gap-4 justify-center items-center">
             <div className="bg-neutral-900/50 backdrop-blur-md p-8 rounded-3xl border border-neutral-800 w-full max-w-xl shadow-2xl">
                <label className="block text-xs font-bold text-gray-500 uppercase mb-6 tracking-widest">Adjust Your Budget Preference (₹)</label>
                <input 
                  type="range" 
                  min="25000" 
                  max="300000" 
                  step="5000"
                  value={selectedBudget}
                  onChange={(e) => setSelectedBudget(parseInt(e.target.value))}
                  className="w-full accent-orange-600 mb-6 h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between items-center">
                  <div className="text-left">
                    <span className="block text-[10px] text-gray-500 font-bold uppercase mb-1">Targeting Approx</span>
                    <span className="mono text-4xl font-black text-white">₹{selectedBudget.toLocaleString()}</span>
                  </div>
                  <button 
                    onClick={() => openWhatsApp()}
                    className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-3 rounded-2xl font-bold transition-all shadow-xl"
                  >
                    CUSTOM REQUEST
                  </button>
                </div>
             </div>
          </div>
        </div>
      </header>

      {/* Builds Section */}
      <main id="builds" className="max-w-7xl mx-auto w-full px-6 py-24 scroll-mt-20">
        <div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-12">
          <div>
            <h3 className="text-4xl font-black tracking-tighter mb-2 uppercase">MASTERPIECE CONFIGS</h3>
            <p className="text-gray-500 max-w-md">Every build is stress-tested and optimized for peak thermal performance by our lead engineers.</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">{filteredBuilds.length} CONFIGURATIONS AVAILABLE</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBuilds.map((build) => (
            <div 
              key={build.id}
              className="group glass rounded-[2.5rem] overflow-hidden border border-neutral-800 hover:border-orange-600/40 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col"
            >
              <div className="h-64 overflow-hidden relative">
                <img src={build.image} alt={build.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute top-6 left-6 bg-orange-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-white shadow-lg">
                  {build.usage}
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="mb-4">
                  <h4 className="text-2xl font-black mb-3 group-hover:text-orange-500 transition-colors uppercase tracking-tight">{build.title}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed mb-6 line-clamp-2">{build.description}</p>
                </div>
                
                <div className="space-y-3 mb-8 flex-1">
                  {build.components.map((comp, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-[11px] font-bold tracking-tight">
                      <span className="w-12 text-gray-600 uppercase">{comp.category}</span>
                      <div className="h-px flex-1 bg-neutral-800"></div>
                      <span className="text-gray-300">{comp.name}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-8 border-t border-neutral-800">
                  <div>
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-tighter">Turnkey Pricing</p>
                    <p className="text-2xl font-black text-white">₹{build.totalPrice.toLocaleString()}</p>
                  </div>
                  <button 
                    onClick={() => openWhatsApp(build.title)}
                    className="px-8 py-3.5 bg-neutral-800 group-hover:bg-white group-hover:text-black rounded-2xl text-xs font-black uppercase tracking-widest transition-all shadow-lg active:scale-95"
                  >
                    GET QUOTE
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Components Section */}
      <section id="components" className="bg-neutral-900/30 py-24 px-6 border-y border-neutral-800 scroll-mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-4xl font-black tracking-tighter mb-6 uppercase">ONLY THE FINEST SILICON</h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              At Meena Technologies, we don't just pick parts. We curate hardware that works in perfect synergy. Each component is vetted for:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Thermal Efficiency', desc: 'Optimal cooling solutions for the Indian climate.' },
                { title: 'Brand Reliability', desc: 'Partnering only with top-tier manufacturers.' },
                { title: 'Future-Proofing', desc: 'Architected to last and upgrade with ease.' },
                { title: 'Aesthetic Unity', desc: 'Matching colors and lighting for a clean look.' }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-black/40 rounded-2xl border border-neutral-800">
                  <h5 className="font-bold text-orange-500 mb-2">{item.title}</h5>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-orange-600/20 rounded-[3rem] blur-2xl group-hover:bg-orange-600/30 transition-all"></div>
            <img src="https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&q=80&w=1000" alt="Hardware" className="relative rounded-[2rem] border border-neutral-800 shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-6 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-black tracking-tighter mb-4 uppercase">RECENT FORGES</h3>
            <p className="text-gray-500">Real machines built for real champions in Mumbai.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             <div className="h-64 rounded-3xl overflow-hidden group border border-neutral-800">
                <img src="https://picsum.photos/seed/forge1/800/800" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="PC 1" />
             </div>
             <div className="h-64 rounded-3xl overflow-hidden group border border-neutral-800 md:row-span-2 md:h-full">
                <img src="https://picsum.photos/seed/forge2/800/1200" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="PC 2" />
             </div>
             <div className="h-64 rounded-3xl overflow-hidden group border border-neutral-800">
                <img src="https://picsum.photos/seed/forge3/800/800" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="PC 3" />
             </div>
             <div className="h-64 rounded-3xl overflow-hidden group border border-neutral-800">
                <img src="https://picsum.photos/seed/forge4/800/800" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="PC 4" />
             </div>
             <div className="h-64 rounded-3xl overflow-hidden group border border-neutral-800">
                <img src="https://picsum.photos/seed/forge5/800/800" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="PC 5" />
             </div>
             <div className="h-64 rounded-3xl overflow-hidden group border border-neutral-800 md:col-span-2">
                <img src="https://picsum.photos/seed/forge6/1200/800" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="PC 6" />
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-950 py-24 px-6 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center font-black text-xl italic">F</div>
              <h1 className="text-2xl font-extrabold tracking-tighter uppercase italic">FORGE</h1>
            </div>
            <p className="text-gray-400 leading-relaxed mb-10 max-w-sm">
              Premium custom PC builds in Mumbai. We prioritize performance, aesthetics, and unmatched reliability for every client.
            </p>
            <div className="space-y-4">
               <div className="flex items-start gap-4 text-sm text-gray-400">
                  <div className="w-5 h-5 mt-1 opacity-50">📍</div>
                  <p>Kandivali East, Mumbai 400101, Maharashtra, India</p>
               </div>
               <div className="flex items-center gap-4 text-sm text-gray-400">
                  <div className="w-5 h-5 opacity-50">✉️</div>
                  <a href="mailto:trivedimanish2803@gmail.com" className="hover:text-white">trivedimanish2803@gmail.com</a>
               </div>
               <div className="flex items-center gap-4 text-sm text-gray-400">
                  <div className="w-5 h-5 opacity-50">💬</div>
                  <a onClick={() => openWhatsApp()} className="hover:text-white cursor-pointer">+91 98205 67505</a>
               </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <h5 className="font-black text-xs uppercase tracking-[0.2em] text-white mb-8">Service Areas</h5>
            <ul className="space-y-5 text-sm font-medium text-gray-500">
              <li className="hover:text-orange-500 cursor-pointer transition-colors">Extreme Gaming PCs</li>
              <li className="hover:text-orange-500 cursor-pointer transition-colors">AI & ML Workstations</li>
              <li className="hover:text-orange-500 cursor-pointer transition-colors">Video Editing Rigs</li>
              <li className="hover:text-orange-500 cursor-pointer transition-colors">Server Maintenance</li>
              <li className="hover:text-orange-500 cursor-pointer transition-colors">Home Office Setup</li>
            </ul>
          </div>

          <div className="md:col-span-4 bg-neutral-900/50 p-8 rounded-[2rem] border border-neutral-800">
            <h5 className="font-black text-xs uppercase tracking-[0.2em] text-white mb-4">Start Your Build</h5>
            <p className="text-sm text-gray-400 mb-8">Ready to move forward? Chat with our lead builder directly on WhatsApp for a custom invoice.</p>
            <button 
              onClick={() => openWhatsApp()}
              className="w-full py-4 bg-orange-600 hover:bg-orange-500 text-white font-black uppercase tracking-widest text-xs rounded-xl transition-all shadow-[0_10px_30px_rgba(234,88,12,0.2)]"
            >
              CHAT WITH US NOW
            </button>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">© 2024 Meena Technologies. Engineered in Mumbai.</p>
          <div className="flex gap-8 text-[10px] font-bold text-gray-600 uppercase tracking-widest">
            <span className="hover:text-gray-400 cursor-pointer">Quality Guarantee</span>
            <span className="hover:text-gray-400 cursor-pointer">Warranty Portal</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
