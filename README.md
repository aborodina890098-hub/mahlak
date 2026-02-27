# Mahalk - E-commerce Platform for Gerga

Mahalk is a comprehensive e-commerce platform designed to digitize local markets in Gerga, Sohag, Egypt. It connects local merchants with customers through a unified digital directory, smart logistics, and a free POS system.

## Features

- **Multilingual Support**: Full Arabic and English support with RTL/LTR layout switching.
- **3D Interactive Hero**: Immersive 3D visualization of the Gerga market ecosystem.
- **Comprehensive Landing Page**: Includes Problem/Solution, Features, How it Works, Categories, Why Now, Testimonials, Pricing, and FAQ.
- **Merchant Onboarding**: Integrated modal for merchant registration with local storage persistence.
- **Responsive Design**: Optimized for all devices from mobile to desktop.
- **Performance Optimized**: Dynamic imports for 3D components and smooth animations using Framer Motion.

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Rendering**: Three.js, React Three Fiber, React Three Drei
- **Icons**: Lucide React
- **Routing**: React Router DOM

## Deployment on Vercel

This project is ready for deployment on Vercel.

1. Push the code to a GitHub repository.
2. Connect the repository to Vercel.
3. Vercel will automatically detect the Vite configuration and deploy the app.

### Environment Variables

Ensure the following environment variables are set if needed (though the app is currently client-side only):
- `NODE_ENV=production`

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
