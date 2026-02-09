# Opti DAM - Deploy to Vercel Template

A simple Next.js app that displays a personalized welcome message. Perfect for testing Vercel deployments!

## 🚀 Deploy to Vercel

**Note: This is a private repository. You must be added as a collaborator to access it.**

### For Collaborators - How to Deploy:

1. **Fork this repository**
   - Click the "Fork" button at the top right
   - This creates a copy in your GitHub account

2. **Deploy from your fork**
   - Go to your forked repository
   - Click the "Deploy to Vercel" button below
   - Sign in with your own Vercel account (free plan works!)
   - Enter your name when prompted for `NEXT_PUBLIC_USERNAME`

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/tajrian/vercel-demo&env=NEXT_PUBLIC_USERNAME&envDescription=Enter%20your%20name%20to%20display%20on%20the%20landing%20page&envLink=https://github.com/tajrian/vercel-demo&project-name=my-opti-dam&repo-name=my-opti-dam)

### What happens when you deploy:

1. **Clone to your Vercel** - Vercel clones your fork to your account
2. **Set your username** - You'll be prompted to enter a username to display
3. **Build and deploy** - Automatically builds and deploys your app
4. **Get your URL** - Receive a live URL on your own Vercel account!

## 🛠️ Manual Setup

If you prefer to deploy manually:

1. **Clone the repository**
   ```bash
   git clone https://github.com/tajrian/vercel-demo.git
   cd vercel-demo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file:
   ```bash
   NEXT_PUBLIC_USERNAME=YourNameHere
   ```

4. **Run locally**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000)

5. **Deploy to Vercel**
   ```bash
   vercel
   ```

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_USERNAME` | The name to display on the landing page | No (defaults to "Guest") |

## 🎨 Customize

Edit `app/page.tsx` to customize the landing page design and content.

## 📦 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel

## 📄 License

MIT License - Feel free to use this template for any project!
