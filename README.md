# Rock Room Studios Website

Official website for Rock Room @ The Underground Live - Where musicians become bands.

## 🎸 Overview

Rock Room Studios is a music education program hosted at The Underground Live in Camp Hill, PA. This website showcases our programs, facilitates student enrollment, and provides an admin dashboard for content management.

## 🚀 Features

- **Modern React + TypeScript Stack**: Built with Vite, React 18, and TypeScript
- **File-Based CMS**: Easy content management through JSON files
- **Admin Dashboard**: Secure admin panel for content editing and enrollment management
- **GitHub Pages Hosting**: Automated deployment via GitHub Actions
- **Responsive Design**: Mobile-first design with dark rock concert theme
- **Supabase Integration**: Backend for enrollment submissions and authentication

## 📁 Project Structure

```
rockroomstudios.com/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages deployment workflow
├── public/
│   ├── CNAME                   # Custom domain configuration
│   └── assets/                 # Public assets
├── src/
│   ├── assets/                 # Images and static assets
│   ├── components/
│   │   ├── admin/              # Admin dashboard components
│   │   ├── rockroom/           # Main website components
│   │   └── ui/                 # Reusable UI components (shadcn)
│   ├── content/                # CMS content (JSON files)
│   │   ├── site.json           # Site-wide settings
│   │   ├── hero.json           # Hero section content
│   │   ├── programs.json       # Programs data
│   │   ├── about.json          # About section content
│   │   └── contact.json        # Contact information
│   ├── hooks/
│   │   └── useContent.ts       # Content loading hooks
│   ├── integrations/
│   │   └── supabase/           # Supabase client and types
│   ├── lib/
│   │   ├── auth.ts             # Authentication utilities
│   │   └── utils.ts            # General utilities
│   ├── pages/
│   │   ├── admin/              # Admin pages
│   │   └── HomePage.tsx        # Main landing page
│   ├── App.tsx                 # Main app with routing
│   └── main.tsx                # Entry point
├── .env.example                # Environment variables template
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

## 🛠️ Local Development Setup

### Prerequisites

- Node.js 20.x or higher
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/JefMinton/rockroomstudios.com.git
   cd rockroomstudios.com
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```bash
   cp .env.example .env
   ```
   
   Add your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=your_supabase_url_here
   VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```
   
   The site will be available at `http://localhost:8080`

5. **Build for production**
   ```bash
   npm run build
   ```
   
   The built files will be in the `dist/` directory.

## 🔐 Supabase Setup

### Database Tables

The project requires the following Supabase table:

**enrollments** table with the following columns:
- `id` (uuid, primary key)
- `created_at` (timestamp)
- `first_name` (text)
- `last_name` (text)
- `email` (text)
- `phone` (text)
- `date_of_birth` (date)
- `address` (text)
- `city` (text)
- `state` (text)
- `zip` (text)
- `parent_name` (text, nullable)
- `parent_email` (text, nullable)
- `parent_phone` (text, nullable)
- `primary_instrument` (text)
- `experience_level` (text)
- `years_playing` (text, nullable)
- `musical_goals` (text, nullable)
- `other_instruments` (text, nullable)
- `availability` (text)
- `referral_source` (text, nullable)
- `program_type` (text)
- `status` (text, default: 'pending')

### Row Level Security (RLS)

Enable RLS on the `enrollments` table with the following policies:

1. **Anonymous INSERT**: Allow anyone to submit an enrollment
   ```sql
   CREATE POLICY "Allow anonymous enrollment submissions"
   ON enrollments FOR INSERT
   TO anon
   WITH CHECK (true);
   ```

2. **Authenticated SELECT**: Only authenticated users can view enrollments
   ```sql
   CREATE POLICY "Allow authenticated users to view enrollments"
   ON enrollments FOR SELECT
   TO authenticated
   USING (true);
   ```

### Authentication

Create an admin user in the Supabase Auth dashboard for accessing the admin panel.

## 🌐 GitHub Pages Deployment

### GitHub Repository Settings

1. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Set Source to "GitHub Actions"

2. **Add Repository Secrets**
   - Go to Settings → Secrets and variables → Actions
   - Add the following secrets:
     - `VITE_SUPABASE_URL`: Your Supabase project URL
     - `VITE_SUPABASE_PUBLISHABLE_KEY`: Your Supabase anon/public key

3. **Deployment**
   - Push to `main` branch to trigger automatic deployment
   - Or manually trigger via Actions tab → Deploy to GitHub Pages → Run workflow

### Custom Domain Setup (GoDaddy)

1. **In GitHub**:
   - The `CNAME` file in the `public/` folder is already configured with `rockroomstudios.com`

2. **In GoDaddy DNS Settings**:
   - Add a CNAME record:
     - Type: CNAME
     - Name: www
     - Value: `jefminton.github.io`
   - Add A records for apex domain:
     - Type: A
     - Name: @
     - Value: (GitHub Pages IP addresses)
       - 185.199.108.153
       - 185.199.109.153
       - 185.199.110.153
       - 185.199.111.153

3. **Wait for DNS propagation** (can take up to 48 hours)

## ✏️ Content Management

### Method 1: Direct File Editing (Recommended for Developers)

1. Edit the JSON files in `src/content/`
2. Commit and push changes
3. GitHub Actions will automatically rebuild and deploy

### Method 2: Admin Dashboard

1. Navigate to `https://rockroomstudios.com/admin`
2. Sign in with admin credentials
3. Use the content editors to modify JSON
4. Copy the generated JSON and commit to the repository

**Note**: The admin dashboard currently generates JSON for manual commit. Future enhancement will add direct GitHub API integration for automated commits.

## 📝 Content Files

### `src/content/site.json`
Site-wide settings including site name, contact info, and social links.

### `src/content/hero.json`
Main hero section with headline, tagline, description, and CTA buttons.

### `src/content/programs.json`
Program details for Rock Class and Rock Band, including pricing, features, and descriptions.

### `src/content/about.json`
About section content, features, and value proposition stats.

### `src/content/contact.json`
Contact information and program director details.

## 🎨 Design System

- **Theme**: Dark rock concert aesthetic
- **Primary Color**: Neon Green (#39ff14) with glow effects
- **Secondary Color**: Rock Red (#dc2626)
- **Typography**: 
  - Headings: Oswald (bold, uppercase)
  - Body: Roboto
- **Components**: Built with shadcn/ui and Tailwind CSS

## 🔒 Security Notes

- Environment variables are stored securely in GitHub Secrets
- `.env` file is gitignored to prevent credential exposure
- Supabase RLS policies protect enrollment data
- Admin authentication required for sensitive operations

## 🧪 Testing

Build the project locally to verify changes:
```bash
npm run build
npm run preview
```

## 📦 Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui
- **Routing**: React Router DOM
- **Backend**: Supabase (Database, Auth)
- **Deployment**: GitHub Pages via GitHub Actions
- **Forms**: React Hook Form + Zod validation

## 🤝 Contributing

This is a private project for Rock Room Studios. For questions or issues, contact Jef Minton.

## 📧 Support

- **Email**: jeff.a.minton@gmail.com
- **Phone**: (717) 417-8806
- **Location**: The Underground Live, Camp Hill PA

## 📄 License

© 2024 Rock Room @ The Underground Live. All rights reserved.

---

**Play to Learn. Play to Win.** 🎸
