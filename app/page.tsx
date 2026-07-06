import { AlertTriangle, Heart, Users, BookOpen, ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero / Cultural Welcome */}
      <section className="relative bg-gradient-to-b from-teal-950 via-teal-900 to-teal-800 text-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm mb-6 tracking-[2px] font-medium">
            HE WAKA EKE NOA
          </div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-[-1.5px] leading-[1.05] mb-6">
            Supporting whānau of<br />preterm twins in Aotearoa
          </h1>

          <p className="max-w-2xl mx-auto text-xl md:text-2xl text-teal-100 mb-10">
            Culturally safe. Trauma-informed. Whānau-centred.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#resources"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-teal-950 hover:bg-amber-50 transition-all font-semibold px-8 h-14 text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-teal-900"
            >
              Explore Resources <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#peer-support"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 hover:bg-white/10 transition-all font-medium px-8 h-14 text-lg focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-teal-900"
            >
              Connect with other whānau
            </a>
          </div>

          <p className="mt-8 text-sm text-teal-200 max-w-md mx-auto">
            Built in partnership with whānau, iwi, midwives, and community organisations across Aotearoa.
          </p>
        </div>
      </section>

      {/* Strong Medical Disclaimer — Prominent & Permanent */}
      <div className="bg-amber-50 border-b border-amber-200">
        <div className="max-w-5xl mx-auto px-6 py-4 flex gap-4 items-start">
          <div className="mt-0.5 flex-shrink-0">
            <AlertTriangle className="w-5 h-5 text-amber-600" aria-hidden="true" />
          </div>
          <div className="text-sm text-amber-900 leading-relaxed">
            <strong>Important medical disclaimer:</strong> This platform provides general information and community connection only. It is <strong>not a substitute for professional medical advice, diagnosis, or treatment</strong>. Always seek the advice of your midwife, doctor, lead maternity carer, or other qualified health provider with any questions regarding pregnancy, preterm birth, or your baby’s health. Never disregard professional medical advice or delay seeking it because of content on this site. In an emergency, call 111 immediately.
          </div>
        </div>
      </div>

      {/* Why This Matters */}
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-20">
        <div className="text-center mb-12">
          <div className="uppercase tracking-[3px] text-xs font-semibold text-teal-700 mb-3">WHY WE EXIST</div>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight">Preterm twin journeys need extra support</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Heart,
              title: "Emotional & Cultural Safety",
              desc: "Preterm birth can be traumatic. We centre whānau voice, whakapapa, and culturally grounded pathways alongside clinical information."
            },
            {
              icon: Users,
              title: "Peer Connection",
              desc: "Connect with other parents and whānau who have walked similar paths — safely moderated, culturally supported spaces."
            },
            {
              icon: BookOpen,
              title: "Clear Navigation",
              desc: "One place for WINZ support, DHB services, iwi providers, funding pathways, and practical resources — all reviewed for cultural safety."
            }
          ].map((item, idx) => (
            <div key={idx} className="rounded-2xl border border-slate-200 p-8 hover:border-teal-200 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center mb-6 group-hover:bg-teal-700 group-hover:text-white transition-colors">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-2xl tracking-tight mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="bg-slate-50 py-16 md:py-20 border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex justify-between items-end mb-10">
            <div>
              <div className="text-teal-700 text-xs tracking-[2px] font-semibold mb-2">NGĀ RAUEMI • RESOURCES</div>
              <h2 className="font-serif text-4xl tracking-tight">Trusted information for your journey</h2>
            </div>
            <a href="#" className="hidden md:inline-flex items-center text-sm font-medium text-teal-700 hover:text-teal-800">
              Browse full directory <ArrowRight className="ml-1 w-4 h-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Understanding preterm twin birth — Māori & clinical perspectives",
              "What to expect in NICU/SCBU — whānau stories & practical tips",
              "Feeding your preterm pēpi — breastfeeding, expressing & donor milk",
              "Mental health & wellbeing for māmā, pāpā & whānau",
              "Cultural practices & karakia around early birth",
              "Going home — preparing your whare & support network"
            ].map((title, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 border border-slate-200 hover:shadow-sm transition-all">
                <div className="text-xs uppercase tracking-widest text-teal-600 mb-3">GUIDE</div>
                <h4 className="font-semibold text-xl leading-tight tracking-tight mb-4">{title}</h4>
                <div className="text-sm text-teal-700 font-medium">Coming soon in v0.2</div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-slate-500 mt-8">
            All resources are reviewed by cultural advisors, whānau with lived experience, and clinical experts.
          </p>
        </div>
      </section>

      {/* Peer Support */}
      <section id="peer-support" className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        <div className="max-w-3xl">
          <div className="text-teal-700 text-xs tracking-[2px] font-semibold mb-3">WHĀNAU CONNECTING WITH WHĀNAU</div>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-6">You are not alone on this journey</h2>
          <p className="text-xl text-slate-600 mb-8">
            Safe, moderated spaces where parents and whānau of preterm twins can share stories, ask questions, and find solidarity — guided by cultural safety protocols.
          </p>
        </div>

        <div className="mt-8 inline-flex items-center gap-4 rounded-2xl bg-teal-950 text-white px-8 py-5">
          <Users className="w-6 h-6 flex-shrink-0" />
          <div>
            <div className="font-semibold">Peer matching &amp; support circles launching in v0.3</div>
            <div className="text-teal-200 text-sm">Expression of interest open now — priority for whānau in rural &amp; regional areas</div>
          </div>
        </div>
      </section>

      {/* Funding & Services */}
      <section id="funding" className="bg-white border-t border-slate-200 py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-2xl mb-10">
            <div className="text-teal-700 text-xs tracking-[2px] font-semibold mb-3">ARA PŪTEA • FUNDING PATHWAYS</div>
            <h2 className="font-serif text-4xl tracking-tight">Clear navigation to the support you’re entitled to</h2>
          </div>

          <div className="prose prose-slate max-w-none text-lg">
            <p>We are building a living directory of national and regional supports including WINZ, Ministry of Health programmes, iwi providers, and charitable trusts that specifically help whānau with preterm or multiple births.</p>
            <p className="text-base text-slate-500 mt-4">All information is kept up to date with community and provider input. Cultural navigation support is a core feature.</p>
          </div>
        </div>
      </section>

      {/* About & Te Tiriti */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-16 md:py-24 border-t">
        <div className="grid md:grid-cols-12 gap-x-12 gap-y-10 items-center">
          <div className="md:col-span-7">
            <div className="uppercase tracking-[2.5px] text-xs font-semibold text-teal-700 mb-4">TE TIRITI O WAITANGI • TE MANA RARAUNGA</div>
            <h2 className="font-serif text-4xl md:text-5xl tracking-[-0.5px] leading-none mb-6">Built with and for whānau, by whānau</h2>
            <div className="space-y-5 text-lg text-slate-700">
              <p>This platform is being developed in genuine partnership with whānau who have experienced preterm twin birth, iwi (starting with Muaūpoko), midwives, neonatal teams, and community organisations.</p>
              <p>Technology decisions are guided by Te Mana Raraunga principles: rangatiratanga, kaitiakitanga, whakapapa, manaakitanga, and kotahitanga. Data about whānau stays under whānau control.</p>
            </div>
          </div>

          <div className="md:col-span-5 bg-slate-50 rounded-3xl p-9 text-sm leading-relaxed border border-slate-200">
            <p className="font-medium text-slate-900 mb-4">Current development partners &amp; guidance</p>
            <ul className="space-y-2 text-slate-600">
              <li>• Whānau with lived experience of preterm twins</li>
              <li>• Muaūpoko Tribal Authority (cultural guidance)</li>
              <li>• Coastal Alpine Tech &amp; Mana Kai network (sovereign tech)</li>
              <li>• Clinical &amp; midwifery advisors</li>
              <li>• Aether sovereign agentic system (orchestration + safety)</li>
            </ul>
            <p className="text-xs text-slate-500 mt-6">
              More partners and cultural reviewers welcomed — open an issue or reach out.<br/>
              This project is proudly open-source under the <strong>Apache 2.0 License</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-teal-900 text-white py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl tracking-tight mb-4">Ready to walk alongside other whānau?</h2>
          <p className="text-teal-100 text-xl mb-8">Join our early contributor list or share your story (safely, when you’re ready).</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="inline-flex justify-center items-center rounded-2xl bg-white text-teal-950 font-semibold px-10 h-14 text-lg hover:bg-amber-50 transition-colors">
              Join the waitlist
            </a>
            <a href="https://github.com/fivepanelhat/whanau-preterm-support-hub" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center rounded-2xl border border-white/40 hover:bg-white/10 px-8 h-14 text-lg font-medium transition-colors">
              View on GitHub
            </a>
          </div>
          <p className="text-xs text-teal-300 mt-6">Open-source under the Apache 2.0 License. All contributions are governed by our Code of Conduct and cultural safety protocols.</p>
        </div>
      </section>
    </div>
  );
}
