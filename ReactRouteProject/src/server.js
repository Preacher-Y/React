import { createServer, Model } from "miragejs"


createServer({
    models: {
        vans: Model,
        users:Model
    },

    seeds(server) {
        server.create("van", { id: "1", name: "Modest Explorer", price: 60, description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png", type: "Simple", hostId:"123" })
        server.create("van", { id: "2", name: "Beach Bum", price: 80, description: "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png", type: "Rugged", hostId:"123" })
        server.create("van", { id: "3", name: "Reliable Red", price: 100, description: "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/reliable-red.png", type: "Luxury", hostId:"456" })
        server.create("van", { id: "4", name: "Dreamfinder", price: 65, description: "Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/dreamfinder.png", type: "Simple", hostId:"789" })
        server.create("van", { id: "5", name: "The Cruiser", price: 120, description: "The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/the-cruiser.png", type: "Luxury", hostId:"789" })
        server.create("van", { id: "6", name: "Green Wonder", price: 70, description: "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png", type: "Rugged", hostId:"123" })

        server.create("user", { id: "123", email: "b@b.com",imageUrl:"https://res.cloudinary.com/dn85kcomj/image/upload/v1739952643/samples/smile.jpg" ,password: "p123", name: "Bob" })
    },

    routes() {
        this.namespace = "api"
        this.logging= false

        this.get("/vans", (schema, request) => {
          return schema.vans.all()
        })

         this.post("/login", (schema, request) => {
            const { email, password } = JSON.parse(request.requestBody)
            const foundUser = schema.users.findBy({ email, password })
            if (!foundUser) {
                return new Response(401, {}, { message: "No user with those credentials found!" })
            }
            foundUser.password = undefined
            return {
                user: foundUser,
                token: "Enjoy your pizza, here's your tokens."
            }
        })
    }
})

// fetching the vans:
/*
  // In a file like services/vanService.ts or similar
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "../firebase"; // Import your initialized Firebase app

const db = getFirestore(app); // Get a reference to your Firestore database

const fetchVans = async () => {
  try {
    const vansCollectionRef = collection(db, "vans"); // Reference to a "vans" collection
    const querySnapshot = await getDocs(vansCollectionRef);

    const vans = querySnapshot.docs.map(doc => ({
      id: doc.id, // Include the document ID
      ...doc.data() // Get the data from the document
    }));

    console.log("Fetched vans:", vans);
    return vans;
  } catch (error) {
    console.error("Error fetching vans from Firestore:", error);
    // You can re-throw a custom error here if you like
    throw new Error("Failed to fetch vans. Please try again later.");
  }
};

export default fetchVans;

*/

// Fetching user:

/*
  // In a file like services/authService.ts or similar
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase"; // Import your initialized Firebase app

const auth = getAuth(app); // Get a reference to your Firebase Auth service

export async function loginUser(creds: {
  email: FormDataEntryValue | null,
  password: FormDataEntryValue | null
}) {
  const email = creds.email?.toString();
  const password = creds.password?.toString();

  if (!email || !password) {
    throw {
      message: "Email and password are required.",
      status: 400
    };
  }

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("User logged in:", user);
    // Return user information or a success message
    return {
      message: "Login successful!",
      user: {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL
      }
    };
  } catch (error: any) {
    console.error("Error during login:", error.code, error.message);
    // Map Firebase auth errors to more user-friendly messages
    let errorMessage = "An unknown error occurred during login.";
    if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
      errorMessage = "Invalid email or password.";
    } else if (error.code === 'auth/too-many-requests') {
      errorMessage = "Too many login attempts. Please try again later.";
    }
    throw {
      message: errorMessage,
      statusText: error.message,
      status: 401 // Unauthorized
    };
  }
}

*/