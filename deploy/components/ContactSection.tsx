'use client'

import { useState } from 'react'

export default function ContactSection() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', message: '', procurement: 'Outright purchase', devices: '1–10 devices' })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.MouseEvent) {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      alert('Please fill in your name, email and message.')
      return
    }
    setLoading(true)
    const subject = encodeURIComponent(`IT4Everyone Enquiry from ${form.name} — ${form.company}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nPhone: ${form.phone}\nProcurement: ${form.procurement}\nDevices: ${form.devices}\n\nMessage:\n${form.message}`
    )
    window.location.href = `mailto:info@it4evo.co.uk?subject=${subject}&body=${body}`
    setTimeout(() => { setSent(true); setLoading(false) }, 1000)
  }

  return (
    <section id="contact" className="px-10 py-14 bg-white">
      <div className="mb-8">
        <p className="text-[11px] font-bold text-blue tracking-[1.5px] uppercase mb-1.5">Get in touch</p>
        <h2 className="text-[26px] font-extrabold text-navy">Request a tailored proposal</h2>
      </div>
      <div className="grid grid-cols-[1fr_1.5fr] gap-12">
        <div className="flex flex-col gap-5">
          <p className="text-[14px] text-slate-500 leading-[1.75]">
            Tell us about your technology roadmap and we&apos;ll prepare a fully customised procurement proposal — from a single device to a full enterprise rollout.
          </p>
          {[
            { label: 'Address', value: 'Regus The Gatehouse, Gatehouse Way, Aylesbury, Buckinghamshire', icon: '📍' },
            { label: 'Phone', value: '01296 816012 · 07518 577981', icon: '📞' },
            { label: 'Email', value: 'info@it4evo.co.uk', icon: '✉️' },
            { label: 'Website', value: 'www.it4eo.co.uk', icon: '🌐' },
          ].map(({ label, value, icon }) => (
            <div key={label} className="flex gap-3.5 items-start">
              <div className="w-10 h-10 bg-pale border border-gray-200 rounded-lg flex items-center justify-center flex-shrink-0 text-base">{icon}</div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 tracking-[0.5px] uppercase mb-0.5">{label}</p>
                <p className="text-[13px] font-semibold text-navy">{value}</p>
              </div>
            </div>
          ))}
        </div>

        {sent ? (
          <div className="flex items-center justify-center">
            <div className="text-center">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-extrabold text-navy mb-2">Enquiry sent!</h3>
              <p className="text-slate-500 text-sm">We&apos;ll be in touch within one business day.</p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-2.5">
            <div className="grid grid-cols-2 gap-2.5">
              <input name="name" required placeholder="Your name" value={form.name} onChange={handleChange} className="border-[1.5px] border-gray-200 rounded-lg px-3.5 py-2.5 text-[13.5px] text-navy outline-none focus:border-blue-mid" />
              <input name="company" placeholder="Company name" value={form.company} onChange={handleChange} className="border-[1.5px] border-gray-200 rounded-lg px-3.5 py-2.5 text-[13.5px] text-navy outline-none focus:border-blue-mid" />
              <input name="email" type="email" required placeholder="Email address" value={form.email} onChange={handleChange} className="border-[1.5px] border-gray-200 rounded-lg px-3.5 py-2.5 text-[13.5px] text-navy outline-none focus:border-blue-mid" />
              <input name="phone" placeholder="Phone number" value={form.phone} onChange={handleChange} className="border-[1.5px] border-gray-200 rounded-lg px-3.5 py-2.5 text-[13.5px] text-navy outline-none focus:border-blue-mid" />
            </div>
            <textarea name="message" rows={3} required placeholder="What hardware are you looking to procure? How many devices?" value={form.message} onChange={handleChange} className="border-[1.5px] border-gray-200 rounded-lg px-3.5 py-2.5 text-[13.5px] text-navy outline-none focus:border-blue-mid resize-none" />
            <div className="grid grid-cols-2 gap-2.5">
              <select name="procurement" value={form.procurement} onChange={handleChange} className="border-[1.5px] border-gray-200 rounded-lg px-3.5 py-2.5 text-[13.5px] text-navy outline-none bg-white">
                <option>Outright purchase</option>
                <option>Leasing / subscription</option>
                <option>Flexible model</option>
              </select>
              <select name="devices" value={form.devices} onChange={handleChange} className="border-[1.5px] border-gray-200 rounded-lg px-3.5 py-2.5 text-[13.5px] text-navy outline-none bg-white">
                <option>1–10 devices</option>
                <option>11–50 devices</option>
                <option>51–200 devices</option>
                <option>200+ devices</option>
              </select>
            </div>
            <button onClick={handleSubmit} disabled={loading} className="bg-navy hover:bg-blue text-white font-bold py-3.5 rounded-lg text-[14px] transition-colors disabled:opacity-60 mt-1">
              {loading ? 'Opening email…' : 'Send enquiry — get a proposal →'}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
