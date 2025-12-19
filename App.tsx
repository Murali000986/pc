
import React, { useState, useEffect } from 'react';
import { ALL_PLANS, UPSELL_ADDONS, DISCORD_URL, WEB_DEV_DISCORD_URL, CATEGORIES } from './constants';
import { BillingCycle, HostingPlan, Category, PageState } from './types';
import Logo from './Logo';

const FeatureItem: React.FC<{ icon: string; text: string }> = ({ icon, text }) => (
  <div className="flex items-center space-x-2 text-sm text-gray-400 whitespace-nowrap">
    <i className={`fas ${icon} text-violet-400`}></i>
    <span>{text}</span>
  </div>
);

const PlanCard: React.FC<{ plan: HostingPlan; billing: BillingCycle; category: Category }> = ({ plan, billing, category }) => {
  const price = plan.prices[billing];
  
  const getThemeStyles = () => {
    switch (plan.theme) {
      case 'copper': return 'border-orange-500/30 shadow-orange-500/5 hover:border-orange-500/50';
      case 'iron': return 'border-slate-300/30 shadow-slate-300/5 hover:border-slate-300/50';
      case 'gold': return 'border-yellow-500/30 shadow-yellow-500/5 hover:border-yellow-500/50';
      case 'diamond': return 'border-cyan-400/30 shadow-cyan-400/5 hover:border-cyan-400/50';
      case 'netherite': return 'border-purple-900/40 shadow-purple-900/10 hover:border-purple-600/50';
      case 'samp-classic': return 'border-blue-500/20 shadow-blue-500/5 hover:border-blue-500/40';
      case 'samp-pro': return 'border-indigo-500/30 shadow-indigo-500/5 hover:border-indigo-500/50';
      case 'samp-elite': return 'border-violet-500/40 shadow-violet-500/10 hover:border-violet-500/60';
      default: return plan.highlight ? 'border-violet-500/50 brand-glow ring-1 ring-violet-500/20' : 'border-white/5';
    }
  };

  const getIconColor = () => {
    switch (plan.theme) {
      case 'copper': return 'text-orange-400';
      case 'iron': return 'text-slate-300';
      case 'gold': return 'text-yellow-400';
      case 'diamond': return 'text-cyan-400';
      case 'netherite': return 'text-purple-400';
      case 'samp-classic': return 'text-blue-400';
      case 'samp-pro': return 'text-indigo-400';
      case 'samp-elite': return 'text-violet-400';
      default: return 'text-violet-400';
    }
  };

  return (
    <div className={`relative flex flex-col p-6 glass rounded-2xl transition-all duration-300 hover:scale-[1.02] border ${getThemeStyles()} ${plan.highlight ? 'shadow-2xl' : ''}`}>
      {plan.highlight && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-gradient text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg z-10">
          Most Popular
        </span>
      )}
      
      <div className="mb-6">
        <h3 className={`text-xl font-bold mb-2 flex items-center gap-2 text-white`}>
          {category === 'samp' ? <i className="fas fa-car-side text-blue-500/80 text-sm"></i> : <i className="fas fa-cube text-violet-500/80 text-sm"></i>}
          {plan.name}
        </h3>
        <div className="flex items-baseline space-x-1">
          <span className="text-3xl font-extrabold text-white">₹{price.inr.toLocaleString()}</span>
          <span className="text-gray-400 text-sm">/ {billing === 'monthly' ? 'mo' : billing === 'quarterly' ? '3mo' : 'yr'}</span>
        </div>
        <p className="text-gray-500 text-xs mt-1">Approx. ${price.usd}</p>
        {price.savingsInr && (
          <div className="mt-2 text-green-400 text-[10px] font-bold uppercase tracking-tight">
            Save ₹{price.savingsInr} (${price.savingsUsd})
          </div>
        )}
      </div>

      <div className="flex-grow space-y-4 mb-8">
        <div className="flex items-start space-x-3">
          <div className={`p-1.5 rounded-lg bg-white/5 shrink-0`}>
            <i className={`fas fa-microchip ${getIconColor()} text-xs`}></i>
          </div>
          <div>
            <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">CPU</p>
            <p className="text-sm font-medium leading-tight text-gray-200">{plan.specs.cpu}</p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <div className={`p-1.5 rounded-lg bg-white/5 shrink-0`}>
            <i className={`fas fa-memory ${getIconColor()} text-xs`}></i>
          </div>
          <div>
            <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">RAM</p>
            <p className="text-sm font-medium leading-tight text-gray-200">{plan.specs.ram}</p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <div className={`p-1.5 rounded-lg bg-white/5 shrink-0`}>
            <i className={`fas fa-hard-drive ${getIconColor()} text-xs`}></i>
          </div>
          <div>
            <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">NVMe Storage</p>
            <p className="text-sm font-medium leading-tight text-gray-200">{plan.specs.storage}</p>
          </div>
        </div>
        {plan.specs.slots && (
          <div className="flex items-start space-x-3">
            <div className={`p-1.5 rounded-lg bg-white/5 shrink-0`}>
              <i className={`fas fa-users ${getIconColor()} text-xs`}></i>
            </div>
            <div>
              <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Player Slots</p>
              <p className="text-sm font-medium leading-tight text-gray-200">{plan.specs.slots} Slots</p>
            </div>
          </div>
        )}
        <div className="flex items-start space-x-3">
          <div className={`p-1.5 rounded-lg bg-white/5 shrink-0`}>
            <i className={`fas fa-star ${getIconColor()} text-xs`}></i>
          </div>
          <div>
            <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Extras</p>
            <p className="text-sm font-medium leading-tight text-gray-200">{plan.specs.ports} Ports & {plan.specs.backups} Backup</p>
          </div>
        </div>
      </div>

      <a 
        href={DISCORD_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-full py-3 px-4 rounded-xl font-bold text-center transition-all duration-200 shadow-lg ${plan.highlight ? 'bg-brand-gradient hover:opacity-90 text-white' : 'bg-white/10 hover:bg-white/20 text-white'}`}
      >
        Select Plan
      </a>
    </div>
  );
};

const Navbar: React.FC<{ setPage: (p: PageState) => void, currentPage: PageState }> = ({ setPage, currentPage }) => (
  <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5 px-6 py-4">
    <div className="max-w-7xl mx-auto flex items-center justify-between">
      <div 
        className="flex items-center space-x-4 cursor-pointer group" 
        onClick={() => setPage('home')}
      >
        <div className="flex items-center justify-center bg-gray-900/50 p-1 rounded-xl border border-white/5 shadow-inner overflow-hidden">
          <Logo className="w-10 h-10 md:w-11 md:h-11 transition-all group-hover:scale-110 duration-300 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]" />
        </div>
        <span className="text-2xl font-black tracking-tighter text-white">
          Pluto<span className="text-gradient"> Cloud</span>
        </span>
      </div>
      <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
        <button onClick={() => setPage('home')} className={`${currentPage === 'home' ? 'text-white' : 'text-gray-400'} hover:text-white transition-colors relative px-2 py-1`}>
          Home
          {currentPage === 'home' && <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-gradient rounded-full"></span>}
        </button>
        <button onClick={() => setPage('products')} className={`${currentPage === 'products' ? 'text-white' : 'text-gray-400'} hover:text-white transition-colors relative px-2 py-1`}>
          Products
          {currentPage === 'products' && <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-gradient rounded-full"></span>}
        </button>
        <button onClick={() => setPage('web-dev')} className={`${currentPage === 'web-dev' ? 'text-white' : 'text-gray-400'} hover:text-white transition-colors relative px-2 py-1`}>
          Web Dev
          {currentPage === 'web-dev' && <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-gradient rounded-full"></span>}
        </button>
        <button onClick={() => setPage('about')} className={`${currentPage === 'about' ? 'text-white' : 'text-gray-400'} hover:text-white transition-colors relative px-2 py-1`}>
          About
          {currentPage === 'about' && <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-gradient rounded-full"></span>}
        </button>
      </div>
      <a 
        href={DISCORD_URL}
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-brand-gradient text-white text-xs font-bold py-2.5 px-5 rounded-lg flex items-center space-x-2 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-violet-500/20"
      >
        <i className="fab fa-discord"></i>
        <span>Join Discord</span>
      </a>
    </div>
  </nav>
);

const HomeView: React.FC<{ onExplore: () => void, setPage: (p: PageState) => void }> = ({ onExplore, setPage }) => (
  <>
    {/* Hero Section */}
    <section className="pt-32 pb-20 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-violet-600/10 blur-[120px] rounded-full -z-10"></div>
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center space-x-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-1.5 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
          </span>
          <span className="text-violet-400 text-xs font-bold uppercase tracking-widest">Premium Hosting in India 🇮🇳</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tighter text-white">
          Fast • Secure • <span className="text-gradient">Affordable</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          High-performance game servers, bot hosting, and VPS solutions managed directly via Pluto Cloud. Experience 99.95% uptime with 1Gbps uplink in Mumbai and Germany.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button onClick={onExplore} className="w-full sm:w-auto px-10 py-4 bg-brand-gradient rounded-xl font-bold transition-all brand-glow hover:opacity-90 shadow-xl shadow-violet-500/20 text-white">
            Explore Plans
          </button>
          <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-10 py-4 glass rounded-xl font-bold transition-all flex items-center justify-center space-x-2 border-white/10 hover:bg-white/5 text-white">
            <i className="fab fa-discord"></i>
            <span>Enquire Now</span>
          </a>
        </div>
      </div>
    </section>

    {/* Featured Categories for Home */}
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">Our Specialized Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass p-8 rounded-3xl border border-white/5 hover:border-violet-500/20 transition-all group">
            <div className="w-14 h-14 bg-violet-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <i className="fas fa-cube text-2xl text-violet-500"></i>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Minecraft</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">Optimized for Java and Bedrock with high-frequency CPU performance.</p>
            <button onClick={onExplore} className="text-violet-400 font-bold flex items-center space-x-2 hover:text-violet-300">
              <span>View Plans</span>
              <i className="fas fa-arrow-right text-xs"></i>
            </button>
          </div>
          <div className="glass p-8 rounded-3xl border border-white/5 hover:border-blue-500/20 transition-all group">
            <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <i className="fas fa-car-side text-2xl text-blue-500"></i>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">SA-MP</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">Ultra-low latency for San Andreas Multiplayer with Pterodactyl panel.</p>
            <button onClick={onExplore} className="text-blue-400 font-bold flex items-center space-x-2 hover:text-blue-300">
              <span>View Plans</span>
              <i className="fas fa-arrow-right text-xs"></i>
            </button>
          </div>
          <div className="glass p-8 rounded-3xl border border-white/5 hover:border-cyan-500/20 transition-all group">
            <div className="w-14 h-14 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <i className="fas fa-server text-2xl text-cyan-500"></i>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Cloud VPS</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">Full root access virtual servers in Mumbai and Europe.</p>
            <button onClick={onExplore} className="text-cyan-400 font-bold flex items-center space-x-2 hover:text-cyan-300">
              <span>View Plans</span>
              <i className="fas fa-arrow-right text-xs"></i>
            </button>
          </div>
          <div className="glass p-8 rounded-3xl border border-white/5 hover:border-purple-500/20 transition-all group">
            <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <i className="fas fa-code text-2xl text-purple-500"></i>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Web Dev</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">Custom websites, Discord dashboards, and full-stack solutions.</p>
            <button onClick={() => setPage('web-dev')} className="text-purple-400 font-bold flex items-center space-x-2 hover:text-purple-300">
              <span>Explore Dev</span>
              <i className="fas fa-arrow-right text-xs"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  </>
);

const ProductsView: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('minecraft');
  const [billing, setBilling] = useState<BillingCycle>('monthly');

  const activeCategoryInfo = CATEGORIES.find(c => c.id === activeCategory);

  const filteredAddons = UPSELL_ADDONS.filter(addon => 
    !addon.category || addon.category.includes(activeCategory)
  );

  const getLocationText = () => {
    if (activeCategory === 'samp') return 'Mumbai / Singapore / Europe';
    if (activeCategory === 'vps' || activeCategory === 'bot') return 'Mumbai, India';
    return 'Mumbai / Germany';
  };

  const getPanelText = () => {
    if (activeCategory === 'samp') return 'Pterodactyl Panel';
    if (activeCategory === 'vps') return 'KVM / LXC Virtualization';
    if (activeCategory === 'bot') return 'Full FTP & Auto Backup';
    return 'Premium Game Panel';
  };

  return (
    <section className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight text-white">Hosting Solutions</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">Select a service to see our performance-optimized pricing tiers.</p>
        </div>

        {/* Category Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center space-x-2 px-5 py-3 rounded-xl text-sm font-bold transition-all border ${
                activeCategory === cat.id 
                ? 'bg-brand-gradient border-transparent text-white shadow-lg scale-105' 
                : 'glass border-white/5 text-gray-400 hover:text-white hover:border-white/10'
              }`}
            >
              <i className={`fas ${cat.icon}`}></i>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Section Header for Selected Game */}
        <div className="mb-12 flex flex-col md:flex-row items-center justify-between gap-6 glass p-6 rounded-2xl border border-white/5">
          <div className="flex items-center space-x-4">
            <div className={`w-12 h-12 ${activeCategory === 'samp' ? 'bg-blue-500/20 text-blue-400' : 'bg-violet-500/20 text-violet-400'} rounded-xl flex items-center justify-center text-xl shadow-inner`}>
              <i className={`fas ${activeCategoryInfo?.icon}`}></i>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">{activeCategoryInfo?.name} Hosting</h2>
              <div className="flex items-center space-x-3 text-xs text-gray-500 mt-1">
                <span className="flex items-center"><i className="fas fa-map-marker-alt mr-1"></i> {getLocationText()}</span>
                <span className="flex items-center"><i className="fas fa-microchip mr-1"></i> {getPanelText()}</span>
              </div>
            </div>
          </div>
          
          <div className="inline-flex p-1 bg-white/5 border border-white/5 rounded-xl shadow-inner shrink-0">
            {(['monthly', 'quarterly', 'yearly'] as BillingCycle[]).map((cycle) => (
              <button 
                key={cycle}
                onClick={() => setBilling(cycle)}
                className={`px-6 py-2 rounded-lg text-xs font-bold transition-all capitalize ${billing === cycle ? 'bg-brand-gradient text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
              >
                {cycle}
              </button>
            ))}
          </div>
        </div>

        {/* Plan Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {ALL_PLANS[activeCategory].map((plan) => (
            <PlanCard key={plan.id} plan={plan} billing={billing} category={activeCategory} />
          ))}
        </div>

        {/* Add-ons for this section */}
        <div className="mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold mb-2 text-white">Service Add-ons</h2>
              <p className="text-gray-400">Expand your capabilities with these optional extras.</p>
            </div>
            <div className="text-violet-400 text-xs font-bold uppercase tracking-widest bg-violet-500/10 px-4 py-2 rounded-lg border border-violet-500/20 shrink-0">
              <i className="fas fa-plus-circle mr-2"></i>
              Available Now
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredAddons.map((addon, i) => (
              <div key={i} className="flex items-center justify-between p-4 glass rounded-xl border border-white/5 hover:border-violet-500/30 transition-all group">
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 ${activeCategory === 'samp' ? 'bg-blue-500/10 text-blue-400' : 'bg-violet-500/10 text-violet-400'} rounded-lg flex items-center justify-center group-hover:bg-brand-gradient group-hover:text-white transition-all shadow-sm`}>
                    <i className={`fas ${addon.icon}`}></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-200">{addon.name}</h4>
                    <p className="text-xs text-gray-500">{addon.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm font-bold text-white">{addon.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const WebDevView: React.FC = () => (
  <section className="pt-32 pb-24 px-6 min-h-screen">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-1.5 mb-8">
          <i className="fas fa-code text-purple-400 text-xs"></i>
          <span className="text-purple-400 text-xs font-bold uppercase tracking-widest">Custom Digital Solutions</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-white">
          Creative Code • <span className="text-gradient">Expert Design</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          From high-performance landing pages to complex web applications and Discord integrations. We build the future of your digital presence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
        {[
          { icon: 'fa-user-tie', title: 'Portfolios', desc: 'Fast, SEO-optimized personal websites for professionals and creators.' },
          { icon: 'fa-cart-shopping', title: 'E-Commerce', desc: 'Scalable online stores with secure payment integration and management.' },
          { icon: 'fa-robot', title: 'Discord Dashboards', desc: 'Custom web interfaces to manage your Discord bots and community data.' },
          { icon: 'fa-building', title: 'Corporate Sites', desc: 'Professional, high-conversion landing pages for your business or startup.' }
        ].map((service, i) => (
          <div key={i} className="glass p-8 rounded-3xl border border-white/5 hover:border-purple-500/30 transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
               <i className={`fas ${service.icon} text-6xl`}></i>
            </div>
            <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform">
              <i className={`fas ${service.icon} text-xl`}></i>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>

      {/* Tech Stack */}
      <div className="glass rounded-[40px] p-8 md:p-12 border border-white/5 text-center mb-24">
        <h2 className="text-2xl font-bold mb-8 text-white">Our Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
          <div className="flex flex-col items-center"><i className="fab fa-react text-4xl text-cyan-400 mb-2"></i><span className="text-[10px] font-bold tracking-widest text-gray-500">REACT</span></div>
          <div className="flex flex-col items-center"><i className="fab fa-node-js text-4xl text-green-500 mb-2"></i><span className="text-[10px] font-bold tracking-widest text-gray-500">NODE.JS</span></div>
          <div className="flex flex-col items-center"><i className="fab fa-js text-4xl text-yellow-400 mb-2"></i><span className="text-[10px] font-bold tracking-widest text-gray-500">JS / TS</span></div>
          <div className="flex flex-col items-center"><i className="fab fa-css3-alt text-4xl text-blue-500 mb-2"></i><span className="text-[10px] font-bold tracking-widest text-gray-500">TAILWIND</span></div>
          <div className="flex flex-col items-center"><i className="fas fa-database text-4xl text-orange-400 mb-2"></i><span className="text-[10px] font-bold tracking-widest text-gray-500">MONGODB</span></div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="glass rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden border border-purple-500/20 brand-glow">
        <div className="absolute top-0 left-0 w-full h-full bg-brand-gradient opacity-[0.03]"></div>
        <h2 className="text-3xl md:text-5xl font-black mb-6 text-white tracking-tight">Ready to start your <span className="text-gradient">Project?</span></h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-10 text-lg leading-relaxed">
          Get a free consultation and quote for your web development needs. We're active on Discord and ready to chat.
        </p>
        <a 
          href={WEB_DEV_DISCORD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-3 bg-brand-gradient text-white px-10 py-5 rounded-2xl font-black transition-all hover:scale-105 shadow-2xl shadow-violet-500/40"
        >
          <i className="fab fa-discord text-xl"></i>
          <span>Contact on Discord</span>
        </a>
      </div>
    </div>
  </section>
);

const AboutView: React.FC = () => (
  <section className="pt-40 pb-24 px-6 min-h-screen relative">
    <div className="absolute top-40 right-10 w-64 h-64 bg-violet-600/5 blur-[120px] rounded-full -z-10"></div>
    <div className="max-w-4xl mx-auto space-y-24">
      <div className="glass rounded-[40px] p-8 md:p-16 relative overflow-hidden border border-white/5 text-center md:text-left">
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-violet-600/10 blur-[100px] rounded-full"></div>
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-600/10 blur-[100px] rounded-full"></div>
        <div className="relative z-10">
          <div className="mb-10 flex justify-center md:justify-start">
             <div className="bg-gray-900/40 p-3 rounded-2xl border border-white/5 backdrop-blur-md shadow-2xl inline-block overflow-hidden">
               <Logo className="w-20 h-20" />
             </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-white">
            The <span className="text-gradient">Pluto Cloud</span> Vision
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Pluto Cloud is India's rising star in high-performance game hosting. We focus on low latency, reliable uptimes, and affordable pricing for communities of all sizes.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed mb-12">
            Whether you're running a Minecraft survival realm or a high-capacity SA-MP roleplay server, our EPYC-powered hardware ensures a lag-free experience.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 glass rounded-3xl border border-white/5 hover:border-violet-500/20 transition-all text-left">
              <h4 className="font-bold text-violet-400 mb-2 uppercase tracking-widest text-[10px]">Infrastructure</h4>
              <p className="text-white font-medium">Global Locations 🌍</p>
              <p className="text-gray-500 text-xs mt-1">Mumbai, Singapore, Germany, Europe.</p>
            </div>
            <div className="p-6 glass rounded-3xl border border-white/5 hover:border-violet-500/20 transition-all text-left">
              <h4 className="font-bold text-violet-400 mb-2 uppercase tracking-widest text-[10px]">Uptime SLA</h4>
              <p className="text-white font-medium">99.95% Network Availability</p>
              <p className="text-gray-500 text-xs mt-1">Reliable 1Gbps uplinks and Anti-DDoS.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const App: React.FC = () => {
  const [page, setPage] = useState<PageState>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <div className="min-h-screen bg-[#030712] text-gray-100 selection:bg-violet-500/30">
      <Navbar setPage={setPage} currentPage={page} />

      <main className="transition-all duration-300">
        {page === 'home' && <HomeView onExplore={() => setPage('products')} setPage={setPage} />}
        {page === 'products' && <ProductsView />}
        {page === 'web-dev' && <WebDevView />}
        {page === 'about' && <AboutView />}
      </main>

      <footer className="py-20 border-t border-white/5 px-6 mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1 lg:col-span-2 text-center md:text-left">
            <div className="flex items-center space-x-4 mb-6 justify-center md:justify-start">
              <div className="bg-gray-900/30 p-1.5 rounded-lg border border-white/5 overflow-hidden">
                <Logo className="w-10 h-10" />
              </div>
              <span className="text-3xl font-extrabold tracking-tight text-white">
                Pluto<span className="text-gradient"> Cloud</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm max-w-sm mx-auto md:mx-0 leading-relaxed mb-8">
              High-frequency hosting for gamers, by gamers. Providing stable servers in India and beyond.
            </p>
            <div className="flex justify-center md:justify-start space-x-6 text-2xl">
              <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-violet-400 transition-all hover:scale-110">
                <i className="fab fa-discord"></i>
              </a>
              <a href="https://ateex.cloud/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-white transition-all hover:scale-110">
                <i className="fas fa-globe"></i>
              </a>
            </div>
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-widest opacity-60">Services</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><button onClick={() => {setPage('products');}} className="hover:text-violet-400 transition-colors">Minecraft Hosting</button></li>
              <li><button onClick={() => {setPage('products');}} className="hover:text-violet-400 transition-colors">SA-MP Hosting</button></li>
              <li><button onClick={() => {setPage('web-dev');}} className="hover:text-violet-400 transition-colors">Web Development</button></li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-widest opacity-60">Company</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><button onClick={() => setPage('about')} className="hover:text-violet-400 transition-colors">About Us</button></li>
              <li><a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 transition-colors">Contact Support</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-600 text-[10px] uppercase font-black tracking-widest">Proudly Hosted in India 🇮🇳</p>
          <p className="text-gray-500 text-xs">© {new Date().getFullYear()} Pluto Cloud. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
