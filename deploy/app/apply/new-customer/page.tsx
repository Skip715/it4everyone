'use client'

import { useState } from 'react'

const inputClass = "border-[1.5px] border-gray-200 rounded-lg px-3.5 py-2.5 text-[13.5px] text-navy outline-none focus:border-blue-mid w-full"
const labelClass = "text-[11px] font-bold text-gray-500 uppercase tracking-[0.5px] mb-1 block"

function Field({ label, name, value, onChange, type = 'text', required = false }: { label: string, name: string, value: string, onChange: any, type?: string, required?: boolean }) {
  return (
    <div>
      <label className={labelClass}>{label}</label>
      <input name={name} type={type} required={required} value={value} onChange={onChange} className={inputClass} />
    </div>
  )
}

export default function NewCustomerApplication() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    title: '', firstName: '', surname: '', email: '', telephone: '', position: '',
    companyName: '', companyAddress: '', companyPostCode: '', companyTelephone: '', companyFax: '', yearsTrading: '',
    registeredAddress: '', registeredPostCode: '', registeredTelephone: '', registeredFax: '',
    companyRegNo: '', vatNo: '', tradingCurrency: '', invoiceEmail: '',
    director1Name: '', director1Address: '', director1PostCode: '', director1Telephone: '',
    director2Name: '', director2Address: '', director2PostCode: '', director2Telephone: '',
    bankName: '', bankTelephone: '', accountNo: '', sortCode: '', swiftCode: '',
    bankAddress: '', bankPostCode: '', ibanCode: '', currency: '',
    tr1CompanyName: '', tr1ContactName: '', tr1Address: '', tr1PostCode: '', tr1Telephone: '', tr1CreditLimit: '', tr1MonthlySpend: '',
    tr2CompanyName: '', tr2ContactName: '', tr2Address: '', tr2PostCode: '', tr2Telephone: '', tr2CreditLimit: '',
    printName: '',
  })
  const [docs, setDocs] = useState({ letter: false, vat: false, regForm: false, directorId: false })
  const [agree, setAgree] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.MouseEvent) {
    e.preventDefault()
    if (!form.firstName || !form.surname || !form.email || !form.companyName || !form.printName || !agree) {
      alert('Please fill in your name, email, company name, typed signature, and confirm the declaration.')
      return
    }
    setLoading(true)
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: 'ad0c84c1-fc74-4d53-8512-173b2dc0211f',
          subject: `New Customer Application - ${form.companyName}`,
          ...form,
          supportingDocuments: Object.entries(docs).filter(([, v]) => v).map(([k]) => k).join(', ') || 'None selected — to be emailed separately',
          declarationAgreed: 'Yes',
        }),
      })
      const result = await res.json()
      if (result.success) {
        setSent(true)
      } else {
        alert('Something went wrong submitting your application. Please try again or email us directly.')
      }
    } catch {
      alert('Something went wrong submitting your application. Please try again or email us directly.')
    } finally {
      setLoading(false)
    }
  }

  if (sent) {
    return (
      <div className="px-4 sm:px-10 py-24 flex items-center justify-center bg-white min-h-[60vh]">
        <div className="text-center">
          <div className="text-5xl mb-4">✅</div>
          <h1 className="text-2xl font-extrabold text-navy mb-2">Application received!</h1>
          <p className="text-slate-500 text-sm max-w-md mx-auto">
            Thanks for applying to open a credit account with IT4Everyone. We&apos;ll review your application and be in touch within a few business days.
            Please remember to email any supporting documents you didn&apos;t already send to sraper@it4eo.co.uk.
          </p>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="bg-navy px-4 sm:px-10 py-12">
        <p className="text-[11px] font-bold text-sky tracking-[1.5px] uppercase mb-2">Credit account application</p>
        <h1 className="text-[28px] sm:text-[36px] font-extrabold text-white">New Customer Application</h1>
        <p className="text-sky-muted text-[15px] mt-3 max-w-lg leading-[1.75]">
          Complete this form online, or download the PDF from our Contact page if you&apos;d prefer to fill it in by hand.
        </p>
      </div>

      <div className="px-4 sm:px-10 py-10 sm:py-14 bg-white max-w-4xl mx-auto flex flex-col gap-10">

        <section>
          <h2 className="text-[18px] font-extrabold text-navy mb-4 pb-2 border-b border-gray-100">Your Details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Field label="Title" name="title" value={form.title} onChange={handleChange} />
            <Field label="First Name" name="firstName" value={form.firstName} onChange={handleChange} required />
            <Field label="Surname" name="surname" value={form.surname} onChange={handleChange} required />
            <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} required />
            <Field label="Telephone" name="telephone" value={form.telephone} onChange={handleChange} />
            <Field label="Position" name="position" value={form.position} onChange={handleChange} />
          </div>
        </section>

        <section>
          <h2 className="text-[18px] font-extrabold text-navy mb-4 pb-2 border-b border-gray-100">Company Details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Company Name" name="companyName" value={form.companyName} onChange={handleChange} required />
            <Field label="Registered Address (if different)" name="registeredAddress" value={form.registeredAddress} onChange={handleChange} />
            <Field label="Company Address" name="companyAddress" value={form.companyAddress} onChange={handleChange} />
            <Field label="Registered Post Code" name="registeredPostCode" value={form.registeredPostCode} onChange={handleChange} />
            <Field label="Post Code" name="companyPostCode" value={form.companyPostCode} onChange={handleChange} />
            <Field label="Registered Telephone" name="registeredTelephone" value={form.registeredTelephone} onChange={handleChange} />
            <Field label="Telephone" name="companyTelephone" value={form.companyTelephone} onChange={handleChange} />
            <Field label="Registered Fax" name="registeredFax" value={form.registeredFax} onChange={handleChange} />
            <Field label="Fax" name="companyFax" value={form.companyFax} onChange={handleChange} />
            <Field label="Years Trading" name="yearsTrading" value={form.yearsTrading} onChange={handleChange} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            <Field label="Company Registration No." name="companyRegNo" value={form.companyRegNo} onChange={handleChange} />
            <Field label="VAT No." name="vatNo" value={form.vatNo} onChange={handleChange} />
            <Field label="Trading Currency" name="tradingCurrency" value={form.tradingCurrency} onChange={handleChange} />
          </div>
          <div className="mt-4">
            <Field label="Invoice Email Address" name="invoiceEmail" type="email" value={form.invoiceEmail} onChange={handleChange} />
          </div>
        </section>

        <section>
          <h2 className="text-[18px] font-extrabold text-navy mb-4 pb-2 border-b border-gray-100">Director Details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Director 1 Name" name="director1Name" value={form.director1Name} onChange={handleChange} />
            <Field label="Director 2 Name" name="director2Name" value={form.director2Name} onChange={handleChange} />
            <Field label="Home Address" name="director1Address" value={form.director1Address} onChange={handleChange} />
            <Field label="Home Address" name="director2Address" value={form.director2Address} onChange={handleChange} />
            <Field label="Post Code" name="director1PostCode" value={form.director1PostCode} onChange={handleChange} />
            <Field label="Post Code" name="director2PostCode" value={form.director2PostCode} onChange={handleChange} />
            <Field label="Telephone" name="director1Telephone" value={form.director1Telephone} onChange={handleChange} />
            <Field label="Telephone" name="director2Telephone" value={form.director2Telephone} onChange={handleChange} />
          </div>
        </section>

        <section>
          <h2 className="text-[18px] font-extrabold text-navy mb-4 pb-2 border-b border-gray-100">Bank Details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Bank Name" name="bankName" value={form.bankName} onChange={handleChange} />
            <Field label="Bank Telephone" name="bankTelephone" value={form.bankTelephone} onChange={handleChange} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            <Field label="Account No." name="accountNo" value={form.accountNo} onChange={handleChange} />
            <Field label="Sort Code" name="sortCode" value={form.sortCode} onChange={handleChange} />
            <Field label="SWIFT Code" name="swiftCode" value={form.swiftCode} onChange={handleChange} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            <Field label="Bank Address" name="bankAddress" value={form.bankAddress} onChange={handleChange} />
            <Field label="Post Code" name="bankPostCode" value={form.bankPostCode} onChange={handleChange} />
            <Field label="IBAN Code" name="ibanCode" value={form.ibanCode} onChange={handleChange} />
          </div>
          <div className="mt-4 sm:w-1/3">
            <Field label="Currency" name="currency" value={form.currency} onChange={handleChange} />
          </div>
        </section>

        <section>
          <h2 className="text-[18px] font-extrabold text-navy mb-4 pb-2 border-b border-gray-100">Supporting Documents</h2>
          <p className="text-[13px] text-slate-500 mb-3">Tick anything you&apos;ll be emailing separately to sraper@it4eo.co.uk:</p>
          <div className="flex flex-col gap-2.5">
            {[
              { key: 'letter', label: 'Letter of introduction on headed paper' },
              { key: 'vat', label: 'VAT certificate' },
              { key: 'regForm', label: 'Company registration form' },
              { key: 'directorId', label: 'Details of directors (passport photos)' },
            ].map(({ key, label }) => (
              <label key={key} className="flex items-center gap-2.5 text-[13.5px] text-navy">
                <input type="checkbox" checked={docs[key as keyof typeof docs]} onChange={e => setDocs(d => ({ ...d, [key]: e.target.checked }))} className="w-4 h-4" />
                {label}
              </label>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-[18px] font-extrabold text-navy mb-4 pb-2 border-b border-gray-100">Trade Reference 1</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Company Name" name="tr1CompanyName" value={form.tr1CompanyName} onChange={handleChange} />
            <Field label="Contact Name" name="tr1ContactName" value={form.tr1ContactName} onChange={handleChange} />
            <Field label="Address" name="tr1Address" value={form.tr1Address} onChange={handleChange} />
            <Field label="Post Code" name="tr1PostCode" value={form.tr1PostCode} onChange={handleChange} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            <Field label="Telephone" name="tr1Telephone" value={form.tr1Telephone} onChange={handleChange} />
            <Field label="Credit Limit" name="tr1CreditLimit" value={form.tr1CreditLimit} onChange={handleChange} />
            <Field label="Monthly Spend in GBP" name="tr1MonthlySpend" value={form.tr1MonthlySpend} onChange={handleChange} />
          </div>
        </section>

        <section>
          <h2 className="text-[18px] font-extrabold text-navy mb-4 pb-2 border-b border-gray-100">Trade Reference 2</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Company Name" name="tr2CompanyName" value={form.tr2CompanyName} onChange={handleChange} />
            <Field label="Contact Name" name="tr2ContactName" value={form.tr2ContactName} onChange={handleChange} />
            <Field label="Address" name="tr2Address" value={form.tr2Address} onChange={handleChange} />
            <Field label="Post Code" name="tr2PostCode" value={form.tr2PostCode} onChange={handleChange} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <Field label="Telephone" name="tr2Telephone" value={form.tr2Telephone} onChange={handleChange} />
            <Field label="Credit Limit" name="tr2CreditLimit" value={form.tr2CreditLimit} onChange={handleChange} />
          </div>
        </section>

        <section className="bg-pale rounded-2xl p-6" style={{ background: '#F8FAFC' }}>
          <h2 className="text-[16px] font-extrabold text-navy mb-3">Declaration</h2>
          <p className="text-[13px] text-slate-500 leading-[1.7] mb-4">
            I hereby submit the above information for the sole purpose of opening a Credit Account with IT4EO Ltd. I acknowledge that all orders are accepted by IT4EO in accordance with their terms and conditions and agree that my company shall be bound by them in all transactions. Goods shall remain the property of IT4EO until paid for in full. NB. IT4EO Limited may search various credit agencies as part of the account application process.
          </p>
          <label className="flex items-center gap-2.5 text-[13.5px] text-navy font-semibold mb-4">
            <input type="checkbox" checked={agree} onChange={e => setAgree(e.target.checked)} className="w-4 h-4" />
            I agree to the above declaration
          </label>
          <Field label="Type your full name to sign" name="printName" value={form.printName} onChange={handleChange} required />
        </section>

        <button onClick={handleSubmit} disabled={loading} className="bg-navy hover:bg-blue text-white font-bold py-4 rounded-lg text-[15px] transition-colors disabled:opacity-60">
          {loading ? 'Submitting...' : 'Submit application'}
        </button>
      </div>
    </>
  )
}
