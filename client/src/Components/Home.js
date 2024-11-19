import { Button } from '@/components/ui/button';
import { Link } from '@/components/ui/link';

export function HeroAlt() {
  return (
    <section className="min-h-[calc(100vh-4rem)] w-full gradient-bg">
      <div className="container h-full">
        <div className="grid h-full min-h-[calc(100vh-4rem)] grid-cols-1 items-center gap-8 md:grid-cols-2">
          {/* Left Panel */}
          <div className="flex flex-col justify-center space-y-8 py-12 text-left">
            <div className="space-y-2">
              <h2 className="text-2xl font-light text-purple-200">
                Verifiable Certificates
              </h2>
              <h1 className="text-5xl font-black gradient-text md:text-6xl">
                Certifi
              </h1>
            </div>

            <p className="text-lg text-gray-300">
              A Decentralized Certificate Issuance and Verification System to create
              certificates that are Immutable, Cryptographically Secured, and have
              Zero Downtime. All powered by decentralized Ethereum Smart Contracts
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-100">
                What are you looking for?
              </h3>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-purple-600 hover:bg-purple-700 text-white"
                  asChild
                >
                  <Link href="/institute">Issue Certificates</Link>
                </Button>
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-purple-950 hover:bg-gray-100"
                  asChild
                >
                  <Link href="/view">View Certificates</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Right Panel - Image */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              <div className="absolute -inset-4">
                <div className="w-full h-full rotate-6 rounded-3xl bg-gradient-to-r from-purple-600 to-purple-400 opacity-30 blur-2xl" />
              </div>
              <img
                src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800"
                alt="Blockchain Credentials"
                className="relative rounded-2xl border border-purple-800/30 object-cover w-full h-[600px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}