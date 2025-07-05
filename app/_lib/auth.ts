import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    authorized({ auth, request }: any) {
      return !!auth?.user;
    },
    async signIn({ user, account, profile }: any) {
      try {
        // const existingGuest = await getGuest(user.email);

        // if (!existingGuest)
        //   await createGuest({ email: user.email, fullName: user.name });

        if (account.provider === "google") {
          return profile.email_verified && profile.email.endsWith("@gmail.com");
        }

        return true;
      } catch {
        return false;
      }
    },
    async session({ session, user }: any) {
      // const guest = await getGuest(session.user.email);
      // session.user.guestId = guest.id;
      session.user.guestId = "blahblah";
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

export const { handlers, signIn, signOut, auth } = NextAuth(authConfig);
