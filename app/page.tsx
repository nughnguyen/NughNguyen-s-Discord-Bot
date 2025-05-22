"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, GamepadIcon, BarChart, Clock, Users, ChevronRight, Settings } from "lucide-react"
import { motion } from "framer-motion"

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const features = [
    {
      title: "AntiNuke",
      description: "Protect your server from nukes and raids",
      icon: <Shield className="h-10 w-10 text-primary" />,
    },
    {
      title: "AutoMod",
      description: "Automatically moderate your server 24/7",
      icon: <Settings className="h-10 w-10 text-primary" />,
    },
    {
      title: "Games",
      description: "Entertain your members with fun mini-games",
      icon: <GamepadIcon className="h-10 w-10 text-primary" />,
    },
    {
      title: "Statistics",
      description: "Track server activity and member engagement",
      icon: <BarChart className="h-10 w-10 text-primary" />,
    },
    {
      title: "Auto-moderation",
      description: "Set up rules that run 24/7 without manual intervention",
      icon: <Clock className="h-10 w-10 text-primary" />,
    },
    {
      title: "Welcome System",
      description: "Greet new members with customizable welcome messages",
      icon: <Users className="h-10 w-10 text-primary" />,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Ignite Your Discord Server with <span className="text-primary">Flame</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                A powerful Discord bot packed with AntiNuke, AutoMod, games, and more to enhance your server experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="btn-hover-effect">
                  <Link
                    href="https://discord.com/oauth2/authorize?client_id=1366728449313603594&permissions=8&response_type=code&redirect_uri=https%3A%2F%2Fdiscord.gg%2FhdsTnN9gfQ&integration_type=0&scope=bot+guilds"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Add to Discord
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/features">Explore Features</Link>
                </Button>
              </div>
            </motion.div>
            <motion.div
              className="md:w-1/2 relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative h-[300px] md:h-[400px] w-full flame-glow">
                <Image src="/logo.png" alt="Flame Bot" fill className="object-contain" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Flame comes packed with everything you need to make your Discord server amazing.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={item}>
                <Card className="feature-card h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="mb-4 p-3 rounded-full bg-primary/10">{feature.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" className="group">
              <Link href="/features">
                View All Features
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</h3>
              <p className="text-lg text-muted-foreground">Servers</p>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">100K+</h3>
              <p className="text-lg text-muted-foreground">Users</p>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</h3>
              <p className="text-lg text-muted-foreground">Commands</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-primary/10 rounded-2xl p-8 md:p-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to ignite your server?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of servers already using Flame to enhance their Discord experience.
            </p>
            <Button asChild size="lg" className="btn-hover-effect">
              <Link
                href="https://discord.com/oauth2/authorize?client_id=1366728449313603594&permissions=8&response_type=code&redirect_uri=https%3A%2F%2Fdiscord.gg%2FhdsTnN9gfQ&integration_type=0&scope=bot+guilds"
                target="_blank"
                rel="noopener noreferrer"
              >
                Add Flame to Discord
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
