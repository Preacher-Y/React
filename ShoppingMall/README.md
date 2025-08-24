# DuBuy - Shopping Mall

A modern, responsive food delivery and shopping website built with React, TypeScript, and Tailwind CSS.

## Features

### 🛒 Shopping Cart System
- **Cart Page**: Beautiful, responsive cart interface with item management
- **Product Management**: Add, remove, and update quantities of items
- **Order Summary**: Real-time calculation of subtotal, tax, and total
- **Empty Cart State**: User-friendly empty cart experience

### 🛍️ Product Catalog
- **Products Page**: Browse available food items
- **Add to Cart**: Seamless integration with cart functionality
- **Product Details**: Images, descriptions, categories, and pricing

### 🎨 Modern UI/UX
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Smooth Animations**: Framer Motion powered transitions
- **Consistent Branding**: Orange (#ED573E) color scheme throughout
- **Loading States**: Beautiful loading indicators and error handling

### 🚀 Technical Features
- **TypeScript**: Full type safety and better development experience
- **React Router**: Client-side routing with smooth navigation
- **MirageJS**: Mock API server for development and testing
- **Tailwind CSS**: Utility-first CSS framework for rapid styling

## Pages

1. **Landing Page**: Welcome splash screen with brand introduction
2. **Home Page**: Main website with hero, about, testimonials, and contact sections
3. **Products Page**: Browse and add items to cart
4. **Cart Page**: Manage cart items and proceed to checkout

## API Endpoints (MirageJS)

- `GET /api/products` - Fetch all products
- `GET /api/cart` - Get cart items
- `POST /api/cart` - Add item to cart
- `PUT /api/cart/:id` - Update item quantity
- `DELETE /api/cart/:id` - Remove item from cart
- `POST /api/cart/clear` - Clear entire cart

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── header.tsx      # Navigation header
│   ├── hero.tsx        # Hero section
│   ├── about.tsx       # About section
│   └── ...
├── pages/              # Page components
│   ├── home.tsx        # Home page
│   ├── landing.tsx     # Landing page
│   ├── cart.tsx        # Cart page
│   └── products.tsx    # Products page
├── mirage/             # Mock API server
│   └── server.ts       # MirageJS configuration
└── assets/             # Static assets
```

## Technologies Used

- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Navigation
- **MirageJS** - Mock API server
- **Vite** - Build tool

## Features in Detail

### Cart Functionality
- Real-time quantity updates
- Remove individual items
- Clear entire cart
- Automatic price calculations
- Tax calculation (8%)
- Responsive design for all screen sizes

### Product Management
- Product catalog with images
- Category organization
- Price display
- Add to cart functionality
- Stock management simulation

### User Experience
- Smooth page transitions
- Loading states
- Error handling
- Empty state management
- Consistent navigation

## Future Enhancements

- User authentication
- Real backend integration
- Payment processing
- Order tracking
- User reviews and ratings
- Wishlist functionality
- Search and filtering
- Admin dashboard
