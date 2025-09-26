# Claudine

A modern web application built with Vite, Preact, and TypeScript.

## Prerequisites

- Node.js 18 or higher
- npm (comes with Node.js)

## Development Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server with hot reload
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally

## Tech Stack

- **Framework**: Preact
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide Preact
- **Deployment**: GitHub Pages

## Current Deployment

The website is currently deployed at: https://studioclaudine.github.io/website/

Deployment happens automatically via GitHub Actions when code is pushed to the `main` or `master` branch.

## Migrating to a Custom Domain

To move your website from `https://studioclaudine.github.io/website/` to a custom domain, follow these steps:

### Step 1: Choose Your Domain Type

You can use either:
- **Apex domain** (e.g., `example.com`)
- **Subdomain** (e.g., `www.example.com` or `blog.example.com`)

### Step 2: Configure DNS Records

#### For Apex Domain (example.com)

Add these A records to your DNS provider:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

#### For Subdomain (www.example.com)

Add a CNAME record:
```
CNAME: www -> studioclaudine.github.io
```

### Step 3: Configure GitHub Pages

1. Go to your repository settings on GitHub
2. Navigate to **Pages** in the left sidebar
3. Under **Source**, ensure it's set to "Deploy from a branch"
4. Select the branch (usually `main` or `master`)
5. In the **Custom domain** field, enter your domain (e.g., `example.com` or `www.example.com`)
6. Check **Enforce HTTPS** (recommended)

### Step 4: Update Build Configuration

1. **Create a CNAME file** in the `public` directory:
   ```bash
   echo "yourdomain.com" > public/CNAME
   ```

2. **Update `vite.config.ts`** to remove the GitHub Pages base path:
   ```typescript
   import { defineConfig } from 'vite'
   import preact from '@preact/preset-vite'

   export default defineConfig({
     plugins: [preact()],
     base: '/', // Changed from '/website/' to '/'
   })
   ```

3. **Commit and push these changes**:
   ```bash
   git add .
   git commit -m "Configure for custom domain"
   git push
   ```

### Step 5: Verify Domain Setup

1. Wait for DNS propagation (can take up to 24 hours)
2. GitHub will automatically verify your domain
3. Once verified, your site will be available at your custom domain
4. GitHub will automatically redirect the old GitHub Pages URL to your custom domain

### Troubleshooting

- **DNS not propagating**: Use tools like `dig` or online DNS checkers to verify your records
- **HTTPS certificate issues**: Ensure "Enforce HTTPS" is enabled in GitHub Pages settings
- **404 errors**: Check that the CNAME file is in the root of your deployed site
- **Styling/asset issues**: Verify the `base` path in `vite.config.ts` is set to `'/'`

### Additional Resources

- [GitHub Pages Custom Domain Documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [Troubleshooting Custom Domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/troubleshooting-custom-domains-and-github-pages)

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Commit your changes: `git commit -m "Add feature"`
5. Push to the branch: `git push origin feature-name`
6. Open a Pull Request