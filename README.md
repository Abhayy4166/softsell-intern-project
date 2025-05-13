
# SoftSell - Software License Marketplace 🚀

A sleek, modern, and responsive marketing website for SoftSell, a software license resale platform. This single-page application showcases a polished UI with modern web design principles, smooth animations, micro-interactions, and advanced frontend features.

## 🌟 Live Demo

[View the demo on Lovable](https://lovable.dev/projects/70ad7271-d38c-4a5b-92d5-a8963ed42807)

## 💻 Tech Stack

- **Framework**: React.js + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Animations**: CSS animations + Intersection Observer API
- **Form Handling**: React Hook Form (controlled forms)
- **State Management**: React's useState and useEffect
- **Design System**: Custom theme with light/dark mode support

## ✨ Features & Enhancements

### 🎨 Visual Design
- Modern, clean UI inspired by Stripe, Vercel, and Linear
- Consistent typography using Inter font family
- Fluid spacing and consistent padding
- Soft shadows and rounded corners
- Subtle background patterns and gradient accents
- Responsive design for all screen sizes

### 🌓 Dark/Light Mode
- Persistent theme preference (saved to localStorage)
- Smooth transition between themes
- Custom colors for both themes
- Accessible contrast ratios

### 🔄 Animations & Interactions
- Staggered fade-in animations on scroll
- Hover effects on cards and buttons
- Micro-interactions (scale, glow, press states)
- Subtle floating animations
- Transition effects between sections

### 📝 Enhanced Form UX
- Floating label animations
- Real-time validation with clear error messages
- Focus and hover states for inputs
- Loading animation on form submission
- Toast notifications for form feedback

### ♿ Accessibility
- Semantic HTML structure
- Proper ARIA attributes
- Keyboard navigable UI
- Focus management for form elements
- Accessible color contrast

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or later)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project directory
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start development server
npm run dev
```

## 📸 Screenshots

### Dark Mode
![Dark Mode Screenshot](https://lovable.dev/dark-mode-screenshot.png)

### Light Mode
![Light Mode Screenshot](https://lovable.dev/light-mode-screenshot.png)

## 🧠 Design Decisions

### Typography
- Used Inter font family for clean, modern readability
- Clear hierarchy between headings and body text
- Consistent font sizes across similar elements

### Color Palette
- Primary blue: Brand identity and call-to-action elements
- White/gray scale: Content areas and backgrounds
- Accent colors: Highlighting important information
- Dark theme colors: Deep blues/grays for reduced eye strain

### Layout
- Generous whitespace for better content separation
- Consistent padding and margins
- Grid-based alignment for organized content flow
- Mobile-first approach to ensure responsiveness

### User Experience
- Intuitive navigation with smooth scroll anchors
- Visual feedback for all interactive elements
- Progressive disclosure of content (fade-in on scroll)
- Form validation with instant feedback

## 🛠️ Implementation Details

### Theme System
- CSS variables for color tokens
- Tailwind's dark mode configuration
- Theme toggle with smooth transitions
- Media query detection for system preference

### Animation System
- CSS keyframes for basic animations
- CSS transitions for hover/focus states
- Intersection Observer API for scroll-triggered animations
- Staggered animations for sequential elements

### Form Validation
- Custom validation logic with error messages
- Real-time feedback as users type
- Field state management (touched, error, etc.)
- Loading state during submission

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

Created with ❤️ using [Lovable.dev](https://lovable.dev)
