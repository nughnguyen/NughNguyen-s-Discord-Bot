"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Music, GamepadIcon, Settings } from "lucide-react"
import { motion } from "framer-motion"

export default function FeaturesPage() {
  const [activeTab, setActiveTab] = useState("antinuke")

  const featureCategories = [
    {
      id: "antinuke",
      name: "AntiNuke",
      icon: <Shield className="h-5 w-5" />,
      features: [
        { name: "Anti Mass Ban", description: "Prevent mass banning of members" },
        { name: "Anti Mass Kick", description: "Prevent mass kicking of members" },
        { name: "Anti Channel Delete", description: "Prevent unauthorized channel deletion" },
        { name: "Anti Role Delete", description: "Prevent unauthorized role deletion" },
        { name: "Anti Webhook Create", description: "Prevent unauthorized webhook creation" },
        { name: "Whitelist System", description: "Whitelist trusted users from AntiNuke measures" },
      ],
    },
    {
      id: "automod",
      name: "AutoMod",
      icon: <Settings className="h-5 w-5" />,
      features: [
        { name: "Anti Spam", description: "Automatically detect and prevent message spam" },
        { name: "Anti Scam", description: "Detect and remove common scam links" },
        { name: "Anti Invite", description: "Block Discord invite links from other servers" },
        { name: "Anti Mention", description: "Prevent mass mentions and ping spam" },
        { name: "Auto Warn", description: "Automatically warn users who break rules" },
        { name: "Custom Filters", description: "Create custom word and phrase filters" },
      ],
    },
    {
      id: "games",
      name: "Games",
      icon: <GamepadIcon className="h-5 w-5" />,
      features: [
        { name: "Trivia", description: "Test your knowledge with various categories" },
        { name: "Rock Paper Scissors", description: "Challenge your friends to a classic game" },
        { name: "Hangman", description: "Guess the word before it's too late" },
        { name: "Tic Tac Toe", description: "Play the classic game with friends" },
        { name: "Connect Four", description: "Drop your tokens to win" },
        { name: "Blackjack", description: "Try your luck at 21" },
      ],
    },
    {
      id: "utility",
      name: "Utility",
      icon: <Settings className="h-5 w-5" />,
      features: [
        { name: "Server Stats", description: "Track member count and activity" },
        { name: "Custom Commands", description: "Create your own commands" },
        { name: "Polls", description: "Create and vote on polls" },
        { name: "Reminders", description: "Set reminders for yourself or the server" },
        { name: "Welcome Messages", description: "Greet new members automatically" },
        { name: "Role Management", description: "Assign and manage roles easily" },
      ],
    },
  ]

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

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Powerful <span className="text-primary">Features</span>
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Discover all the amazing features that MarbleSoda has to offer for your Discord server.
          </motion.p>
        </div>
      </section>

      {/* Features Tabs Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="antinuke" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {featureCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                  {category.icon}
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {featureCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      variants={item}
                      initial="hidden"
                      animate={activeTab === category.id ? "show" : "hidden"}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Card className="feature-card h-full">
                        <CardContent className="p-6">
                          <h3 className="text-lg font-bold mb-2">{feature.name}</h3>
                          <p className="text-muted-foreground">{feature.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">See MarbleSoda in Action</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Check out some examples of MarbleSoda's features in real Discord servers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-background rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <Shield className="h-5 w-5 text-primary mr-2" />
                  Moderation Commands
                </h3>
                <p className="text-muted-foreground mb-4">Keep your server safe with powerful moderation tools.</p>
                <div className="bg-secondary/30 rounded-lg p-4 font-mono text-sm">
                  <p className="mb-2">,ban @user Spamming</p>
                  <p className="mb-2">,mute @user 10m Inappropriate language</p>
                  <p className="mb-2">,warn @user Please follow the rules</p>
                  <p>,purge 10</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-background rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <Music className="h-5 w-5 text-primary mr-2" />
                  Music Commands
                </h3>
                <p className="text-muted-foreground mb-4">Enjoy high-quality music with easy-to-use commands.</p>
                <div className="bg-secondary/30 rounded-lg p-4 font-mono text-sm">
                  <p className="mb-2">,play Imagine Dragons - Believer</p>
                  <p className="mb-2">,queue</p>
                  <p className="mb-2">,skip</p>
                  <p>,volume 80</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-primary/10 rounded-2xl p-8 md:p-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to try these features?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Add MarbleSoda to your Discord server today and experience all these amazing features firsthand.
            </p>
            <Button asChild size="lg" className="btn-hover-effect">
              <Link href="https://discord.com/oauth2/authorize" target="_blank" rel="noopener noreferrer">
                Add to Discord
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
