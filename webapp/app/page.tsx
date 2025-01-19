'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, XCircle } from 'lucide-react'
import { SignupModal } from '@/components/SignupModal'

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<'free' | 'pro'>('free')

  const openModal = (plan: 'free' | 'pro') => {
    setSelectedPlan(plan)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleSubmit = async (email: string) => {
    try {
      const response = await fetch('YOUR_AWS_LAMBDA_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, plan: selectedPlan }),
      })

      if (response.ok) {
        alert('Thank you for signing up!')
      } else {
        throw new Error('Failed to submit')
      }
    } catch (_error) {
      alert('An error occurred. Please try again.')
    }
    closeModal()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      {/* Navigation */}
      <nav className="container mx-auto p-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">ODSK</h1>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">Open Data Saskatchewan</h1>
        <p className="text-xl mb-8">Data transparency for the prairies</p>
      </section>


      {/* Background Wrapper */}
      <section
      style={{
        backgroundImage: "url('/images/cover.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '20px', // Optional: Add padding to prevent content from overlapping the edges
      }}
    >

      {/* Features Section */}
      <section className="container mx-auto px-6 py-16">
        <div className='text-content'>
          <h2 className="text-3xl font-bold text-center mb-12">It's time to ACT on prairie open data</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {['Awareness', 'Conviction', 'Tools'].map((feature) => (
            <Card key={feature}>
              <CardHeader>
                <CardTitle>{feature}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Shining a Light on Open Data through highlighting the value of open data - what it is and why it matters.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-6 py-16">
      <div className='text-content'>
          <h2 className="text-3xl font-bold text-center mb-12">Get involved and support Open Data Saskatchewan</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            { 
              name: 'Basic', 
              price: '$0', 
              features: [
                { name: 'Feature 1', included: true },
                { name: 'Feature 2', included: false },
                { name: 'Feature 3', included: false },
                { name: 'Feature 4', included: false }
              ]
            },
            { 
              name: 'Pro', 
              price: '$20', 
              features: [
                { name: 'Feature 1', included: true },
                { name: 'Feature 2', included: true },
                { name: 'Feature 3', included: true },
                { name: 'Feature 4', included: true }
              ]
            },
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
                    <li key={feature.name} className="flex items-center mb-2">
                      {feature.included ? (
                        <CheckCircle className="text-green-500 mr-2" />
                      ) : (
                        <XCircle className="text-red-500 mr-2" />
                      )}
                      {feature.name}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" onClick={() => openModal(plan.name === 'Basic' ? 'free' : 'pro')}>
                  Choose {plan.name}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      </section> 
      {/* Ends background wrapper section */}

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Looking for more?</h2>
          <p className="mb-8">If you are interested in open data in Saskatchewan, I'd love to hear from you. The project lead, @andrewjdyck, has worked with technology and business leaders across the province to ACT on data transparency and transformation.</p>
          <Button size="lg" variant="secondary" className="text-lg px-8" onClick={() => openModal('free')}>
            Contact Andy
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto p-6 text-center text-gray-500">
        <p>&copy; 2023 YourProduct. All rights reserved.</p>
      </footer>

      {/* Signup Modal */}
      <SignupModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={handleSubmit}
        plan={selectedPlan}
      />
    </div>
  )
}

