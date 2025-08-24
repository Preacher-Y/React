import { createServer } from 'miragejs';

export function makeServer({ environment = 'development' } = {}) {
  let server = createServer({
    environment,

    seeds(server) {
      server.db.loadData({
        products: [
          {
            id: 1,
            name: "Margherita Pizza",
            price: 12.99,
            image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=400&h=300&fit=crop",
            category: "Pizza",
            description: "Classic tomato sauce with mozzarella cheese",
            quantity: 1
          },
          {
            id: 2,
            name: "Chicken Burger",
            price: 8.99,
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
            category: "Burger",
            description: "Grilled chicken with fresh vegetables",
            quantity: 2
          },
          {
            id: 3,
            name: "Caesar Salad",
            price: 6.99,
            image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop",
            category: "Salad",
            description: "Fresh romaine lettuce with caesar dressing",
            quantity: 1
          },
          {
            id: 4,
            name: "Pasta Carbonara",
            price: 11.99,
            image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop",
            category: "Pasta",
            description: "Creamy pasta with bacon and parmesan",
            quantity: 1
          },
          {
            id: 5,
            name: "Chocolate Cake",
            price: 4.99,
            image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
            category: "Dessert",
            description: "Rich chocolate cake with cream filling",
            quantity: 1
          }
        ]
      });
    },

    routes() {
      this.namespace = 'api';

      this.get('/products', () => {
        return this.db.products;
      });

      this.get('/cart', () => {
        return this.db.products;
      });

      this.post('/cart', (schema, request) => {
        const attrs = JSON.parse(request.requestBody);
        const existingProduct = schema.db.products.findBy({ id: attrs.id });
        
        if (existingProduct) {
          // Update quantity if product already exists
          const newQuantity = existingProduct.quantity + attrs.quantity;
          schema.db.products.update(attrs.id, { quantity: newQuantity });
        } else {
          // Add new product to cart
          schema.db.products.insert(attrs);
        }
        
        return { success: true };
      });

      this.put('/cart/:id', (schema, request) => {
        const id = request.params.id;
        const attrs = JSON.parse(request.requestBody);
        const product = schema.db.products.find(id);
        
        if (product) {
          schema.db.products.update(id, attrs);
          return schema.db.products.find(id);
        }
        return { error: 'Product not found' };
      });

      this.delete('/cart/:id', (schema, request) => {
        const id = request.params.id;
        const product = schema.db.products.find(id);
        
        if (product) {
          schema.db.products.remove(id);
          return { success: true };
        }
        return { error: 'Product not found' };
      });

      this.post('/cart/clear', () => {
        this.db.products.remove();
        return { success: true };
      });
    },
  });

  return server;
} 