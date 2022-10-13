import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import db from "../../../lib/dbConnect";
import User from "../../../models/user";
import bcrypt from "bcryptjs";

export default NextAuth({
  providers: [
    CredentialsProvider({
      type: "credentials",
      async authorize(credentials) {
        //connect to database
        await db.connect();

        console.log(credentials)

        // find user
        const user = await User.findOne({
          email: credentials.email,
        });

        //disconnect database
        await db.disconnect();

        // check for user's password
        if (user && bcrypt.compareSync(credentials.password, user.password)) {
          return {
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
          };
        }
        throw new Error("Invalid email or password");
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
    error:"/auth/login"
  },
});
