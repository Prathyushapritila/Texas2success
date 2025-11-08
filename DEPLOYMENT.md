# Vercel Deployment Guide

This guide will help you deploy the Texas 2 Success website to Vercel.

## Prerequisites

- A GitHub, GitLab, or Bitbucket account
- A Vercel account (free tier is sufficient)
- Your code pushed to a Git repository

## Step 1: Prepare Your Repository

1. Make sure all your code is committed and pushed to your Git repository:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

## Step 2: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended)

1. **Sign in to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub, GitLab, or Bitbucket account

2. **Import Your Project**
   - Click "Add New..." → "Project"
   - Import your Git repository
   - Vercel will automatically detect Next.js

3. **Configure Project Settings**
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)

4. **Environment Variables** (if needed)
   - Add any environment variables in the "Environment Variables" section
   - For this project, no environment variables are required by default

5. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete (usually 2-3 minutes)

### Option B: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   - Follow the prompts
   - For production deployment, run: `vercel --prod`

## Step 3: Configure Custom Domain (Optional)

1. **Add Domain in Vercel Dashboard**
   - Go to your project settings
   - Navigate to "Domains"
   - Add your custom domain (e.g., `www.texas2success.com`)

2. **Update DNS Records**
   - Add the DNS records provided by Vercel to your domain registrar
   - Wait for DNS propagation (usually 24-48 hours)

## Step 4: Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Verify dark mode toggle works
- [ ] Check contact form functionality
- [ ] Test mobile responsiveness
- [ ] Verify SEO meta tags
- [ ] Check Google Analytics (if added)
- [ ] Test all links and navigation

## Environment Variables

If you need to add environment variables (for API keys, etc.):

1. Go to Project Settings → Environment Variables
2. Add variables for:
   - Production
   - Preview
   - Development

Example:
```
NEXT_PUBLIC_API_URL=https://api.example.com
```

## Continuous Deployment

Vercel automatically deploys:
- **Production**: Every push to `main` branch
- **Preview**: Every push to other branches
- **Pull Requests**: Automatic preview deployments

## Performance Optimization

Vercel automatically optimizes:
- ✅ Image optimization
- ✅ Automatic HTTPS
- ✅ Edge Network (CDN)
- ✅ Serverless Functions
- ✅ Automatic caching

## Monitoring

- View deployment logs in the Vercel dashboard
- Monitor performance with Vercel Analytics (available in Pro plan)
- Set up error tracking with Sentry (optional)

## Troubleshooting

### Build Fails

1. Check build logs in Vercel dashboard
2. Ensure all dependencies are in `package.json`
3. Verify Node.js version (Vercel uses Node 18.x by default)

### 404 Errors

1. Ensure all routes are properly configured
2. Check `next.config.js` for any redirects
3. Verify dynamic routes are set up correctly

### Environment Variables Not Working

1. Ensure variables are prefixed with `NEXT_PUBLIC_` for client-side access
2. Redeploy after adding new environment variables

## Support

- Vercel Documentation: [vercel.com/docs](https://vercel.com/docs)
- Vercel Community: [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)

## Next Steps

After deployment:
1. Set up Google Analytics
2. Configure Google Search Console
3. Add sitemap.xml (Next.js generates automatically)
4. Set up monitoring and error tracking
5. Configure email service for contact form

