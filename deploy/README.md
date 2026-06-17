# IT4Everyone Ltd — Website

Enterprise IT hardware distributor website built with Next.js 14, Tailwind CSS and Stripe.

## Deploy to Vercel (step by step)

### 1. Create a GitHub repository
1. Go to github.com → New repository
2. Name it `it4everyone-website`
3. Keep it private
4. Don't add README (we have one)

### 2. Upload this code
1. Download this project as a ZIP
2. Unzip it
3. Open Terminal in the folder
4. Run:
```bash
git init
git add .
git commit -m "Initial build"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/it4everyone-website.git
git push -u origin main
```

### 3. Deploy on Vercel
1. Go to vercel.com → New Project
2. Import your GitHub repo
3. Framework: **Next.js** (auto-detected)
4. Add environment variables (from `.env.example`):
   - `STRIPE_SECRET_KEY`
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - `NEXT_PUBLIC_SITE_URL` (your Vercel URL, e.g. `https://it4everyone.vercel.app`)
5. Click Deploy

### 4. Set up Stripe
1. Go to dashboard.stripe.com
2. Create an account (or log in)
3. Go to Developers → API Keys
4. Copy your **Secret key** and **Publishable key**
5. Add them to Vercel environment variables
6. Re-deploy

### 5. Add product images
Place product images in `/public/images/products/` matching filenames in `lib/data.ts`:
- `dell-latitude-5540.jpg`
- `dell-optiplex-7010.jpg`
- `hp-elitebook-840.jpg`
- `lenovo-thinkpad-x1.jpg`
- `dell-poweredge-r350.jpg`
- `hp-prodesk-600.jpg`
- `lenovo-thinkcentre-m90q.jpg`
- `dell-u2722d.jpg`
- `hp-e243.jpg`
- `dell-wd19s.jpg`

### 6. Add service photos
Place in `/public/images/services/`:
- `procurement.jpg`
- `installation.jpg`
- `leasing.jpg`
- `recertification.jpg`

Then update `ServicesSection.tsx` and `CategoryTiles.tsx` to use `<Image>` components.

## Local development
```bash
npm install
cp .env.example .env.local
# fill in .env.local with your Stripe keys
npm run dev
```

Open http://localhost:3000

## Project structure
```
app/
  page.tsx          — homepage
  products/         — products listing
  services/         — services page
  about/            — about page
  contact/          — contact page
  api/
    checkout/       — Stripe checkout endpoint
    contact/        — contact form endpoint
components/
  Navbar.tsx
  Hero.tsx          — animated device carousel
  AnimatedDevice.tsx — 3D CSS laptop/server/monitor
  CategoryTiles.tsx
  ProductGrid.tsx
  ProductCard.tsx
  ServicesSection.tsx
  B2BSection.tsx
  ContactSection.tsx
  CartDrawer.tsx
  Footer.tsx
  Logo.tsx
lib/
  data.ts           — all products, services and company data
  cart-context.tsx  — cart state management
```

## Customisation
- Edit product details in `lib/data.ts`
- Update company info in `lib/data.ts` → `companyInfo`
- Change colours in `tailwind.config.ts`
- Add email delivery to `app/api/contact/route.ts` (recommend Resend.com)
