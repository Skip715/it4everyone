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
    </>
  )
}
