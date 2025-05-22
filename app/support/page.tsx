"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { LifeBuoy, BookOpen, Search, DiscIcon as Discord, Github, Twitter, Shield, Settings } from "lucide-react"
import { motion } from "framer-motion"

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const faqs = [
    {
      question: "How do I add MarbleSoda to my Discord server?",
      answer:
        'You can add MarbleSoda to your server by clicking the "Add to Discord" button on our website. You\'ll need to have the "Manage Server" permission in the Discord server you want to add it to.',
    },
    {
      question: "What permissions does MarbleSoda need?",
      answer:
        'MarbleSoda requires several permissions to function properly, including "Read Messages", "Send Messages", "Manage Messages" for moderation, and "Connect" and "Speak" for music features. When you add the bot, you\'ll see a full list of required permissions.',
    },
    {
      question: "How do I set up auto-moderation?",
      answer:
        "You can set up auto-moderation using the ,automod command. This allows you to configure filters for inappropriate language, spam, excessive mentions, and more. Check our documentation for detailed instructions.",
    },
    {
      question: "Can I customize the prefix?",
      answer: "The default prefix for MarbleSoda is a comma (,). You can use commands like ,help to get started.",
    },
    {
      question: "Is MarbleSoda free to use?",
      answer:
        "Yes, MarbleSoda is free to use with all core features available. We also offer a premium tier with additional features and higher limits for power users.",
    },
    {
      question: "How do I report a bug?",
      answer:
        "You can report bugs by joining our support server and posting in the #bug-reports channel, or by opening an issue on our GitHub repository.",
    },
    {
      question: "Can I suggest new features?",
      answer:
        "We love hearing your ideas. Join our support server and post in the #suggestions channel, or use the ,suggest command in any server with MarbleSoda.",
    },
    {
      question: "How do I set up AntiNuke protection?",
      answer:
        "You can set up AntiNuke using the ,antinuke command. This allows you to configure protection against mass bans, channel deletions, and other destructive actions. Check our documentation for detailed instructions.",
    },
  ]

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const supportOptions = [
    {
      title: "Documentation",
      description: "Browse our comprehensive guides and tutorials",
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      link: "/docs",
      linkText: "View Docs",
    },
    {
      title: "Discord Server",
      description: "Join our community for live support",
      icon: <Discord className="h-10 w-10 text-primary" />,
      link: "https://dsc.gg/thenoicez",
      linkText: "Join Server",
    },
    {
      title: "GitHub Issues",
      description: "Report bugs or contribute to the project",
      icon: <Github className="h-10 w-10 text-primary" />,
      link: "https://github.com/nughnguyen/NughNguyen-s-Discord-Bot/issues",
      linkText: "View GitHub",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <LifeBuoy className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Need <span className="text-primary">Help</span>?
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions or get in touch with our support team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Support Options</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the support option that works best for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="feature-card h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="mb-4 p-3 rounded-full bg-primary/10">{option.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                    <p className="text-muted-foreground mb-4">{option.description}</p>
                    <Button asChild variant="outline" className="mt-auto">
                      <Link href={option.link} target="_blank" rel="noopener noreferrer">
                        {option.linkText}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Find quick answers to common questions about MarbleSoda.
            </p>

            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="Search FAQs..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">
                    No FAQs found matching your search. Try a different query or contact us directly.
                  </p>
                </div>
              )}
            </Accordion>
          </div>

          {filteredFaqs.length > 0 && (
            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">Can't find what you're looking for?</p>
              <Button asChild className="btn-hover-effect">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-primary/10 rounded-2xl p-8 md:p-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Connect with other MarbleSoda users, get help from our team, and stay updated on the latest features.
                </p>
                <Button asChild size="lg" className="btn-hover-effect">
                  <Link href="https://dsc.gg/thenoicez" target="_blank" rel="noopener noreferrer">
                    <Discord className="mr-2 h-5 w-5" />
                    Join Discord Server
                  </Link>
                </Button>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="outline">
                  <Link href="https://twitter.com/nughnguyen" target="_blank" rel="noopener noreferrer">
                    <Twitter className="mr-2 h-5 w-5" />
                    Follow on Twitter
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="https://github.com/nughnguyen" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5" />
                    Star on GitHub
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Command Showcase</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Explore some of the powerful commands MarbleSoda has to offer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 flex items-center">
                <Shield className="h-5 w-5 text-primary mr-2" />
                AntiNuke Commands
              </h3>
              <p className="text-muted-foreground mb-4">
                Protect your server from nukes and raids with powerful protection tools.
              </p>
              <div className="bg-secondary/30 rounded-lg p-4 font-mono text-sm">
                <p className="mb-2">,antinuke enable</p>
                <p className="mb-2">,antinuke whitelist @user</p>
                <p className="mb-2">,antinuke punishment ban</p>
                <p>,antinuke status</p>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 flex items-center">
                <Settings className="h-5 w-5 text-primary mr-2" />
                AutoMod Commands
              </h3>
              <p className="text-muted-foreground mb-4">Keep your server clean with automatic moderation.</p>
              <div className="bg-secondary/30 rounded-lg p-4 font-mono text-sm">
                <p className="mb-2">,automod antispam enable</p>
                <p className="mb-2">,automod antiscam enable</p>
                <p className="mb-2">,automod antiinvite enable</p>
                <p>,automod filter add badword</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
