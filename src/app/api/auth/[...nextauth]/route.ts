import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          return null
        }

        // Usuário admin padrão - em produção, buscar do banco de dados
        const adminUser = {
          id: "1",
          username: "admin",
          password: "$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewEE87R6z.x3oL3u", // "admin123"
          name: "Administrador",
          email: "admin@mrmachado.com.br"
        }

        if (credentials.username === adminUser.username) {
          const isPasswordValid = await bcrypt.compare(credentials.password, adminUser.password)
          
          if (isPasswordValid) {
            return {
              id: adminUser.id,
              name: adminUser.name,
              email: adminUser.email,
              username: adminUser.username
            }
          }
        }

        return null
      }
    })
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/admin/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.sub
        session.user.username = token.username
      }
      return session
    },
  },
})

export { handler as GET, handler as POST }