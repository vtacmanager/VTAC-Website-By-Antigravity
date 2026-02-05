import React from 'react';
import { SectionWrapper, CTASection, GradientBackground } from '../components/UI.tsx';
import {
  Trophy,
  Users,
  Target,
  Zap,
  Smartphone,
  Wifi,
  Monitor,
  Layers,
  Activity,
  Video,
  Scan,
  Gamepad2,
  Globe,
  Clock,
  TrendingUp,
  ChevronRight
} from 'lucide-react';

const Football: React.FC = () => {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      {/* SECTION 1: HERO SECTION (Football Intelligence) */}
      <header className="relative py-24 md:py-32 overflow-hidden px-6">
        <GradientBackground />

        {/* Background Image / Texture */}
        <div className="absolute inset-0 z-0">
          {/* Placeholder for Stadium/Pitch Background */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522778119026-d647f0565c6a?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center space-x-3 px-6 py-2 rounded-full glass-card text-green-400 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] border border-green-500/20 shadow-[0_0_20px_rgba(34,197,94,0.2)]">
            <Globe className="w-3 h-3 md:w-4 md:h-4" />
            <span>WORLD-FIRST REMOTE INTERACTIVE FOOTBALL TRAINING</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.9] text-white">
            DOMINATE <br />
            THE 5G PITCH <br />
            <span className="gradient-text box-decoration-clone pr-6" style={{ backgroundImage: 'linear-gradient(135deg, #16a34a 0%, #4ade80 40%, #ffffff 70%, #3b82f6 100%)' }}>FROM ANYWHERE</span>
          </h1>

          <p className="text-lg md:text-xl font-medium text-slate-400 uppercase leading-relaxed max-w-4xl mx-auto border-l-4 border-green-500 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
            Take your tactical briefing beyond the white board. VTAC MANAGER delivers the world’s first multiplayer tactical engine designed for the speed and complexity of modern football.
          </p>
        </div>
      </header>

      {/* SECTION 2: THE TACTICAL EDGE */}
      <SectionWrapper className="bg-slate-900/10">
        <div className="text-center mb-16 space-y-8">
          <div className="inline-flex items-center space-x-3 px-6 py-2 rounded-full glass-card text-green-400 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] border border-green-500/20 shadow-[0_0_20px_rgba(34,197,94,0.2)]">
            <Target className="w-3 h-3 md:w-4 md:h-4" />
            <span>ELITE VISUAL INTELLIGENCE</span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-none text-white">
            TOTAL TACTICAL <span className="bg-clip-text text-transparent pr-6" style={{ backgroundImage: 'linear-gradient(135deg, #16a34a 0%, #4ade80 40%, #ffffff 70%, #3b82f6 100%)' }}>CLARITY</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="group bg-slate-950 p-10 rounded-[2.5rem] border border-white/5 hover:border-green-500/50 shadow-[0_0_30px_-10px_rgba(34,197,94,0.1)] hover:shadow-[0_0_60px_-10px_rgba(34,197,94,0.4)] transition-all duration-500 hover:-translate-y-2">
            <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center mb-8 text-green-400 group-hover:scale-110 transition-transform">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black uppercase italic mb-4 text-white">Patented 11v11 Sync</h3>
            <p className="text-slate-400 leading-relaxed">
              Brief your 4-3-3 or 3-5-2 in real-time. Players see the movement of the entire squad simultaneously, not just static dots on a screen.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="group bg-slate-950 p-10 rounded-[2.5rem] border border-white/5 hover:border-orange-500/50 shadow-[0_0_30px_-10px_rgba(249,115,22,0.1)] hover:shadow-[0_0_60px_-10px_rgba(249,115,22,0.4)] transition-all duration-500 hover:-translate-y-2">
            <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-8 text-orange-400 group-hover:scale-110 transition-transform">
              <Monitor className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black uppercase italic mb-4 text-white">High-Definition Assets</h3>
            <p className="text-slate-400 leading-relaxed">
              4K realistic pitch graphics and player icons for professional-grade simulations that mirror real-match scenarios.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="group bg-slate-950 p-10 rounded-[2.5rem] border border-white/5 hover:border-purple-500/50 shadow-[0_0_30px_-10px_rgba(168,85,247,0.1)] hover:shadow-[0_0_60px_-10px_rgba(168,85,247,0.4)] transition-all duration-500 hover:-translate-y-2">
            <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-8 text-purple-400 group-hover:scale-110 transition-transform">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black uppercase italic mb-4 text-white">Set-Piece Mastery</h3>
            <p className="text-slate-400 leading-relaxed">
              Design and rehearse corners and free-kick routines with perfection before stepping onto the grass. Save valuable pitch time for physical execution.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* SECTION 3: REMOTE RESILIENCE */}
      <SectionWrapper className="bg-slate-950 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green-600/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          {/* Visual Side (Moved to Left) */}
          <div className="relative h-[600px] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group">
            {/* Placeholder for Remote Session Image */}
            <div className="absolute inset-0 bg-slate-900">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-950 to-slate-950"></div>
              {/* Simulated UI elements could go here */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center p-8 w-full">
                <Wifi className="w-20 h-20 text-blue-500/50 mx-auto mb-6 animate-pulse" />
                <p className="text-2xl font-black uppercase tracking-widest text-white/20">Remote Session Active</p>
              </div>
            </div>
            {/* Overlay Content */}
            <div className="absolute bottom-8 left-8 right-8 glass-card p-6 rounded-2xl border-t border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                <p className="text-sm font-bold uppercase text-white">Live Sync: 24 Players Connected</p>
              </div>
            </div>
          </div>

          <div className="space-y-10 relative z-10">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-3 px-6 py-2 rounded-full glass-card text-green-400 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] border border-green-500/20 shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                <Zap className="w-3 h-3 md:w-4 md:h-4" />
                <span>UNSTOPPABLE MOMENTUM</span>
              </div>
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.9] text-white">
                ZERO DOWNTIME <br />
                <span className="gradient-text box-decoration-clone pr-10" style={{ backgroundImage: 'linear-gradient(135deg, #16a34a 0%, #4ade80 40%, #ffffff 70%, #3b82f6 100%)' }}>NO EXCUSES</span>
              </h2>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6 group">
                <div className="shrink-0 w-16 h-16 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center group-hover:border-blue-500/50 transition-colors">
                  <Globe className="w-8 h-8 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-xl font-black uppercase text-white mb-2">Disrupted Session? No Problem</h4>
                  <p className="text-slate-400 leading-relaxed">
                    When physical training is interrupted by travel, weather, or scheduling conflicts—pivot instantly to a Remote Tactics Session.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="shrink-0 w-16 h-16 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center group-hover:border-blue-500/50 transition-colors">
                  <Smartphone className="w-8 h-8 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-xl font-black uppercase text-white mb-2">Mobile-First Briefing</h4>
                  <p className="text-slate-400 leading-relaxed">
                    Players access tactical plans from any device. Ensure the squad is "In-Sync" even while on the team bus heading to an away game.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* SECTION 4: THE VIRTUAL TRAINING EXPERIENCE (The "Wow" Factor) */}
      <div className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-20 space-y-8">
            <div className="inline-flex items-center space-x-3 px-6 py-2 rounded-full glass-card text-green-400 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] border border-green-500/20 shadow-[0_0_20px_rgba(34,197,94,0.2)]">
              <Smartphone className="w-3 h-3 md:w-4 md:h-4" />
              <span>SCAN. SYNC. PLAY.</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.8] text-white">
              THE <br />
              <span className="bg-clip-text text-transparent pr-6" style={{ backgroundImage: 'linear-gradient(135deg, #16a34a 0%, #4ade80 40%, #ffffff 70%, #3b82f6 100%)' }}>CONTROLLER</span>
            </h2>
            <p className="text-lg md:text-xl font-medium text-slate-400 uppercase leading-relaxed max-w-3xl mx-auto">
              Turn your smartphone into a high-precision tactical tool in seconds. No apps, no friction—just pure tactical engagement.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Step 1: Scan */}
            <div className="bg-slate-950/50 p-8 rounded-3xl border border-white/5 hover:border-purple-500/50 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-6 text-2xl font-black">1</div>
              <div className="h-48 rounded-2xl bg-black/50 mb-6 flex items-center justify-center border border-white/5 group-hover:border-purple-500/30 transition-colors relative overflow-hidden">
                <Scan className="w-16 h-16 text-white/20 group-hover:text-purple-400 transition-colors duration-500" />
                <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 className="text-2xl font-black uppercase italic text-white mb-2">INSTANT CONNECT</h3>
              <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">(Scan QR)</p>
              <p className="text-slate-400">Scan the iHub QR code to instantly pair your smartphone as your personal tactical controller.</p>
            </div>

            {/* Step 2: Control */}
            <div className="bg-slate-950/50 p-8 rounded-3xl border border-white/5 hover:border-pink-500/50 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center mb-6 text-2xl font-black">2</div>
              <div className="h-48 rounded-2xl bg-black/50 mb-6 flex items-center justify-center border border-white/5 group-hover:border-pink-500/30 transition-colors relative overflow-hidden">
                <Gamepad2 className="w-16 h-16 text-white/20 group-hover:text-pink-400 transition-colors duration-500" />
                <div className="absolute inset-0 bg-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 className="text-2xl font-black uppercase italic text-white mb-2">REMOTE JOY CONTROL</h3>
              <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">(Play Live)</p>
              <p className="text-slate-400">Take command of your avatar. Execute group movements and tactical shifts with millisecond precision.</p>
            </div>

            {/* Step 3: Sync */}
            <div className="bg-slate-950/50 p-8 rounded-3xl border border-white/5 hover:border-red-500/50 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center mb-6 text-2xl font-black">3</div>
              <div className="h-48 rounded-2xl bg-black/50 mb-6 flex items-center justify-center border border-white/5 group-hover:border-red-500/30 transition-colors relative overflow-hidden">
                <Users className="w-16 h-16 text-white/20 group-hover:text-red-400 transition-colors duration-500" />
                <div className="absolute inset-0 bg-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 className="text-2xl font-black uppercase italic text-white mb-2">MULTIPLAYER SYNC</h3>
              <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">(Team Practice)</p>
              <p className="text-slate-400">Enter the virtual pitch together. Practice the coach's vision with the entire squad, from any location, on one shared field.</p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 5: FOOTBALL DEVELOPMENT WORKFLOW */}
      <SectionWrapper className="bg-slate-950">
        <div className="text-center mb-16 space-y-8">
          <div className="inline-flex items-center space-x-3 px-6 py-2 rounded-full glass-card text-green-400 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] border border-green-500/20 shadow-[0_0_20px_rgba(34,197,94,0.2)]">
            <Trophy className="w-3 h-3 md:w-4 md:h-4" />
            <span>BEYOND INSTRUCTION: SHOW YOUR MIND</span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-none text-white">
            PLAY ON <br />
            <span className="bg-clip-text text-transparent pr-6" style={{ backgroundImage: 'linear-gradient(135deg, #16a34a 0%, #4ade80 40%, #ffffff 70%, #3b82f6 100%)' }}>THE 5G PITCH</span>
          </h2>
          <p className="text-lg md:text-xl font-medium text-slate-400 uppercase leading-relaxed max-w-4xl mx-auto">
            Where tactical vision becomes live movement. <br /> Get everyone in sync.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="p-8 rounded-3xl bg-slate-900 border border-white/5 hover:border-white/20 transition-all group hover:-translate-y-2 duration-500">
            <div className="flex items-start justify-between mb-6">
              <span className="text-4xl font-black text-white/20 group-hover:text-cyan-400 transition-colors">01</span>
              <Target className="w-8 h-8 text-slate-500 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-black uppercase text-white mb-2">ACTIVE PLAYER DOTS</h3>
            <p className="text-slate-400">Run your mind. Verify understanding instantly as players express their thoughts through live movement on the 5G Pitch.</p>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-3xl bg-slate-900 border border-white/5 hover:border-white/20 transition-all group hover:-translate-y-2 duration-500">
            <div className="flex items-start justify-between mb-6">
              <span className="text-4xl font-black text-white/20 group-hover:text-green-400 transition-colors">02</span>
              <Zap className="w-8 h-8 text-slate-500 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-black uppercase text-white mb-2">COLLECTIVE INTELLIGENCE</h3>
            <p className="text-slate-400">Move by instinct. Transition from "following orders" to shared team intuition. Sync every brain onto one virtual field.</p>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-3xl bg-slate-900 border border-white/5 hover:border-white/20 transition-all group hover:-translate-y-2 duration-500">
            <div className="flex items-start justify-between mb-6">
              <span className="text-4xl font-black text-white/20 group-hover:text-purple-400 transition-colors">03</span>
              <Users className="w-8 h-8 text-slate-500 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-black uppercase text-white mb-2">TACTICAL JOY</h3>
            <p className="text-slate-400">Kill the boredom. Turn tactical prep into high-energy interactive play that strengthens team chemistry and bonds.</p>
          </div>
        </div>
      </SectionWrapper>

      {/* SECTION 6: CTA (Copied from Solutions) */}
      <SectionWrapper id="cta-solutions" className="pb-32 overflow-visible bg-slate-950">
        <div className="relative group max-w-7xl mx-auto">
          {/* Immersive Stadium Radial Glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-cyan-500/20 blur-[160px] rounded-full pointer-events-none -z-10 group-hover:bg-purple-500/20 transition-colors duration-1000"></div>

          {/* Main Container */}
          <div className="relative bg-slate-900/60 backdrop-blur-3xl rounded-[3rem] p-10 md:p-16 border border-white/10 overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.6)] flex flex-col items-center text-center">
            {/* Animated Grid Background Layer */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>

            <div className="relative z-10 space-y-8">
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white italic uppercase pr-8">
                READY FOR THE <br />
                <span className="gradient-text inline-block pr-10 box-decoration-clone" style={{ backgroundImage: 'linear-gradient(135deg, #16a34a 0%, #4ade80 40%, #ffffff 70%, #3b82f6 100%)' }}>NEXT GAME?</span>
              </h2>

              <p className="text-base md:text-lg text-slate-400 max-w-xl mx-auto font-medium leading-tight italic border-x border-white/5 px-8 py-2">
                Join the elite organizations redefining training standards with <span className="text-white font-black">VTAC</span> <span className="text-cyan-400 font-black">MANAGER.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center pt-6">
                {/* Primary Button */}
                <button className="group/btn relative overflow-hidden bg-white text-black text-lg px-8 md:px-12 py-3 md:py-4 rounded-full font-black uppercase tracking-tighter transition-all hover:scale-105 active:scale-95 shadow-[0_15px_30px_rgba(34,211,238,0.2)] flex items-center justify-center">
                  <span className="relative z-10">Book a Demo</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                </button>

                {/* Secondary Button */}
                <button className="relative overflow-hidden glass-card text-white border border-white/20 text-lg px-8 md:px-12 py-3 md:py-4 rounded-full font-black uppercase tracking-tighter hover:bg-white/10 transition-all active:scale-95 group/sec flex items-center justify-center">
                  <span className="relative z-10 flex items-center gap-2">
                    Start Trial <ChevronRight className="w-5 h-5 group-hover/sec:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            </div>

            {/* Bottom Glow */}
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full h-40 bg-gradient-to-t from-cyan-500/20 to-transparent blur-3xl opacity-50"></div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Football;
