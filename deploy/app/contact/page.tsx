import ContactSection from '@/components/ContactSection'

export default function ContactPage() {
  return (
    <>
      <div className="bg-navy px-10 py-12">
        <p className="text-[11px] font-bold text-sky tracking-[1.5px] uppercase mb-2">Talk to us</p>
        <h1 className="text-[36px] font-extrabold text-white">Get in touch</h1>
        <p className="text-sky-muted text-[15px] mt-3 max-w-lg leading-[1.75]">
          Ready to discuss your hardware needs? We&apos;ll prepare a tailored proposal for your organisation.
        </p>
      </div>
      <ContactSection />

      {/* Downloads */}
      <section className="px-10 py-14" style={{ background: '#F8FAFC' }}>
        <div className="mb-8">
          <p className="text-[11px] font-bold tracking-[1.5px] uppercase mb-1.5" style={{ color: '#1976D2' }}>Documents</p>
          <h2 className="text-[26px] font-extrabold" style={{ color: '#0D2B5E' }}>Download our forms</h2>
          <p className="text-[14px] mt-2 max-w-lg leading-[1.75]" style={{ color: '#546E7A' }}>
            Download, complete and return the relevant form to get started with IT4Everyone.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {[
            {
              title: 'New Customer Application',
              desc: 'Open a credit account with IT4Everyone. Complete and return with supporting documents.',
              icon: '📋',
              file: '/IT4Everyone-New-Customer-Application.pdf',
            },
            {
              title: 'New Supplier Application',
              desc: 'Apply to become a supplier to IT4Everyone. Complete all sections and return with required documentation.',
              icon: '🤝',
              file: '/IT4Everyone-New-Supplier-Application.pdf',
            },
            {
              title: 'Terms & Conditions',
              desc: 'Our standard terms and conditions of sale. Please read carefully before placing an order.',
              icon: '📄',
              file: '/IT4Everyone-Terms-and-Conditions.pdf',
            },
          ].map(({ title, desc, icon, file }) => (
            <div key={title} className="bg-white rounded-2xl p-7 flex flex-col gap-4" style={{ border: '1px solid #E8EDF5', boxShadow: '0 2px 8px rgba(13,43,94,0.06)' }}>
              <div className="text-4xl">{icon}</div>
              <div>
                <h3 className="text-[15px] font-extrabold mb-2" style={{ color: '#0D2B5E' }}>{title}</h3>
                <p className="text-[13px] leading-[1.65]" style={{ color: '#546E7A' }}>{desc}</p>
              </div>
              <a
                href={file}
                download
                className="mt-auto inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-bold text-white rounded-lg transition-all"
                style={{ background: 'linear-gradient(135deg, #1565C0, #2196F3)' }}
              >
                ⬇ Download PDF
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
