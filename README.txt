# Modern Portfolio Website - Setup Guide

This is a comprehensive guide to run this beautiful, modern portfolio website locally on your laptop.

## Prerequisites

Before you begin, make sure you have the following installed on your computer:

### 1. Node.js and npm
- Download and install Node.js from: https://nodejs.org/
- Choose the LTS (Long Term Support) version
- This will automatically install npm (Node Package Manager)
- To verify installation, open your terminal/command prompt and run:
  ```
  node --version
  npm --version
  ```
  Both commands should return version numbers.

### 2. Git (Optional but recommended)
- Download and install Git from: https://git-scm.com/
- This will help you manage your code and push to repositories later

## Step-by-Step Installation Guide

### Step 1: Download the Project
If you received this as a zip file:
1. Extract the zip file to a folder on your computer
2. Remember the location of this folder

If you have the project in a Git repository:
1. Open your terminal/command prompt
2. Navigate to where you want to store the project
3. Run: `git clone [repository-url]`

### Step 2: Open Terminal/Command Prompt
- **Windows**: Press Win + R, type "cmd" and press Enter
  OR Press Win + X and select "Command Prompt" or "PowerShell"
- **Mac**: Press Cmd + Space, type "terminal" and press Enter
- **Linux**: Press Ctrl + Alt + T

### Step 3: Navigate to the Project Folder
In your terminal, navigate to the project folder using the `cd` command:
```
cd path/to/your/project/folder
```

For example:
- Windows: `cd C:\Users\YourName\Documents\portfolio-website`
- Mac/Linux: `cd ~/Documents/portfolio-website`

### Step 4: Install Dependencies
Run the following command to install all required packages:
```
npm install
```

This process might take 2-5 minutes depending on your internet connection.
You'll see a lot of text scrolling by - this is normal!

### Step 5: Start the Development Server
Once installation is complete, start the development server:
```
npm run dev
```

### Step 6: Open in Browser
After running the command, you should see output similar to:
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

1. Open your web browser (Chrome, Firefox, Safari, Edge)
2. Go to: http://localhost:5173/
3. You should see your beautiful portfolio website!

## Customizing the Portfolio

### Personal Information
To customize the website with your own information:

1. **Hero Section**: Edit `src/components/Hero.tsx`
   - Change "John Doe" to your name
   - Update the title/role description
   - Modify the introduction paragraph
   - Update social media links

2. **About Section**: Edit `src/components/About.tsx`
   - Replace the biography text with your own story
   - Update the profile initials or add your photo
   - Modify the statistics (projects completed, years of experience)

3. **Skills Section**: Edit `src/components/Skills.tsx`
   - Add or remove skill categories
   - Update the skills list for each category
   - Change icons and colors as needed

4. **Projects Section**: Edit `src/components/Projects.tsx`
   - Replace with your own projects
   - Update project descriptions, technologies used
   - Add links to your live projects and GitHub repositories
   - Replace images with screenshots of your projects

5. **Contact Section**: Edit `src/components/Contact.tsx`
   - Update your email, phone, and location
   - Modify social media links
   - Customize the contact form

### Styling and Colors
The website uses Tailwind CSS for styling. To change colors:

1. **Main Color Scheme**: Look for gradient classes like:
   - `from-blue-400 to-purple-400` (text gradients)
   - `from-blue-500 to-purple-600` (buttons and backgrounds)

2. **Background**: The main background gradient is in `src/App.tsx`:
   - `bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900`

### Adding Your Own Images
Replace the Pexels stock photos with your own:

1. Create a `public/images` folder in your project
2. Add your images to this folder
3. In the components, replace the Pexels URLs with `/images/your-image.jpg`

## Building for Production

When you're ready to deploy your website:

1. **Build the project**:
   ```
   npm run build
   ```

2. **Preview the production build**:
   ```
   npm run preview
   ```

The build command creates a `dist` folder with optimized files ready for deployment.

## Deployment Options

### 1. Netlify (Recommended for beginners)
1. Create an account at https://netlify.com/
2. Drag and drop your `dist` folder to Netlify
3. Your site will be live instantly!

### 2. Vercel
1. Create an account at https://vercel.com/
2. Connect your GitHub repository
3. It will automatically deploy

### 3. GitHub Pages
1. Push your code to a GitHub repository
2. Go to repository Settings > Pages
3. Enable GitHub Pages
4. Your site will be available at `https://yourusername.github.io/repository-name`

## Troubleshooting

### Common Issues:

1. **"npm: command not found"**
   - Node.js is not installed or not in your PATH
   - Reinstall Node.js from nodejs.org

2. **Port 5173 already in use**
   - Close any other development servers
   - Or the terminal will suggest an alternative port

3. **Installation fails**
   - Check your internet connection
   - Try running: `npm install --legacy-peer-deps`

4. **Page doesn't load**
   - Make sure you're using the correct URL (http://localhost:5173/)
   - Check if the development server is still running

### Getting Help:
- Check the terminal/console for error messages
- Make sure all files are saved
- Restart the development server (Ctrl+C to stop, then `npm run dev` again)

## Project Structure

```
portfolio-website/
├── public/                 # Static files
├── src/
│   ├── components/        # React components
│   │   ├── Hero.tsx      # Hero section
│   │   ├── About.tsx     # About section
│   │   ├── Skills.tsx    # Skills section
│   │   ├── Projects.tsx  # Projects section
│   │   ├── Contact.tsx   # Contact section
│   │   └── Navbar.tsx    # Navigation
│   ├── hooks/            # Custom React hooks
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # App entry point
│   └── index.css         # Global styles
├── package.json          # Dependencies and scripts
└── README.txt            # This file
```

## Technologies Used

- **React 18**: Modern React with hooks
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Fast build tool and development server
- **Lucide React**: Beautiful icon library

## Features Included

✅ Fully responsive design (mobile, tablet, desktop)
✅ Smooth scroll animations
✅ Interactive hover effects
✅ Modern gradient designs
✅ Project showcase with image overlays
✅ Contact form (ready for backend integration)
✅ Social media links
✅ Professional typography
✅ Fast loading performance
✅ SEO-friendly structure
✅ Accessible design

## Performance Tips

- Images are optimized and loaded from CDN
- Smooth animations use CSS transforms for best performance
- Lazy loading for better initial page load
- Optimized bundle size with tree shaking

## Support

If you need help or have questions:
1. Check this README file first
2. Look for error messages in the browser console (F12 → Console tab)
3. Search for solutions online using the error message
4. The React and Tailwind CSS documentation are excellent resources

Enjoy your new portfolio website! 🚀