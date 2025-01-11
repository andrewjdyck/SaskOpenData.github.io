'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      {/* Navigation */}
      <nav className="container mx-auto p-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">YourProduct</h1>
          <Button variant="outline">Sign In</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">Transform Your Workflow</h1>
        <p className="text-xl mb-8">Boost productivity with our cutting-edge digital solution</p>
        <Button size="lg" className="text-lg px-8">Start Free Trial</Button>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {['Easy Integration', 'Advanced Analytics', 'Top-notch Security'].map((feature) => (
            <Card key={feature}>
              <CardHeader>
                <CardTitle>{feature}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            { name: 'Basic', price: '$9.99', features: ['Feature 1', 'Feature 2', 'Feature 3'] },
            { name: 'Pro', price: '$19.99', features: ['Everything in Basic', 'Feature 4', 'Feature 5', 'Feature 6'] },
          ].map((plan) => (
            <Card key={plan.name} className={plan.name === 'Pro' ? 'border-blue-500 border-2' : ''}>
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>
                  <span className="text-3xl font-bold">{plan.price}</span> / month
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center mb-2">
                      <CheckCircle className="text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Choose {plan.name}</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="mb-8">Join thousands of satisfied customers and transform your workflow today.</p>
          <Button size="lg" variant="secondary" className="text-lg px-8">Start Your Free Trial</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto p-6 text-center text-gray-500">
        <p>&copy; 2023 YourProduct. All rights reserved.</p>
      </footer>
    </div>
  )
}

