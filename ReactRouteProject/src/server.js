import { createServer, Model } from "miragejs"


createServer({
    models: {
        vans: Model,
    },

    seeds(server) {
        server.create("van", { id: "1", name: "Modest Explorer", price: 60, description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png", type: "Simple" })
        server.create("van", { id: "2", name: "Beach Bum", price: 80, description: "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png", type: "Rugged" })
        server.create("van", { id: "3", name: "Reliable Red", price: 100, description: "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/reliable-red.png", type: "Luxury" })
        server.create("van", { id: "4", name: "Dreamfinder", price: 65, description: "Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/dreamfinder.png", type: "Simple" })
        server.create("van", { id: "5", name: "The Cruiser", price: 120, description: "The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/the-cruiser.png", type: "Luxury" })
        server.create("van", { id: "6", name: "Green Wonder", price: 70, description: "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png", type: "Rugged" })
    },

    routes() {
        this.namespace = "api"

        this.get("/vans", (schema, request) => {
            return schema.vans.all()
        })

        this.get("/vans/:id", (schema, request) => {
            const id = request.params.id
            return schema.vans.find(id)
        })
    }
})

// simple future use

/*
    import { createServer, Model, belongsTo, hasMany, RestSerializer } from "miragejs";

createServer({
  serializers: {
    application: RestSerializer.extend({ embed: true, root: false }),
  },

  models: {
    // Keep vans as your seed uses them
    van: Model,

    // Users can be owners or renters
    user: Model,

    // Review is about a VAN (renter can be included as reviewer)
    review: Model.extend({
      van: belongsTo("van"),
      reviewer: belongsTo("user", { inverse: null }), // optional reviewer info
    }),

    // Ownership: links a van to its owner without changing the van seed
    ownership: Model.extend({
      van: belongsTo("van"),
      owner: belongsTo("user"),
    }),
  },

  seeds(server) {
    // ------- DO NOT TOUCH: your original van seeds -------
    server.create("van", { id: "1", name: "Modest Explorer", price: 60, description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png", type: "Simple" });
    server.create("van", { id: "2", name: "Beach Bum", price: 80, description: "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png", type: "Rugged" });
    server.create("van", { id: "3", name: "Reliable Red", price: 100, description: "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/reliable-red.png", type: "Luxury" });
    server.create("van", { id: "4", name: "Dreamfinder", price: 65, description: "Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/dreamfinder.png", type: "Simple" });
    server.create("van", { id: "5", name: "The Cruiser", price: 120, description: "The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/the-cruiser.png", type: "Luxury" });
    server.create("van", { id: "6", name: "Green Wonder", price: 70, description: "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png", type: "Rugged" });

    // ------- Users (owners & renters) -------
    const ownerAlice = server.create("user", {
      id: "u1",
      name: "Alice Host",
      profilePic: "https://i.pravatar.cc/150?img=1",
      email: "alice@host.io",
      password: "aliceHost123",
    });

    const ownerBob = server.create("user", {
      id: "u2",
      name: "Bob Host",
      profilePic: "https://i.pravatar.cc/150?img=2",
      email: "bob@host.io",
      password: "bobHost123",
    });

    const renterJohn = server.create("user", {
      id: "u3",
      name: "John Renter",
      profilePic: "https://i.pravatar.cc/150?img=3",
      email: "john@rent.io",
      password: "johnRent123",
    });

    const renterJane = server.create("user", {
      id: "u4",
      name: "Jane Renter",
      profilePic: "https://i.pravatar.cc/150?img=4",
      email: "jane@rent.io",
      password: "janeRent123",
    });

    // ------- Ownerships (link vans to owners) -------
    const v1 = server.schema.vans.find("1");
    const v2 = server.schema.vans.find("2");
    const v3 = server.schema.vans.find("3");
    const v4 = server.schema.vans.find("4");
    const v5 = server.schema.vans.find("5");
    const v6 = server.schema.vans.find("6");

    server.create("ownership", { id: "o1", owner: ownerAlice, van: v1 });
    server.create("ownership", { id: "o2", owner: ownerAlice, van: v2 });
    server.create("ownership", { id: "o3", owner: ownerBob,   van: v3 });
    server.create("ownership", { id: "o4", owner: ownerBob,   van: v4 });
    server.create("ownership", { id: "o5", owner: ownerAlice, van: v5 });
    server.create("ownership", { id: "o6", owner: ownerBob,   van: v6 });

    // ------- Reviews (about vans) -------
    server.create("review", {
      id: "r1",
      van: v1,
      reviewer: renterJohn,
      rating: 5,
      title: "Perfect ride",
      comment: "Super clean and comfy. Host was responsive.",
      createdAt: "2025-08-01T10:00:00Z",
    });

    server.create("review", {
      id: "r2",
      van: v1,
      reviewer: renterJane,
      rating: 4,
      title: "Great experience",
      comment: "Everything worked well; slight delay on pickup.",
      createdAt: "2025-08-03T09:15:00Z",
    });

    server.create("review", {
      id: "r3",
      van: v3,
      reviewer: renterJane,
      rating: 3,
      title: "Good but noisy",
      comment: "Van was fine, bit noisy on highway.",
      createdAt: "2025-08-04T18:30:00Z",
    });
  },

  routes() {
    this.namespace = "api";

    // --- Vans (unchanged) ---
    this.get("/vans", (schema) => schema.vans.all());
    this.get("/vans/:id", (schema, request) => schema.vans.find(request.params.id));

    // --- Users ---
    this.get("/users", (schema) => schema.users.all());
    this.get("/users/:id", (schema, request) => schema.users.find(request.params.id));

    // --- Reviews ---
    // GET reviews for a van
    this.get("/vans/:id/reviews", (schema, request) => {
      const vanId = request.params.id;
      return schema.reviews.where({ vanId });
    });

    // POST a new review for a van
    // body: { reviewerId, rating, title, comment, createdAt? }
    this.post("/vans/:id/reviews", (schema, request) => {
      const vanId = request.params.id;
      const attrs = JSON.parse(request.requestBody || "{}");
      return schema.reviews.create({ ...attrs, vanId });
    });

    // --- Ownership / Owners ---
    // List vans for an owner
    this.get("/owners/:ownerId/vans", (schema, request) => {
      const ownerId = request.params.ownerId;
      const vanIds = schema.ownerships.where({ ownerId }).models.map((o) => o.vanId);
      return schema.vans.find(vanIds);
    });

    // All reviews for an owner (across all their vans)
    this.get("/owners/:ownerId/reviews", (schema, request) => {
      const ownerId = request.params.ownerId;
      const vanIds = schema.ownerships.where({ ownerId }).models.map((o) => o.vanId);
      return schema.reviews.where((r) => vanIds.includes(r.vanId));
    });

    // Convenience: query by ownerId or vanId
    // /api/reviews?ownerId=u1  or  /api/reviews?vanId=3
    this.get("/reviews", (schema, request) => {
      const { ownerId, vanId } = request.queryParams;

      if (vanId) {
        return schema.reviews.where({ vanId });
      }

      if (ownerId) {
        const vanIds = schema.ownerships.where({ ownerId }).models.map((o) => o.vanId);
        return schema.reviews.where((r) => vanIds.includes(r.vanId));
      }

      return schema.reviews.all();
    });
  },
});

*/